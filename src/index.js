import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
// import {changeElementColor} from "./GetRandomColor/changeElementColor.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter basename="/goit-react-hw-01-components"> */}
    <App />
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

// changeElementColor();
