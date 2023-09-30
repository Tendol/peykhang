import graphene
from graphene_django import DjangoObjectType
from graphene import Connection, ObjectType, Field, Schema, List, ID, String
from peykhangApi.models import Book, Genre
from django_filters import FilterSet
from graphene_django.filter import DjangoFilterConnectionField


class BookFilter(FilterSet):
    class Meta:
        model = Book
        fields = {
            "title": ["exact"],
            "language": ["exact", "in"],
            "genre__label": ("exact", "contains", "in"),
            "category": ["exact"],
        }


class GenreType(DjangoObjectType):
    class Meta:
        model = Genre
        fields = "__all__"


class BookType(DjangoObjectType):
    class Meta:
        model = Book
        fields = "__all__"
        interfaces = (graphene.relay.Node,)
        filterset_class = BookFilter


class Query(ObjectType):
    books = DjangoFilterConnectionField(BookType)
    book = graphene.relay.Node.Field(BookType)

    def resolve_books(self, info, **kwargs):
        return Book.objects.all().distinct()

    # def resolve_book(self, info, id):
    #     return Book.objects.get(id=id)


schema = Schema(query=Query)
