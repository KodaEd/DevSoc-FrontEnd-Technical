import Bubble from "./Bubble";
import ReviewStars from "./ReviewStars";

export default function CourseContainer() {
  return <div className="shadow-xl p-4 rounded-md">
    {/* Course Title */}
    <p className="text-2xl font-extrabold">COMP1511</p>
    <ReviewStars />
    <p className="text-sm">Programing Fundemantals</p>
    <Bubble/>
  </div>
}