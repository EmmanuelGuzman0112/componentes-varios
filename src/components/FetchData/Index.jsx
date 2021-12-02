import {useEffect, useState} from 'react'

//Consumiendo una api fake
const FetchData = () => {

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await data.json();
        // console.log(users)
        setUsuarios(users);
    }   

    return (
        <div>
            <ul>
                {
                    usuarios.map(item => (
                        <li key={item.id}>
                            {item.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default FetchData;