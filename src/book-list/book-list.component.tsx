import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setBookDetails } from "../store/store";

export default function BookList() {
    const bookData = useSelector((state: any) => state.bookSearch);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const bookDetails = useSelector((state: any) => state.bookDetails);


    useEffect(() => {
        console.log(Object.values(bookData.books));
    }, [bookData])

    const redirectToDetails = (book) => {
        const selectedBook = {
            title: book.title,
            author: book.author,
            publishedYear: book.publishedYear,
            coverURL: book.coverURL,
        }

        dispatch(setBookDetails(selectedBook));
        navigate(`/book-details/${selectedBook.title}`);
    }

    return (
        <>
            {
                bookData.books.length > 0 &&
                <div className="absolute top-13 right-0 h-130 w-83 overflow-y-scroll bg-gray-300">
                    {Object.values(bookData.books).map((el: any, index: number) => (
                        <div key={index} className="flex 
                        cursor-pointer m-1 border-3 rounded-md 
                        border-cyan-700/90
                        hover:bg-gray-500 
                        active:bg-gray-600"
                            onClick={() => redirectToDetails(el)}>
                            <img src={el.coverURL} className='max-h-25 object-fill min-w-20' />
                            <div className="flex flex-col m-1 text-center align-middle max-w-50">
                                <p className='font-bold text-lg'>{el.title.length >= 50 ? el.title.slice(0, 50) + '...' : el.title}</p>
                                <p className='text-sm'>{el.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </>
    );
}