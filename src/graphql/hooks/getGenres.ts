import { gql } from '@apollo/client';

export const GET_GENRES = gql`
  query genreList($label_In: [String]) {
    genres(label_In: $label_In) {
      edges {
        node {
          id
          label
        }
      }
    }
  }
`;
