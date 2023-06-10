import {FieldValues, useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import {useContext} from "react";
import {UserContext} from "@/contexts/UserContext";
const schema = yup.object().shape({
    email: yup.string().email().required('Please provide a valid email'),
    password: yup.string()
        .required('No password provided.')
}).required();

const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const { setUser } = useContext(UserContext);

    const onSubmit = async (data: FieldValues) => {

        try {
            await axios.post(`${process.env.API_URL}/users/login`, data).then(
                (response) => {
                    const { user } = response.data;
                    setUser(user);
                    localStorage.setItem('jwt_token', user.token);
                }
            );
        } catch (e) {
            console.error(e);
        }
    };


    return (
        <div className={"container w-25 h-100 p-4"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email")} className={"form-control mb-3"} placeholder="Email"/>
                {errors.mail && <p role="alert">{"email invalid"}</p>}
                <input {...register("password")} className={"form-control mb-3"} placeholder="Password"
                />
                <button className={"btn btn-primary p-2 w-50 mx-5"} type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SignIn;