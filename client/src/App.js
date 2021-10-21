import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBox from "./components/SearchBox";
import List from "./components/List";

function App() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        const apiCall = async () => {
            try {
                const { data } = await axios.get(
                    "https://reqres.in/api/users?page=2"
                );
                if (data?.data) {
                    setResults([...data.data]);
                }
            } catch (err) {
                console.log(err);
            }
        };

        if (search && !results?.length) {
            apiCall();
        } else {
            const timeoutId = setTimeout(() => {
                if (search) {
                    apiCall();
                }
            }, 1000);

            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [search, results?.length]);

    return (
        <div className="App">
            <h3>Employee Search Box</h3>
            <SearchBox search={search} setSearch={setSearch} />
            <hr />
            <List results={results} search={search} />
        </div>
    );
}

export default App;
