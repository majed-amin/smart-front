import {AppRouter} from "@/routes";
import { PrimeReactProvider } from 'primereact/api';
import {store} from "@/store";
import {Provider} from "react-redux";
import React from "react";
import {ToastProvider} from "@/components/feedback/ToastProvider";

function App() {
    // const [count, setCount] = useState(0);

    return (
        <React.StrictMode>
            <Provider store={store}>
                <PrimeReactProvider>
                    <ToastProvider>
                        <AppRouter/>
                    </ToastProvider>
                </PrimeReactProvider>
            </Provider>
        </React.StrictMode>
    );
}

export default App;
