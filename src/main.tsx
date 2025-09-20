import React from 'react'
import {createRoot} from 'react-dom/client'

import './index.css'
import 'primeicons/primeicons.css';
import './assets/themes/mytheme/theme.scss'
import '@emran-alhaddad/saudi-riyal-font/index.css'
import App from "@/App";

const rootElement = document.getElementById("root");
if (!rootElement) {
    throw new Error("Failed to find root element");
}

createRoot(rootElement).render(<App />);