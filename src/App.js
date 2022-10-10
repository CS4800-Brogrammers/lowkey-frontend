import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


// const baseURL = "http://127.0.0.1:8000/garrett/"
const baseURL = "https://jsonplaceholder.typicode.com/posts/1"
function App() {

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if(!post) return null;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> 
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {post.body}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          <button type= "button" class= "btn btn-secondary">
            Sample Button
          </button>
        </p>
      </header>
    </div>
    
  );
}

export default App;
