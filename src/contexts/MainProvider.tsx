import React, { useState } from 'react';
import { MainContext } from './MainContext';

export interface MainContextType {
    i: number;
    setI: React.Dispatch<React.SetStateAction<number>>;
}

export default function MainProvider({ children }: { children: React.ReactNode }) {
    const [i, setI] = useState<number>(0);

    return (
        <MainContext.Provider value={{ i, setI }}>
            {children}
        </MainContext.Provider>
    );
}
