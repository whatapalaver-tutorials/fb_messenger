import React, { Component } from "react";
import "./App.css";
import Modal from "./Modal";
import users from "./mocks/users.js";
import messages from "./mocks/messages.js";
import Footer from './Footer.js';
import TopBar from './components/TopBar';
import Messenger from './components/Messenger';

const filterMessageByUsername = ({ username } = {}) => message =>
  message.from === username || message.to === username;

class App extends Component {
  constructor() {
    super();
    const selectedUser = users[0];
    this.state = {
      selectedUser: selectedUser,
      conversation: messages.filter(filterMessageByUsername(selectedUser)),
      showModal: false
    };
  }

  selectUser = (user = {}) => {
    this.setState({
      selectedUser: user,
      conversation: messages.filter(filterMessageByUsername(user))
    });
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal
    }));
  };

  showSettings = () => {
    this.toggleModal();
  };

  render() {
    const selectedUser = this.state.selectedUser;
    const styledConversation = this.state.conversation.map((message, i) => (
      <div
        key={i}
        className={`message-wrapper ${
          message.from === "you" ? "sent" : "received"
        }`}
      >
        {message.to === "you" && (
          <img
            src={`images/${selectedUser.username}_lg.jpg`}
            alt={`${selectedUser.username}`}
            className="avatar medium"
          />
        )}
        <div className="message">{message.message}</div>
        {message.from === "you" && (
          <div className="message-read">
            <i className="icon fa fa-check-circle" />
          </div>
        )}
      </div>
    ));

    const loggedUser = { name: "Alex" };
    const { showModal } = this.state;

    return (
      <div className="app">

        <Modal show={showModal} toggleModal={this.toggleModal} />

        <TopBar userPosition = {this.userPosition} 
                loggedUserName={loggedUser.name} 
                toggleModal={this.toggleModal}
        />

        <Messenger showSettings={this.showSettings}
                   selectedUser={selectedUser}
                   styledConversation={styledConversation}
        />

        <Footer />
      </div>
    );
  }
}

export default App;
