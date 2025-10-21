import type { Book } from "./BookInterface";

export interface initialInterfaceBooksState {
    books: Book[];
    searchTerm: string;
    isLoading: boolean;
    error: string | null;
}