import logo from './logo.svg';
import './App.css';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ContentComponent from './components/ContentComponent';

function App() {
  const employeesArr = [
   
  ];
  return (
    <div className="App">
      
      <HeaderComponent name="home"></HeaderComponent>
     
      
      <ContentComponent employees={employeesArr}></ContentComponent>
     <FooterComponent copyright="vineeth@gmail.com"></FooterComponent>
    </div>
  );
}

export default App;
