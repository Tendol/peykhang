import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query booksList {
    books {
      nodes {
        excerpt
        title
        uri
        slug
        book {
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
