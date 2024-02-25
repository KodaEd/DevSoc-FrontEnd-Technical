export default function Bubble({ darkMode, term }) {
  return (
    <div
      className={`${
        darkMode ? "dark dark:bg-indigo-500" : ""
      } bg-cyan-100  rounded-lg p-1 text-xs`}
    >
      {term}
    </div>
  );
}
