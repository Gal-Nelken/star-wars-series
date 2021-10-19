import { useCheckInArr } from '../services/custom-hooks';
import { FaHeart, FaHeartBroken, FaTimes } from 'react-icons/fa'



export const MovieDetails = ({ movie, onSetMovie, onUpdateFavs, favMovies }) => {
    const { title, opening_crawl, release_date, director } = movie.properties

    // CHECK IF THE MOVIE IS IN FAVORITES
    const isFav = useCheckInArr(movie, favMovies)

    return (
        // ----- MOVIE DETAILS CONTAINER ----- 
        <section className='movie-details'>

            {/* --- TITLE --- */}
            <h3 className='details-title'>{title}</h3>

            {/* --- ABSTRACT --- */}
            <p className='details-abstract'>{opening_crawl}</p>

            {/* --- DIRECTOR --- */}
            <p className='details-release'><span className='details-sub-title'>Director:  </span>{director}</p>

            {/* --- RELEASE DATE --- */}
            <p className='details-release'><span className='details-sub-title'>Released at:  </span>{release_date.split("-").reverse().join("/")}</p>

            {/* --- BTNS CONTAINER --- */}
            <div className='details-actions'>
                {/* FAVORITE BTN */}
                {isFav ?
                    // MOVIE IN FAVORITES
                    <button
                        className='primary-btn dark'
                        onClick={() => onUpdateFavs(movie, isFav)}
                    > <FaHeartBroken /></button>
                    :
                    // MOVIE NOT IN FAVORITES
                    <button
                        className='primary-btn dark'
                        onClick={() => onUpdateFavs(movie, isFav)}
                    ><FaHeart /> </button>
                }

                {/* --- CLOSE DETAILS BTN --- */}
                <button
                    className='primary-btn dark'
                    onClick={() => onSetMovie(null)}
                >
                    <FaTimes />
                </button>
            </div>
        </section>
    )
}