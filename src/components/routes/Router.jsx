import React from "react";
import { createBrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import App from "../../App";
import Movies from "../movies/Movies";
import MovieDetails from "../movieDetails/MovieDetails";
import TicketBooking from "../ticketBooking/TicketBooking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/", element: <Movies></Movies> },
      { path: "/movieDetails/:id", element: <MovieDetails></MovieDetails> },
      { path: "/bookTicket/:id", element: <TicketBooking></TicketBooking> },
    ],
  },
]);

export default router;
