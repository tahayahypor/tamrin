// import "./App.css";
// import UserCard from "./components/UserCard";

// //  function App() {
// //   return (
// //     <>
// //       <header>

// //       </header>

// //       <main>
        
// //       </main>


// //     <footer>

// //     </footer>
// //     </>
// //   );
// // }
// const users = [
//   {
//     id: 1,
//     fullname: "Ali Ahmadi",
//     role: "Frontend Developer",
//     avatar: "https://i.pravatar.cc/150?img=12",
//     isAvailable: true,
//   },
//   {
//     id: 2,
//     fullname: "Sara Mohammadi",
//     role: "UI/UX Designer",
//     avatar: "https://i.pravatar.cc/150?img=47",
//     isAvailable: true,
//   },
//   {
//     id: 3,
//     fullname: "Reza Karimi",
//     role: "Backend Developer",
//     avatar: "https://i.pravatar.cc/150?img=33",
//     isAvailable: false,
//   },
//   {
//     id: 4,
//     fullname: "Maryam Hosseini",
//     role: "Project Manager",
//     avatar: "https://i.pravatar.cc/150?img=44",
//     isAvailable: true,
//   },
// ];

// function App() {
//   return (
//     <div className="app">
//       <h1>تیم ما</h1>

//       <div className="users-container">
//         {users.map((user) => (
//           <UserCard key={user.id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App






import { useState, useEffect } from "react";
import "./App.css";

const taskList = [
  {
    id: 1,
    title: "Study React",
    description: "Learning React",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Go to Gym",
    description: "",
    isCompleted: true,
  },
];

function App() {
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [isCompleted, setIsCompleted] = useState(false);

  const [tasks, setTasks] = useState(() => {
    try {
      const localdata = localStorage.getItem("tasks");
      return localdata ? JSON.parse(localdata) : []
    } catch (error) {
      console.log(error);
      return []
    }
    
  });



  const handleSubmit = (e) => {
    e.preventDefult();
    if (!title.trim()){
      alert("Please enter a task title")
      return;
    }
    const newTask ={
      id:Date.now().toString(),
      title: title.trim(),
      description: description.trim(),
      isCompleted:isCompleted,
    };
    setTasks((prevTask) =>[newTask, ...prevTask]);

  }

  useEffect(() =>{
    try {
       localStorage.setItem("tasks" , tasks)
    } catch (error) {
      console.log(error);
    }
  });


  return (
  <div className="app">
    <h1>Smart Task Manager</h1>

    <form>
      <div>
        <label htmlFor="title">Task Title</label>
        <input
          type="text"
          id="title"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          placeholder="Enter task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="isCompleted">
          <input
            type="checkbox"
            id="isCompleted"
            value={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
          />
          Is Completed
        </label>
      </div>

      <button type="submit">Add Task</button>
    </form>

    <div className="task-list">
    {tasks.map((task) =>(
      <div className="task-card" key={task.id}> 
      <h3>{task.title}</h3>
      <p>{task.description || "No description"}</p>
      <p>
        {task.isCompleted ? "Completed" : "UnCompleted"}
      </p>
      </div>
    ))}
    </div>
  </div>
);
}

export default App;
