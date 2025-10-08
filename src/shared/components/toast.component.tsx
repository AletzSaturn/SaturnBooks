import { useEffect, useState } from "react";

interface ToastInterface {
    message: string;
    type: string;
    timer: number;
}

export default function Toast({ message, type, timer }: ToastInterface) {
    const [isToastVisible, setIsToastVisible] = useState<boolean>(true);

    const successToast = 'bg-green-600/80';
    const errorToast = 'bg-red-600/80';
    const warningToast = 'bg-yellow-500/80';

    useEffect(() => {
        setTimeout(() => {
            setIsToastVisible(false);
        }, timer);
    });

    const toastColor = type === 'success' ? successToast : type === 'error' ? errorToast : warningToast;

    return (
        <>
            {isToastVisible &&
                <div className={`fixed ${toastColor} w-full h-15 text-center content-center bottom-0 text-white`}>
                    <p>{message}</p>
                </div>
            }
        </>
    )
}