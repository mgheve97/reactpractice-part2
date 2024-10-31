import { useState } from "react";

export default function Header(props){

    return(
        <header>
            <p>
                Current user: {props.name}
            </p>
        </header>
    )
}