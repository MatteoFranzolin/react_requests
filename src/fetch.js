import './styles.css';
import React, {useState, useEffect} from 'react';

const serverAddress = '127.0.0.1:8081';

const FetchRequest = () => {
    const [data, setData] = useState(null); //data viene inizialmente settato a null, setData = funzione che ne aggiorna lo stato
    const [loading, setLoading] = useState(true); //loading viene inizialmente settato a true, setLoading = funzione che ne aggiorna lo stato
    const [error, setError] = useState(null);//error viene inizialmente settato a null, setError = funzione che ne aggiorna lo stato

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://' + serverAddress + "/products");
                if (!response.ok) {
                    throw new Error('Errore nella richiesta: ' + response.statusText);
                }
                const responseData = await response.json();
                setData(responseData.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!data) return <div>No data available</div>;

    return (
        <div>{data.map((item, index) => (
            <div key={index} className={"box"}>
                <p>Nome: {item.attributes.nome}</p>
                <p>Marca: {item.attributes.marca}</p>
                <p>Prezzo: {item.attributes.prezzo}</p>
            </div>
        ))}
        </div>
    );
};


export default FetchRequest;
