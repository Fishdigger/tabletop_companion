import React from "react"
import {Flex, Box} from "grid-styled"
import Heading from "rebass/dist/Heading"
import CharacterSheetCards from "./CharacterSheetCards"
import DiceCards from "./DiceCards"

export default () => {
    let style = {
        textAlign: "center"
    }
    return (
        <main>
            <Flex flexWrap="wrap" mx={-2}>
                <Box px={2} py={2} width={1/4} />
                <Box px={2} py={2} width={1/2}>
                    <Heading py={30}
                        px={20}
                        fontSize={32}
                        color="black"
                        style={style}>
                        Welcome to Tabletop Champion
                    </Heading>
                </Box>
                <Box px={2} py={2} width={1/4}/>
            </Flex>
            <Flex style={style}>
                <Box width={1/4}/>
                <Box width={1/4}>
                    <CharacterSheetCards/>
                </Box>
                <Box width={1/4}>
                    <DiceCards/>
                </Box>
                <Box width={1/4}/>
            </Flex>
        </main>
    )
}