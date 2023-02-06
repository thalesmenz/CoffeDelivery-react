import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./@types/Global"
import { Home } from "./pages/Home"
import { defaultTheme } from "./styles/themes/default"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
    <GlobalStyle />
    </ThemeProvider>  
 
  )
}

export default App
