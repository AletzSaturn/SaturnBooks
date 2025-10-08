import { RiPlanetLine } from "react-icons/ri";
import space2 from '../../assets/space-background2.jpg';
import Toast from "../../shared/components/toast.component";
import { useSelector, useStore } from "react-redux";
import BookSearch from "../../book-search/components/book-search";
import BookList from "../../book-list/book-list.component";
import PropsExample from "../../shared/components/PropsExample";
import { useEffect } from "react";

export default function HomePage() {
    const userData = useSelector((state: any) => state.userData);

    useEffect(() => {
        console.log(poke)
    }, [poke])

    return (
        <>
            <div style={{ backgroundImage: `url(${space2})` }} className='flex justify-center items-center bg-center bg-cover min-h-153 text-white'>
                <div className="flex flex-row">
                    <div>
                        <h2 className="notable-regular">Saturn B</h2>
                    </div>
                    <div className="flex items-center pt-3.5">
                        <h2 className="notable-regular"><RiPlanetLine /></h2>
                        <h2 className="notable-regular"><RiPlanetLine /></h2>
                    </div>
                    <div>
                        <h2 className="notable-regular">ks</h2>
                    </div>
                </div>
            </div>
            {/* <BookSearch /> */}
            <BookList />
            {userData.firstname.length > 0 &&
                <Toast message={`Welcome ${userData.firstname}`} type='success' timer={5000} />
            }
        </>
    );
}