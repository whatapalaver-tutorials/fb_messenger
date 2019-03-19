import React, { Component } from 'react'

import Avatar from '../Layout/Avatar'
import Icon from '../Layout/Icon'

const Threads = ({ threads, history, match }) => {
  return (
    <div className="threads">
      <div className="thread-bar">
        <h2>
          <Icon name="cog" />
          Messenger
          <Icon name="edit" />
        </h2>
      </div>
      <ul className="thread-list">
        {threads.map((thread, i) => (
          <li
            key={i}
            onClick={() => history.push(`${match.url}/${thread.username}`)}
          >
            <Avatar username={thread.username} size="large" />
            <div className="user-name">
              <span>{`${thread.name.first} ${thread.name.last}`}</span>
              <small>{`${thread.lastMessage.message}`}</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Threads
