import { gql } from '@apollo/client';

export const CREATE_BOOK = gql`
  mutation CreateBook($input: BookInput!) {
    createBook(input: $input) {
      book {
        id
        title
        isbn
        language
        bookCoverUrl
        richTextSummary
        publisher {
          name
        }
        genre {
          edges {
            node {
              label
            }
          }
        }
        authors {
          edges {
            node {
              id
              firstName
              lastName
              summary
              authorImageUrl
            }
          }
        }
        publicationDate
      }
    }
  }
`;
