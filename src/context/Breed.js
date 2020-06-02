import React, { createContext, useState, useContext } from "react";

const BreedContext = createContext();


export default function BreedProvider({ children }) {
    const [breed, setBreed] = useState('');

    return (
        <BreedContext.Provider
            value={{
                breed,
                setBreed
            }}
        >
            {children}
        </BreedContext.Provider>
    );
}

export function useBreed() {
    const context = useContext(BreedContext);
    const { breed, setBreed } = context;

    return { breed, setBreed };
}