# peykhangApi/mutations.py

import graphene
from peykhangApi.models import Author, Book, Genre, Publisher
from peykhangApi.types.query_types import BookType
import base64
from datetime import datetime


class BookInput(graphene.InputObjectType):
    id = graphene.ID()
    title = graphene.String(required=False)
    rich_text_summary = graphene.String(required=False)
    isbn = graphene.String(required=False)
    category = graphene.String(required=False)
    authors_id = graphene.List(graphene.String, required=False)
    genres_id = graphene.List(graphene.String, required=False)
    publisher_id = graphene.String(required=False)
    publication_date = graphene.String(required=False)
    language = graphene.String(required=False)


class CreateBook(graphene.Mutation):
    class Arguments:
        input = BookInput(required=True)

    book = graphene.Field(BookType)

    @staticmethod
    def mutate(root, info, input=None):
        def decode_id(id):
            return base64.b64decode(id).decode().split(":")[-1]

        def dict_except(d, keys):
            return {k: v for k, v in d.items() if k not in keys}

        decoded_genre_ids = map(decode_id, input.genres_id) if input.genres_id else []
        decoded_author_ids = (
            map(decode_id, input.authors_id) if input.authors_id else []
        )

        book_instance = Book(
            **dict_except(
                input, ["genres_id", "authors_id", "publisher_id", "publication_date"]
            )
        )
        book_instance.save()

        if input.publisher_id:
            book_instance.publisher = Publisher.objects.filter(
                id=decode_id(input.publisher_id)
            )[0]

        if input.publication_date:
            book_instance.publication_date = datetime.strptime(
                input.publication_date, "%m-%d-%Y"
            ).date()

        if decoded_genre_ids:
            book_instance.genre.set(Genre.objects.filter(id__in=decoded_genre_ids))

        if decoded_author_ids:
            book_instance.authors.set(Author.objects.filter(id__in=decoded_author_ids))

        book_instance.save()
        return CreateBook(book=book_instance)
