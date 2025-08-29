import { FaAlignJustify } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { IoMdClose } from "react-icons/io";

interface NavBarInterface {
    showNavBar: boolean,
    handleShowNavBar: () => void
};

const options: string[] = ['Home', 'My Books', 'Browse', 'Sign in', 'Join']

export default function TopNavBar({ showNavBar, handleShowNavBar }: NavBarInterface) {

    return (
        <div className='min-w-full bg-blue-700'>
            <IconContext.Provider value={{ size: '2em' }}>
                <span className='hover: cursor-pointer'>
                    {!showNavBar &&
                        <FaAlignJustify onClick={handleShowNavBar} />
                    }
                </span>
                {showNavBar &&
                    <nav className='text-left bg-blue-500/50 w-45 min-h-dvh left-0 top-0 fixed'>
                        <div className='w-full flex justify-end pt-2 pr-2'>
                            <span onClick={handleShowNavBar} className='hover: cursor-pointer'><IoMdClose /></span>
                        </div>
                        <div className='flex flex-col text-center z-1'>
                            {options.map((item: string) => <p className='h-10 content-center hover:cursor-pointer hover:bg-blue-400/50 active:bg-blue-600/50' >{item}</p>)}
                        </div>
                    </nav>
                }
            </IconContext.Provider>
        </div>

    );
}