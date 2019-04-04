import React from 'react'
import PropTypes from 'prop-types'
import ConversationBar from './ConversationBar'
import ConversationContent from './Content'

const Conversation = ({
  conversation, match
}) => {
  const { username } = match.params

  return ([
    <ConversationBar
      key="bar"
      username={username}
      match={match}
      conversation={conversation}
    />
    ,
    <ConversationContent
      key="content"
      match={match}
      conversation={conversation}
      username={username}
    />
  ])
}

Conversation.propTypes = {
  conversation: PropTypes.array,
  match: PropTypes.object.isRequired,
}

export default Conversation