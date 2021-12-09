import React from "react"
import { useEffect, useState } from "react"
import { DiaryEntryForm } from "./DiaryEntryForm"

export const DiaryEntries = () => {
    const [diaryEntries, setDiaryEntry] = useState ([])
    useEffect(
        () => {
        }
    ), []
    
    const setter = () => {
        return fetch("http://localhost:8098/diaryEntries")
        .then(res => res.json())
        .then((diaryEntriesArray) => {
            setDiaryEntry(diaryEntriesArray)
        })}
    return (
        <>
        <h3>Let it Out!</h3>
        {
            diaryEntries.map(diaryEntry => <DiaryEntryForm key={diaryEntry.id} entry={diaryEntry} renderFunc={setter} />)
                
        }   
                
        </>
    )
}
            {/* return <p key={diaryEntry.id}>{diaryEntry.entry}
            -{diaryEntry.datePosted}</p>}) */}