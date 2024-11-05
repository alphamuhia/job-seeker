import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Questions({ setIsFirstTimeUser }) {
  const [companyname, setCompanyname] = useState("");
  const [companytype, setCompanyType] = useState("");
  const [description, setDescription] = useState("");
  const [positions, setPositions] = useState("");
  const [details, setDetails] = useState("");
  const [website, setWebsite] = useState("");
  const navigate = useNavigate();

  const handlePositionChange = (index, field, value) => {
    const updatedPositions = [...positions];
    updatedPositions[index][field] = value;
    setPositions(updatedPositions);
  };

  const addPosition = () => {
    setPositions([
      ...positions,
      { title: "", qualifications: "", description: "" },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // save company info here
    setIsFirstTimeUser(false);
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Company Infomation</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={companyname}
          onChange={(e) => setCompanyname(e.target.value)}
          placeholder="Company Name"
        />
        <select
          value={companytype}
          onChange={(e) => setCompanyType(e.target.value)}
        >
          <option value="Products">Products</option>
          <option value="Services">Services</option>
          <option value="Both">Both</option>
        </select>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Company Description"
          required
        ></textarea>

        <h3>Available Positions</h3>
        {positions.map((position, index) => (
          <div key={index}>
            <input
              type="text"
              value={position.value}
              onChange={(e) =>
                handlePositionChange(index, "title", e.target.value)
              }
              placeholder="position Title"
            />
            <textarea
              value={position.qualifications}
              onChange={(e) =>
                handlePositionChange(index, "qualifications", e.target.value)
              }
              placeholder="Qualifications"
              required
            />
            <textarea
              value={position.description}
              onChange={(e) =>
                handlePositionChange(index, "description", e.target.value)
              }
              placeholder="Job Description"
              required
            />
          </div>
        ))}
        <button type="button" onClick={addPosition}>
          Add Another Position
        </button>

        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Company Details"
          required
        />
        <input
          type="url"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="Website URL"
        />

        <button type="Submit">Save and continue</button>
      </form>
    </div>
  );
}

export default Questions;
