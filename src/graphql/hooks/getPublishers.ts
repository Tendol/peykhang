import { gql } from '@apollo/client';

export const GET_PUBLISHERS = gql`
  query GetPublishers {
    publishers {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;
