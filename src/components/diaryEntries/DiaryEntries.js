import React from "react"
import { useEffect, useState } from "react"

export const DiaryEntries = () => {
    const [diaryEntries, setDiaryEntry] = useState ([])
    useEffect(
        () => {
            fetch("http://localhost:8098/diaryEntries")
                .then(res => res.json())
                .then((diaryEntriesArray) => {
                    setDiaryEntry(diaryEntriesArray)
        }
    )
}, []
    )
    return (
        <>
        <h3>Let it Out!</h3>
        {
            diaryEntries.map(diaryEntry => {
            return <p key= {diaryEntry}>{diaryEntry.entry}{diaryEntry.datePosted}</p>})
        }
        </>
    )
}