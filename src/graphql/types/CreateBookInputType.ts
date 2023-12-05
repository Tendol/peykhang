export interface CreateBookInputType {
  title: string;
  richTextSummary: string;
  isbn: string;
  category: string;
  authorsId: [string];
  genresId: [string];
}
