import founder from "../mock-data/founder.json";
import Founder from "./Founder";
const Manager_one = ({ id, firstName, lastName, mail, contact_number }) => {
  return (
    <>
      <div className="card">
        <div className="container">
          <h4>First Name : {firstName}</h4>
          <h4>Last Name : {lastName}</h4>
          <h4>Email : {mail}</h4>
          <h4>Contact : {contact_number}</h4>
        </div>
      </div>
      {founder.map((founder) => {
        console.log(founder);
        <Founder
          id={founder.id}
          firstName={founder.firstName}
          lastName={founder.lastName}
          mail={founder.email}
          contact_number={founder.contact_number}
        />;
      })}
    </>
  );
};
export default Manager_one;
