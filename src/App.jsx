import "./App.css"
import Hero from "./components/hero";



const App=()=>{
    return <div>
        <nav className="container">
            <div className="logo">
                <img src="/Images/brand_logo.png" alt="Nike" />
            </div>
            <ul>
                <li href="#">MENU</li>
                <li href="#">LOCATION</li>
                <li href="#">ABOUT</li>
                <li href="#">CONTACT</li>

            </ul>
            <button>login</button>
        </nav>
        <Hero/>
    </div>

};
export default App;