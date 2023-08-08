import React from 'react'

function Magic(props) {
  return (
    <div>
      <h2>Question: {props.question}</h2>
      <h3>Answer: {props.result}</h3>
    </div>
  )
}

export default Magic
