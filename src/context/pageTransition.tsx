import { createContext, useContext, useState, type ReactNode } from 'react';

// 1. Explicitly define the shape of your context so TypeScript catches errors early
interface AnimContextType {
    animStatus: boolean;
    toggleAnimStatus: () => void;
}

// 2. Initialize with null instead of an empty object
const AnimCtx = createContext<AnimContextType | null>(null);

// 3. Make the hook bulletproof by adding a fallback and clear error messages
export const AnimToggler = (): AnimContextType => {
    const context = useContext(AnimCtx);

    // If context is null, it means the component is outside the Provider.
    // Instead of crashing the app, we log an error and return a safe fallback.
    if (!context) {
        console.error("AnimToggler must be used within an AnimCtxProvider!");
        return {
            animStatus: false,
            toggleAnimStatus: () => console.warn("toggleAnimStatus called outside Provider")
        };
    }

    return context;
};

// 4. Properly type the Provider props
interface ProviderProps {
    children: ReactNode;
}

export const AnimCtxProvider = ({ children }: ProviderProps) => {
    const [animStatus, setAnimStatus] = useState(false);

    // 5. Use functional state updates to guarantee you are always flipping the most recent state
    const toggleAnimStatus = () => {
        setAnimStatus((prevStatus) => !prevStatus);
    };

    return (
        <AnimCtx.Provider value={{ animStatus, toggleAnimStatus }}>
            {children}
        </AnimCtx.Provider>
    );
};