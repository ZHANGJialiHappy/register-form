import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "../register/registerSlice";

export const Login = () => {
    const user = useSelector(getUser);
    const [errorMessage, setErrorMessage] = useState("")
    const navigate=useNavigate();

    const { register, handleSubmit} = useForm();

    const onSubmit = (data: any) => {
        if(data.email !== user.email) {
            setErrorMessage("email is incorrect")
            return;
        }

        if(data.password !== user.password) {
            setErrorMessage("password is incorrect")
            return;
        }
         else
         navigate("/register-system/home");
    };

    return (
        <div className="m-5 flex flex-row justify-center">
        <form className="card w-96 bg-base-100 shadow-xl gap-5 p-5" onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control">
                <label className="input-group input-group-vertical">
                    <span>Email</span>
                    <input 
                    type="text" 
                    placeholder="info@site.com" 
                    className={`input input-bordered ${!!errorMessage && "input-error"}`}  
                    {...register("email")} 
                    />
                </label>
            </div>

            <div className="form-control">
                <label className="input-group input-group-vertical">
                    <span>Password</span>
                    <input 
                    type="password" 
                    placeholder="Password..." 
                    className={`input input-bordered ${!!errorMessage && "input-error"}`} 
                    {...register("password")} 
                    />
                </label>
            </div>
            <p className="">{errorMessage.toString()}</p>

            <div className="flex justify-end">
                <input className="btn" type="submit" />
            </div>
        </form>
        </div>
    )
}