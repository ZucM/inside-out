import './App.css';

var heading="welcome"
var color="blue"
var username=prompt("Tell us your name")


export default function App() {
  return (
    <div className="App">
      <h1 style={{backgroundColor: color}}>{heading} {username}</h1>
    </div>
  );
}