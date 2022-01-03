import React from "react"
import { useEffect, useState } from "react"
import { DiaryEntryForm } from "./DiaryEntryForm"

export const DiaryEntries = () => {
    const [diaryEntries, setDiaryEntry] = useState([])
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
            method: "DELETE"
        }
        ).then(() => {
            fetch("http://localhost:8098/diaryEntries")
                .then(res => res.json())
                .then((data) => {
                    setDiaryEntry(data)
                })
        })
    }
    const loggedInUser = diaryEntries.filter((diaryEntry) => diaryEntry.userId === parseInt(localStorage.getItem("feelings_user")))
    return (
        <div style={{display: "flex", flexWrap: "wrap", flexDirection: "column", justifyContent: "space-around", borderSpacing: "5", textAlign: "center"}} >
            <h2>Let It Out</h2>
            {
                loggedInUser.map(diaryEntry => {
                    return <p style={{fontSize: "16px", color: "seagreen",backgroundColor: "pink", borderStyle: "solid", width: "30%", display: "flex", alignItems: "center"}}
                    key={diaryEntry}>{diaryEntry.entry}
                        -{diaryEntry.datePosted}
                        <div>
                        <button style={{fontSize: "large", color: "seagreen",backgroundColor: "pink", borderStyle: "ridge"}} onClick={() => {
                            deleteEntry(diaryEntry.id)
                        }}>Delete
                        </button>
                        </div>
                        </p>
                })

            }
            <DiaryEntryForm setter={setDiaryEntry} />
        </div>
    )
}