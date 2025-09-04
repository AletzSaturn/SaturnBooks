import { RiPlanetLine } from "react-icons/ri";
import space2 from '../../assets/space-background2.jpg';


export default function HomePage() {

    return (
        <>
            <div style={{ backgroundImage: `url(${space2})` }} className=' bg-center bg-cover h-dvh text-white'>
                <div className="flex justify-center items-center w-full h-full">
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
            </div>
        </>

    );
}