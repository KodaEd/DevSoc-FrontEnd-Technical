import unilectives from "../assets/unilectives.svg";
import bookOpen from "../assets/book-open.svg";
import sheildCheck from "../assets/sheild-check.svg";
import userCircle from "../assets/user-circle.svg";
import moon from "../assets/moon.svg";
import arrowRightEndOnRectangle from "../assets/arrow-right-end-on-rectangle.svg";
import barsArrowDown from "../assets/bars-arrow-down.svg";
import NavBarButton from "./NavBarButton";
import { useNavigate } from "react-router-dom";

export default function NavBar({toggleDarkMode, darkMode}) {
  const navigation = useNavigate();

  const topButtons = [
    {
      svgSrc: unilectives,
      onClick: () => {navigation("/")},
    },
    {
      svgSrc: bookOpen,
      onClick: () => {navigation("/")},
    },
    {
      svgSrc: sheildCheck,
      onClick: () => {navigation("/terms-and-conditions")},
    },
  ];

  const bottomButtons = [
    {
      svgSrc: barsArrowDown,
      onClick: () => {},
    },
    {
      svgSrc: userCircle,
      onClick: () => {navigation("/login")},
    },
    {
      svgSrc: moon,
      onClick: () => {toggleDarkMode()},
    },
    {
      svgSrc: arrowRightEndOnRectangle,
      onClick: () => {navigation("/login")},
    },
  ];

  return (
    <div className={darkMode ? "dark bg-gray-100 dark:bg-slate-400 fixed w-20 h-full max-h-screen" : "bg-gray-100 fixed w-20 h-full max-h-screen"}>
      <div className="flex flex-col items-center h-full justify-between">
        <div className="flex flex-col items-center pt-10 gap-4">
          {topButtons.map((button, key) => {
            return (
              <NavBarButton
                svgSrc={button.svgSrc}
                onClick={button.onClick}
                key={key}
              />
            );
          })}
        </div>
        <div className="flex flex-col items-center pb-10 gap-4">
          {bottomButtons.map((button, key) => {
            return (
              <NavBarButton
                svgSrc={button.svgSrc}
                onClick={button.onClick}
                key={key}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
