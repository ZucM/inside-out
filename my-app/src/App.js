import './App.css';

var count=0;

export default function App() {

  function likeClickHandler(){
    console.log("clicked", count)
    count++;
  }

  return (
    <div className="App">
      <h1>inside outt</h1>
      <button onClick={likeClickHandler}>Like Me!</button>
    </div>
  );
}