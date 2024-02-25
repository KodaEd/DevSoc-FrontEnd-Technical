import { useEffect, useState } from "react";
import CourseContainer from "../components/CourseContainer";
import DropDownBox from "../components/DropDownBox";
import Header from "../components/HomeHeader";
import SearchBox from "../components/SearchBox";
import { getCourses } from "../utils/data";

export default function Home() {
  const [courses, setCourses] = useState([]);

  // Trying to demonstrate my understanding of async useEffect
  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getCourses();
      setTimeout(() => {
        console.log(data);
        setCourses(data);
      }, 500);
    };

    fetchCourses();
  }, []);

  return (
    <div className="mx-20 py-20 snap-y">
      <Header />
      <SearchBox />
      <DropDownBox />
      <div className="my-4 grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
        {courses.map((course, key) => {
          return <CourseContainer course={course} key={key} />;
        })}
      </div>
    </div>
  );
}
