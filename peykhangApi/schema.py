import graphene
from graphene_django import DjangoObjectType
from graphene import ObjectType, Field, Schema, List, ID
from peykhangApi.models import Book


class BookType(DjangoObjectType):
    class Meta:
        model = Book
        fields = "__all__"


class Query(ObjectType):
    books = List(BookType)
    book = Field(BookType, id=ID(required=True))

    def resolve_books(self, info):
        return Book.objects.all()

    def resolve_book(self, info, id):
        return Book.objects.get(id=id)


schema = Schema(query=Query)
