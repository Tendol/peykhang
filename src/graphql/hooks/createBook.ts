import { gql } from '@apollo/client';

export const CREATE_BOOK = gql`
  mutation CreateBook($input: BookInput!) {
    createBook(input: $input) {
      book {
        title
      }
    }
  }
`;
