import { gql } from "@apollo/client";

export const BOOK_FIELDS = gql`
  fragment BookFields on BookNode {
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
`;
