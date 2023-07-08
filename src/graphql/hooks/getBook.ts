import { gql } from "@apollo/client";

export const GET_BOOK = gql`
  query book($id: ID!) {
    book(id: $id) {
      book {
        author
        isbn
        publicationDate
        publisher
      }
      excerpt
      featuredImage {
        node {
          sourceUrl
          slug
        }
      }
      title
      slug
    }
  }
`;
