import React from "react";

const PHONE = "07724540230";
const ADDRESS = "68 Bayton Road, Exhall, Coventry, CV7 9EJ";
const LOGO_PATH = "https://i.postimg.cc/xT5HwZWp/Logo.jpg";
const HERO_BANNER = "https://images.unsplash.com/photo-1549921296-3af291be224c";

const cars = [
  { id: 1, name: "Ford Fiesta", year: 2020, price: "£12,995", mileage: "15,000 miles", fuel: "Petrol", link: "https://www.autotrader.co.uk/car-details/202510317570600", image: "https://i.postimg.cc/7Zb4RjFY/Ford-Fiesta-2018.jpg" },
  { id: 2, name: "BMW 3 Series", year: 2019, price: "£18,995", mileage: "20,000 miles", fuel: "Diesel", link: "https://www.autotrader.co.uk/car-details/202508075238588", image: "https://i.postimg.cc/3RkqM3Dn/BMW-3-Series.jpg" },
  { id: 3, name: "Audi A4", year: 2021, price: "£22,500", mileage: "10,000 miles", fuel: "Petrol", link: "https://www.autotrader.co.uk/car-details/202511017586207", image: "https://i.postimg.cc/1tq8X8vS/Audi-A4.jpg" },
  { id: 4, name: "Vauxhall Corsa", year: 2018, price: "£9,995", mileage: "25,000 miles", fuel: "Petrol", link: "https://www.autotrader.co.uk/car-details/202510147137679", image: "https://i.postimg.cc/J7vLwRzF/Vauxhall-Corsa.jpg" },
  { id: 5, name: "Toyota Yaris", year: 2020, price: "£11,495", mileage: "12,000 miles", fuel: "Hybrid", link: "https://www.autotrader.co.uk/car-details/202511017586411", image: "https://i.postimg.cc/5y9kG4kd/Toyota-Yaris.jpg" },
  { id: 6, name: "Mercedes A-Class", year: 2019, price: "£19,995", mileage: "18,000 miles", fuel: "Diesel", link: "https://www.autotrader.co.uk/car-details/202511117824752", image: "https://i.postimg.cc/0QbPbL3S/Mercedes-A-Class.jpg" },
  { id: 7, name: "Volkswagen Golf", year: 2020, price: "£16,995", mileage: "14,000 miles", fuel: "Petrol", link: "https://www.autotrader.co.uk/car-details/202510257425681", image: "https://i.postimg.cc/SRk9Ggph/Volkswagen-Golf.jpg" }
];

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

function HeroBanner() {
  return (
    <div style={{
      width: '100%',
      height: '300px',
      backgroundImage: `url(${HERO_BANNER})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: 12,
      margin: '20px 0',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
    }}></div>
  );
}

function CarCard({ car }) {
  return (
    <div style={{
      border: '1px solid #e6e6e6',
      borderRadius: 12,
      overflow: 'hidden',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s',
    }}
    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
        <img src={car.image} alt={car.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ fontWeight: 700, fontSize: 16 }}>{car.year} {car.name}</div>
        <div style={{ color: '#666', fontSize: 14 }}>{car.mileage} • {car.fuel}</div>
        <div style={{ color: '#1d3557', fontWeight: 800, marginTop: 4, fontSize: 16 }}>{car.price}</div>
        <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
          <a href={car.link} target="_blank" rel="noreferrer" style={{ flex: 1, textAlign: 'center', padding: '10px', background: '#457b9d', color: '#fff', borderRadius: 6, textDecoration: 'none', fontWeight: 600 }}>View on AutoTrader</a>
          <a href={`tel:${PHONE}`} style={{ flex: 1, textAlign: 'center', padding: '10px', border: '1px solid #ccc', borderRadius: 6, textDecoration: 'none', color: '#333', fontWeight: 600 }}>Call</a>
        </div>
      </div>
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
        <HeroBanner />
        <section style={{ marginBottom: 24 }}>
          <h2 style={{ margin: '8px 0', fontSize: 24 }}>Available Cars</h2>
          <p style={{ color: '#666', fontSize: 16 }}>Click a car to view its advert on AutoTrader.</p>
        </section>
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
          {cars.map(car => <CarCard key={car.id} car={car} />)}
        </section>
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
