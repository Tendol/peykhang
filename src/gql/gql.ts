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
    "\n  fragment BookFields on BookNode {\n    excerpt\n    title\n    uri\n    slug\n    bookMetaData {\n      author\n      isbn\n      publicationDate\n      publisher\n    }\n    id\n    featuredImage {\n      node {\n        sourceUrl\n        slug\n      }\n    }\n  }\n": types.BookFieldsFragmentDoc,
    "\n  query book($id: ID!) {\n    book(id: $id) {\n      excerpt\n      title\n      uri\n      slug\n      bookMetaData {\n        author\n        isbn\n        publicationDate\n        publisher\n      }\n      id\n      content\n      featuredImage {\n        node {\n          sourceUrl\n          slug\n        }\n      }\n    }\n  }\n": types.BookDocument,
    "\n  query booksList {\n    books {\n      nodes {\n        excerpt\n        title\n        uri\n        slug\n        bookMetaData {\n          author\n          isbn\n          publicationDate\n          publisher\n        }\n        id\n        featuredImage {\n          node {\n            sourceUrl\n            slug\n          }\n        }\n      }\n    }\n  }\n": types.BooksListDocument,
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
export function gql(source: "\n  fragment BookFields on BookNode {\n    excerpt\n    title\n    uri\n    slug\n    bookMetaData {\n      author\n      isbn\n      publicationDate\n      publisher\n    }\n    id\n    featuredImage {\n      node {\n        sourceUrl\n        slug\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment BookFields on BookNode {\n    excerpt\n    title\n    uri\n    slug\n    bookMetaData {\n      author\n      isbn\n      publicationDate\n      publisher\n    }\n    id\n    featuredImage {\n      node {\n        sourceUrl\n        slug\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query book($id: ID!) {\n    book(id: $id) {\n      excerpt\n      title\n      uri\n      slug\n      bookMetaData {\n        author\n        isbn\n        publicationDate\n        publisher\n      }\n      id\n      content\n      featuredImage {\n        node {\n          sourceUrl\n          slug\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query book($id: ID!) {\n    book(id: $id) {\n      excerpt\n      title\n      uri\n      slug\n      bookMetaData {\n        author\n        isbn\n        publicationDate\n        publisher\n      }\n      id\n      content\n      featuredImage {\n        node {\n          sourceUrl\n          slug\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query booksList {\n    books {\n      nodes {\n        excerpt\n        title\n        uri\n        slug\n        bookMetaData {\n          author\n          isbn\n          publicationDate\n          publisher\n        }\n        id\n        featuredImage {\n          node {\n            sourceUrl\n            slug\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query booksList {\n    books {\n      nodes {\n        excerpt\n        title\n        uri\n        slug\n        bookMetaData {\n          author\n          isbn\n          publicationDate\n          publisher\n        }\n        id\n        featuredImage {\n          node {\n            sourceUrl\n            slug\n          }\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;