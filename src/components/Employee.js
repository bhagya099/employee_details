export const Employee = (props) => {
  const { id, firstName, lastName, skill, contact_number } = props;
  return (
    <div className="card">
      <div className="container" key={id}>
        <h4>First Name : {firstName}</h4>
        <h4>Last Name : {lastName}</h4>
        <h4>Skill : {skill}</h4>
        {/* <h4>Repoting Manager : {reporting_manager}</h4> */}
        <h4>Contact : {contact_number}</h4>
      </div>
    </div>
  );
};
