import React, { useEffect, useState } from 'react';

import api from '../services/api';

export default function ListDogs() { 
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const response = await api.get();
            
            setDogs(response.data);
        };

            fetchData();
    }, []);
   
    const exibirDog = dogs.message; 
    
    return (
        <div>           
            <strong>Imagem: </strong>
            <img src={exibirDog} alt="Imagem da API"  />
            {/* <button onClick={buscaDog}>Busca Dog</button>            */}
        </div>
    )


}