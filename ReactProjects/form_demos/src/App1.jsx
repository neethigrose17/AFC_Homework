// react hook form with built in validations

import {useForm} from "react-hook-form";
import {object, string, number} from "yup";
import {yupResolver} from "@hookform/resolvers/yup"

let userSchema = object({
    fname: string().min(2).max(5).required(),
    age: number().min(21).required()
})

const App1 = () => {
    const {reset, register, handleSubmit, watch, setValue, formState: {errors}} = useForm({
        resolver: yupResolver(userSchema)
    });
    const handleChange = (event) => {
        console.log(`${event.target.name}: ${watch(event.target.name)}`);
        setValue(event.target.name, event.target.value)
      }
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <>
            <h1>App1 page</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">First Name:</label>
                <input type="text" id="fuzzy" {...register("fname")} onChange={handleChange} />
                {errors.fname && <span>Violation of validation</span>}
                <label htmlFor="">Last Name:</label>
                <input type="text" id="wuzzy" {...register("lname")} onChange={handleChange} />
                <label htmlFor="">Age:</label>
                <input type="text" id="age" {...register("age")} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default App1;