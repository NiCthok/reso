export default function Button({ label,type, onClick }) {
    return (
      <div className="py-2 flex justify-center">
        <button
          type={type}
          className="cursor-pointer text-white bg-slate-600 font-medium rounded-md text-sm px-5 py-2.5 text-center my-2 size-full hover:bg-slate-800"
          onClick={onClick}
        >
          {label}
        </button>
      </div>
    );
  }