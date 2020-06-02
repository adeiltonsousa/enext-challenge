import React, { createContext, useState, useContext } from "react";

const ColorContext = createContext();


export default function ColorProvider({ children }) {
    const [color, setColor] = useState('Gray');

    return (
        <ColorContext.Provider
            value={{
                color,
                setColor
            }}
        >
            {children}
        </ColorContext.Provider>
    );
}

export function useColor() {
    const context = useContext(ColorContext);
    const { color, setColor } = context;

    return { color, setColor };
}