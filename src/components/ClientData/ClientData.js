import ClientRow from "./ClientRow";

const ClientData = (props) => {
  const onDeleteHandler = (data) => {
    props.onClientDelete(data);
  };

  return (
    <>
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
            <ClientRow clientInfo={client} onDelete={onDeleteHandler} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ClientData;
