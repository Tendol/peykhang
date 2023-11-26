import { gql } from '@apollo/client';

export const GET_AUTHORS = gql`
  query GetAuthors {
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
  }
`;
