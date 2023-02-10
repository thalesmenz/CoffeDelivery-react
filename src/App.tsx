import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./@types/Global"
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { defaultTheme } from "./styles/themes/default"
import { AmountOfCoffesProvider } from "./contexts/AmountOfCoffes";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AmountOfCoffesProvider>
          <Router />
        </AmountOfCoffesProvider>
      </BrowserRouter>
    <GlobalStyle />
    </ThemeProvider>  
 
  )
}

export default App
