import React from "react"
import { useEffect, useState } from "react"
import { DiaryEntryForm } from "./DiaryEntryForm"

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
    const deleteEntry = (id) => {
        fetch(`http://localhost:8098/diaryEntries/${id}`, {
            method: "DELETE"}
         ).then(()=>{
            fetch("http://localhost:8098/diaryEntries")
            .then(res => res.json())
            .then((data) => {
                setDiaryEntry(data)
         })
        })}
    return (
        <>
        <h3>Let it Out!</h3>
        {
            diaryEntries.map(diaryEntry => {
                return <p key={diaryEntry}>{diaryEntry.entry}
                -{diaryEntry.datePosted}
                <button onClick={() => {
                deleteEntry(diaryEntry.id)
                }}>Delete
                </button>
                </p>})
                
        }   
        <DiaryEntryForm setter={setDiaryEntry} />        
        </>
    )
}