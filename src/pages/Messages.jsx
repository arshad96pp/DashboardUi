import React, { useState } from "react";

function Messages() {
  const [inputValue, setInputValue] = useState("");
  const [store, setStor] = useState([]);

  const submitHandeler = () => {

    setStor([...store, inputValue]);
        setInputValue(' ')

  };
  return (
    <div className="container chat-container">
      <div className="chat">
        <div className="reciver">
          Helldfsfsfsfsfs
        </div>

        <div className="reciver">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad numquam alias repellendus porro fugit minima ea eaque sint incidunt, maiores omnis deleniti accusamus aspernatur voluptatum quo fuga. Neque, cupiditate? Soluta!
        </div>

        {store?.map((item) => (
          <div className="sender">
          {item}
          </div>
        ))}
      </div>
      <div className="chate-type">
        <div className="input">
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </div>
        <div className="sendBtn">
          <button onClick={submitHandeler}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Messages;
