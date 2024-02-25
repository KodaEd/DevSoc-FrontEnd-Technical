export default function SearchBox() {
  return (
    <div className="flex items-center justify-center">
      {/* Added padding and a colour change to improve visibility
       * Confusing if the colour stays the same as the selected one
       */}
      <input
        type="text"
        placeholder="Search for a course e.g. COMP1511"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
