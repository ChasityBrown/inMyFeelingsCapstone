//This is a Controller Component. Its only responsibility to 
//control the behavior of the system and maps URLs to components.
import React from "react"
import { Route } from "react-router-dom"
import { Quotes } from "./components/quotes/Quotes"
import { SillyContent } from "./components/sillyContent/SillyContent"
import { DiaryEntries } from "./components/diaryEntries/DiaryEntries"

import { FaveSongs } from "./components/songs/FaveSongs"


export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/quotes">
                <Quotes />
            </Route>
            <Route exact path="/sillycontent">
                <SillyContent />
            </Route>
            <Route exact path="/diary">
                <DiaryEntries />
            </Route>
            <Route exact path="/songs">
                <FaveSongs />
            </Route>
        </>
    )
}
