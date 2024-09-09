import {Link} from 'react-router-dom'
import './index.css'

const MovieCard = props => {
  const {movieDetails} = props
  const {id, title, posterPath, voteAverage} = movieDetails
  return (
    <li className="movie-card-container col-12 col-sm-6 col-1g-2 mb-3 d-flex flex-column">
      <img className="movie-card-image" src={posterPath} alt={title} />
      <div className="d-flex flex-column align-items-center mt-2">
        <h1>{title}</h1>
        <p>Rating: {voteAverage}</p>
      </div>
      <Link to={`/movie/${id}`} className="mt-auto align-self-center">
        <button type="button" className="btn btn-outline-success">
          View Details
        </button>
      </Link>
    </li>
  )
}

export default MovieCard
