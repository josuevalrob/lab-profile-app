import React from 'react'

class SignPage extends React.Component {
  render(){
    return (
     <form className="container">
      <div className="form-group">
        <label>Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <div className="form-group">
        <label>Campus</label>
        <input type="text" className="form-control" id="exampleInputCampus" aria-describedby="campusHelp" placeholder="Enter Campus" />
      </div>
      <div className="form-group">
        <label>Course</label>
        <input type="text" className="form-control" id="exampleInputCourse" placeholder="Course" />
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label">Check me out</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    )
  }
}

export default SignPage