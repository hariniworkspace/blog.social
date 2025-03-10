import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataContext from "./Context/DataConstext";

const EditPost = () => {
  const { posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle } =
    useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title || "");
      setEditBody(post.body || "");
    }
  }, [post, setEditTitle, setEditBody]);

  return (
    <main className="new-post">
      {editTitle && (
        <>
          <h2 className="NewPost">Edit Post</h2>
          <form
            className="newPostForm"
            onSubmit={(e) => {
              e.preventDefault();
              handleEdit(id);
            }}
          >
            <label htmlFor="postTitle">Title :</label>
            <input
              id="postTitle"
              type="text"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor="postBody">Post: </label>
            <textarea
              id="postBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button
              type="submit"
              onClick={() => handleEdit(post.id, editTitle, editBody)}
            >
              Submit
            </button>
          </form>
        </>
      )}
    </main>
  );
};
export default EditPost;
