import React from "react"
import {Box} from "grid-styled"
import TypeCard from "./TypeCard"

export default () => {
    return (
        <div>
            <TypeCard
                imageUrl={"/img/shadowrun-logo.png"}
                linkUrl={"/characters/shadowrun"}
                subHead={"Shadowrun Characters"}
                width={120}
            />
            <TypeCard
                imageUrl={"/img/dnd-logo.jpg"}
                linkUrl={"/characters/dnd"}
                subHead={"D&D 5e Characters"}
                width={120}
            />
        </div>
    )
}