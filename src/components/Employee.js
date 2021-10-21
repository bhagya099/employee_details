import Manager from "./Manager";
//import { Link } from "react-router-dom";
import { useState } from "react";

const manager = [
  {
    id: 1,
    firstName: "Anil",
    lastName: "Kumar",
    skill: ["Java Script,", "React JS"],
    dipartment: "IVS",
    contact_number: 98764372,
  },
  {
    id: 2,
    firstName: "Ben",
    lastName: "Kim",
    skill: ["Salesforce"],
    dipartment: "Development",
    contact_number: 98764372,
  },
  {
    id: 3,
    firstName: "Suresh",
    lastName: "Kumar",
    skill: ["Java Script,", "React JS"],
    dipartment: "IVS",
    contact_number: 98764372,
  },
  {
    id: 4,
    firstName: "Jake",
    lastName: "Kim",
    skill: ["Salesforce"],
    dipartment: "Development",
    contact_number: 98764372,
  },
];

export const Employee = (props) => {
  const { id, firstName, lastName, skill, reporting_manager, contact_number } =
    props;
  const [show, setShow] = useState(false);
  return (
    <>
      {/* <div className="card-section"> */}
      <div className="card">
        <div className="container" key={id}>
          <h4>First Name : {firstName}</h4>
          <h4>Last Name : {lastName}</h4>
          <h4>Skill : {skill}</h4>
          {/* <h4>Repoting Manager : {reporting_manager}</h4> */}
          <h4>Contact : {contact_number}</h4>
          <button onClick={() => setShow(true)}>
            {/* <a href="#manager">Manager Details</a> */}
            Manager details
          </button>
        </div>
      </div>
      <div id="manager">
        {manager
          .filter((manager) => {
            //console.log(typeof manager.id);
            if (reporting_manager === manager.id) {
              //console.log(manager);
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
              skill={manager.skill}
              dipartment={manager.dipartment}
              contact_number={manager.contact_number}
              show={show}
              onClose={() => setShow(false)}
            />
          ))}
      </div>
    </>
  );
};
