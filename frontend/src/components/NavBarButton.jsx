export default function NavBarButton({ svgSrc, onClick }) {
  console.log(svgSrc)
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-md hover:bg-gray-300"
    >
      <img src={svgSrc} alt="icon" className="w-7 h-7" />
    </button>
  );
}
