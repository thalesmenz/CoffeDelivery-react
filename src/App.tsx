import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./@types/Global"
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { defaultTheme } from "./styles/themes/default"
import { AmountOfCoffesProvider } from "./contexts/AmountOfCoffes";
import { FormProvider } from "./contexts/FormContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AmountOfCoffesProvider>
          <FormProvider>
            <Router />
          </FormProvider>
        </AmountOfCoffesProvider>
      </BrowserRouter>
      <ToastContainer /> 
    <GlobalStyle />
    </ThemeProvider>  
 
  )
}

export default App
