<main style={{ maxWidth: 1200, margin: '24px auto', padding: '0 16px' }}>
  <HeroSlider />  {/* keep this if you want hero images at top */}

  <section style={{
    padding: "50px 20px",
    backgroundImage: "url('https://i.postimg.cc/XYr4fY8g/professional-car-background.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: 12,
    marginBottom: 40
  }}>
    <h2 style={{ textAlign: "center", fontSize: 28, color: "#fff", marginBottom: 30 }}>
      Featured Cars
    </h2>

    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: 20
    }}>
      {/* Three modern car images */}
      {[
        {
          name: "Modern Pickup Truck",
          image: "https://i.postimg.cc/N0c2pNGr/a255861001b642dbbdc2f33e633a4bca.jpg",
          alt: "Modern silver pickup truck, parked in showroom"
        },
        {
          name: "Sleek Hatchback",
          image: "https://i.postimg.cc/Dz605nMk/9166b19ef06145118d1c6c8d029e9815.jpg",
          alt: "Sleek white hatchback car, studio background"
        },
        {
          name: "Black SUV",
          image: "https://i.postimg.cc/mZ5w8Gv8/D1.jpg",
          alt: "Black SUV, modern car advertisement image"
        }
      ].map((car, index) => (
        <div key={index} style={{
          borderRadius: 12,
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          background: "#fff",
          textAlign: "center",
          transition: "transform 0.3s"
        }}
        onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px)"}
        onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
        >
          <img
            src={car.image}
            alt={car.alt}
            style={{ width: "100%", height: 180, objectFit: "cover" }}
          />
          <div style={{ padding: 12, fontWeight: 700, fontSize: 18 }}>
            {car.name}
          </div>
        </div>
      ))}
    </div>

    <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
      <a
        href="https://www.autotrader.co.uk/dealers/warwickshire/coventry/chapmans-autocentre-10035203?channel=cars"
        target="_blank"
        rel="noreferrer"
        style={{
          background: "#457b9d",
          color: "#fff",
          padding: "20px 40px",
          fontSize: 22,
          fontWeight: 700,
          borderRadius: 12,
          textDecoration: "none",
          boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
          transition: "transform 0.2s"
        }}
        onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
        onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
      >
        View Our Cars
      </a>
    </div>
  </section>

  <LatestCarsSection /> {/* optional, you can remove if not needed */}
  <AutoTraderButton />  {/* optional */}
  <ContactSection />
</main>
