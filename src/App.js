import { useState } from "react";
import "./App.css";
import Radio from "./components/Radio/Radio";

export default function App() {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");

  const cities = ["Mumbai", "Pune", "Delhi"];
  const genders = ["Male", "Female", "Other"];

  const handleChange = (e) => {
    setRoll(e.target.value);
  };

  const handleSumit = (e) => {
    e.preventDefault();
    console.log({ name, roll, gender, city });
  };

  return (
    <div className="container">
      <div className="login-container">
        <form onSubmit={handleSumit}>
          <div className="input-container">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-container">
            <label>Roll No</label>
            <input
              type="text"
              name="rollNo"
              value={roll}
              onChange={handleChange}
            />
          </div>

          <div className="input-container">
            <label>Gender</label>

            {genders.map((gen) => (
              <Radio
                gender={gen}
                key={gen}
                selected={gender}
                setGender={setGender}
              />
            ))}
          </div>

          <div className="input-container">
            <label>City</label>
            <select
              onChange={(e) => {
                setCity(e.target.value);
              }}
            >
              <option value="">Select</option>
              {cities.map((city) => (
                <option key={city} value={city} name={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <button name="Submit" type="submit" className="btn-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
