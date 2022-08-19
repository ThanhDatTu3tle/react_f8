import './App.css';
import courses from "./Api";
import CourseItem from './CourseItem';

function App() {
  return (
    <div className="App">
      {courses.map(course => (
        <CourseItem 
          key={course.id}
          title={course.title}
        />
      ))}
    </div>
  );
}

export default App;
