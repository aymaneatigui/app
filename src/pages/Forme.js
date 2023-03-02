import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Forme = () => {

    const schema = yup.object().shape({
        fname : yup.string().required(),
        email :  yup.string().email().required(),
        age : yup.number().positive().integer().min(18).required(),
        password : yup.string().min(4).max(20).required(),
        cpassword : yup.string().oneOf([yup.ref("password")],null).required(),
    });

    const {register, handleSubmit} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data)=>{
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full Name" {...register("fanme")}/>
            <input type="text" placeholder="Email" {...register("email")} />
            <input type="number"  placeholder="Age" {...register("age")}/>
            <input type="password" placeholder="Password" {...register("password")}/>
            <input type="password" placeholder="Confirm Password" {...register("cpassword")}/>
            <input type="submit" value="Submit" />        
        </form>
    );
};