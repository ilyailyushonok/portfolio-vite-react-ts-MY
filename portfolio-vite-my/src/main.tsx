import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {GlobalStyle} from "./styles/GlobalStyle.tsx";

createRoot(document.getElementById('root')!).render(
  <div>
      <GlobalStyle/>
    <App />
  </div>
)
