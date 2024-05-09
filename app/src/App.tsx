import { ThemeProvider } from '@mui/material/styles'
import { ApolloProvider } from '@apollo/client'
import { Bookshelf } from './pages/Bookshelf'
import { client } from './providers/apollo'
import { theme } from './providers/theme'
import './App.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Bookshelf />
      </ApolloProvider>
    </ThemeProvider>
  )
}

export default App
