import DropDownBox from "../components/DropDownBox";
import Header from "../components/HomeHeader";
import SearchBox from "../components/SearchBox";

export default function Home() {
  return <div className="w-full h-full">
    <Header/>

    <SearchBox/>
    <DropDownBox/>
  </div>;
}
