import graphene
from graphene_django import DjangoObjectType
from peykhangApi.models import Author, Book, Genre, Publisher
from django_filters import FilterSet


### Graphene filter ####


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


class PublisherFilter(FilterSet):
    class Meta:
        mode = Publisher
        fields = {"name": ["exact", "in"]}


#### Graphene Type ####


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


class PublisherType(DjangoObjectType):
    class Meta:
        model = Publisher
        fields = "__all__"
        interfaces = (graphene.relay.Node,)
        filterset_class = PublisherFilter
