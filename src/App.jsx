import Nike from './components/Nike'
import './App.css'

function App() {

  return (
    <div>
      <div className="container">
        <h1>Products</h1>
        <div className="cardsOta">
          <Nike></Nike>
          <Nike bg="#FFC700" bg2="#5CA7FF"></Nike>
          <Nike bg="#00FFB2" bg2="#D083FF"></Nike>
          <Nike bg="#FFF500" bg2="#FF99E2"></Nike>
          <Nike bg="#00FFB2"></Nike>
          <Nike bg="#FFC700" bg2="#5CFF62"></Nike>
        </div>
      </div>
    </div>
  )
}

export default App
