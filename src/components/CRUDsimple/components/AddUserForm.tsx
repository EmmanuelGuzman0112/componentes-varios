import { useForm } from 'react-hook-form';
import { TUser } from "../";

type Props = {
    addUser: (user: TUser) => void
}

interface IFormInputs {
    name: string
    username: string
}

const AddUserForm = (props: Props) =>{

    const { register, formState: { errors }, handleSubmit } = useForm<IFormInputs>();

    const onSubmit = (data: TUser, e: any) => {
        console.log(data);

        props.addUser(data);

        e.target.reset();
    }

    return (
        <>
            <h1>Formalario</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name</label>
                <input 
                    {...register("name", { required: true })}
                    //{...register("firstName", { required: true, maxLength: 20 })}
                    type="text" 
                    name="name"
                />
                <div>
                    {errors?.name && <span>This field is required</span>}
                </div>
                <label>Username</label>
                <input
                    {...register("username", { required: true })}
                    type="text" 
                    name="username"
                />
                <div>
                    {errors?.username && <span>This field is required</span>}
                </div>
                <button type="submit">Add new user</button>
            </form>
        </>
    )
}

export default AddUserForm;