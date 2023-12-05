/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation CreateBook($input: BookInput!) {\n    createBook(input: $input) {\n      id\n      title\n    }\n  }\n": types.CreateBookDocument,
    "\n  query GetAuthors {\n    authors {\n      edges {\n        node {\n          id\n          firstName\n          lastName\n          summary\n          authorImageUrl\n        }\n      }\n    }\n  }\n": types.GetAuthorsDocument,
    "\n  query book($id: ID!) {\n    book(id: $id) {\n      id\n      title\n      summary\n      isbn\n      language\n      bookCoverUrl\n      richTextSummary\n      publisher {\n        name\n      }\n      authors {\n        edges {\n          node {\n            id\n            firstName\n            lastName\n            summary\n            authorImageUrl\n          }\n        }\n      }\n      publicationDate\n    }\n  }\n": types.BookDocument,
    "\n  query booksList(\n    $language_In: [PeykhangapiBookLanguageChoices]\n    $genre_Label_In: [String]\n  ) {\n    books(language_In: $language_In, genre_Label_In: $genre_Label_In) {\n      edges {\n        node {\n          id\n          summary\n          title\n          isbn\n          language\n          bookCoverUrl\n          publicationDate\n          genre {\n            edges {\n              node {\n                label\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.BooksListDocument,
    "\n  query genreList($label_In: [String]) {\n    genres(label_In: $label_In) {\n      edges {\n        node {\n          id\n          label\n        }\n      }\n    }\n  }\n": types.GenreListDocument,
    "\n  query GetPublishers {\n    publishers {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n    }\n  }\n": types.GetPublishersDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateBook($input: BookInput!) {\n    createBook(input: $input) {\n      id\n      title\n    }\n  }\n"): (typeof documents)["\n  mutation CreateBook($input: BookInput!) {\n    createBook(input: $input) {\n      id\n      title\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAuthors {\n    authors {\n      edges {\n        node {\n          id\n          firstName\n          lastName\n          summary\n          authorImageUrl\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAuthors {\n    authors {\n      edges {\n        node {\n          id\n          firstName\n          lastName\n          summary\n          authorImageUrl\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query book($id: ID!) {\n    book(id: $id) {\n      id\n      title\n      summary\n      isbn\n      language\n      bookCoverUrl\n      richTextSummary\n      publisher {\n        name\n      }\n      authors {\n        edges {\n          node {\n            id\n            firstName\n            lastName\n            summary\n            authorImageUrl\n          }\n        }\n      }\n      publicationDate\n    }\n  }\n"): (typeof documents)["\n  query book($id: ID!) {\n    book(id: $id) {\n      id\n      title\n      summary\n      isbn\n      language\n      bookCoverUrl\n      richTextSummary\n      publisher {\n        name\n      }\n      authors {\n        edges {\n          node {\n            id\n            firstName\n            lastName\n            summary\n            authorImageUrl\n          }\n        }\n      }\n      publicationDate\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query booksList(\n    $language_In: [PeykhangapiBookLanguageChoices]\n    $genre_Label_In: [String]\n  ) {\n    books(language_In: $language_In, genre_Label_In: $genre_Label_In) {\n      edges {\n        node {\n          id\n          summary\n          title\n          isbn\n          language\n          bookCoverUrl\n          publicationDate\n          genre {\n            edges {\n              node {\n                label\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query booksList(\n    $language_In: [PeykhangapiBookLanguageChoices]\n    $genre_Label_In: [String]\n  ) {\n    books(language_In: $language_In, genre_Label_In: $genre_Label_In) {\n      edges {\n        node {\n          id\n          summary\n          title\n          isbn\n          language\n          bookCoverUrl\n          publicationDate\n          genre {\n            edges {\n              node {\n                label\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query genreList($label_In: [String]) {\n    genres(label_In: $label_In) {\n      edges {\n        node {\n          id\n          label\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query genreList($label_In: [String]) {\n    genres(label_In: $label_In) {\n      edges {\n        node {\n          id\n          label\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPublishers {\n    publishers {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPublishers {\n    publishers {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;