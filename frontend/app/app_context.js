import React, { createContext, useMemo, useState } from 'react';

const AppContext = createContext();

function AppProvider({ children }) {
    const [expenseTags, setExpenseTags] = useState([
        { id: 0, name: 'New', iconCircleColor: '#000000', icon: 'plus' },
        { id: 1, name: 'Item 2', iconCircleColor: '#C06666', icon: 'user' },
        { id: 2, name: 'Item 3', iconCircleColor: '#637EB6', icon: 'plus' },
        { id: 3, name: 'Item 2', iconCircleColor: '#C06666', icon: 'user' },
        { id: 4, name: 'Item 3', iconCircleColor: '#637EB6', icon: 'plus' },
        { id: 5, name: 'Item 2', iconCircleColor: '#C06666', icon: 'user' },
    ]);

    const contextValue = useMemo(
        () => ({ expenseTags, setExpenseTags }),
        [expenseTags, setExpenseTags]
    );

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
}

export { AppContext, AppProvider };
