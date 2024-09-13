import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [item, setItem] = useState("");
    const port = import.meta.env.VITE_SERVER_PORT || 5000; // Default to 5000 if not set
    const serverUrl = `http://localhost:${port}`; // Ensure this URL matches your Express server

    const dataFromServer = async () => {
        try {
            const result = await axios.get(serverUrl);

            setItem(result.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        dataFromServer();
    }, []);

    return (
        <div>
            <h1> {item}</h1>
        </div>
    );
}

export default App;
