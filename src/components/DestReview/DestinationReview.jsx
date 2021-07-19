import React, { useState, useEffect } from "react";

import { db } from "../Pages/firebase";

const DestinationReview = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("contacts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <section className="container">
      <div className="text-center m-3">
        <h1>Reviews</h1>
      </div>
      {posts.map((destrev) => (
        <div className="border border-dark m-2">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col-2">Images</th>
                <th scope="col-2">Country</th>
                <th scope="col-2">Place</th>
                <th scope="col-2">Review</th>
                <th scope="col-2">Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <img
                    src={destrev.image}
                    width="150px"
                    height="150px"
                    alt={destrev.place}
                  />
                </th>
                <td className="col-2">{destrev.country}</td>
                <td className="col-2">{destrev.place}</td>
                <td className="col-4">{destrev.review}</td>
                <td className="col-1"> {destrev.rating}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </section>
  );
};

export default DestinationReview;
