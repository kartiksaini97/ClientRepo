import ClientForm from "./ClientForm";
import { useState } from "react";

const AddClient = (props) => {
  const [addClient, setAddClient] = useState(false);

  const addClientHandler = () => setAddClient(true);

  const onAddHandler = (clientData) => {
    const data = { ...clientData };
    setAddClient(false);
    props.onAddClient(data);
  };

  const onCancelHandler = () => {
    setAddClient(false);
  };

  return (
    <>
      {addClient && (
        <ClientForm
          show={addClient}
          onHide={() => setAddClient(false)}
          onAdd={onAddHandler}
          onCancel={onCancelHandler}
        />
      )}
      <div className="d-flex flex-row m-2">
        <div className="p-2 flex-grow-1">
          <h4>Clients</h4>
        </div>
        <div className="p-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={addClientHandler}
          >
            Add Client
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default AddClient;
