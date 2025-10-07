import Header from "./components/Header";
import TaskControls from "./components/TaskControls";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto shadow-lg rounded">
      <Header />
      <TaskControls />
    </div>
  );
};

export default App;
