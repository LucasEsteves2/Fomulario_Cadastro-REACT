import axios from "axios";

var pokeStory = axios.create( {
    baseURL: "https://apiserratec.herokuapp.com/",
}

)

export default pokeStory;