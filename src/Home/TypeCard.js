import React from "react"
import Card from "rebass/dist/Card"
import Subhead from "rebass/dist/Subhead"
import Link from "rebass/dist/Link"

export default ({imageUrl, width, linkUrl, subHead}) => {
    return (
        <Link href={linkUrl}>
            <Card width={width}>
                <Subhead p={2} fontSize={20}>
                    {subHead}
                </Subhead>
                <img src={imageUrl} style={{height:120}} alt={subHead}/>
            </Card>
        </Link>  
    )
}