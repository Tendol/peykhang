import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query booksList {
    books {
      nodes {
        excerpt
        title
        uri
        slug
        bookMetaData {
          author
          isbn
          publicationDate
          publisher
        }
        id
        featuredImage {
          node {
            sourceUrl
            slug
          }
        }
      }
    }
  }
`;
