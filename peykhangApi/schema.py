import graphene
from graphene import ObjectType, Schema
from peykhangApi.models import Author, Book, Genre, Publisher
from graphene_django.filter import DjangoFilterConnectionField
from peykhangApi.mutations.create_book import CreateBook

from peykhangApi.types.query_types import AuthorType, BookType, GenreType, PublisherType


class Mutation(graphene.ObjectType):
    create_book = CreateBook.Field()


class Query(ObjectType):
    books = DjangoFilterConnectionField(BookType)
    book = graphene.relay.Node.Field(BookType)
    genres = DjangoFilterConnectionField(GenreType)
    authors = DjangoFilterConnectionField(AuthorType)
    author = graphene.relay.Node.Field(AuthorType)
    publishers = DjangoFilterConnectionField(PublisherType)

    def resolve_books(self, info, **kwargs):
        return Book.objects.all().distinct()

    def resolve_genre(self):
        return Genre.objects.all.distinct()

    def resolve_authors(self, info, *kwargs):
        return Author.objects.all().distinct()

    def resolve_publishers(self, info, *kwargs):
        return Publisher.objects.all().distinct()

    # def resolve_book(self, info, id):
    #     return Book.objects.get(id=id)


schema = Schema(query=Query, mutation=Mutation)
