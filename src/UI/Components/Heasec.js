import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Section from "./Section";
import Header from "./Header"

export default function Heasec() {
    const { isAuthenticated } = useAuth0();
    return(

      isAuthenticated && (
    <div className="App-header">
          <>
            <Header />
            <Section/>
          </>
    )
      </div>
    )
    )
}
