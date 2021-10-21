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
    </>
  );
};
export default Manager_one;
