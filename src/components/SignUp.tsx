import {FieldValues, useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import Toast from "@/ui/Toast";
import {UserContext} from "@/contexts/UserContext";
import {useContext} from "react";
import {UserRegister} from "@/interfaces/interfaces";



const schema = yup.object().shape({
    name: yup.string().required(),
    bio: yup.string(),
    email: yup.string().email().required('Please provide a valid email'),
    password: yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required')
}).required();

export default function SignUp () {
    const { setUser } = useContext(UserContext);
    const { register,
        handleSubmit,
        formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: FieldValues) => {
        const user: UserRegister = {
            name: data.name,
            bio: data.bio,
            email: data.email,
            password: data.password
        }
        console.log(user);

            try {
                await axios.post("http://localhost:8080/users", user).then(
                    (response) => {
                        const { user } = response.data;
                        setUser(user);
                    }
                );
            } catch (e) {
                console.error(e);
            }
    };

    return (
        <div className={"container w-25 h-100 p-4"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} className={"form-control mb-3 "} placeholder="Fullname"/>
                {errors.name && <Toast message={"Name required"}/>
                }
                <input {...register("email")} className={"form-control mb-3"} placeholder="Email"/>
                {errors.mail && <p role="alert">{"email invalid"}</p>}
                <input {...register("bio")} className={"form-control mb-3"} placeholder="Bio"/>
                <input {...register("password")} className={"form-control mb-3"} placeholder="Password"/>
                {errors.password && <p role="alert">{"password too short"}</p>}
                <input {...register("confirmPassword")} className={"form-control mb-3"} placeholder="Confirm password"/>
                {errors.confirmPassword && <p role="alert">{"password don't match"}</p>}
                <button className={"btn btn-primary p-2 w-50 mx-5"} type="submit">Submit</button>
            </form>
        </div>
    );
};