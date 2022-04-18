import { useState } from "react";
import OverlayMenu from "./OverlayMenu";
import PlayOptions from "./PlayOptions";
import Header from "./Header";
import './App.css';

function App() {
    const [isMenuActive, activeMenu] = useState(false);

    console.log(process.env.API_URL);

    return (
    <div className="app">
        <Header onMenuClick={() => activeMenu(!isMenuActive)}/>
        <PlayOptions />
        <OverlayMenu 
            isMenuActive={isMenuActive}
            closeMenu={() => activeMenu(false)} 
            />
    </div>
    )
}

export default App;