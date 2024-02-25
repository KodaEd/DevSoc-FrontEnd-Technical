import Bubble from "./Bubble";
import ReviewStars from "./ReviewStars";

export default function CourseContainer(course, index) {
  return (
    <div className="shadow-2xl p-4 rounded-lg">
      {/* Course Title */}
      <div className="flex justify-between mb-1">
        <p className="text-2xl font-extrabold">COMP1511</p>
        <ReviewStars />
      </div>
      <p className="text-sm mb-5">Programing Fundemantals</p>
      <div className="flex gap-2">
        <Bubble />
        <Bubble />
        <Bubble />
      </div>
    </div>
  );
}
