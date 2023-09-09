import { gql } from '@apollo/client';

export const GET_BOOK = gql`
  query book($id: ID!) {
    book(id: $id) {
      id
      title
      summary
      isbn
    }
  }
`;
