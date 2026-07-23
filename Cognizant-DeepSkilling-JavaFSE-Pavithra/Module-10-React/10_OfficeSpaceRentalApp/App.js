import officeImage from "./office.jpg";

function App() {

  const offices = [
    {
      name: "Cyber Towers",
      rent: 55000,
      address: "Hyderabad"
    },
    {
      name: "Tech Park",
      rent: 75000,
      address: "Bangalore"
    },
    {
      name: "Smart Hub",
      rent: 60000,
      address: "Chennai"
    }
  ];

  return (
    <div style={{ textAlign: "center" }}>

      <h1>Office Space Rental App</h1>

      <img
        src={officeImage}
        alt="Office"
        width="500"
        height="250"
      />

      <br /><br />

      {offices.map((office, index) => (
        <div key={index}>
          <h2>{office.name}</h2>

          <h3
            style={{
              color: office.rent < 60000 ? "red" : "green"
            }}
          >
            Rent: ₹{office.rent}
          </h3>

          <h3>Address: {office.address}</h3>

          <hr />
        </div>
      ))}

    </div>
  );
}

export default App;