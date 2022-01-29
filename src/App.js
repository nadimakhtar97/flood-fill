import './App.css';
import { ApplicationProvider } from './Context/ApplicationContext';
import Layout from './Hoc/Layout';

function App() {
  return (
    <div className="App">
      <ApplicationProvider>
      <Layout></Layout>
      </ApplicationProvider>
    </div>
  );
}

export default App;
