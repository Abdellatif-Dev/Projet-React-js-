import { Link, Route ,Routes} from "react-router-dom";
import { Header } from "./Header";
import { CircuitSlice } from "./CircuitSlice";
import { Store } from "./Store";

export function App(){
    let style = { 
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center'
    };
    let style1 = {
        padding: 8
    };
    let style3 = {
        textDecoration: 'none'
    }
    return<>
    <ul style={style}>
        <li style={style1}><Link to='/' style={style3}><Header text={'accueil'}/></Link></li>
        <li style={style1}><Link to='/ajouter' style={style3}><Header text={'ajouter'}/></Link></li>
    </ul>

    
    <Routes>
        <Route path="/" element={<CircuitSlice/>} />
        <Route path="/ajouter" element={<Store/>}/>
    </Routes>
    </>
}