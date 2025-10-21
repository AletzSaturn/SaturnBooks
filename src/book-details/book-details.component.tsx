import { useEffect } from "react";
import { IconContext } from "react-icons";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"

interface BookDetailsProps {
  close: () => void;
}

const BookDetails: React.FC<BookDetailsProps> = ({ close }) => {
    const params = useParams();
    const selectedBook = useSelector((state: any) => state.bookDetails);


    useEffect(() => {
        console.log(params);
        console.log(selectedBook)
    });

    return (
        <IconContext.Provider value={{ size: '2em' }}>
            <div className="flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gray-400 rounded-md text-center items-center">
                <div className='w-full flex justify-end hover: cursor-pointer' onClick={close}><IoMdClose /></div>
                <div className="flex justify-center max-h-1/2"><img src={selectedBook.coverURL} /></div>
                <p className="font-medium">
                    {selectedBook.title}
                </p>
                <p className="pb-9">
                    {selectedBook.author} - {selectedBook.publishedYear}
                </p>
                <label>What do you think about this book?</label>
                <textarea className="border-2 border-blue-600 w-9/10 text-center rounded-md"></textarea>
            </div>
        </IconContext.Provider>
    )
}

export default BookDetails;