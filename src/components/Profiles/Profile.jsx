import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./profilestyle.css";
import { db } from "../Pages/firebase";

const Profile = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("profileimg").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <section classname="profilepage">
      <div className="row">
        <div className="col-3 text-center">
          <div className="mt-4 ">
            <h5 className="mt-2"> Profile Photo</h5>
          </div>
          <br />
          {posts.map((profilepic) => (
            <img
              src={profilepic.image}
              width="200px"
              height="200px"
              alt="image"
            />
          ))}
          <br />
          <br />
          <Link to="/updateprofile">Update Profile</Link>
        </div>
        <div className="col-9"></div>
      </div>
    </section>
  );
};

export default Profile;
