import React from "react"
import { useEffect, useState } from "react"
import { DadJokes } from "./DadJokes"
import { Memes } from "./Memes"
import { SillyContentForm } from "./SillyContentForm"

export const SillyContent = () => {
    const [sillyContent, randomContent] = useState ([])
//     useEffect(
//         () => {
            
//         }
//     )
// }, []
    
    return (
        <>
        <h3>Silly Content</h3>
        <DadJokes />
        <Memes />
        </>
    )
}