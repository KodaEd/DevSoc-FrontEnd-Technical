import CourseContainer from "../components/CourseContainer";
import DropDownBox from "../components/DropDownBox";
import Header from "../components/HomeHeader";
import SearchBox from "../components/SearchBox";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Header />

      <SearchBox />
      <DropDownBox />
      <div className="my-4 grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
        <CourseContainer />
        <CourseContainer />
        <CourseContainer />
      </div>
    </div>
  );
}
