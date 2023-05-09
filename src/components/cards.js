import React from "react";
import code from "./images/code_buddy.jpg";
import clock from "./images/world_clock.jpg";
import dict from "./images/dictionary.jpg";
import weather from "./images/weather.jpg";
import unitc from "./images/unit_converter.jpg";
// import feedback from './images/FeedBack.jpg'
import health from "./images/health_tracker.jpg";
import reading from "./images/reading_zone.jpg";
import todo from "./images/todo_list.jpg";

export default function Cards() {
  let bootClass = "card my-3 mx-5";
  let st = {
    width: "14rem",
    float: "left",
  };
  return (
    <>
      {/* <div className="container d-flex justify-content-center"> */}
      <div className="card-deck my-5 mx-5">
        <div className={bootClass} style={st}>
          <a href="http://code-buddy-drab.vercel.app">
            <img src={code} className="card-img-top" alt="..." />
          </a>
          <div className="card-body">
            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
          </div>
        </div>
        <div className={bootClass} style={st}>
          <a href="https://saptarshibanerjee420.github.io/Task-Planner/">
            <img src={todo} className="card-img-top" alt="..." />
          </a>

          <div className="card-body"></div>
        </div>
        <div className={bootClass} style={st}>
          <a href="https://vanshikatiwari.github.io/WeatherApp.github.io/">
            <img src={weather} className="card-img-top" alt="..." />
          </a>

          <div className="card-body"></div>
        </div>
        <div className={bootClass} style={st}>
          <a href="https://roaring-souffle-19faf3.netlify.app/">
            <img src={unitc} className="card-img-top" alt="..." />
          </a>

          <div className="card-body"></div>
        </div>
        <div className={bootClass} style={st}>
          <a href="https://jyoti1610.github.io/6th-sem-project/">
            <img src={reading} className="card-img-top" alt="..." />
          </a>

          <div className="card-body"></div>
        </div>
        <div className={bootClass} style={st}>
          <a href="https://krishru.github.io/Translator-and-Dictionary/">
            <img src={dict} className="card-img-top" alt="..." />
          </a>

          <div className="card-body"></div>
        </div>
        <div className={bootClass} style={st}>
          <a href="/">
            <img src={health} className="card-img-top" alt="..." />
          </a>
          <div className="card-body"></div>
        </div>
        <div className={bootClass} style={st}>
          <a href="https://padmini02.github.io/World-Clock-/">
            <img src={clock} className="card-img-top" alt="..." />
          </a>

          <div className="card-body"></div>
        </div>
        {/* <div className={bootClass} style={st}>
                <img src={feedback} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        
                    </div>
            </div> */}
      </div>
    </>
  );
}
