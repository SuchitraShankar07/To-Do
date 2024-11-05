import React, { useState } from 'react';

function Todoform({ addTask }) {
  const [task, setTask] = useState({ name: '', description: '', schedule: '', category: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ ...task, id: Date.now(), status: 'Scheduled' });
    setTask({ name: '', description: '', schedule: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        name="name"
        value={task.name}
        onChange={handleChange}
        placeholder="TASK DESIGNATION"
        required
        style={styles.input}
      />
      <input
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="TASK PARAMETERS"
        required
        style={styles.input}
      />
      <input
        type="datetime-local"
        name="schedule"
        value={task.schedule}
        onChange={handleChange}
        required
        style={styles.input}
      />
      <button type="submit" style={styles.button}>INITIALIZE TASK</button>
    </form>
  );
}

const styles = {
  form: { 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: '#16213e',
    borderRadius: '10px',
    border: '1px solid #00ffff',
    boxShadow: '0 0 10px #00ffff',
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    backgroundColor: '#0f0f1a',
    border: '1px solid #00ffff',
    borderRadius: '5px',
    color: '#00ffff',
    fontFamily: "'Orbitron', sans-serif",
  },
  button: { 
    backgroundColor: '#ff00ff',
    color: '#000000',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: "'Orbitron', sans-serif",
    boxShadow: '0 0 10px #ff00ff',
  }
};
export default Todoform;
