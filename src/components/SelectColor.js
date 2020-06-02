import React from 'react';
import { Button } from 'antd';
import { useColor } from '../context/Color';

export default function SelectColor() {
    const { color, setColor } = useColor('');

    const listColors = ['Gray', 'Navy', 'LightSkyBlue', 'DarkSlateGray',
        'ForestGreen', 'YellowGreen', 'SaddleBrown', 'Teal'];

    function handleColor(newColoSelect) {
        setColor(newColoSelect.newColor)
        console.log(color)
    }


    return (
        <>
            <p>Selecione uma cor:</p>
            <div>
                {
                    listColors.map(newColor => (
                        <Button
                            key={newColor}
                            className={`button__margin ${newColor}`}
                            value={newColor}
                            shape="circle"
                            onClick={() => handleColor({ newColor })}
                        >
                            &nbsp;
                        </Button>
                    ))
                }
            </div>
        </>

    )

}