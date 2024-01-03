import React, { useState, useEffect } from "react";

import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";

import styles from "../../styles/CommentCreateEditForm.module.css";

function CommentEditForm(props) {
  const { id, content, isPrivate: initialIsPrivate, setShowEditForm, setComments } = props;

  const [formContent, setFormContent] = useState(content);
  const [isPrivate, setIsPrivate] = useState(initialIsPrivate); // State for private comments

  useEffect(() => {
    setIsPrivate(initialIsPrivate);
    setFormContent(content);
  }, [content, initialIsPrivate]);

  const handleChange = (event) => {
    setFormContent(event.target.value);
  };

  const handleCheckboxChange = () => {
    setIsPrivate(!isPrivate);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put(`/comments/${id}/`, {
        content: formContent.trim(),
        is_private: isPrivate, // Include is_private in update
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                content: formContent.trim(),
                is_private: isPrivate, // Update is_private in the local state
                updated_at: "now",
              }
            : comment;
        }),
      }));
      setShowEditForm(false);
    } catch (err) {
    //   console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="pr-1">
        <Form.Control
          className={styles.Form}
          as="textarea"
          value={formContent}
          onChange={handleChange}
          rows={2}
        />
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="checkbox"
          id={`private-checkbox-${id}`}
          label="Private Comment"
          checked={isPrivate}
          onChange={handleCheckboxChange}
        />
      </Form.Group>
      <div className="text-right">
        <button
          className={styles.Button}
          onClick={() => setShowEditForm(false)}
          type="button"
        >
          cancel
        </button>
        <button
          className={styles.Button}
          disabled={!content.trim()} // Maybe change to disabled={!formContent.trim()}
          type="submit"
        >
          save
        </button>
      </div>
    </Form>
  );
}

export default CommentEditForm;