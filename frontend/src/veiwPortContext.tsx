import { createContext, useContext, ReactNode } from 'react';
import useViewportHeight from '@/hooks/useViewPortHook';

// Define context type
type ViewportHeightContextType = number | undefined;

const ViewportHeightContext = createContext<ViewportHeightContextType>(undefined);

// Define props for the provider component
interface ViewportHeightProviderProps {
    children: ReactNode;
}

export const ViewportHeightProvider = ({ children }: ViewportHeightProviderProps) => {
    const viewportHeight = useViewportHeight();

    return (
        <ViewportHeightContext.Provider value={viewportHeight}>
            {children}
        </ViewportHeightContext.Provider>
    );
};

// Custom hook to access viewport height context
export const useViewportHeightContext = (): number => {
    const context = useContext(ViewportHeightContext);
    if (context === undefined) {
        throw new Error('useViewportHeightContext must be used within a ViewportHeightProvider');
    }
    return context;
};
