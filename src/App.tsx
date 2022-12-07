

import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from "./styles/themes/default"
import { GlobalStyle } from './styles/global'
import { Router } from './Router'


function App() {


  return (

    <ThemeProvider theme={DefaultTheme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
