import React, { useRef, useState, useContext } from "react";
import { DiaryDispatchContext } from "./App";

const DiaryItem = ({
  id,
  author,
  content,
  emotion,
  created_date
}) => {
  const { onDelete, onEdit } = useContext(DiaryDispatchContext);

  const localContentInput = useRef();
  const [localContent, setLocalContent] = useState(content);
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const handleClickRemove = () => {
    if (window.confirm(`Do you want to delete #${id} diary post?`)) {
        onDelete(id);
    }
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(`Do you want to edit #${id} diary post?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span className="author_info">
          Author : {author} | Emotion : {emotion}
        </span>
        <br />
        <span className="date">
          {new Date(created_date).toLocaleDateString()}
        </span>
      </div>
      <div className="content">
        {isEdit ? (
          <textarea
            ref={localContentInput}
            value={localContent}
            onChange={(e) => setLocalContent(e.target.value)}
          />
        ) : (
          content
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>Cancel Edit</button>
          <button onClick={handleEdit}>Finish Edit</button>
        </>
      ) : (
        <>
          <button onClick={handleClickRemove}>Delete</button>
          <button onClick={toggleIsEdit}>Edit</button>
        </>
      )}
    </div>
  );
};
export default React.memo(DiaryItem);
