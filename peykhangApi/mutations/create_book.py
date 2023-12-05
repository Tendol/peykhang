# peykhangApi/mutations.py

import graphene
from peykhangApi.models import Book
from peykhangApi.types.query_types import BookType
from ckeditor.fields import RichTextField


# class CreateBook(graphene.Mutation):
#     class Arguments:
#         title = graphene.String(required=False)
#         rich_text_summary = graphene.String(required=False)
#         isbn = graphene.String(required=False)
#         category = graphene.String(required=False)
#         authors_id = graphene.List(graphene.String, required=False)
#         genres_id = graphene.List(graphene.String, required=False)

#     book = graphene.Field(BookType)

#     def mutate(
#         self, info, title, rich_text_summary, isbn, category, authors_id, genres_id
#     ):
#         book = Book(
#             title=title,
#             rich_text_summary=rich_text_summary,
#             isbn=isbn,
#             category=category,
#         )
#         book.save()
#         return CreateBook(book=book)


class BookInput(graphene.InputObjectType):
    id = graphene.ID()
    title = graphene.String(required=False)
    rich_text_summary = graphene.String(required=False)
    isbn = graphene.String(required=False)
    category = graphene.String(required=False)
    authors_id = graphene.List(graphene.String, required=False)
    genres_id = graphene.List(graphene.String, required=False)


class CreateBook(graphene.Mutation):
    class Arguments:
        input = BookInput(required=True)

    book = graphene.Field(BookType)

    @staticmethod
    def mutate(root, info, input=None):
        book_instance = Book(
            title=input.title,
            # author=book_data.author,
            # year_published=book_data.year_published,
            # review=book_data.review,
        )
        book_instance.save()
        return CreateBook(book=book_instance)
