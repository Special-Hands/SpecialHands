import React from "react";

function AuthAlert1() {
  return (
    <div>
      <div
        className="p-4 mb-4 text-sm text-[black] rounded-lg bg-red-500"
        role="alert"
      >
        <span className="font-medium">Invalid Credentials!</span> Password or Email
        Incorrect
      </div>
    </div>
  );
}

export default AuthAlert1;
