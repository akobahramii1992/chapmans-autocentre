import React from "react";

const PHONE = "07724540230";
const ADDRESS = "68 Bayton Road, Exhall, Coventry, CV7 9EJ";
const LOGO_PATH = "https://i.postimg.cc/xT5HwZWp/Logo.jpg";

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
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 20, borderBottom: '1px solid #eee', background: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <img src={LOGO_PATH} alt="Chapmans logo" style={{ width: 80, height: 80, objectFit: 'contain' }} />
        <div>
          <div style={{ fontSize: 18, fontWeight: 700 }}>Chapmans AutoCentre</div>
          <div style={{ fontSize: 12, color: '#666' }}>{ADDRESS}</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <a href={`tel:${PHONE}`} style={{ padding: '8px 14px', background: '#e63946', color: '#fff', borderRadius: 6, textDecoration: 'none', fontWeight: 700 }}>Call {PHONE}</a>
        <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`} target="_blank" rel="noreferrer" style={{ padding: '8px 14px', border: '1px solid #ccc', borderRadius: 6, textDecoration: 'none', color: '#333' }}>Find us</a>
      </div>
    </header>
  );
}

function CarCard({ car }) {
  return (
    <div style={{ border: '1px solid #e6e6e6', borderRadius: 8, overflow: 'hidden', background: '#fff', display: 'flex', flexDirection: 'column' }}>
      <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', background: '#f7f7f7' }}>
        <img src={car.image} alt={car.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ fontWeight: 700 }}>{car.year} {car.name}</div>
        <div style={{ color: '#666', fontSize: 13 }}>{car.mileage} • {car.fuel}</div>
        <div style={{ color: '#1d3557', fontWeight: 800, marginTop: 6 }}>{car.price}</div>
        <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
          <a href={car.link} target="_blank" rel="noreferrer" style={{ flex: 1, textAlign: 'center', padding: '8px 10px', background: '#457b9d', color: '#fff', borderRadius: 6, textDecoration: 'none' }}>View on AutoTrader</a>
          <a href={`tel:${PHONE}`} style={{ flex: 1, textAlign: 'center', padding: '8px 10px', border: '1px solid #ccc', borderRadius: 6, textDecoration: 'none', color: '#333' }}>Call</a>
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <section style={{ padding: 20, marginTop: 20, background: '#fff', borderRadius: 8, border: '1px solid #eee' }}>
      <h3 style={{ marginTop: 0 }}>Contact Us</h3>
      <p style={{ margin: '6px 0' }}>Phone: <a href={`tel:${PHONE}`}>{PHONE}</a></p>
      <p style={{ margin: '6px 0' }}>Address: {ADDRESS}</p>
      <p style={{ margin: '6px 0' }}>Email: <a href="mailto:info@chapmansautocentre.co.uk">info@chapmansautocentre.co.uk</a></p>
      <p style={{ marginTop: 10 }}>Prefer WhatsApp? <a href={`https://wa.me/44${PHONE.replace(/^0/, '')}`} target="_blank" rel="noreferrer">Message us on WhatsApp</a></p>
    </section>
  );
}

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#f1f5f9', minHeight: '100vh' }}>
      <Header />
      <main style={{ maxWidth: 1100, margin: '24px auto', padding: '0 16px' }}>
        <section style={{ marginBottom: 18 }}>
          <h2 style={{ margin: '8px 0' }}>Available Cars</h2>
          <p style={{ color: '#666' }}>Click a car to view its advert on AutoTrader.</p>
        </section>
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
          {cars.map(car => <CarCard key={car.id} car={car} />)}
        </section>
        <div style={{ marginTop: 24 }}><ContactSection /></div>
      </main>
    </div>
  );
}

export default App;