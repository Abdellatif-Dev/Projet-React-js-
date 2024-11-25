import {specialites,medecins} from './data.js'
import {Titre} from './Titre.js'
import {ListBox} from './ListBox.js'
import {Medecin} from './Medecin.js'


export function Aficher(){
    return <>
    <Titre titre={'les medecins le plus consolter'}/>
    <ListBox tabe={specialites}/>
    <Medecin tab={medecins}/>
    </>
}