import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const TicketBooking = () => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const movie = form.movie.value;

    const userBookingJSON = {
      userName: name,
      userEmail: email,
      bookingMovie: movie,
      bookingDate: date,
    };

    let storage = JSON.parse(localStorage.getItem("user Booking"));
    if (storage) {
      localStorage.setItem(
        "user Booking",
        JSON.stringify([...storage, userBookingJSON])
      );
    } else {
      localStorage.setItem("user Booking", JSON.stringify([userBookingJSON]));
    }
    form.reset();
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${movie} has been booked`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div>
      {loading ? (
        <>
          <div className="mt-5 mb-5 d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="mt-5 container">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  required
                  name="email"
                  type="email"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  required
                  name="name"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Movie Name</label>
                <input
                  defaultValue={singleMovie?.name}
                  required
                  name="movie"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Date for Booking</label>
                <input
                  required
                  type="date"
                  name="date"
                  className="form-control"
                ></input>
              </div>

              <input
                type="submit"
                className="btn btn-warning mb-5"
                value="Book Now"
              />
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default TicketBooking;
