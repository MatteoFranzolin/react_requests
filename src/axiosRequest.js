import React, { useState, useEffect } from 'react';
import './styles.css';
import axios from 'axios';

const serverAddress = '127.0.0.1:8081';

function AxiosRequest() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://' + serverAddress + '/products');
                setData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Caricamento...</div>;
    if (error) return <div>Errore: {error.message}</div>;
    if (!data) return <div>Nessun dato disponibile</div>;

    return (
        <div>
            {data.data.map((item, index) => (
                <div key={index} className={"box"}>
                    <p>Nome: {item.attributes.nome}</p>
                    <p>Marca: {item.attributes.marca}</p>
                    <p>Prezzo: {item.attributes.prezzo}</p>
                </div>
            ))}
        </div>
    );
}

export default AxiosRequest;