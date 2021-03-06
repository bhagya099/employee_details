import Manager from "./Manager";
import { useState } from "react";
import manager from "../mock-data/manager_details.json";

export const Employee = (props) => {
  const {
    id,
    firstName,
    lastName,
    skill,
    reporting_manager,
    contact_number,
    email,
    reports_to,
  } = props;
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="emp_card card">
        <div className="container" key={id}>
          <h4>First Name : {firstName}</h4>
          <h4>Last Name : {lastName}</h4>
          <h4>Email : {email}</h4>
          <h4>Skill : {skill}</h4>

          <h4>Contact : {contact_number}</h4>
          <h4>Reports To : {reports_to}</h4>
          <button className="SearchButton" onClick={() => setShow(true)}>
            Manager details
          </button>
        </div>
      </div>
      <div>
        {manager
          .filter((manager) => {
            if (reporting_manager === manager.id) {
              return manager;
            } else {
              return null;
            }
          })
          .map((manager) => (
            <Manager
              id={manager.id}
              firstName={manager.firstName}
              lastName={manager.lastName}
              mail={manager.email}
              contact_number={manager.contact_number}
              show={show}
              onClose={() => setShow(false)}
              reporting_manager={manager.reporting_manager}
              reports_to={manager.reports_to}
            />
          ))}
      </div>
    </>
  );
};
