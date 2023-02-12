const ClientRow = (props) => {
  const clientInfo = props.clientInfo;

  const onDeleteHandler = () => {
    props.onDelete(clientInfo);
  };

  return (
    <>
      <tr>
        <th scope="row"></th>
        <td>
          {clientInfo.firstName} {clientInfo.lastName}
        </td>
        <td>{clientInfo.age}</td>
        <td>{clientInfo.email}</td>
        <td>
          <button type="button" className="btn btn-primary">
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={onDeleteHandler}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default ClientRow;
