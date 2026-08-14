import { usestate } from "react";
import "./StudentForm.css";

function StudentForm() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
    mobile: "",
  });

  const handlechange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventdefault();

    alert(`
      Name: ${student.name}
      Email: ${student.email}
      couse: ${student.course}
      Mobile: ${student.mobile}
      `)
  }

  setstudent({
    name: "",
    email: "",
    course: "",
    mobile: "",
  });
};
return (
  <div className="container">
    <h1>Student Resgistration Form</h1>
    <form />

    <form onsubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={student.name}
        onChange={handlechange}
        required
      />

      <input
        type="text"
        name="email"
        placeholder="Enter your email"
        value={student.email}
        onChange={handlechange}
        required
      />

      <input
        type="text"
        name="course"
        placeholder="Enter Course"
        value={student.course}
        onChange={handlechange}
      />

      <input
        type="text"
        name="mobile"
        placeholder="Enter Mobile Number"
        value={student.mobile}
        onChange={handlechange}
      />

    </form>

    <button type="submit">Register</button>
    
      <div className="preview">
        <h2>Student Preview</h2>
        <p>
          <strong>Name:{student.name}</strong>
        </p>
        <p>
          <strong>Email:{student.email}</strong>
        </p>
        <p>
          <strong>Course: {student.course}</strong>
        </p>
        <p>
          <strong>Mobile: {student.mobile}</strong>
        </p>
      </div>
  </div>
  
);



export default studentform;