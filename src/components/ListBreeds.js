import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Select } from 'antd';
import { useBreed } from '../context/Breed';


export default function ListBreeds() {
    const [breeds, setBreeds] = useState([]);
    const { setBreed } = useBreed('');
    const { Option } = Select;


    useEffect(() => {
        async function loadBreeds() {
            const response = await api.get('breeds/list/all');
            setBreeds(response.data.message);
        }

        loadBreeds();
    }, []);


    function onChange(value) {
        setBreed(value);
    }


    return (
        <div>
            <Select
                showSearch
                style={{ width: 300, textAlign: "center" }}
                placeholder="Selecione uma Raça..."
                onChange={onChange}
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                {
                    Object.keys(breeds).map(itemBreed => (
                        <Option key={itemBreed}>{itemBreed}</Option>
                    ))
                }
            </Select>
        </div>
    )

}