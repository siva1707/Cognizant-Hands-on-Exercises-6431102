import './App.css';
import { CalculateScore } from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore
        Name="Siva Sundar"
        School="Kamaraj Higher Secondary School"
        total={495}
        goal={500}
      />
    </div>
  );
}

export default App;
