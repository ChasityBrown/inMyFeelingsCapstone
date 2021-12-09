//This is a Controller Component. Its only responsibility to 
//control the behavior of the system and maps URLs to components.
import React from "react"
import { Route } from "react-router-dom"
import { QuoteForm } from "./components/quotes/QuoteForm"
import { Quotes } from "./components/quotes/Quotes"
import { SillyContent } from "./components/sillyContent/SillyContent"
import { SillyContentForm } from "./components/sillyContent/SillyContentForm"
import { DiaryEntries } from "./components/diaryEntries/DiaryEntries"
import { DiaryEntryForm } from "./components/diaryEntries/DiaryEntryForm"
import { FaveSongForm } from "./components/songs/FaveSongForm"
import { FaveSongs } from "./components/songs/FaveSongs"


export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/quotes">
                <Quotes />
            </Route>
            <Route exact path="/sillycontent">
                <SillyContent/>
            </Route>
            <Route exact path="/diary">
                <DiaryEntries/>
                <DiaryEntryForm/>
            </Route>
            <Route exact path="/songs">
                <FaveSongs/>
            </Route>
            <Route path="/songs/form">
                <FaveSongForm/>
            </Route>
            <Route path="/sillycontent/form">
                <SillyContentForm/>
            </Route>
            <Route path="/quotes/form">
                <QuoteForm/>
            </Route>
        </>
    )
}
