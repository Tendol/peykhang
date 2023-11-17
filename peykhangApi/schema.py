import graphene
from graphene_django import DjangoObjectType
from graphene import Connection, ObjectType, Field, Schema, List, ID, String
from peykhangApi.models import Author, Book, Genre, Publisher
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


class AuthorFilter(FilterSet):
    class Meta:
        model = Author
        fields = {"first_name": ["exact"], "last_name": ["exact"]}


class GenreFilter(FilterSet):
    class Meta:
        model = Genre
        fields = {"label": ["exact", "in"]}


class GenreType(DjangoObjectType):
    class Meta:
        model = Genre
        interfaces = (graphene.relay.Node,)
        fields = "__all__"
        filterset_class = GenreFilter


class PublisherType(DjangoObjectType):
    class Meta:
        model = Publisher
        fields = "__all__"


class BookType(DjangoObjectType):
    class Meta:
        model = Book
        fields = "__all__"
        interfaces = (graphene.relay.Node,)
        filterset_class = BookFilter


class AuthorType(DjangoObjectType):
    class Meta:
        model = Author
        fields = "__all__"
        interfaces = (graphene.relay.Node,)
        filterset_class = AuthorFilter


class Query(ObjectType):
    books = DjangoFilterConnectionField(BookType)
    book = graphene.relay.Node.Field(BookType)
    genres = DjangoFilterConnectionField(GenreType)
    authors = DjangoFilterConnectionField(AuthorType)
    author = graphene.relay.Node.Field(AuthorType)

    def resolve_books(self, info, **kwargs):
        return Book.objects.all().distinct()

    def resolve_genre(self):
        return Genre.objects.all.distinct()

    def resolve_authors(self, info, *kwargs):
        return Author.objects.all().distinct()

    # def resolve_book(self, info, id):
    #     return Book.objects.get(id=id)


schema = Schema(query=Query)
