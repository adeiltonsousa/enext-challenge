import React, { useState } from 'react';
import FontPicker from "font-picker-react";


export default function SelectFont() {
    const [activeFontFamily, setActiveFontFamily] = useState('Open Sans')

    return (
        <>
            <p>Selecione um estilo de font:</p>
            <FontPicker
                apiKey="AIzaSyCJzSHSy2ejDXkbAF51ejCLO0djMRjHp0k"
                limit="10"
                activeFontFamily={activeFontFamily}
                onChange={(nextFont) =>
                    setActiveFontFamily(nextFont.family)
                }
            />
        </>

    )

}