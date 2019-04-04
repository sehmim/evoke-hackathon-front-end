import React, { Component } from 'react';
import M from "materialize-css";

class Navbar extends Component {
  render() {
    return (
      <div className="">
        <nav className="grey darken-4">
            <div className="nav-wrapper">
                <div class="nav-wrapper">
                <form>
                    <div class="input-field">
                        <input name='val' 
                          id="search" type="search" 
                          placeholder="Search By Location" required></input>
                        <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                        <i class="material-icons">close</i>
                    </div>
                </form>
                </div>
            </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
