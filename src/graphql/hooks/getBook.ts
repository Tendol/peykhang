import { gql } from "@apollo/client";

export const GET_BOOK = gql`
  query book($id: ID!) {
    book(id: $id) {
      excerpt
      content
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
`;
