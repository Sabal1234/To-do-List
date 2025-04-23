export const DeleteToDo = ({ taskName, id, deleteTask }) => {
  return (
    <>
      <span>{taskName}</span>
      <button className="delete-btn" onClick={() => deleteTask(id)}>Delete</button>
    </>
  );
};
