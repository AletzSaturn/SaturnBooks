import { useParams } from "react-router-dom"

export default function MyBooks() {
    const params = useParams();

    return (
        <div className="pt-12">
            <h1>My Books</h1>
            <p>user:</p>
            <p>{params.userId}</p>
        </div>
    )
}