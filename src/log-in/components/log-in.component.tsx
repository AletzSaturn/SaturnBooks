import type { FormEvent } from "react";

export default function LogIn() {

    const handleLoginSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Logging In...')
    }

    return (
        <>
            <form className="pt-12 w-full flex justify-center min-w-70 bg-cyan-950 h-dvh text-white" onSubmit={(event) => handleLoginSubmit(event)}>
                <div className="flex flex-col">
                    <h1 className="notable-regular">Log in</h1>
                    <label htmlFor="email">Email: </label>
                    <input type='text' name="email" id="email" className='mb-3' />
                    <label htmlFor="password">Password: </label>
                    <input type='password' name="password" id="password" className='mb-5' />
                    <button>Log in</button>
                </div>
            </form>
        </>
    );
}