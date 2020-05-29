import React, { useEffect, useState } from 'react';

import api from '../services/api';

// /list/all

export default function ListDogs() { 
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        buscaDog();
    });


    async function buscaDog(id) {
        const response = await api.get();        
        setDogs(response.data)
    }

    const exibirDog = dogs.message;

    
    
    return (
        <div>           
            <strong>Imagem: </strong>
            <img src={exibirDog} alt="Imagem da API"  />
            <button onClick={buscaDog}>Busca Dog</button>           
        </div>
    )


}