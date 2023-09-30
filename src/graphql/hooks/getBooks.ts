import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
  query booksList($language_In: [PeykhangapiBookLanguageChoices]) {
    books(language_In: $language_In) {
      edges {
        node {
          id
          summary
          title
          isbn
          language
          genre {
            label
          }
        }
      }
    }
  }
`;
