import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";

const ClientEditForm = (props) => {
  const data = props.clientData;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  useEffect(() => {
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setAge(data.age);
    setEmail(data.email);
  }, []);

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const addClientSubmit = (event) => {
    event.preventDefault();

    const clientData = {
      id: props.clientData.id,
      firstName: firstName,
      lastName: lastName,
      age: age,
      email: email,
    };

    props.onEdit(clientData);

    setFirstName("");
    setLastName("");
    setAge(0);
    setEmail("");
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Client
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={addClientSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                value={firstName}
                onChange={firstNameChangeHandler}
                placeholder="First Name"
              />
              <label htmlFor="floatingInput">First Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                value={lastName}
                onChange={lastNameChangeHandler}
              />
              <label htmlFor="floatingInput">Last Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                id="floatingInput"
                value={age}
                onChange={ageChangeHandler}
              />
              <label htmlFor="floatingInput">Age</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                value={email}
                onChange={emailChangeHandler}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="float float-end">
              <button
                className="btn btn-danger"
                type="button"
                onClick={props.onCancel}
              >
                Cancel
              </button>
              <button className="btn btn-primary" type="submit">
                Save
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ClientEditForm;
