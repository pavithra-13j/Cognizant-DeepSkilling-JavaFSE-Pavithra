import CalculateScore from "./Components/CalculateScore";

function App() {
  return (
    <div>
      <CalculateScore
        name="Pavithra"
        school="Vignan Institute of Engineering for Women"
        total={500}
        goal={450}
      />
    </div>
  );
}

export default App;