import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import Gender from "../Gender";
import DateOfBirth from "../DateOfBirth";

const MobileLegend = () => {
  const [payment, setPayment] = useState(false);
  const [gender, setGender] = useState(null);
  const [dob, setDob] = useState("");
  console.log(gender);
  console.log(dob);
  return (
    <div>
      <form>
        <label className="text-white text-2xl pt-7">Team Details :</label>
        <div className="grid grid-cols-3 gap-4 mb-2">
          <Input
            label={"Team Leader Name"}
            id={"teamLeader"}
            required={true}
            type={"text"}
          />
          <Input
            label={"Team Leader ID"}
            id={"teamLeaderId"}
            required={true}
            type={"number"}
          />
          <Gender onChange={setGender} required={true} />
          <Input
            label={"Player 2 Name"}
            id={"Player2"}
            required={true}
            type={"text"}
          />
          <Input
            label={"Player 2 ID"}
            id={"Player2Id"}
            required={true}
            type={"number"}
          />
          <Gender onChange={setGender} required={true} />
          <Input
            label={"Player 3 Name"}
            id={"Player3"}
            required={true}
            type={"text"}
          />
          <Input
            label={"Player 3 ID"}
            id={"Player3Id"}
            required={true}
            type={"number"}
          />
          <Gender onChange={setGender} required={true} />
          <Input
            label={"Player 4 Name"}
            id={"Player4"}
            required={true}
            type={"text"}
          />
          <Input
            label={"Player 4 ID"}
            id={"Player4Id"}
            required={true}
            type={"number"}
          />
          <Gender onChange={setGender} required={true} />
          <Input
            label={"Player 5 Name"}
            id={"Player5"}
            required={true}
            type={"text"}
          />
          <Input
            label={"Player 5 ID"}
            id={"Player5Id"}
            required={true}
            type={"number"}
          />
          <Gender onChange={setGender} required={true} />
          <Input
            label={"Substitute Name (Optional)"}
            id={"Player6"}
            type={"text"}
          />
          <Input
            label={"Substitute ID (Optional)"}
            id={"Player6Id"}
            type={"number"}
          />
          <Gender onChange={setGender} />
        </div>
        <div id="teamLeader" className="mt-4">
          <label htmlFor="teamleaber" className="text-white text-2xl pt-5">Team Leader Details :</label>
          <DateOfBirth onChange={setDob} value={dob}/>
          <Input label={"Contact No."} required={true} type={"number"} id={"contact"}/>
          <Input label={"Address"} required={true} type={"text"} id={"address"}/>
          <Input label={"Zip Code"} required={true} type={"number"} id={"zip"}/>
          <Input label={"State"} required={true} type={"text"} id={"state"}/>
          <Input label={"Country"} required={true} type={"text"} id={"country"}/>
        </div>
        <Button label={"Continue"} />
      </form>
    </div>
  );
};

export default MobileLegend;
