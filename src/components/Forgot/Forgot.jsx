import React from "react";
import { withRouter } from "react-router-dom";
import '../Login/Login.css';

export class Forgot extends React.Component {
  render() {
    return (
      <div className="login">
        <div className="login-form">
          <div className="div">
            <span>Email</span>
            <input className="login-input transition" />
          </div>

          <button className="login-button">
            Send
          </button>
          <span 
            style={{
              alignSelf: 'center',
              fontFamily: 'Montserrat',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: '13px',
              lineHeight: '17px',
              color: '#535151',
            }}>
            New password will be sent to the email
          </span>
        </div>
      </div>
    );
  }
}
export default withRouter(Forgot);
