import Bubble from "./Bubble";
import ReviewStars from "./ReviewStars";

export default function CourseContainer(course) {
  // this is a weird behavour, not sure why but need this
  const data = course.course;
  console.log(data.offered_terms);

  return (
    <div className="shadow-2xl p-4 rounded-lg">
      {/* Course Title */}
      <div className="flex justify-between mb-1">
        <p className="text-2xl font-extrabold">{`${data.course_prefix}${data.course_code}`}</p>
        <ReviewStars />
      </div>
      <p className="text-sm mb-5">{data.course_title}</p>
      <div className="flex gap-2">
        {data.offered_terms.map((term, key) => {
          return <Bubble key={key} term={term} />;
        })}
      </div>
    </div>
  );
}
