import { useState } from "react";
import "./StudentForm.css";

function StudentForm() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
    mobile: "",
    Age:"",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`
      Name: ${student.name}
      Email: ${student.email}
      Course: ${student.course}
      Mobile: ${student.mobile}
      Age: ${student.Age}
      `);
    setStudent({
      name: "",
      email: "",
      course: "",
      mobile: "",
      Age: "",
    });
  }

  return (
  <div className="container">
    <h1>Student Registration Form</h1>

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={student.name}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="email"
        placeholder="Enter your email"
        value={student.email}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="course"
        placeholder="Enter Course"
        value={student.course}
        onChange={handleChange}
      />

      <input
        type="text"
        name="mobile"
        placeholder="Enter Mobile Number"
        value={student.mobile}
        onChange={handleChange}
      />

      <input
        type="text"
        name="Age"
        placeholder="Enter Age"
        value={student.Age}
        onChange={handleChange}
      />

      <button type="submit">Register</button>
    </form>
    
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
        <p>
          <strong>Age: {student.Age}</strong>
        </p>
      </div>
  </div>
  );
}

export default StudentForm;