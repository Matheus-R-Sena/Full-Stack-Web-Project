import Square from './components/JogoDaVelha/Square'
import Game from './components/JogoDaVelha/Game'

function App() {
  

  return (
    <>
      <p>Texto</p>
      
      <div>
        <Square/>
        <Square/>
        <Square/>
      </div>

      <div>
        <Square/>
        <Square/>
        <Square/>
      </div>

      <div>
        <Square/>
        <Square/>
        <Square/>
      </div>

      <div>
        <Game/>
      </div>

    </>
  )
}

export default App
