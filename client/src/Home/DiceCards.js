import React from "react"
import {Box} from "grid-styled"
import TypeCard from "./TypeCard"

export default () => {
    return (
        <div>
            <TypeCard
                imageUrl={"/img/d20-black.jpeg"}
                linkUrl={"/dice/shadowrun"}
                subHead={"Shadowrun Dice"}
                width={120}
            />
            <TypeCard
                imageUrl={"/img/d20-red.png"}
                linkUrl={"/dice/dnd"}
                subHead={"D&D Dice"}
                width={120}
            />
        </div>
    )
}