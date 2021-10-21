const Founder = ({ id, firstName, lastName, mail, contact_number }) => {
  console.log(firstName);
  return (
    <div className="card">
      <div className="container">
        <h2>Fonder of the company</h2>
        <h4>First Name : {firstName}</h4>
        <h4>Last Name : {lastName}</h4>
        <h4>Email : {mail}</h4>
        <h4>Contact : {contact_number}</h4>
      </div>
    </div>
  );
};

export default Founder;
