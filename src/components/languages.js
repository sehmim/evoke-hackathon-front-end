import React, { Component } from 'react';
import '../App.css';
import { data } from '../dummy/users' 
import topLanguagesUsedInThisCity from '../dummy/lang';
import Developer from './developers';
class Languages extends Component {
    constructor(){
        super()
    }
    state = {
        topDevs: [],
        show: false
    }
    INITIAL_STATE = {
        topDevs: [],
        show: false 
    }
    viewHandle = ( item )=> {
        this.setState({
            show: !this.state.show,
        }, ()=> {
            this.setState({
                topDevs: item.topDevelopersWhoUseThisLanguageInThisCity
            })
        })
    }
    viewHandleTwo = ()=> {
        this.setState({
            ...this.INITIAL_STATE
        })
    }
  render() {  
    return (
      <div>
        <ul className="collection">
            {/* {
                data.items.map( (item, index)=> {
                    return (
                    <a onClick={()=> this.viewHandle(item)} className="mycard card-panel hoverable collection-item avatar">
                        <img src={item.avatar_url} className="circle"></img>
                        <h4> { item.login }</h4>
                            <p><b>Location</b><br></br>
                                { item.location }
                            </p>
                        <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                    </a>)
                })
            } */}
            {
                topLanguagesUsedInThisCity.map( (item, index)=>{
                    return(
                    <a onClick={()=> this.viewHandle(item)} className="mycard card-panel hoverable collection-item center">
                        <img src={item.img} className="circle center"></img>
                        <h4 className="center"> { item.languageName }</h4>
                        <a href="#!" className="secondary">
                            <i className="material-icons">grade</i>
                            <i className="material-icons">grade</i>
                            <i className="material-icons">grade</i>
                            <i className="material-icons">grade</i>
                            <i className="material-icons">grade</i>
                        </a>
                    </a>
                    )         
                })
            }
        </ul>

        {
                <Developers className="my-card col s12 m7" sendState={this.state} />
        }
        {console.log(this.state)}
      </div>
    );
  }
}


export default Languages;

const Developers = (props) => {
    return (
        props.show ? 
        <div>
            { props.topDevs.map( item => {
                return(
                    <div className="my-card col s12 m7">
                        <h2 className="header">{item.login}</h2>
                        <div className="card horizontal">
                        <div className="card-image">
                            <img src={item.avatar} alt=""></img>
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                            <p>{props.languagesUsed}</p>
                            </div>
                            <div className="card-action">
                            <a>{props.url}</a>
                            </div>
                        </div>
                        </div>
                    </div>
                )
            } ) }
        </div> : null
    )
}
