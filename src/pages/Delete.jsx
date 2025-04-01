import Button from "../components/Button";
import Input from "../components/Input";

const Delete = ({ onChange, onClickCancel, onClickDelete }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-zinc-950/75">
      <div className="bg-zinc-900 p-6 rounded-lg shadow-lg">
        <h2 className="text-white text-lg font-semibold mb-4">
          Confirm Account Deletion
        </h2>

        <Input
          id="password"
          label="Enter Your Password"
          placeholder="Password"
          onChange={(e) => onChange(e.target.value)}
          type="password"
          required={true}
        />

        <div className="flex justify-between mt-4">
          <Button
            label="Cancel"
            type="button"
            onClick={onClickCancel}
            className="bg-gray-500 hover:bg-gray-600"
          />
          <Button
            label="Delete"
            type="button"
            onClick={onClickDelete}
            className="bg-red-600 hover:bg-red-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Delete;
