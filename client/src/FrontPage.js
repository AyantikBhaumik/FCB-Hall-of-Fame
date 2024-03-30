import React from "react";
import "./FrontPage.css"
import { Link } from "react-router-dom";

function FrontPage() {
  return (
    <main>
      <h1 className="title">FC BARCELONA: HALL OF FAME</h1>
      <p className="instructions">
        Hello Culers, Welcome to the home of the Greats!! A place for
        celebration, admiration and nostalgia. Login to continue. If you are new
        please register 😊
      </p>
      <div className="Buttons">
        <button className="btn Login">
          <Link to="/login" className="link--text">
            Login
          </Link>
        </button>
        <button className="btn Register">
          <Link to="/register" className="link--text">
            Register
          </Link>
        </button>
      </div>
      <p>Ayantik😎</p>
    </main>
  );
}

export default FrontPage;
