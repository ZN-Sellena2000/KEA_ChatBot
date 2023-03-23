import React, { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onClickLogin = () => {
    setIsLoggedIn(true);
    console.log("true");
  };
  const onClickLogout = () => {
    setIsLoggedIn(false);
    console.log("false");
  };

  return (
    <div>
      <Toolbar
        isLoggedIn={isLoggedIn}
        onClickLogin={onClickLogin}
        onClickLgout={onClickLogout}
      />

      <div style={{ padding: 16 }}> with Gachon & kakao ! </div>
    </div>
  );
}

export default LandingPage;
