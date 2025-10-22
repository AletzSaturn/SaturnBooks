import { RiPlanetLine } from "react-icons/ri";
import space2 from '../../assets/space-background2.jpg';
import Toast from "../../shared/components/toast.component";
import { useSelector } from "react-redux";
import BookSearch from "../../book-search/components/book-search";
import BookList from "../../book-list/book-list.component";
// import PropsExample from "../../shared/components/PropsExample";
// import { useEffect } from "react";
import BookDetails from "../../book-details/book-details.component";
import { useDispatch } from "react-redux";
import { resetBookDetails, setSearchTerm } from "../../store/store";

export default function HomePage() {
    const userData = useSelector((state: any) => state.userData);
    const selectedBook = useSelector((state: any) => state.bookDetails);
    const dispatch = useDispatch();

    const closeBookDetails = () => {
        dispatch(resetBookDetails());
        dispatch(setSearchTerm(''));
    }

    return (
        <div className="h-dvh">
            <div style={{ backgroundImage: `url(${space2})` }} className='flex justify-center items-center bg-center bg-cover text-white h-full'>
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
            <BookSearch />
            {
                selectedBook.title != '' ?
                    <BookDetails close={closeBookDetails} /> : <BookList />
            }
            {userData.firstname.length > 0 &&
                <Toast message={`Welcome ${userData.firstname}`} type='success' timer={5000} />
            }
        </div>
    );
}