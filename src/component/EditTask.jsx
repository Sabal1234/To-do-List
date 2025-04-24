import React, { useState } from 'react';

export const EditTask = (props) => {
  const [newTaskName, setNewTaskName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setNewTaskName(""); 
    setIsEditing(true);
  };

  const handleSave = () => {
      if (newTaskName.trim() === "") {
    alert("Enter the name you want to replace");
    return;
  }

      props.editTask(props.id, { task: newTaskName });
    
    setIsEditing(false);
  };

  return (
    <div className="edit-task">
      {isEditing ? (
        <div>

          <input
            type="text"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <button onClick={handleEditClick}>Edit</button>
      )}
    </div>
  );
};
