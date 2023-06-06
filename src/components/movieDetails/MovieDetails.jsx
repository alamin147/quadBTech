import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [singleMovie, setSingleMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleMovie(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div className="mt-5 mb-5 d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container mt-5 mb-5 d-flex justify-content-between">
          <div className="w-50">
            <img
              className="img-fluid"
              src={singleMovie?.image?.original}
              alt=""
            />
          </div>
          <div className="bg-light px-5 py-5 ms-5 w-50">
            <h1>{singleMovie?.name}</h1>

            <p className="mt-0 mb-0 fs-5">
              <span className="fw-bold">Ratings:</span>
              {singleMovie?.rating?.average}
              <FaStar color="gold" className="mb-2 ms-2" />
            </p>
            <div className="d-flex">
              <div>
                <p className="fs-5 mt-0 mb-3">
                  <span className="fw-bold">Runtime:</span>
                  {singleMovie?.averageRuntime}
                </p>
              </div>
            </div>
            <p className="fs-5 mt-0 mb-3">
              <span className="fw-bold">Genre:</span>
              {singleMovie?.genres?.map((genre) => {
                return (
                  <li className="fs-6" key={genre}>
                    {genre}
                  </li>
                );
              })}
            </p>
            <p className="mt-0 mb-0 fs-5">
              <span className="fw-bold">Status:</span> {singleMovie?.status}
            </p>
            <p className="mt-0 mb-0 fs-5">
              <span className="fw-bold">Premiered:</span>
              {singleMovie?.premiered}
            </p>
            <p className="mt-0 mb-3 fs-5">
              <span className="fw-bold">Schedule:</span>
              {singleMovie?.schedule?.time} on
              {singleMovie?.schedule?.days}
            </p>
            <p className="mt-0 mb-3 fs-5">
              <span className="fw-bold">Descriptions:</span>
              {singleMovie?.summary}
            </p>
            <p className="mt-0 mb-0 fs-5">
              <span className="fw-bold">Official Site:</span>
              {singleMovie?.officialSite}
            </p>
            <p className="mt-0 mb-0 fs-5">
              <span className="fw-bold">Network name:</span>
              {singleMovie?.network?.name}
            </p>
            <p className="mt-0 mb-0 fs-5">
              <span className="fw-bold">Country name:</span>
              {singleMovie?.network?.country?.name}
            </p>
            <Link to={`/bookTicket/${singleMovie?.id}`}>
              <button className="mt-5 btn btn-warning ">Book Ticket</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
