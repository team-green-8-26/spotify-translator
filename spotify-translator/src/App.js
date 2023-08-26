import './App.css';
import SampleAPIInteractions from './components/SampleAPIInteractions';
import HeaderContainer from './components/HeaderContainer';
import BodyContainer from './components/BodyContainer';

function App() {
  return (
    <div className="App">
      <SampleAPIInteractions/>
      <HeaderContainer />
      <BodyContainer />
    </div>
  );
}

export default App;
