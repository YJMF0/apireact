import axios from 'axios' 

const allCharacter = async (state) => {
    const peticion = await axios.get('https://rickandmortyapi.com/api/character')
    state(peticion.data.results) 
}

const oneCharacter = async (id, state) => {
    const peticion = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    state(peticion.data)

}

export{
    allCharacter,
    oneCharacter
}
