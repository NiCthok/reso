import React, { useState } from "react";
import Select from "react-select";
import Tekken from "../components/Forms/Tekken";
import Pubg from "../components/Forms/Pubg";
import MobileLegend from "../components/Forms/MobileLegend";
import Quiz from "../components/Forms/Quiz";

const customStyles = {
  menuPortal: (provided) => ({ ...provided, zIndex: 9999 }),
  menu: (provided) => ({ ...provided, zIndex: 9999 }), // Dropdown should stay under header
  control: (base) => ({
    ...base,
    backgroundColor: "#1f2937",
    borderColor: "#374151",
    color: "white",
    "&:hover": { borderColor: "#4b5563" },
  }),
  option: (base, { isFocused, isSelected }) => ({
    ...base,
    backgroundColor: isSelected ? "#2563eb" : isFocused ? "#374151" : "#1f2937",
    color: isSelected ? "white" : "#d1d5db",
    padding: "10px",
  }),
  singleValue: (base) => ({
    ...base,
    color: "white",
  }),
  input: (base) => ({
    ...base,
    color: "white",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#d1d5db",
  }),
};

const Competition = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "tekken", label: "Tekken" },
    { value: "pubg", label: "Pubg" },
    { value: "mobile_legend", label: "Mobile Legend" },
    { value: "quiz", label: "Quiz" },
  ];

  return (
    <div className="h-screen bg-zinc-950 flex items-center justify-center ">
      <div className="w-3/5 ">
        <Select
          value={selectedOption} // Use value instead of defaultValue
          onChange={setSelectedOption}
          options={options}
          isSearchable
          placeholder="Event"
          className="text-white"
          styles={customStyles}
          menuContainerStyle={{ zIndex: 5 }}
          menuPortalTarget={document.body}
          menuPosition="fixed"
        />

        {selectedOption?.value === "tekken" ? (
          <Tekken />
        ) : selectedOption?.value === "pubg" ? (
          <Pubg />
        ) : selectedOption?.value === "mobile_legend" ? (
          <MobileLegend />
        ) : selectedOption?.value === "quiz" ? (
          <Quiz/>
        ): (
          <h1 className="text-white text-2xl">Select an event first</h1>
        )}
      </div>
    </div>
  );
};

export default Competition;