import React from 'react'
import {Link} from 'react-router-dom'

class Navbar extends React.Component {
  state = {
    collapse: false
  }
  handleShow = () => this.setState({collapse: !this.state.collapse})
  
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">  
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button onClick={this.handleShow} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={` collapse navbar-collapse ${this.state.collapse ? 'show': ''} `} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sign">Sign Up</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default Navbar