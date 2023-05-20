import "./assets/style.css";
import HooksUseState from "./pages/hooks/HooksUseState";
import HooksUseEffect from "./pages/hooks/HooksUseEffect";
import "bootstrap/dist/css/bootstrap.min.css";
import HooksUseContext from "./pages/hooks/HooksUseContext/HooksUseContext";
import HooksUseReducer from "./pages/hooks/HooksUseReducer";
import HooksUseCallabck from "./pages/hooks/HooksUseMemo_Callback/HooksUseCallback";
import HooksUseRef from "./pages/hooks/HooksUseRef";
import Routing from "./pages/routing/Routing";
function App(props) {
  console.log(props);
  let styleObj = {
    color: "red",
    backgroundColor: "black",
    textAlign: "center",
    fontSize: "16px",
    width: "90%",
  };
  return (
    <div>
      {/* <h2 style={styleObj}>App Component {props.name}</h2>{" "}
      <p>This is Paragraph</p> */}
      {/* <HooksUseState /> */}
      {/* <HooksUseEffect /> */}
      {/* <HooksUseContext /> */}
      {/* <HooksUseReducer /> */}
      {/* <HooksUseCallabck /> */}
      {/* <HooksUseRef /> */}
      <Routing />
    </div>
  );
}

// function AppOne(props) {
//   console.log(props);

//   return <h2>App One Component {props.obj.city}</h2>;
// }

export default App;
// export { AppOne };
