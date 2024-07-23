import "./index.css";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <header>
        <div className="circle"></div>
      </header>
      <Section color="blue" text="one" />
      <Section color="orange" text="two" />
      <Section color="green" text="three" />
      <Section color="gold" text="four" />
      <Section color="coral" text="five" />
      <Section color="silver" text="six" />
      <Section color="pink" text="seven" />
      <Section color="brown" text="eight" />
      <Section color="black" text="nine" />
      <Section color="yellow" text="ten" />
    </div>
  );
}

export default App;
