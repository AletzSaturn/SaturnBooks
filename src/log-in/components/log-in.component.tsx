import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/store";

export default function LogIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLoginSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const currentForm = event.currentTarget ? event.currentTarget : undefined;
        // const currentForm = registrationForm.current ? registrationForm.current : undefined;
        const formData = new FormData(currentForm);
        const email = formData.get('email');
        const password = formData.get('password');
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
        const data = {
            email: email,
            password: password,
        }
        console.log('Logging In...');
        const response = await fetch('http://localhost:5001/api/user/login', {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(data)
        });
        if (response.ok) {
            const { data } = await response.json();
            const userData = {
                userId: data.userId,
                firstname: data.firstname,
                lastName: data.lastName,
                birthday: data.birthday,
                gender: data.gender,
                email: data.email,
            }
            dispatch(login(userData));

            console.log(data)
            console.log('all good i think');
            navigate('..');
        }
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