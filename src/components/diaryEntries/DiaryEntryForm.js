import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router";

export const DiaryEntryForm = ({setter}) => {
    const [diaryEntry, updateDiaryEntry] = useState({
        datePosted: "",
        userId:1,
        entry: ""
    }) 

    const history = useHistory()
    
    const addNewEntry = (evt) => {
        evt.preventDefault()
        const newEntry = {
            datePosted: new Date().toLocaleDateString(),
            userId: diaryEntry.userId,
            entry: diaryEntry.entry
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntry)
        }

        return fetch("http://localhost:8098/diaryEntries", fetchOption)
        .then(res => res.json())
        .then(() => {
            fetch("http://localhost:8098/diaryEntries")
        .then(res => res.json())
        .then((diaryEntriesArray) => {
            setter(diaryEntriesArray)
            updateDiaryEntry({
                datePosted: "",
                userId:1,
                entry:""
            })
            })
        
        })}
    
    return (
        <form className="diaryEntryForm">
            <h2 className="diaryEntryForm__title">What's on Your Mind Today?</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Type Here</label>
                    <input value={diaryEntry.entry}
                        onChange={
                            (evt) => {
                                const copy = {...diaryEntry}
                                copy.entry = evt.target.value
                                updateDiaryEntry(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Just start typing... It's okay... only you can see this... I promise :)"
                         />
                </div>
            </fieldset>
            <button onClick={addNewEntry} className="btn btn-primary">
                Save
            </button>
        </form>
    )            
}