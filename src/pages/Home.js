import axios from "axios";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// const baseURL = "http://127.0.0.1:8000/garrett/"
const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

const Home = () => {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <p>{post.body}</p>
      <p>
        <button type="button" class="btn btn-secondary">
          Sample Button
        </button>
      </p>
    </div>
  );
};

export default Home;
