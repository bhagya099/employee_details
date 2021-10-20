import { Employee } from "./Employee";
//import Data from "../MOCK_DATA.json";
import { Search } from "./Search";
import { useState } from "react";
const emp_details = [
  {
    id: 1,
    firstName: "Anil",
    lastName: "Kumar",
    skill: ["HTML,", "CSS,", "Java Script,", "React JS"],
    reporting_manager: "",
    contact_number: 98764372,
  },
  {
    id: 2,
    firstName: "Ben",
    lastName: "Kim",
    skill: "Salesforce",
    reporting_manager: "",
    contact_number: 98764372,
  },
  {
    id: 3,
    firstName: "Bhagyashree",
    lastName: "Shakrawar",
    skill: ["HTML,", "CSS,", "Java Script,", "React JS"],
    reporting_manager: 1,
    contact_number: 98764372,
  },
  {
    id: 4,
    firstName: "Abhishek",
    lastName: "Shakrawar",
    skill: "Salesforce",
    reporting_manager: 2,
    contact_number: 98764372,
  },
];

const EmployeeList = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      <h1 className="emph1">All Employess details</h1>
      <div className="card-section">
        {emp_details
          .filter((data) => {
            console.log(data);
            console.log(search);
            // if (search === " ") {
            //   return data;
            // } else if (
            //   data.skil.toLowerCase().includes(search.toLowerCase())
            // ) {
            //   return data;
            // }
            return data;
          })
          .map((emp) => (
            <Employee
              id={emp.id}
              firstName={emp.firstName}
              lastName={emp.lastName}
              skill={emp.skill}
              reporting_manager={emp.reporting_manager}
              contact_number={emp.contact_number}
            />
          ))}
      </div>
    </div>
  );
};

export default EmployeeList;
