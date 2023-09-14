import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './componets/Inicio'
import Character from './componets/Character'

function App(){
    return(
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio></Inicio>}></Route>
                <Route path='/character/:id' element={<Character></Character>}></Route>
            </Routes>
        </BrowserRouter>
    </div>)
}

export default App