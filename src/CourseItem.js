function CourseItem({ course, onClick }) {
    return (
      <div>
        <h1 onClick={() => onClick(course)}>{course.title}</h1>
        <p>{course.thumbnail}</p>
        <p>{course.image}</p>
      </div>
    );
  }
  
  export default CourseItem;