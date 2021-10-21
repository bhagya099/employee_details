import EmployeeList from "./components/EmployeeList";
import "../src/index.css";
import { Header } from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <EmployeeList />
    </>
  );
};

export default App;
