
import { asyncStorageService } from './async-storage-service.js';


const KEY1 = 'movies';
const KEY2 = 'favs';


export const movieService = {
    query,
    queryFavs,
    removeFav,
    addFav
}

// ---------------------- CRUDL -----------------------

// ----- GET MOVIES -----
async function query() {
    return await asyncStorageService.query(KEY1) || await asyncStorageService.getEntities()
}

// ----- GET FAVS -----
async function queryFavs() {
    return asyncStorageService.query(KEY2)
}

// ----- REMOVE FROM FAVORITES -----
async function removeFav(movieId) {
    return await asyncStorageService.remove(KEY2, movieId);
}

//  --- ADD TO FAVORITES ---
async function addFav(movie) {
    return await asyncStorageService.put(KEY2, movie)
}


