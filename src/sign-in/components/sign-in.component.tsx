import { useState, type ChangeEvent, type FormEvent } from "react";

type RegisterFormState = {
    firstName: string;
    lastName: string;
    birthday: string | number | readonly string[] | undefined;
    gender: string;
    email: string;
    password: string;
    confirmPassword: string;
};

// interface ReducerErrorsActions {
//     type: 'firstName' | 'lastName' | 'birthday' | 'password'
// }

export default function Register() {
    const genderSelect: string[] = ['Female', 'Male', 'Other'];

    const registerFormData: RegisterFormState = {
        firstName: '',
        lastName: '',
        birthday: undefined,
        gender: '',
        password: '',
        confirmPassword: '',
        email: ""
    };
    const registerErrors: RegisterFormState = {
        firstName: '',
        lastName: '',
        birthday: '',
        gender: '',
        password: '',
        confirmPassword: '',
        email: ""
    };
    const [registerForm, setRegisterForm] = useState(registerFormData);
    const [errorsForm, setErrorsForm] = useState(registerErrors);

    // const handleErrors = (state: RegisterFormState, action: ReducerErrorsActions) => {
    //     const { type } = action;
    //     switch (type) {
    //         default: return state;
    //     }
    // }

    // const [state, dispatch] = useReducer(handleErrors, registerErrors);

    //const registrationForm = useRef<HTMLFormElement>(null);
    // const handleRegisterSubmitFormData = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     const currentForm = event.currentTarget ? event.currentTarget : undefined;
    //     //const currentForm = registrationForm.current ? registrationForm.current : undefined;
    //     //const formData = new FormData(currentForm);
    //     const formData = new FormData(currentForm);
    //     const firstName = formData.get('firstName');
    //     const lastName = formData.get('lastName');
    //     const birthday = formData.get('birthday');
    //     const password = formData.get('password');
    //     const confirmPassword = formData.get('confirmPassword');
    //     for (const [key, value] of formData.entries()) {
    //         console.log(`${key}: ${value}`);
    //     }
    // }

    const handleRegisterSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newErrors: RegisterFormState = {
            firstName: "",
            lastName: "",
            birthday: "",
            gender: "",
            password: "",
            confirmPassword: "",
            email: ""
        };
        if (registerForm.firstName.length === 0) {
            newErrors.firstName = 'This field is required.';
        } else {
            newErrors.firstName = '';
        }
        if (registerForm.lastName.length == 0) {
            newErrors.lastName = 'This field is required.';
        } else {
            newErrors.lastName = '';
        }
        if (registerForm.email.length == 0 || !registerForm.email.includes('@')) {
            newErrors.email = 'Enter a valid email address.';
        } else {
            newErrors.email = '';
        }
        if (!registerForm.birthday) {
            setErrorsForm((prevState) => ({
                ...prevState,
                firstName: `This field is required.`,
            }))
        }
        if (registerForm.password.length == 0) {
            newErrors.password = 'This field is required.';
        } else {
            newErrors.password = '';
        }
        if (registerForm.confirmPassword.length == 0) {
            newErrors.confirmPassword = 'This field is required.';
        } else {
            newErrors.confirmPassword = '';
        }
        if (registerForm.password !== registerForm.confirmPassword) {
            newErrors.confirmPassword = newErrors.confirmPassword + `The passwords don't match.`
        } else {
            newErrors.confirmPassword = '';
        }
        setErrorsForm(newErrors);
        const errorsFree = Object.values(newErrors).every((item: any) => item === '');
        if (errorsFree) {
            //fetch to post data
            localStorage.setItem('user', JSON.stringify(registerForm));
        }
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>, inputName: string) => {
        const { value } = event.target;
        setRegisterForm((prevState) => ({
            ...prevState,
            [inputName]: value.trim(),
        }));
    }

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>, inputName: string) => {
        const { value } = event.target;
        setRegisterForm((prevState) => ({
            ...prevState,
            [inputName]: value,
        }));
    }

    return (
        <>
            <div className="flex flex-col">
                <div className="w-full flex justify-center min-w-70 bg-cyan-950 pt-20 text-white">
                    <h3 className="notable-regular">Sign in</h3>
                </div>
                <div className="w-full flex justify-center min-w-70 bg-cyan-950 h-dvh text-white">
                    {/* <form onSubmit={(event) => handleRegisterSubmitFormData(event)} className="flex flex-col" ref={registrationForm}> */}
                    <form onSubmit={(event) => handleRegisterSubmit(event)} className="">
                        <div className="flex justify-between flex-row flex-wrap">
                            <div className="flex flex-col">
                                <label htmlFor='firstName'> First Name <span className="text-red-500 text-sm">*</span></label>
                                <input type="text" id='firstName' name="firstName" value={registerForm.firstName} onChange={(event) => handleInputChange(event, 'firstName')} />
                                {errorsForm.firstName && <span className="text-red-500 text-xs">{errorsForm.firstName}</span>}
                                <br />
                                <label htmlFor="lastName"> Last Name <span className="text-red-500 text-sm">*</span></label>
                                <input type="text" id='lastName' name="lastName" value={registerForm.lastName} onChange={(event) => handleInputChange(event, 'lastName')} />
                                {errorsForm && <span className="text-red-500 text-xs">{errorsForm.lastName}</span>}
                                <br />

                                <label htmlFor="password"> Password <span className="text-red-500 text-sm">*</span></label>
                                <input type="password" id="password" name="password" value={registerForm.password} onChange={(event) => handleInputChange(event, 'password')} />
                                {errorsForm && <span className="text-red-500 text-xs">{errorsForm.password}</span>}
                                <br />
                                <label htmlFor="confirm-password"> Confirm your password <span className="text-red-500 text-sm">*</span></label>
                                <input type="password" id="confirm-password" name="confirm-password" value={registerForm.confirmPassword} onChange={(event) => handleInputChange(event, 'confirmPassword')} />
                                {errorsForm && <span className="text-red-500 text-xs">{errorsForm.confirmPassword}</span>}
                                <br />
                            </div>
                            <div className="w-5"></div>
                            <div className="flex flex-col">
                                <label htmlFor="birthday"> Birthday <span className="text-red-500 text-sm">*</span></label>
                                <input type="date" id="birthday" name="birthday" value={registerForm.birthday} onChange={(event) => handleInputChange(event, 'birthday')} />
                                {errorsForm && <span className="text-red-500 text-xs">{errorsForm.birthday}</span>}
                                <br />
                                <label htmlFor="gender"> Gender</label>
                                <select id="gender" name="gender" value={registerForm.gender} onChange={(event) => handleSelectChange(event, 'gender')}>
                                    <option value="" disabled selected hidden>Select an option...</option>
                                    {genderSelect.map((gender: string) => <option key={gender}>{gender}</option>)}
                                </select>
                                <br />
                                <label htmlFor="email"> Email <span className="text-red-500 text-sm">*</span></label>
                                <input type="mail" id='email' name="email" value={registerForm.email} onChange={(event) => handleInputChange(event, 'email')} />
                                {errorsForm.email && <span className="text-red-500 text-xs">{errorsForm.email}</span>}
                                <br />
                            </div>
                        </div >
                        <div className="flex justify-center">
                            <button>Create Account</button>
                        </div>
                    </form >
                </div >
            </div>

        </>
    );
}