import manager_one from "../mock-data/manager_one.json";
import Managerone from "./Manager_one";

const Manager = ({
  id,
  firstName,
  lastName,
  mail,
  contact_number,
  show,
  onClose,
  reporting_manager,
  reports_to,
}) => {
  if (!show) {
    return null;
  }
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <span className="close-modal" onClick={onClose}>
            &times;
          </span>
          <div className="card">
            <div className="container">
              <h4>First Name : {firstName}</h4>
              <h4>Last Name : {lastName}</h4>
              <h4>Email : {mail}</h4>
              <h4>Contact : {contact_number}</h4>
              <h4>Reports To : {reports_to}</h4>
            </div>
          </div>

          {/* {manager_one
            .filter((manager) => {
              if (reporting_manager === manager.id) {
                return manager;
              } else {
                return null;
              }
            })
            .map((manager) => (
              <Managerone
                id={manager.id}
                firstName={manager.firstName}
                lastName={manager.lastName}
                mail={manager.email}
                contact_number={manager.contact_number}
                reporting_manager={manager.reporting_manager}
              />
            ))} */}
        </div>
      </div>
    </>
  );
};
export default Manager;
