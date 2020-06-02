import React, { useState, useEffect } from 'react';
import api from '../services/api';
import icon_loading from '../assets/icon_loading.gif';
import { Button } from 'antd';
import { useColor } from '../context/Color';
import { useBreed } from '../context/Breed';
import ListBreeds from './ListBreeds';



export default function PhotoDisplay() {


    const [imgDog, setImgDog] = useState('');
    const [loading, setLoading] = useState(true);
    const { breed, setBreed } = useBreed('');
    const { color, setColor } = useColor('Gray');


    useEffect(() => {

        let breedStorage = localStorage.getItem('breed');
        let colorStorage = localStorage.getItem('color');
        let imageStorage = localStorage.getItem('image');

        breedStorage !== null ? setBreed(breedStorage) : setBreed('');
        colorStorage !== null ? setColor(colorStorage) : setColor('Gray');
        if (imageStorage !== null) {
            setImgDog(imageStorage)
            setLoading(false)
        }

    }, [setBreed, setColor]);


    async function handleSearchDog() {
        if (breed === '') {

            alert("Selecione ou digite uma raça válida!");

        } else {

            try {

                setLoading(true);
                const response = await api.get(`breed/${breed}/images/random`);
                setImgDog(response.data.message);

            } catch (err) {

                alert("Algo inesperado aconteceu... :(");

            }

            setLoading(false);
        }
    }

    function handleSave() {
        handleRemoveStorage();
        localStorage.setItem('color', color);
        localStorage.setItem('image', imgDog);
        localStorage.setItem('breed', breed);
    }

    function handleRemoveStorage() {
        localStorage.removeItem('color');
        localStorage.removeItem('image');
        localStorage.removeItem('breed');
    }


    return (
        <div className="photo__display">
            <span className="photo__display--item">
                <ListBreeds />
                <Button onClick={handleSearchDog}>Buscar Imagem</Button>
            </span>

            {
                loading === true
                    ? <img src={icon_loading} alt="preview" className="img__default" />
                    : <>
                        <div className="layout__breed">
                            <img className="layout__breed--dog" src={imgDog} alt="Doguinho" />
                            <span className={`layout__breed--text apply-font ${color}`}>{breed}</span>
                        </div>
                        <Button onClick={handleSave}>Salvar</Button>
                    </>
            }

        </div>

    )

}