import axios from 'axios';

interface User {
    id: number;
    email: string;
}

const getUsers = async () => {
    try {
        const res = await axios.get("http://localhost:8000/api/users", {
            headers: {Authorization: `Bearer ${process.env.API_TOKEN}`},
        });
        return res.data;
    } catch (error) {
        console.error("Error fetching users.", error);
        return [];
    }
    };

export default async function UserPage(){
    const users: User[] = await getUsers();
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.email}</li>
                ))}
            </ul>
        </div>
    );
}