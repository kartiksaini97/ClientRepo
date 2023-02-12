import ClientRow from "./ClientRow";
import { useState } from "react";
import ClientEditForm from "./ClientEditForm";

const ClientData = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState({});

  const onDeleteHandler = (data) => {
    props.onClientDelete(data);
  };

  const onEditHandler = (data) => {
    setIsEdit(true);
    setEditData(data);
  };

  const onCancelHandler = () => {
    setIsEdit(false);
  };

  const onSaveHandler = (data) => {
    setIsEdit(false);

    console.log(data);
    props.onEdit(data);
  };

  return (
    <>
      {isEdit && (
        <ClientEditForm
          show={isEdit}
          onHide={() => setIsEdit(false)}
          onEdit={onSaveHandler}
          onCancel={onCancelHandler}
          clientData={editData}
        />
      )}
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((client) => (
            <ClientRow
              clientInfo={client}
              onDelete={onDeleteHandler}
              onEdit={onEditHandler}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ClientData;
