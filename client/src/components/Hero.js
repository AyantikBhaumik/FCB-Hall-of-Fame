import React, { useContext, useEffect } from "react";
import { UserContext } from "../UserContext";

export default function Hero(props) {
  const {userInfo, setUserInfo}=useContext(UserContext)
  useEffect(()=>{
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response)=>{
      response.json().then((userInfo)=>{
        setUserInfo(userInfo)
      })
    });
  }, [])

  const username=userInfo?.username
  return (
    <section className="hero">
      <div className="hero--text">
        {props.card
          ? props.card.description
          : `Welcome Culer ${username}, Please click on your Favourite Players to know more about them`}
      </div>
    </section>
  );
}
