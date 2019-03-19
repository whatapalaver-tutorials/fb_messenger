import React, { Component } from 'react'

import * as api from '../../../api/message'
import Conversation from './Conversation'

class ConversationContainer extends Component {
  constructor(props) {
    super(props)

    // hint, add some state here
    this.state = {
      conversation: [],
    }
  }

  componentDidMount() {
    // hint, you should fetch the threads here
    this.fetchConversation(this.props.match.params.username)
  }

  fetchConversation = username => {
    this.setState({
      conversation: [],
    })
    // the following setTimeout is to simulate network latency in order to show a "loading" component
    setTimeout(() => {
      api.fetchConversation(username).then(messages => {
        this.setState({
          conversation: messages,
        })
      })
    }, 1000)
  }

  // https://reactjs.org/docs/react-component.html#componentdidupdate
  componentDidUpdate(prevProps) {
    if (this.props.match.params.username !== prevProps.match.params.username) {
      this.fetchConversation(this.props.match.params.username)
    }
  }

  render() {
    const { conversation } = this.state
    const { match } = this.props

    return (
      // hint, which component and props do you think we should return here?
      <Conversation conversation={conversation} match={match} />
    )
  }
}

export default ConversationContainer
