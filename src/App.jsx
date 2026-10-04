import "./App.css";
import UserCard from "./components/UserCard";

//  function App() {
//   return (
//     <>
//       <header>

//       </header>

//       <main>
        
//       </main>


//     <footer>

//     </footer>
//     </>
//   );
// }
const users = [
  {
    id: 1,
    fullname: "Ali Ahmadi",
    role: "Frontend Developer",
    avatar: "https://i.pravatar.cc/150?img=12",
    isAvailable: true,
  },
  {
    id: 2,
    fullname: "Sara Mohammadi",
    role: "UI/UX Designer",
    avatar: "https://i.pravatar.cc/150?img=47",
    isAvailable: true,
  },
  {
    id: 3,
    fullname: "Reza Karimi",
    role: "Backend Developer",
    avatar: "https://i.pravatar.cc/150?img=33",
    isAvailable: false,
  },
  {
    id: 4,
    fullname: "Maryam Hosseini",
    role: "Project Manager",
    avatar: "https://i.pravatar.cc/150?img=44",
    isAvailable: true,
  },
];

function App() {
  return (
    <div className="app">
      <h1>تیم ما</h1>

      <div className="users-container">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App
