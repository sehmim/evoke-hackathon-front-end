import React, { Component } from 'react';
import '../App.css';
import { data } from '../dummy/users' 
class Languages extends Component {
    constructor(){
        super()
    }
    state = {
        login: '',
        avatar: '',
        location: '',
        show: false
    }
    INITIAL_STATE = {
        login: '',
        avatar: '',
        location: '',
        show: false 
    }
    viewHandle = ( item )=> {
        this.setState({
            login: item.login,
            avatar: item.avatar_url,
            location: item.lcoation,
            githubLink: item.html_url,
            show: !this.state.show,
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
            {
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
            }
        </ul>

        {
            this.state.show ? 
            <div className="my-card col s12 m7">
            <h2 className="header">{this.state.login}</h2>
            <div className="card horizontal">
              <div className="card-image">
                <img src={this.state.avatar} alt=""></img>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>{this.state.location}</p>
                </div>
                <div className="card-action">
                  <a>{this.state.githubLink}</a>
                </div>
              </div>
            </div>
          </div> :
          null
        }


      </div>
    );
  }
}

export default Languages;

