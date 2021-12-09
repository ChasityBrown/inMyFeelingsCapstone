import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";

export const DiaryEntryForm = (renderFunc) => {
    const [diaryEntry, updateDiaryEntry] = useState({
        entry: "",

    })

    const history = useHistory()
    
    const addNewEntry = (evt) => {
        evt.preventDefault()
        const newEntry = {
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
                history.push("/diary")
            })
        .then(()=> {
            renderFunc()}
        )
        
        }
    return (
        <form className="diaryEntryForm">
            <h2 className="diaryEntryForm__title">What's on Your Mind Today?</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="entry">Type Here</label>
                    <input
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