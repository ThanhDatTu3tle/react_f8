import courses from "./Api.js";
console.log(courses.title);

function CourseItem({ title, thumbnail, image }) {
    return (
      <div>
        <h1>{title}</h1>
        <p>{thumbnail}</p>
        <p>{image}</p>
      </div>
    );
  }
  
  export default CourseItem;