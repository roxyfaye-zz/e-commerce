import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <NavLink activeStyle={{color:"yellow"}} exact to="/" className="navbar-brand" href="/">Coding Outfitters</NavLink>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">

                            <li>
                                <NavLink activeStyle={{color: "yellow"}} to= "/Camping" > Camping Needs </NavLink>
                            </li>
                            <li>
                                <NavLink activeStyle={{color: "yellow"}} to= "/Hiking" > Hiking Gear </NavLink>
                            </li>
                            <li>
                                <NavLink activeStyle={{color: "yellow"}} to= "/Fishing" > Fishing Tackle </NavLink>
                            </li>
                            <li>
                                <NavLink activeStyle={{color: "yellow"}} to= "/About" > About Us</NavLink>
                            </li>
                            <li>
                                <NavLink activeStyle={{color: "yellow"}} to= "/Contact" > Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>

                </div>

            </nav>
        );
    }
}
