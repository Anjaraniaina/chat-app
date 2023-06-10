import {FieldValues, useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {loginUser} from "@/services/UserServices";
import {UserLogin, UserRegister} from "@/interfaces/interfaces";
const schema = yup.object().shape({
    email: yup.string().email().required('Please provide a valid email'),
    password: yup.string()
        .required('No password provided.')
}).required();

const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: FieldValues) => {
        const user: UserLogin = {
            email: data.email,
            password: data.password
        }
        try {
            await loginUser(user);
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