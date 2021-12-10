import React,{Component} from "react";
import {connect} from 'react-redux';
import {removeCharecterById} from '../actions';
 class HeroList extends Component{
     render(){
         return(
             <div>
                 <h4>HeroList</h4>
                 <ul className="list-group">
                     {
                     this.props.heroes.map(hero=>{
                         return(
                         <li key={hero.id} className="list-group-item">
                             <div className="list-item">
                                 {hero.name}
                             </div>
                             <div className="list-item right-button">
x
                             </div>
                         </li>
                         )
                     })
                     }
                    

                     
                 </ul>
             </div>
         )
     }
 }
 function mapStateToProps(state){
     return{
        heroes:state.heroes
     }
     
 }
 function removeStateToProps(state){
     return{

     }
 }
 export default connect(mapStateToProps,{removeStateToProps})(HeroList);