import { FaAlignJustify } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

interface NavBarInterface {
    showNavBar: boolean,
    handleShowNavBar: () => void,
    //children: React.ReactNode;
};


export default function TopNavBar({ showNavBar, handleShowNavBar }: NavBarInterface) {

    return (
        <div className='min-w-full bg-orange-200'>
            <IconContext.Provider value={{ size: '2em' }}>
                <div className='p-2'>
                    <span className='hover: cursor-pointer'>
                        {!showNavBar &&
                            <FaAlignJustify onClick={handleShowNavBar} />
                        }
                    </span>
                </div>

                {showNavBar &&
                    <nav className='text-left bg-blue-500/50 w-45 min-h-dvh left-0 top-0 fixed'>
                        <div className='w-full flex justify-end pt-2 pr-2'>
                            <ul>
                                <li className='h-10 content-center hover:cursor-pointer hover:bg-blue-400/50 active:bg-blue-600/50'>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li className='h-10 content-center hover:cursor-pointer hover:bg-blue-400/50 active:bg-blue-600/50'>
                                    <Link to="/my-books">My Books</Link>
                                </li>
                                <li className='h-10 content-center hover:cursor-pointer hover:bg-blue-400/50 active:bg-blue-600/50'>
                                    <Link to="/sign-in">Sign-In</Link>
                                </li>
                                <li className='h-10 content-center hover:cursor-pointer hover:bg-blue-400/50 active:bg-blue-600/50'>
                                    <Link to="/about">Register</Link>
                                </li>
                            </ul>
                            <span onClick={handleShowNavBar} className='hover: cursor-pointer'><IoMdClose /></span>

                        </div>
                    </nav>
                }

            </IconContext.Provider>
        </div>

    );
}