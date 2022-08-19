import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import { connectDB } from "./database.js";
import { createAdminUser } from "./libs/createUser.js";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="yuuso.us.auth0.com"
      clientId="zQSGY96u0wKG6bMFOG4DpFVERfXvuUfW" 
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

async function main() {
  await connectDB();
  await createAdminUser();
  app.listen(app.get("port"));

  console.log("Server on port", app.get("port"));
  console.log("Environment:", process.env.NODE_ENV);
}

main();