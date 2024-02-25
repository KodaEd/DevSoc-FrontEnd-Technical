import chevronDown from "../assets/chevron-down.svg";

export default function DropDownBox() {
  return (
    <button className="text-gray-400 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
      Sort by{" "}
      <img
        src={chevronDown}
        alt="chevron down"
        className="inline-block w-4 h-4"
      />
    </button>
  );
}
