import React, { useEffect, useState } from "react";
import Class from "./Class";

const BoulderingClasses = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getTop4Events = async () => {
      fetch(process.env.REACT_APP_BASE_URL + "/api/v1/events/all/top4", {
        method: "GET",
      })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
          throw response;
        })
        .then((body) => {
          setEvents(body);
        })
        .catch((response) => {
          console.log(response.status);
        });
    };
    getTop4Events();
  }, []);

  return (
    <div className="bouldering-classes-section">
      <div className="bouldering-inner-container">
        <h1>Bouldering Classes</h1>
        <div className="classes-container">
          {events.map((event, index) => {
            return (
              <Class
                key={index}
                id={event.id}
                title={event.title}
                subTitle={event.smallDescription}
                url={event.imageUrl}
              />
            );
          })}
          {/* <Class
            title={"Kidssss"}
            subTitle={"Enjoy a nice day out!"}
            url={
              "https://assets-global.website-files.com/63a07ada5189954d6a5cf58e/63ca71f5b8039241dddb7699_Westfield_0002_P1411148.jpg"
            }
          /> */}
          {/* <div className="class class-beginner">
            <div className="class-content-container">
              <h3>For Beginners</h3>
              <p>Sections for beginners!</p>
            </div>
          </div>
          <div className="class class-friends">
            <div className="class-content-container">
              <h3>Group Classes</h3>
              <p>Classes with your friends!</p>
            </div>
          </div>
          <div className="class class-private">
            <div className="class-content-container">
              <h3>Private Classes</h3>
              <p>A private session with a coach!</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BoulderingClasses;
