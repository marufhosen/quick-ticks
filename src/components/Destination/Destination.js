import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MapApi from "../MapApi/MapApi";
import "./Destination.css";
import peopleIcon from "../../images/peopleicon.png";

const Destination = () => {
  const { title } = useParams();
  const [service, setService] = useState({});
  const availAbleService = [
    {
      id: 1,
      serviceTitle: "Car",
      seat: 4,
      price: 29,
    },
    {
      id: 2,
      serviceTitle: "Bus",
      seat: 12,
      price: 49,
    },
    {
      id: 3,
      serviceTitle: "Train",
      seat: 45,
      price: 39,
    },
    {
      id: 4,
      serviceTitle: "Air",
      seat: 50,
      price: 79,
    },
  ];
  const handleService = () => {
    const serviceResult = availAbleService.find(
      ({ serviceTitle }) => serviceTitle === `${title}`
    );
    setService(serviceResult);
  };
  const { serviceTitle, seat, price } = service;

  return (
    <div className="container">
      <div className="find-destination">
        <div className="select-pick-point">
          <input type="text" placeholder="Pick From" />
          <input type="text" placeholder="Pick To" />
          <input onClick={handleService} type="submit" value="Search" />
        </div>
        <div className="available-service">
          <p className="service-result">{serviceTitle}</p>
          <p className="service-result">
            <img src={peopleIcon} width="20" alt="" />
          </p>
          <p className="service-result">{seat}</p>
          <p className="service-result">Price: {price}$</p>
        </div>
      </div>
      <div className="display-map">
        <MapApi></MapApi>
      </div>
    </div>
  );
};

export default Destination;
