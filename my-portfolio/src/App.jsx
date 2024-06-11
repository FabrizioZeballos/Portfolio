import "./App.css";
import { Description } from "./components/Description/Description";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { ProfilePicture } from "./components/ProfilePicture/ProfilePicture";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <>
      <div className={"general-container"}>
        <div className={"home-container"}>
          <Navbar />
          <ProfilePicture />
          <Description />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
