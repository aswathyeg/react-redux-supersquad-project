import React,{Component} from 'react';
import CharecterList from './CharecterList';
import HeroList from './HeroList';

import '../styles/index.css';
export default class App extends React.Component{
    render(){
        return(
            <div className="App">
                SquadProject
                <CharecterList/>
                
                <HeroList/>
                
            </div>
            
        )
    }

}