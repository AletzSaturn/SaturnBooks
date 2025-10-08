import { useState } from "react";
import bookSearch from "../services/book-search-service";

export default function BookSearch() {
    const [searchedBooks, setSearchedBooks] = useState<any[]>([]);

    const searchBook = async (): Promise<any> => {
        const response: any = await bookSearch('Harry Potter');
        setSearchedBooks(response);
        console.log(searchedBooks)
    }

    return (
        <>
            <button onClick={searchBook}>Click me to get your book book</button>
            {
                searchedBooks.length > 0 ?
                    searchedBooks.map((book: any) => (
                        <div>
                            <h3>{book.title}</h3>
                            <img src={`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`} />
                        </div>
                    ))
                    : <p>No books</p>
            }
        </>
    );
}