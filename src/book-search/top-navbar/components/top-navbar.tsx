import { FaAlignJustify } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { IoMdClose } from "react-icons/io";

interface NavBarInterface {
    showNavBar: boolean,
    handleShowNavBar: () => void,
    children: React.ReactNode;
};


export default function TopNavBar({ showNavBar, handleShowNavBar, children }: NavBarInterface) {

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
                            <span onClick={handleShowNavBar} className='hover: cursor-pointer'><IoMdClose /></span>
                        </div>
                        <div className='flex flex-col text-center z-1'>
                            {children}
                        </div>
                    </nav>
                }
            </IconContext.Provider>
        </div>

    );
}