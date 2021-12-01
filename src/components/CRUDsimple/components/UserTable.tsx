import { TUser } from "../";

type Props = {
    users: TUser[];
    deleteUser: (id: string) => void;
    editUser: (user: TUser) => void;
}

const UserTable = (props: Props) => {

    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                {
                    props.users.length > 0 ? (
                        props.users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>
                                <button 
                                    className="button muted-button"
                                    onClick={() => {
                                        props.editUser(user)
                                    }}
                                    >
                                    Edit
                                </button>
                                <button 
                                    className="button muted-button"
                                    onClick={() => {props.deleteUser(user.id)}}
                                >
                                    Delete
                                </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={3}>No users</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
  )
}

export default UserTable;