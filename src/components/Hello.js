import "./Hello.css";

function Hello(props) {
  console.log(props);
  return (
    <div className="Hello">
      I'm {props.name} and I'M {props.age}
    </div>
  );
}

export default Hello;
