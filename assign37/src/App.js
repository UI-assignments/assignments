import AbountComponent from "./Components/AboutComponent";
import FooterComponent from "./Components/FooterComponent";
import HeaderComponent from "./Components/HeaderComponent";
import NavbarComponent from "./Components/NavbarComponent";
import QuickLinkComponent from "./Components/QuickLinkComponent";

function App() {
  return (
    <div className="App">
      <div className="container">
        <HeaderComponent header='Header' />
        <div className="navigation">
          <NavbarComponent navigate='Navigation' />
          <NavbarComponent navigate='Navigation' />
          <NavbarComponent navigate='Navigation' />
          <NavbarComponent navigate='Navigation' />
        </div>
        <div className="main">
          <AbountComponent about='About' />
          <div className="quick">
            <QuickLinkComponent link='Quick links' />
            <QuickLinkComponent link='Quick links' />
          </div>
        </div>
        <FooterComponent footer='Side plan and copyright info' />

      </div>

    </div>
  );
}

export default App;
