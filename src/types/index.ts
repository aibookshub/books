// /types/index.ts
export type Category = {
    id: string;
    name: string;
    subcategories: Subcategory[];
  };
  
  export type Subcategory = {
    id: string;
    name: string;
    books: Book[];
  };
  
  export type Book = {
    id: string;
    title: string;
    author: string;
  };