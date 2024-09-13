import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [item, setItem] = useState("");
    const serverUrl = "https://helllo-world-deploy-1.onrender.com/";

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
