// frontend/src/components/EquipmentForm.js
import { useState } from "react";
import axios from "axios";

const EquipmentForm = () => {
  const [name, setName] = useState("");
  const [equipment, setEquipment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { Name: name, Equipment: equipment };

    axios
      .post(
        "https://api.sheetbest.com/sheets/70a1842a-67c4-44f5-a28c-77d7c432f7f9",
        data
      )
      .then((response) => {
        console.log(response);
        setName("");
        setEquipment("");
        setSubmitted(true);
      });

    alert(`Thank you, ${name}, for bringing ${equipment}!`);
  };

  return (
    <div className="text-center p-3">
      <h2 className="text-2xl md:text-3xl font-bold text-orange mb-5 text-center">
        How to Come for the Birthday
      </h2>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="m-2 p-2">
            <label className="text-lg md:text-xl text-gray">Name: </label>
            <input
              className="border border-gray rounded-lg text-gray w-full md:w-[300px] p-2"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="m-2 p-2">
            <label className="text-lg md:text-xl text-gray">Equipment: </label>
            <input
              className="border border-gray rounded-lg text-gray w-full md:w-[300px] p-2"
              type="text"
              value={equipment}
              onChange={(e) => setEquipment(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="font-bold rounded-xl m-3 px-4 py-2 bg-orange text-gray cursor-pointer hover:bg-red-400 transition-colors"
          >
            Submit
          </button>
        </form>
      ) : (
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-orange mb-5">
            Thank you for submitting!
          </h2>
          <h1 className="text-3xl text-orange fot-bold">
            We look forward to celebrating Shivasis' birthday with you!
          </h1>
        </div>
      )}
    </div>
  );
};

export default EquipmentForm;
