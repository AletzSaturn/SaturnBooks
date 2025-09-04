import { FaAlignJustify } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

interface NavBarInterface {
    showNavBar: boolean,
    handleShowNavBar: () => void,
    //children: React.ReactNode;
};

const userId = 'jarellan';

export default function TopNavBar({ showNavBar, handleShowNavBar }: NavBarInterface) {
    return (
        <div className='min-w-full text-white block'>
            <IconContext.Provider value={{ size: '2em' }}>
                <div className='p-2 fixed bg-cyan-700/90 w-full min-h-12'>
                    <span>
                        {!showNavBar &&
                            <FaAlignJustify className='hover: cursor-pointer' onClick={handleShowNavBar} />
                        }
                    </span>
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