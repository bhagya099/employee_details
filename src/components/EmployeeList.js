import { Employee } from "./Employee";
//import Data from "../MOCK_DATA.json";
import { Search } from "./Search";
import { useState } from "react";

const emp_details = [
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
    skill: ["HTML"],
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
          .filter((employee) => {
            if (search === "") {
              return employee;
            } else if (
              employee.skill.find((skill) =>
                skill.toLowerCase().includes(search.toLowerCase())
              )
            ) {
              return employee;
            }
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
