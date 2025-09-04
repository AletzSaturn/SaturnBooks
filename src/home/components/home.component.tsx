import { PiPlanetThin } from "react-icons/pi";
import { RiPlanetLine } from "react-icons/ri";

export default function HomePage() {

    return (
        <div className="flex justify-center items-center h-130 w-full">
            <div className="flex flex-row">
                <div>
                <h1 className="notable-regular">Welc</h1>
                </div>
                <div className="flex items-center pt-4">
                    <h1 className="notable-regular"><RiPlanetLine /></h1>
                </div>
                <div>
                    <h1 className="notable-regular">me</h1>
                </div>
            </div>
            {/* <div>
                <p >Find a different universe in each page...</p>
            </div> */}
        </div>
    );
}