// MODULES
import { useState } from "react"

// COMPONENTS
import { MoviesPrev } from "./MoviesPrev"


export const MoviesList = ({ movies, onSetMovie, favMovies }) => {
    // SET LEFT POSITION RATE FOR MOBILE VIEW
    const [rate, setRate] = useState(-220)

    return (
        // LIST CONTAINER
        <ul
            className='movie-list'
            style={{ left: `${rate}px` }}
        >
            {/* MOVIES LIST */}
            {movies.map(movie =>
                <MoviesPrev
                    key={movie._id}
                    movie={movie}
                    onSetMovie={onSetMovie}
                    favMovies={favMovies}
                    onSetRate={setRate}
                />
            )}

            {/* SLIDE BTN FOR MOBILES */}
            {rate === 0 ?
                // IF MENU IS OPEN
                <button className='slide-btn' onClick={() => setRate(-225)}>
                    <span className='slide-btn-txt'>Close</span>
                    {'<'}
                    <span className='slide-btn-txt'>Menu</span>
                </button>
                :
                // IF MENU IS CLOSE
                <button className='slide-btn' onClick={() => setRate(0)}>
                    <span className='slide-btn-txt'>Choose</span>
                    {'>'}
                    <span className='slide-btn-txt'>Movie</span>
                </button>}
        </ul>
    )
}