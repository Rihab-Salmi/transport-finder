// TransportForm.jsx
import React, { useState } from "react";
import places from "./places";
import "./style/TransportForm.css";
import bus from "./bus";
import taxi from "./taxi";

function TransportForm() {
  const [destination, setDestination] = useState("");
  const [transportType, setTransportType] = useState("");
  const [price, setPrice] = useState(null);
  const [startPoint, setStartPoint] = useState("");
  const [error, setError] = useState("");

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleTransportTypeChange = (e) => {
    setTransportType(e.target.value);
  };

  const handleSubmit = () => {
    // Find the price and start point based on the selected destination and transport type
    if (transportType === "taxi") {
      const taxiInfo = taxi.find((route) => route.end === destination);
      if (taxiInfo) {
        setPrice(taxiInfo.price);
        setStartPoint(taxiInfo.start);
        setError("");
      } else {
        setError("No taxi route found for the selected destination.");
      }
    } else if (transportType === "bus") {
      const busInfo = bus.find((route) => route.end === destination);
      if (busInfo) {
        setPrice(busInfo.price);
        setStartPoint(busInfo.start);
        setError("");
      } else {
        setError("No bus route found for the selected destination.");
      }
    }
  };

  return (
    <div className="transport-form-container">
      <div className="form-group">
        <select
          className="destination-select"
          value={destination}
          onChange={handleDestinationChange}
        >
          <option value="">Select Destination</option>
          {places.map((place) => (
            <option key={place.id} value={place.name}>
              {place.name}
            </option>
          ))}
        </select>
        <select
          className="transport-type-select"
          value={transportType}
          onChange={handleTransportTypeChange}
        >
          <option value="">Select Transport Type</option>
          <option value="bus">Bus</option>
          <option value="taxi">Taxi</option>
        </select>
        <button className="submit-button" onClick={handleSubmit}>
          Validate
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
      {price !== null && !error && (
        <div className="price-info">
          {transportType === "bus" ? (
            <>
              <p>
                Bus Number:{" "}
                {bus.find((route) => route.end === destination).number}
              </p>
              <p>Price: {price}</p>
              <p>Start Point: {startPoint}</p>
            </>
          ) : (
            <>
              <p>Taxi Price: {price}</p>
              <p>Start Point: {startPoint}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default TransportForm;
