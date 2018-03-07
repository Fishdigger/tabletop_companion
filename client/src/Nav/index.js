import React from "react"
import Toolbar from "rebass/dist/Toolbar"
import NavLink from "rebass/dist/NavLink"

export default () => {
    return (
        <nav>
            <Toolbar 
                bg="black"
                color="white"
                py={20}>
                <NavLink href="/" fontSize={20}>Tabletop Champion</NavLink>
                <NavLink ml="auto">Character Sheets</NavLink>
                <NavLink>Dice Roller</NavLink>
                <NavLink>Login</NavLink>
                <NavLink>Register</NavLink>
            </Toolbar>                    
        </nav>
    )
}