import './App.css'
import { Sidebar } from './components/sidebar/sidebar.component';
import { Navbar } from './components/navbar/navbar.component';
import { Main } from './components/main/main.components';
function App() {
  return (
    <div className="App">
      <div className="sidebar">
       <Sidebar/>
      </div>
      <div className="container">
        <div className="navbar">
      <Navbar/>
      </div>
      <div className="main">
        <Main/>
      </div>

      </div>
     
    </div>
  );
}

export default App;
