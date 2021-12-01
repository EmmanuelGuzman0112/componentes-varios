import { useForm } from 'react-hook-form';
import { TUser } from "../";

type Props = {
    currentUser: TUser,
    updateUser: (id: string, updatedUser: IFormInputs) => void,
}

interface IFormInputs {
    id: string
    name: string
    username: string
}

const EditUserForm = (props: Props) =>{

    const { register, formState: { errors }, handleSubmit, setValue } = useForm<IFormInputs>({
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);

    const onSubmit = (data: IFormInputs, e: any) => {
        data.id = props.currentUser.id;

        props.updateUser(props.currentUser.id, data);

        e.target.reset();
    }

    return (
        <>
            <h1>Formalario</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name</label>
                <input 
                    {...register("name", { required: true })}
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
                <button type="submit">Edit new user</button>
            </form>
        </>
    )
}

export default EditUserForm;