import React, { useState } from "react";
import { db } from "./firebase";
// import { Link } from "react-router-dom";
const Home = () => {
  const [country, setCountry] = useState();
  const [place, setPlace] = useState();
  const [review, setReview] = useState();
  const [rating, setRating] = useState();
  const [image, setImage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        country: country,
        place: place,
        review: review,
        rating: rating,
        image: image,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setCountry("");
    setPlace("");
    setReview("");
    setRating("");
    setImage("");
  };

  return (
    <section class="homepage">
      <div class="container text-center mt-5">
        <h1>Destination Review </h1>
      </div>
      <div class="mt-1 w-50 p-5 mx-auto">
        <form className="form" onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="country">Country</label>
            <input
              type="text"
              name="country"
              class="form-control"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>

          <div class="mt-2 form-group">
            <label for="place">Place</label>
            <input
              type="text"
              name="place"
              class="form-control"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
          </div>

          <div class="form-group mt-2">
            <label for="review">Review</label>
            <br />
            <textarea
              name="review"
              id="review"
              cols="81"
              rows="5"
              value={review}
              class="form-control"
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
            {/* <input type="name" class="form-control" id="country" />  */}
          </div>

          <div class="form-group mt-2">
            <label for="rating">Rating</label>
            <input
              placeholder=""
              min="0"
              max="5"
              maxLength="1"
              class="form-control"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
            <small>min 0 and max 5 rating</small>
          </div>
          <div class="form-group mt-3">
            <label for="image"> Drop the image URL</label>
            <input
              class="form-control mt-1"
              placeholder="https://myphoto.png"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <button
            type="submit"
            class="p-2 mt-4 btn w-100 border border-dark"
            style={{ background: loader ? "#000" : "#fff" }}
          >
            {/* class="bg-light btn-light text-decoration-none"
              to="/destinationreview" */}
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Home;
