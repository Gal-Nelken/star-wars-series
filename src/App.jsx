// MODULES
import { useState, useEffect } from 'react';

// COMPONENTS & SERVICES
import { MoviesList } from './cmps/MoviesList'
import { MovieDetails } from './cmps/MovieDetails'
import { Loader } from './cmps/Loader'
import { SlideShow } from './cmps/SlideShow'
import { movieService } from './services/movie-service'


export const App = () => {
  // APP SERVICES
  const { removeFav, addFav, queryFavs, query } = movieService

  // --- MOVIES ---
  const [movies, setMovies] = useState([])


  // --- FAVORITE MOVIES ---
  const [favMovies, setFavMovies] = useState([])

  // UPDATE FAVORITES MOVIES
  const updateFavs = async (movie, isFav) => {
    try {
      const updatedFavs = isFav ? await removeFav(movie._id) : await addFav(movie)
      setFavMovies([...updatedFavs])
    } catch (err) {
      console.error('Had a problem:\n', err)
    }
  }

  // GET MOVIES AND FAVORITES FROM LOCAL STORAGE ON MOUNT
  const init = async () => {
    try {
      setMovies(await query())
      setFavMovies(await queryFavs())
    } catch (err) {
      console.error('Had a problem:\n', err)
    }
  }

  useEffect(() => {
    init()
  }, [])

  // --- CHOSEN MOVIE --- 
  const [movie, setMovie] = useState(null)

  // IF THERE IS NO MOVIES SHOW LOADER
  if (!movies) return <Loader txt='Loading' />
  return (
    // CONTAINER FOR STYLING
    <div className="container">

      {/* MAIN APP CONTAINER */}
      <main className="app-container">

        {/* APP TITLE */}
        <h1 className='app-header'>In a galaxy far far away...</h1>

        {/* MOVIES TOC (TABLE OF CONTENT) */}
        <MoviesList
          movies={movies}
          favMovies={favMovies}
          onSetMovie={setMovie}
        />

        {/* CHOSEN MOVIE */}
        {movie ?
          // MOVIE SELECTED
          <MovieDetails
            movie={movie}
            onSetMovie={setMovie}
            onUpdateFavs={updateFavs}
            favMovies={favMovies}
          /> :
          // IF NO MOVIE IS SELECTED SHOW SLIDESHOW
          <SlideShow />
        }

      </main>
    </div>
  );
}

