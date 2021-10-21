import { Employee } from "./Employee";
import emp_details from "../mock-data/emp_details.json";
import { Search } from "./Search";
import { useState } from "react";

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
              return null;
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
              email={emp.email}
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
