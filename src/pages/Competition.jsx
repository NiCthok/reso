import React, { useState } from "react";
import Select from "react-select";
import Tekken from "../components/Forms/Tekken";
import Pubg from "../components/Forms/Pubg";
import MobileLegend from "../components/Forms/MobileLegend";
import Quiz from "../components/Forms/Quiz";
import Loading from "./Loading";
import { quantum } from "ldrs";



// Default values shown

const customStyles = {
  menuPortal: (provided) => ({ ...provided, zIndex: 9999 }),
  menu: (provided) => ({ ...provided, zIndex: 9999 }),
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
  quantum.register();
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "tekken", label: "Tekken" },
    { value: "pubg", label: "Pubg" },
    { value: "mobile_legend", label: "Mobile Legend" },
    { value: "quiz", label: "Quiz" },
  ];

  return (
    <div className="bg-zinc-950 flex items-center justify-center ">
      <div className="pt-2 w-3/5 ">
        <h1 className="text-3xl text-white mb-3">Event to participate -</h1>
        <Select
          value={selectedOption}
          onChange={setSelectedOption}
          options={options}
          isSearchable
          placeholder="Event"
          className="text-white mb-2"
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
          <Quiz />
        ) : (
          <div className="h-dvh flex justify-center items-center">
            <l-quantum size="150" speed="4" color="blue"></l-quantum>
          </div>
        )}
      </div>
    </div>
  );
};

export default Competition;
