// MODULES
import { FaGrinHearts } from 'react-icons/fa'

// SERVICES
import { useCheckInArr } from '../services/custom-hooks';


export const MoviesPrev = ({ movie, onSetMovie, favMovies }) => {
    // CHECK IF THE MOVIE IS IN FAVORITES
    const isFav = useCheckInArr(movie, favMovies)

    return (
        // MOVIE LINE
        <li
            className='movie-prev'
            onClick={() => onSetMovie(movie)}
        >
            {/* MOVIE TITLE */}
            <h4 className='prev-title'>
                {movie.properties.title}
            </h4>
            {/* FAVORITE ICON, SHOW ONLY IF THE MOVIE IS A FAVORITE */}
            {isFav && <span className='prev-fav'><FaGrinHearts /></span>}
        </li>
    )
}
