
import './App.scss';
import {useState, useEffect} from "react";
import {Header} from "./components/Header";
import {ListOfCharacter} from "./components/ListOfCharacter";

function App() {
    const [windowWidth, setWindowWidth] = useState();

    const responsive = {
        mobileVersion: windowWidth < 400
    }

    useEffect(() => {
        window.addEventListener('resize', updateDimensions);
        return () =>
            window.removeEventListener('resize',updateDimensions);
    }, [])

    const updateDimensions = () => {
        const width = window.innerWidth
        setWindowWidth(width)
        console.log(windowWidth, window.innerWidth, 'windowWidth')
    }

  return (
    <div className="App">
        <Header mobileVersion={responsive.mobileVersion}/>
        <ListOfCharacter windowWidth={windowWidth}/>
    </div>
  );
}

export default App;
