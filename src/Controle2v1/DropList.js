import {Component} from 'react'
export class DropList extends Component{
    changer(e){
this.props.selectedItem(e)
    }
    render(){
     return (<select onChange={(e)=>this.changer(e.target.value) }>
    {this.props.items.map((m,i)=><option key={i}>{m} </option>) }
    </select>) }}
    