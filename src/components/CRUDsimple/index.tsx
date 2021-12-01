import { useState } from "react";
import UserTable from "./components/UserTable";
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";

export type TUser = {
  id: string,
  name: string,
  username: string
}

const CRUDsimple = () => {
    // Agregar usuarios
    const usersData: TUser[] = [
        { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
        { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
        { id: uuidv4(), name: 'Ben', username: 'benisphere' },
    ];

    const [users, setUsers] = useState(usersData);

    //Agregar usuarios
    const addUser = (user: TUser): void => {
        user.id = uuidv4();
        setUsers([
        ...users,
        user
        ]);
    }

    //Eliminar usuarios
    const deleteUser = (id: string): void => {
        
        //Filtro si el id actual no es igual a id
        // pasado por parametro a deleteUser
        const arrayFiltrado = users.filter((user) => ( user.id !== id));

        setUsers(arrayFiltrado);
    }

    const [editing, setEditing] = useState(false);

    const [currentUser, setCurrentUser] = useState(
        { id: '', name: '', username: ''}
    );

    //Editar usuarios
    const editUser = (user: TUser): void => {
        setEditing(true);
        setCurrentUser(
        {id: user.id, name: user.name, username: user.username}
        );

    }

    const updateUser = (id: string, updatedUser: TUser): void => {
        setEditing(false);

        setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    }

    return (
        <>
            <h1>CRUD simple </h1>
            <div className="App">
                <div className="container">
                <h1>CRUD app with Hooks</h1>
                <div className="flex-row"> 
                    <div className="flex-large">

                    {
                        editing ? (
                        <div>
                            <h2>Edit user</h2>
                            <EditUserForm 
                                currentUser={currentUser}
                                updateUser={updateUser}
                            />
                        </div>
                        ):(
                        <div>
                            <h2>Add user</h2>
                            <AddUserForm
                                addUser={addUser}
                            />
                        </div>
                        )
                    
                    }
                    </div>
                    <div className="flex-large">
                    <h2>View users</h2>
                    <UserTable 
                        users={users}
                        deleteUser={deleteUser}
                        editUser={editUser}
                    />
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default CRUDsimple;