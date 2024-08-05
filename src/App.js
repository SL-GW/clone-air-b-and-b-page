import "./App.css";
import NavBar from "./NavBar";
import swimmer from "./swimmer.png";
import Hero from "./Hero";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Card
        img={swimmer}
        rating={5.0}
        reviwCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}

export default App;
