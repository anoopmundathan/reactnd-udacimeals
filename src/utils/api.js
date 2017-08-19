import * as config from '../config/key'

const API_ID = config.API_ID
const APP_KEY = config.APP_KEY

const fetchRecipes = (food = '') => {
    food = food.trim()
    return fetch(`https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`)
        .then((res) => res.json())
        .then(({ hits }) => hits.map(({ recipe }) => recipe))
}

export default fetchRecipes
