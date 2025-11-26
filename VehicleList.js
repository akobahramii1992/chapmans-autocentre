// src/VehicleList.js
import React from "react";
import "./VehicleList.css";

const vehicles = [
  {
    id: "amarok",
    title: "Volkswagen Amarok",
    mileage: "100,000 miles",
    price: "£14,000",
    images: [
      "https://i.postimg.cc/N0c2pNGr/a255861001b642dbbdc2f33e633a4bca.jpg",
      "https://i.postimg.cc/HsnNkzm1/W2.jpg"
    ],
    link: "https://www.autotrader.co.uk/van-details/202511198007304?fromRetailerStore=true&postcode=CV79Ej"
  },
  {
    id: "auris",
    title: "Toyota Auris",
    mileage: "66,000 miles",
    price: "£10,300",
    images: [
      "https://i.postimg.cc/Dz605nMk/9166b19ef06145118d1c6c8d029e9815.jpg",
      "https://i.postimg.cc/Sx8Dnttt/T2.jpg"
    ],
    link: "https://www.autotrader.co.uk/car-details/202510317571662?fromRetailerStore=true&postcode=CV79Ej"
  },
  {
    id: "discovery",
    title: "Land Rover Discovery Sport",
    mileage: "70,152 miles",
    price: "£11,900",
    images: [
      "https://i.postimg.cc/mZ5w8Gv8/D1.jpg",
      "https://i.postimg.cc/h45rpqky/D2.jpg"
    ],
    link: "https://www.autotrader.co.uk/car-details/202511117824752?fromRetailerStore=true&postcode=CV79Ej"
  }
];

const Slider = ({ images }) => (
  <div className="slider">
    <div className="slides">
      {images.map((src, i) => (
        <img key={i} src={src} alt={`slide-${i}`} className="slide" />
      ))}
    </div>
  </div>
);

const VehicleCard = ({ v }) => (
  <div className="car-card">
    <h2>{v.title}</h2>
    <p>Mileage: {v.mileage}</p>
    <p>Price: {v.price}</p>

    <Slider images={v.images} />

    <a href={v.link} className="button" target="_blank" rel="noopener noreferrer">
      View on AutoTrader
    </a>
  </div>
);

export default function VehicleList() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: 20 }}>
      <h1 style={{ textAlign: "center" }}>Our Featured Vehicles</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24, marginTop: 20 }}>
        {vehicles.map(v => (
          <VehicleCard key={v.id} v={v} />
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: 24 }}>
        <a
          href="https://www.autotrader.co.uk/dealers/warwickshire/coventry/chapmans-autocentre-10035203?channel=cars"
          target="_blank"
          rel="noopener noreferrer"
          className="view-all-button"
        >
          See all cars on AutoTrader
        </a>
      </div>
    </div>
  );
}
