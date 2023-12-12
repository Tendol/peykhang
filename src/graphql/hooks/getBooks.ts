import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
  query booksList(
    $language_In: [PeykhangapiBookLanguageChoices]
    $genre_Label_In: [String]
  ) {
    books(language_In: $language_In, genre_Label_In: $genre_Label_In) {
      edges {
        node {
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
  }
`;
