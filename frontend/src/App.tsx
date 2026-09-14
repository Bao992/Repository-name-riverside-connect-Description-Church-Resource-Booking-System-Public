import "./App.css";

function App() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1>Riverside Connect</h1>

      <p>Church Resource Booking System</p>

      <hr />

      <h2>Features Implemented</h2>

      <ul>
        <li>Resource Management API</li>
        <li>Booking Creation</li>
        <li>Booking Validation</li>
        <li>Conflict Detection</li>
        <li>Booking Status Updates</li>
        <li>Booking Statistics</li>
        <li>Filtering & Sorting</li>
        <li>Swagger Documentation</li>
      </ul>

      <hr />

      <h2>API Endpoints</h2>

      <ul>
        <li>GET /api/resources</li>
        <li>POST /api/resources</li>
        <li>GET /api/bookings</li>
        <li>POST /api/bookings</li>
        <li>GET /api/bookings/:id</li>
        <li>PATCH /api/bookings/:id</li>
        <li>DELETE /api/bookings/:id</li>
        <li>GET /api/bookings/stats</li>
      </ul>

      <hr />

      <h2>Documentation</h2>

      <p>
        <a
          href="http://localhost:5000/api/docs"
          target="_blank"
          rel="noreferrer"
        >
          Open Swagger Documentation
        </a>
      </p>
    </div>
  );
}

export default App;