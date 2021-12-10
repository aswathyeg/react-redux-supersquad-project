import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addCharecterById} from '../actions';
class CharecterList extends Component{
    render(){
    return(
        <div>
           <h4>charecterList</h4>
           <ul className="list-group">
               {this.props.charecters.map(charecter=>{
                   return(
                       <li key={charecter.id} className='list-group-item'>

                       <div className='list-item'>
{charecter.name}
                       </div>
                       <div className='list-item right-button'  onClick={()=>this.props.addCharecterById(charecter.id)}>+</div>
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