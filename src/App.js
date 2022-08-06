import './App.css';
import robots from './data';
import RobotCardList from './components/RobotCardList';

function App() {
  return (
   <div>
      <RobotCardList  robots={robots} />
   </div>
  );
}

export default App;
