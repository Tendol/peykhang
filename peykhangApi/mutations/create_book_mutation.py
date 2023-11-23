# peykhangApi/mutations.py

import graphene
from peykhangApi.models import Book
from peykhangApi.types.query_types import BookType


class CreateBookMutation(graphene.Mutation):
    class Arguments:
        title = graphene.String(required=True)

    book = graphene.Field(BookType)

    def mutate(self, info, title):
        book = Book(title=title)
        book.save()
        return CreateBookMutation(book=book)
