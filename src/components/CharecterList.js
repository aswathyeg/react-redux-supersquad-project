import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addCharecterById} from '../actions';
class CharecterList extends Component{
    render(){
    return(
        <div>
           <h4>charecterList</h4>
           <ul>
               {this.props.charecters.map(charecter=>{
                   return(
                       <li key={charecter.id}>

                       <div>
{charecter.name}
                       </div>
                       <div onClick={()=>this.props.addCharecterById(charecter.id)}>+</div>
                       </li>
                   )
               })}
               <li>

               </li>
           </ul>
        </div> 
    )
}
}
function mapstatetoProps(state){
    console.log('state',state);
    return{
        charecters:state.charecters
    };
}
// function mapDispatchToProps(dispatch){
//     return bindActionCreators({addCharecterById},dispatch)

// }
export default connect(mapstatetoProps,{addCharecterById})(CharecterList);