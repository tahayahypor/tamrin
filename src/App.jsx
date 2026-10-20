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






// import { useState, useEffect } from "react";
// import "./App.css";

// const taskList = [
//   {
//     id: 1,
//     title: "Study React",
//     description: "Learning React",
//     isCompleted: false,
//   },
//   {
//     id: 2,
//     title: "Go to Gym",
//     description: "",
//     isCompleted: true,
//   },
// ];

// function App() {
// const [title, setTitle] = useState("");
// const [description, setDescription] = useState("");
// const [isCompleted, setIsCompleted] = useState(false);

// // const [task, setTask] = usestate(() =>{
// //   title:"",
// //   description:"",
// //   isCompleted: false,
// // })

//   const [tasks, setTasks] = useState(() => {
//     try {
//       const localdata = localStorage.getItem("tasks");
//       return localdata ? JSON.parse(localdata) : []
//     } catch (error) {
//       console.log(error);
//       return []
//     }
    
//   });



//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!title.trim()){
//       alert("Please enter a task title")
//       return;
//     }
//     const newTask ={
//       id:Date.now().toString(),
//       title: title.trim(),
//       description: description.trim(),
//       isCompleted:isCompleted,
//     };
//     setTasks((prevTask) =>[newTask, ...prevTask]);

//   }

//   useEffect(() =>{
//     try {
//        localStorage.setItem("tasks" , tasks)
//     } catch (error) {
//       console.log(error);
//     }
//   });


//   return (
//   <div className="app">
//     <h1>Smart Task Manager</h1>

//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="title">Task Title</label>
//         <input
//           type="text"
//           id="title"
//           placeholder="Enter task title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//       </div>

//       <div>
//         <label htmlFor="description">Description</label>
//         <textarea
//           id="description"
//           placeholder="Enter task description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//       </div>

//       <div>
//         <label htmlFor="isCompleted">
//           <input
//             type="checkbox"
//             id="isCompleted"
//             value={isCompleted}
//             onChange={(e) => setIsCompleted(e.target.checked)}
//           />
//           Is Completed
//         </label>
//       </div>

//       <button type="submit">Add Task</button>
//     </form>

//     <div className="task-list">
//     {tasks.map((task) =>(
//       <div className="task-card" key={task.id}> 
//       <h3>{task.title}</h3>
//       <p>{task.description || "No description"}</p>
//       <p>
//         {task.isCompleted ? "Completed" : "UnCompleted"}
//       </p>
//       </div>
//     ))}
//     </div>
//   </div>
// );
// }

// export default App;






import { useState, useEffect } from "react";

const INITIAL_VALUE = {
  title: "",
  description: "",
  isCompleted: false,
};

function App() {
  const [formValue, setFormValue] = useState(INITIAL_VALUE);

  const [tasks, setTasks] = useState(() => {
    try {
      const localdata = localStorage.getItem("tasks");
      return localdata ? JSON.parse(localdata) : [];
    } catch (error) {
      console.log(error);
      return [];
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formValue.title.trim()) {
      alert("Please enter a task title");
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      title: formValue.title.trim(),
      description: formValue.description.trim(),
      isCompleted: formValue.isCompleted,
    };

    setTasks((prevTask) => [newTask, ...prevTask]);
    setFormValue(INITIAL_VALUE);
  };

  const handleDelete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  useEffect(() => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.log(error);
    }
  }, [tasks]);

  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 py-10">

      <div className="max-w-2xl mx-auto">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Smart Task Manager
          </h1>
        </div>
    
       <form
          onSubmit={handleSubmit}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl mb-8"
        >
          <div className="mb-5">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-slate-300"
            >
              Task Title
            </label>

            <input
              type="text"
              id="title"
              placeholder="Enter task title"
              value={formValue.title}
              onChange={(e) =>
                setFormValue((prev) => ({
                  ...prev,
                  title: e.target.value,
                }))
              }
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-slate-300"
            >
              Description
            </label>

            <textarea
              id="description"
              rows="4"
              placeholder="Enter task description"
              value={formValue.description}
              onChange={(e) =>
                setFormValue((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 outline-none resize-none focus:border-blue-500 transition"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="isCompleted"
              className="flex items-center gap-3 cursor-pointer text-slate-300"
            >
              <input
                type="checkbox"
                id="isCompleted"
                checked={formValue.isCompleted}
                onChange={(e) =>
                  setFormValue((prev) => ({
                    ...prev,
                    isCompleted: e.target.checked,
                  }))
                }
                className="w-4 h-4 accent-blue-500"
              />

              Is Completed
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 active:scale-[0.99] transition rounded-lg py-3 font-semibold cursor-pointer"
          >
            + Add Task
          </button>
        </form>
        <div className="space-y-4">

          {tasks.length === 0 && (
            <div className="text-center bg-slate-900 border border-slate-800 rounded-xl py-10">
              <p className="text-slate-500">
                Add your first task!
              </p>
            </div>
          )}

          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-slate-900 border border-slate-800 hover:border-slate-700 transition rounded-xl p-5 flex items-center justify-between gap-5"
            >
              <div className="min-w-0">

                <h3
                  className={`text-lg font-semibold ${
                    task.isCompleted
                      ? "line-through text-slate-500"
                      : "text-white"
                  }`}
                >
                  {task.title}
                </h3>

                <p className="text-slate-400 mt-1">
                  {task.description || "No description"}
                </p>

                <span
                  className={`inline-block mt-3 text-xs font-medium px-3 py-1 rounded-full ${
                    task.isCompleted
                      ? "bg-green-500/10 text-green-400"
                      : "bg-yellow-500/10 text-yellow-400"
                  }`}
                >
                  {task.isCompleted
                    ? "✓ Completed"
                    : "Pending"}
                </span>

              </div>

              <button
                onClick={() => handleDelete(task.id)}
                className="shrink-0 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white px-4 py-2 rounded-lg transition cursor-pointer"
              >
                Delete
              </button>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default App;