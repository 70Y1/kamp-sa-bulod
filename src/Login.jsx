import React from "react";
import FacebookLogin from "@greatsumini/react-facebook-login";

export default function Login() {

  const handleSuccess = (res) => {
    console.log("Facebook User:", res);

    // Save user temporarily
    localStorage.setItem("user", JSON.stringify(res));

    alert("Login Success!");
    window.location.href = "/";
  };

  return (
    <div style={{ textAlign:"center", marginTop:"100px" }}>
      <h2>Login or Create Account</h2>

      <FacebookLogin
        appId="2005621856722544"
        onSuccess={handleSuccess}
        onFail={(err)=>console.log(err)}
        render={({ onClick }) => (
          <button
            onClick={onClick}
            style={{
              padding:"12px 30px",
              background:"#1877f2",
              color:"white",
              border:"none",
              borderRadius:"6px",
              fontSize:"16px",
              cursor:"pointer"
            }}
          >
            Continue with Facebook
          </button>
        )}
      />
    </div>
  );
}
