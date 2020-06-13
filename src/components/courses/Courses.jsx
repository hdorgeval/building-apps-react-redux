import React, { useState } from 'react';

export const Courses = () => {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You have added '${title}' course!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Courses</h2>
      <h3>Add Course</h3>
      <input type="text" onChange={handleChange} value={title} />
      <input type="submit" value="Save" />
    </form>
  );
};
