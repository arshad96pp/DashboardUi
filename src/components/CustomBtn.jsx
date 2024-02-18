import React from "react";

function CustomBtn({children}) {
  return (
    <div className="call_btn">
      <h4>
       {children}
      </h4>
    </div>
  );
}

export default CustomBtn;
