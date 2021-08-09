import React from "react";
import Banner from "../Banner/Banner";
import HomeContent from "../HomeContent/HomeContent";
import "./Home.css";

const Home = () => {
  const services = [
    {
      id: 1,
      title: "Car",
      imgUrl:
        "https://images.hgmsites.net/med/2016-toyota-prius_100534015_m.jpg",
    },
    {
      id: 2,
      title: "Bus",
      imgUrl: "http://gobusbd.com/frontend/assets/img/bus3.jpg",
    },
    {
      id: 3,
      title: "Train",
      imgUrl:
        "https://www.railway-technology.com/wp-content/uploads/sites/24/2019/10/1l-Image-Dhaka-Metro-Mass-Rapid-Transit-System.jpg",
    },
    {
      id: 4,
      title: "Air",
      imgUrl: "https://thefinancialexpress.com.bd/uploads/1511600741.jpg",
    },
  ];
  return (
    <div>
      <Banner></Banner>
      <p className="content-title">
        Which one your preferable?
      </p>
      <div className="service-content">
        {services.map((service) => (
          <HomeContent key={service.id} services={service}></HomeContent>
        ))}
      </div>
      <div className="footer">
          <p>All Right Reserved | QuickTics.com</p>
      </div>
    </div>
  );
};

export default Home;
