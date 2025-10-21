import { FaAlignJustify } from 'react-icons/fa';
import { LiaSearchSolid } from "react-icons/lia";
import { IconContext } from "react-icons";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import bookSearch from '../../book-search/services/book-search-service';
import { useDispatch } from 'react-redux';
import { setSearchResults, setSearchTerm, setStartSearch } from '../../store/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface NavBarInterface {
    showNavBar: boolean,
    handleShowNavBar: () => void
};

const userId = 'jarellan';

export default function TopNavBar({ showNavBar, handleShowNavBar }: NavBarInterface) {
    const dispatch = useDispatch();
    const bookData = useSelector((state: any) => state.bookSearch);

    const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchTerm(event.target.value));
    }

    const bookSearchBar = async () => {
        dispatch(setSearchResults([]));
        const response = await bookSearch(bookData.searchTerm);
        dispatch(setSearchResults(response));
    }

    useEffect(() => {
        // Set a timer to update the debounced value after 500ms
        const timerId = setTimeout(() => {
            bookSearchBar()
        }, 500);

        // Cleanup function: This runs if the component unmounts OR 
        // if the 'searchTerm' changes (meaning the user typed again).
        // It clears the previous timer, effectively restarting the countdown.
        return () => {
            clearTimeout(timerId);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bookData.searchTerm]);

    return (
        <div className='min-w-full text-white block h-12 bg-black'>
            <IconContext.Provider value={{ size: '2em' }}>
                <div className='p-2 fixed bg-cyan-700/90 w-full min-h-12 flex justify-between'>
                    <div className='flex'>
                        <FaAlignJustify className='hover: cursor-pointer' onClick={handleShowNavBar} />
                    </div>
                    <div className='flex w-80'>
                        <input placeholder='Harry Potter And The Philosopher Stone' className='w-full' value={bookData.searchTerm} onChange={handleSearchTermChange} />
                        <button onClick={bookSearchBar}>
                            <LiaSearchSolid className='cursor-pointer' />
                        </button>
                    </div>
                </div>

                {showNavBar &&
                    <div className='text-left bg-cyan-700/90 w-45 min-h-dvh fixed'>
                        <nav>
                            <div onClick={handleShowNavBar} className='w-full flex justify-end hover: cursor-pointer'><IoMdClose /></div>
                            <div className='pt-2 text-center'>
                                <ul>
                                    <li className='h-10 content-center hover:cursor-pointer hover:bg-blue-400/50 active:bg-blue-600/50'>
                                        <Link to='..' className='block w-full' onClick={handleShowNavBar}>Home</Link>
                                    </li>
                                    <li className='h-10 content-center hover:cursor-pointer hover:bg-blue-400/50 active:bg-blue-600/50'>
                                        <Link to={`/my-books/${userId}`} className='block w-full' onClick={handleShowNavBar}>My Books</Link>
                                    </li>
                                    <li className='h-10 content-center hover:cursor-pointer hover:bg-blue-400/50 active:bg-blue-600/50'>
                                        <Link to="/log-in" className='block w-full' onClick={handleShowNavBar}>Log In</Link>
                                    </li>
                                    <li className='h-10 content-center hover:cursor-pointer hover:bg-blue-400/50 active:bg-blue-600/50'>
                                        <Link to="/sign-in" className='block w-full' onClick={handleShowNavBar}>Register</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>

                }
            </IconContext.Provider>
        </div>

    );
}