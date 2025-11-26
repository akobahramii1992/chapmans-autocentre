import React, { useState, useEffect } from "react";
import VehicleList from "./VehicleList";  // <-- Import the new sliders

const PHONE = "07724540230";
const ADDRESS = "68 Bayton Road, Exhall, Coventry, CV7 9EJ";
const LOGO_PATH = "https://i.postimg.cc/xT5HwZWp/Logo.jpg";

// Featured cars for the hero slider
const HERO_CARS = [
  { name: "BMW 3 Series", image: "https://i.postimg.cc/3RkqM3Dn/BMW-3-Series.jpg", link: "https://www.autotrader.co.uk/car-details/202508075238588" },
  { name: "Audi A4", image: "https://i.postimg.cc/1tq8X8vS/Audi-A4.jpg", link: "https://www.autotrader.co.uk/car-details/202511017586207" },
  { name: "Ford Fiesta", image: "https://i.postimg.cc/7Zb4RjFY/Ford-Fiesta-2018.jpg", link: "https://www.autotrader.co.uk/car-details/202510317570600" }
];

// Latest cars preview
const latestCars = [
  { name: "Toyota Yaris", image: "https://i.postimg.cc/5y9kG4kd/Toyota-Yaris.jpg", link: "https://www.autotrader.co.uk/car-details/202511017586411" },
  { name: "Mercedes A-Class", image: "https://i.postimg.cc/2aN1vY8B/Mercedes-A-Class.jpg", link: "https://www.autotrader.co.uk/car-details/202511117824752" },
  { name: "Volkswagen Golf", image: "https://i.postimg.cc/fdFKr5MJ/VW-Golf.jpg", link: "https://www.autotrader.co.uk/car-details/202510257425681" }
];

// AutoTrader dealer page URL
const AUTOTRADER_URL = "https://www.autotrader.co.uk/dealers/warwickshire/coventry/chapmans-autocentre-10035203?channel=cars";

function Header() {
  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 20, background: '#1d3557', color: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <img src={LOGO_PATH} alt="Chapmans logo" style={{ width: 70, height: 70, objectFit: 'contain', borderRadius: 8, background: '#fff', padding: 4 }} />
        <div>
          <div style={{ fontSize: 22, fontWeight: 700 }}>Chapmans AutoCentre</div>
          <div style={{ fontSize: 14 }}>{ADDRESS}</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <a href={`tel:${PHONE}`} style={{ padding: '10px 16px', background: '#e63946', color: '#fff', borderRadius: 6, textDecoration: 'none', fontWeight: 700 }}>Call {PHONE}</a>
        <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`} target="_blank" rel="noreferrer" style={{ padding: '10px 16px', border: '1px solid #fff', borderRadius: 6, textDecoration: 'none', color: '#fff' }}>Find us</a>
      </div>
    </header>
  );
}

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % HERO_CARS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '350px', borderRadius: 12, overflow: 'hidden', margin: '20px 0', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
      {HERO_CARS.map((car, index) => (
        <a
          key={index}
          href={car.link}
          target="_blank"
          rel="noreferrer"
          style={{
            display: index === current ? 'block' : 'none',
            width: '100%',
            height: '100%',
            backgroundImage: `url(${car.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            textDecoration: 'none',
            color: '#fff'
          }}
        >
          <div style={{ background: 'rgba(0,0,0,0.3)', height: '100%', display: 'flex', alignItems: 'flex-end', padding: 20 }}>
            <h2 style={{ fontSize: 28, fontWeight: 700 }}>{car.name}</h2>
          </div>
        </a>
      ))}
    </div>
  );
}

function CarPreview({ car }) {
  return (
    <a href={car.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: '#333' }}>
      <div style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', transition: 'transform 0.2s' }}
        onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
      >
        <img src={car.image} alt={car.name} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
        <div style={{ padding: 12, fontWeight: 700, textAlign: 'center' }}>{car.name}</div>
      </div>
    </a>
  );
}

function LatestCarsSection() {
  return (
    <section style={{ margin: '40px 0' }}>
      <h2 style={{ textAlign: 'center', fontSize: 24, marginBottom: 20 }}>Latest Cars</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
        {latestCars.map((car, index) => <CarPreview key={index} car={car} />)}
      </div>
    </section>
  );
}

function AutoTraderButton() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '40px 0' }}>
      <a
        href={AUTOTRADER_URL}
        target="_blank"
        rel="noreferrer"
        style={{
          background: '#457b9d',
          color: '#fff',
          padding: '20px 40px',
          fontSize: 22,
          fontWeight: 700,
          borderRadius: 12,
          textDecoration: 'none',
          boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
          transition: 'transform 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
      >
        View All Cars on AutoTrader
      </a>
    </div>
  );
}

function ContactSection() {
  return (
    <section style={{ padding: 24, marginTop: 32, background: '#fff', borderRadius: 12, border: '1px solid #eee', boxShadow: '0 4px 8px rgba(0,0,0,0.05)' }}>
      <h3 style={{ marginTop: 0, fontSize: 20 }}>Contact Us</h3>
      <p style={{ margin: '6px 0' }}>Phone: <a href={`tel:${PHONE}`}>{PHONE}</a></p>
      <p style={{ margin: '6px 0' }}>Address: {ADDRESS}</p>
      <p style={{ margin: '6px 0' }}>Email: <a href="mailto:info@chapmansautocentre.co.uk">info@chapmansautocentre.co.uk</a></p>
      <p style={{ marginTop: 10 }}>Prefer WhatsApp? <a href={`https://wa.me/44${PHONE.replace(/^0/, '')}`} target="_blank" rel="noreferrer">Message us on WhatsApp</a></p>
    </section>
  );
}

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#f8f9fa', minHeight: '100vh', paddingBottom: '40px' }}>
      <Header />
      <main style={{ maxWidth: 1200, margin: '24px auto', padding: '0 16px' }}>
        <HeroSlider />

        {/* <-- NEW 3-CAR SLIDERS COMPONENT */}
        <VehicleList />

        <LatestCarsSection />
        <AutoTraderButton />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
