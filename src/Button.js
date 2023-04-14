import React from 'react';

function Button(props) {
  return (
    <button class="btn btn-primary"　onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default Button;
