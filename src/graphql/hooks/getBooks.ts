import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
  query booksList {
    books {
      id
      summary
      title
      isbn
    }
  }
`;
