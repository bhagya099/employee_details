const Manager = (props) => {
  const { id, firstName, lastName, mail, contact_number, show, onClose } =
    props;
  if (!show) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <span class="close-modal" onClick={onClose}>
          &times;
        </span>
        <div className="card">
          <div className="container" key={id}>
            <h4>First Name : {firstName}</h4>
            <h4>Last Name : {lastName}</h4>
            <h4>Email : {mail}</h4>
            <h4>Contact : {contact_number}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Manager;
