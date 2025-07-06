import "./HomePage.css"
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import Button from "./components/Button";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import TagLine from "./components/TagLine";

function HomePage() {
    return (
        <>
          <NavBar />
          < Hero />
          < Body />
          < Gallery />
          < TagLine />
          < Button />
        </>
      )
}

export default HomePage;