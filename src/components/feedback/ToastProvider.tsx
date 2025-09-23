import React, { createContext, useContext, ReactNode, useRef } from "react";
import { Toast } from "primereact/toast";

type ToastSeverity = "success" | "info" | "warn" | "error";

interface ToastContextProps {
    showToast: (severity: ToastSeverity, summary: string, detail?: string, life?: number) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) throw new Error("useToast must be used within a ToastProvider");
    return context;
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const toastRef = useRef<Toast>(null);

    const showToast = (
        severity: ToastSeverity,
        summary: string,
        detail: string = "",
        life: number = 3000
    ) => {
        toastRef.current?.show({ severity, summary, detail, life });
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <Toast ref={toastRef} position="top-right" />
        </ToastContext.Provider>
    );
};
