import { Route, Routes,Link } from "react-router-dom";
import { About, Home ,Blog} from "./link";

export function Afficher(){
return <>
<ul>
<li> <Link to='/' >About</Link></li>
<li> <Link to='/Home' >Home</Link></li>
<li> <Link to='/Blog' >Blog</Link></li>
</ul>

<Routes>
    <Route path="/" element={<About></About>}/>
    <Route path="/Home" element={<Home></Home>}/>
    <Route path="/Blog" element={<Blog></Blog>}/>
    </Routes>
</>
}