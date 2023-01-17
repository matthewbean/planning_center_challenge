
import AppState from './context/AppState'
import './App.css'
import Card from "./components/card.jsx"

function App() {

  return (
    <AppState>
    <div className="App">
    <Card/>
    </div>
    </AppState>
  )
}

export default App
