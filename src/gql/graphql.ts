/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Author = {
  __typename?: 'Author';
  authorImageUrl?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
};

export type AuthorConnection = {
  __typename?: 'AuthorConnection';
  edges?: Maybe<Array<Maybe<AuthorNode>>>;
};

export type AuthorNode = {
  __typename?: 'AuthorNode';
  node?: Maybe<Author>;
};

export type Book = {
  __typename?: 'Book';
  authors?: Maybe<AuthorConnection>;
  bookCoverUrl?: Maybe<Scalars['String']['output']>;
  genre?: Maybe<GenreConnection>;
  id?: Maybe<Scalars['ID']['output']>;
  isbn?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  publicationDate?: Maybe<Scalars['String']['output']>;
  publisher?: Maybe<Publisher>;
  richTextSummary?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type BookConnection = {
  __typename?: 'BookConnection';
  edges?: Maybe<Array<Maybe<BookNode>>>;
};

export type BookInput = {
  authorsId?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  category?: InputMaybe<Scalars['String']['input']>;
  genresId?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isbn?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  publicationDate?: InputMaybe<Scalars['String']['input']>;
  publisherId?: InputMaybe<Scalars['String']['input']>;
  richTextSummary?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BookNode = {
  __typename?: 'BookNode';
  node?: Maybe<Book>;
};

export type CreateBook = {
  __typename?: 'CreateBook';
  book?: Maybe<Book>;
};

export type Genre = {
  __typename?: 'Genre';
  id?: Maybe<Scalars['ID']['output']>;
  label?: Maybe<Scalars['String']['output']>;
};

export type GenreConnection = {
  __typename?: 'GenreConnection';
  edges?: Maybe<Array<Maybe<GenreNode>>>;
};

export type GenreNode = {
  __typename?: 'GenreNode';
  node?: Maybe<Genre>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBook?: Maybe<CreateBook>;
};


export type MutationCreateBookArgs = {
  input: BookInput;
};

export enum PeykhangapiBookLanguageChoices {
  Bo = 'bo',
  En = 'en',
  Es = 'es',
  Fr = 'fr',
  Hi = 'hi',
  It = 'it',
  Zh = 'zh'
}

export type Publisher = {
  __typename?: 'Publisher';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type PublisherConnection = {
  __typename?: 'PublisherConnection';
  edges?: Maybe<Array<Maybe<PublisherNode>>>;
};

export type PublisherNode = {
  __typename?: 'PublisherNode';
  node?: Maybe<Publisher>;
};

export type Query = {
  __typename?: 'Query';
  authors?: Maybe<Array<Maybe<AuthorConnection>>>;
  book?: Maybe<Book>;
  books?: Maybe<Array<Maybe<BookConnection>>>;
  genres?: Maybe<Array<Maybe<GenreConnection>>>;
  publishers?: Maybe<Array<Maybe<PublisherConnection>>>;
};


export type QueryBookArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBooksArgs = {
  genre_Label_In?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language_In?: InputMaybe<Array<InputMaybe<PeykhangapiBookLanguageChoices>>>;
};


export type QueryGenresArgs = {
  label_In?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CreateBookMutationVariables = Exact<{
  input: BookInput;
}>;


export type CreateBookMutation = { __typename?: 'Mutation', createBook?: { __typename?: 'CreateBook', book?: { __typename?: 'Book', id?: string | null, title?: string | null, summary?: string | null, isbn?: string | null, language?: string | null, bookCoverUrl?: string | null, richTextSummary?: string | null, publicationDate?: string | null, publisher?: { __typename?: 'Publisher', name?: string | null } | null, genre?: { __typename?: 'GenreConnection', edges?: Array<{ __typename?: 'GenreNode', node?: { __typename?: 'Genre', label?: string | null } | null } | null> | null } | null, authors?: { __typename?: 'AuthorConnection', edges?: Array<{ __typename?: 'AuthorNode', node?: { __typename?: 'Author', id?: string | null, firstName?: string | null, lastName?: string | null, summary?: string | null, authorImageUrl?: string | null } | null } | null> | null } | null } | null } | null };

export type GetAuthorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAuthorsQuery = { __typename?: 'Query', authors?: Array<{ __typename?: 'AuthorConnection', edges?: Array<{ __typename?: 'AuthorNode', node?: { __typename?: 'Author', id?: string | null, firstName?: string | null, lastName?: string | null, summary?: string | null, authorImageUrl?: string | null } | null } | null> | null } | null> | null };

export type BookQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type BookQuery = { __typename?: 'Query', book?: { __typename?: 'Book', id?: string | null, title?: string | null, summary?: string | null, isbn?: string | null, language?: string | null, bookCoverUrl?: string | null, richTextSummary?: string | null, publicationDate?: string | null, publisher?: { __typename?: 'Publisher', name?: string | null } | null, authors?: { __typename?: 'AuthorConnection', edges?: Array<{ __typename?: 'AuthorNode', node?: { __typename?: 'Author', id?: string | null, firstName?: string | null, lastName?: string | null, summary?: string | null, authorImageUrl?: string | null } | null } | null> | null } | null } | null };

export type BooksListQueryVariables = Exact<{
  language_In?: InputMaybe<Array<InputMaybe<PeykhangapiBookLanguageChoices>> | InputMaybe<PeykhangapiBookLanguageChoices>>;
  genre_Label_In?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type BooksListQuery = { __typename?: 'Query', books?: Array<{ __typename?: 'BookConnection', edges?: Array<{ __typename?: 'BookNode', node?: { __typename?: 'Book', id?: string | null, title?: string | null, summary?: string | null, isbn?: string | null, language?: string | null, bookCoverUrl?: string | null, richTextSummary?: string | null, publicationDate?: string | null, publisher?: { __typename?: 'Publisher', name?: string | null } | null, genre?: { __typename?: 'GenreConnection', edges?: Array<{ __typename?: 'GenreNode', node?: { __typename?: 'Genre', label?: string | null } | null } | null> | null } | null, authors?: { __typename?: 'AuthorConnection', edges?: Array<{ __typename?: 'AuthorNode', node?: { __typename?: 'Author', id?: string | null, firstName?: string | null, lastName?: string | null, summary?: string | null, authorImageUrl?: string | null } | null } | null> | null } | null } | null } | null> | null } | null> | null };

export type GenreListQueryVariables = Exact<{
  label_In?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GenreListQuery = { __typename?: 'Query', genres?: Array<{ __typename?: 'GenreConnection', edges?: Array<{ __typename?: 'GenreNode', node?: { __typename?: 'Genre', id?: string | null, label?: string | null } | null } | null> | null } | null> | null };

export type GetPublishersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPublishersQuery = { __typename?: 'Query', publishers?: Array<{ __typename?: 'PublisherConnection', edges?: Array<{ __typename?: 'PublisherNode', node?: { __typename?: 'Publisher', id?: string | null, name?: string | null } | null } | null> | null } | null> | null };


export const CreateBookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateBook"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BookInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createBook"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"bookCoverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"richTextSummary"}},{"kind":"Field","name":{"kind":"Name","value":"publisher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"authorImageUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"publicationDate"}}]}}]}}]}}]} as unknown as DocumentNode<CreateBookMutation, CreateBookMutationVariables>;
export const GetAuthorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAuthors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"authorImageUrl"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAuthorsQuery, GetAuthorsQueryVariables>;
export const BookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"book"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"book"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"bookCoverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"richTextSummary"}},{"kind":"Field","name":{"kind":"Name","value":"publisher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"authorImageUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"publicationDate"}}]}}]}}]} as unknown as DocumentNode<BookQuery, BookQueryVariables>;
export const BooksListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"booksList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"language_In"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PeykhangapiBookLanguageChoices"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"genre_Label_In"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"books"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"language_In"},"value":{"kind":"Variable","name":{"kind":"Name","value":"language_In"}}},{"kind":"Argument","name":{"kind":"Name","value":"genre_Label_In"},"value":{"kind":"Variable","name":{"kind":"Name","value":"genre_Label_In"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"bookCoverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"richTextSummary"}},{"kind":"Field","name":{"kind":"Name","value":"publisher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"authorImageUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"publicationDate"}}]}}]}}]}}]}}]} as unknown as DocumentNode<BooksListQuery, BooksListQueryVariables>;
export const GenreListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"genreList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"label_In"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"genres"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"label_In"},"value":{"kind":"Variable","name":{"kind":"Name","value":"label_In"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GenreListQuery, GenreListQueryVariables>;
export const GetPublishersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPublishers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publishers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPublishersQuery, GetPublishersQueryVariables>;