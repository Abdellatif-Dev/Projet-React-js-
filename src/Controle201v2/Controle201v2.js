import { useState } from 'react';
import { lunettes,categories } from './data.js';
import { Header } from './Header.js';
import { Lunette} from './Lunette.js';
export function Controle201v2() {
    const [lun,setLun]=useState(lunettes)
    const changeCatego = (c) => {
        console.log(lunettes);
        console.log(c);
        const filteredLunettes = lunettes.filter(e => e.catégorie === c);
        setLun(filteredLunettes);
        console.log(filteredLunettes);
    };
    return (
        <>
            <Header text='Lunettes de luxe' />
            <div style={{textAlign:'center'}}>
                {categories.map((c,i)=><button key={i} style={{margin:'10px',background:"#888"}}
                onClick={()=> changeCatego (c)}>{c}</button>)}
                </div>
         <Lunette tap={lun} />
     </>
    );
}