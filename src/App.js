import "./styles.css";

export default function App() {
  //const name = "Sowmya";
  return (
    <div className="App">
      <Welcome
        name="Sowmya"
        pic="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
      />
      <Welcome
        name="Gorripati"
        pic="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg"
      />
    </div>
  );
}

function Welcome(props) {
  return (
    <div>
      <h1>Hello {props.name} !!</h1>
      <img className="pica" src={props.pic} alt="profile" />
    </div>
  );
}
