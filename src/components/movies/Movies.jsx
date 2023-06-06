import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  // data loading
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      });
  }, []);

  return (
    <div className="container mt-5 mb-5">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {movies.map((movie) => {
          return (
            <div key={movie.show.id}>
              <div className="col position-relative">
                <div className="card h-100">
                  <img
                    src={movie?.show?.image?.medium}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{movie?.show?.name}</h5>
                    <p className="card-text">
                      Ratings: {movie?.show.rating?.average}
                      <FaStar color="gold" className="mb-1" />
                    </p>
                    <div className="d-flex">
                      <div>
                        <p className="mt-0 mb-0">
                          Runtime: {movie?.show?.averageRuntime}
                        </p>
                      </div>
                    </div>
                    <p className="mt-0 mb-0">
                      Genre:
                      {movie?.show?.genres.map((genre) => {
                        return <li key={genre}>{genre}</li>;
                      })}
                    </p>
                    <p className="card-text">Status: {movie?.show?.status}</p>

                    <Link to={`/movieDetails/${movie?.show?.id}`}>
                      <button className="position-absolute bottom-50 btn btn-warning ">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
