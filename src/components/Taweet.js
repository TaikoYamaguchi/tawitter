import React, { useState } from "react";
import { dbService, storageService } from "fbase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Taweet = ({ taweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newTaweet, setNewTaweet] = useState(taweetObj.text);
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this nweet?");
    if (ok) {
      await dbService.doc(`taweets/${taweetObj.id}`).delete();
      await storageService.refFromURL(taweetObj.attachmentUrl).delete();
    }
  };
  const toggleEditing = () => setEditing((prev) => !prev);
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`taweets/${taweetObj.id}`).update({
      text: newTaweet,
    });
    setEditing(false);
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewTaweet(value);
  };
  return (
    <div className="taweet">
      {editing ? (
        <>
          <form onSubmit={onSubmit} className="container taweetEdit">
            <input
              type="text"
              placeholder="Edit your nweet"
              value={newTaweet}
              required
              autoFocus
              onChange={onChange}
              className="formInput"
            />
            <input type="submit" value="Update Taweet" className="formBtn" />
          </form>
          <span onClick={toggleEditing} className="formBtn cancelBtn">
            Cancel
          </span>
        </>
      ) : (
        <>
          <h4>{taweetObj.text}</h4>
          {taweetObj.attachmentUrl && <img src={taweetObj.attachmentUrl} />}
          {isOwner && (
            <div className="taweet__actions">
              <span onClick={onDeleteClick}>
                <FontAwesomeIcon icon={faTrash} />
              </span>
              <span onClick={toggleEditing}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Taweet;