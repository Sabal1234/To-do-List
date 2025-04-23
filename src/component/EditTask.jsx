import { useState } from "react";

export const EditTask = ({ task, todoList, setTodoList }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.task);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const saveEdit = () => {
    const updatedList = todoList.map((item) =>
      item.id === task.id ? { ...item, task: newName } : item
    );
    setTodoList(updatedList);
    setIsEditing(false);
  };

  return isEditing ? (
    <>
      <input
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        style={{ marginRight: "0.5rem" }}
      />
      <button className="edit-btn" onClick={saveEdit}>Save</button>
    </>
  ) : (
    <button className="edit-btn" onClick={handleEdit}>Edit</button>
  );
};
