import data from './etsy.json'
import Listing from "./components/Listing.tsx";
import './App.css'
function App() {
    return (
        <Listing items={data}></Listing>
    );
}
export default App
