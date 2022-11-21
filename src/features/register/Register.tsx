import "../styles.css";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Register = () => {

    const schema = yup.object().shape({
        fullName: yup.string().required("required"),
        email: yup.string().email().required("required"),
        password: yup.string().min(6).max(20).required(),
    })

    const {register, handleSubmit, formState: {errors}}= useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: any) => {
        console.log (data);
    };

    return (
        <div className = "formContainer">
            <form className="form" onSubmit = {handleSubmit(onSubmit)}>
                <div>
                <label className="label"> Full Name</label>
                <input className="input" type="text" placeholder="Full Name..." {...register("fullName")}/>
                <p className="validationMessage">{errors.fullName?.message?.toString()}</p>
                </div>
                
                <div>
                <label className="label"> Email </label>
                <input className="input" type="text" placeholder="Email..." {...register("email")}/>
                <p className="validationMessage">{errors.email?.message?.toString()}</p>
                </div>

                <div>
                <label className="label"> Password </label>
                <input className="input" type="password" placeholder="Password..." {...register("password")}/>
                <p className="validationMessage">{errors.password?.message?.toString()}</p>
                </div>
                
                <div>
                <input className="input" type="submit"/>
                </div>
            </form>
        </div>

    )
}