import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Input from "../Form/Input";
import P from "../Form/P";
import Button from "../Form/Button";
import { logIn } from "../../api/auth";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      redirectToReferrer: false
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { history } = this.props;
    const { password, email } = this;

    if (!password || !email) {
      alert("Email and password are required");
      return;
    }

    const { status } = await logIn({ password, email });

    if (status === 200) {
      this.setState({ redirectToReferrer: true });
    }
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <form className="form-signin">
        <div className="form-group">
          <h2 className="form-signin-heading">Please sign in</h2>
        </div>
        <div className="form-group">
          <Input
            type="email"
            placeholder="Enter email"
            defaultValue={this.email}
            onChange={e => (this.email = e.target.value)}
          />
          <Input
            type="password"
            placeholder="Enter password"
            className="form-control"
            defaultValue={this.password}
            onChange={e => (this.password = e.target.value)}
          />
        </div>
        <Button primary large block type="submit" onClick={this.handleSubmit}>
          Sign in
        </Button>
        <P>Disclaimer, this network is highly addictive.</P>
        <P quote={true}>
          "My friends went from a few dozens to a few thousand after I joined
          this network!" - Anonymous
        </P>
      </form>
    );
  }
}

export default Login;
