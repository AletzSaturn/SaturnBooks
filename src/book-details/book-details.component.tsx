import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"

export default function BookDetails() {
    const params = useParams();
    const selectedBook = useSelector((state: any) => state.bookDetails);


    useEffect(() => {
        console.log(params);
        console.log(selectedBook)
    });

    return (
        <div className="flex flex-col">
            <img src={selectedBook.coverURL} />
            <p>
                {selectedBook.title}
            </p>
            <p>
                {selectedBook.author}
            </p>
            <p>
                {selectedBook.publishedYear}
            </p>
            <label>What do you think about this book?</label>
            <textarea></textarea>
        </div>
    )
}