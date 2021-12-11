import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router";

export const QuoteForm = ({quoteSetter}) => {
    const [quote, updateQuotes] = useState({
        text: "",
        author: "",
        userId:1,
        datePosted: ""

    })
    const history = useHistory()
    
    const addNewQuote = (evt) => {
        evt.preventDefault()
        const newQuote = {
            text: quote.text,
            author: quote.author,
            userId: parseInt(localStorage.getItem("feelings_user")),
            datePosted: new Date().toLocaleDateString()
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newQuote)
        }

        return fetch("http://localhost:8098/quotes", fetchOption)
        .then(res => res.json())
        .then(() => {
            fetch("http://localhost:8098/quotes")
            .then(res => res.json())
            .then((data) => {
                quoteSetter(data)
                updateQuotes({
                    text: "",
                    author: "",
                    userId:1,
                    datePosted: ""
                })
            })
        }
        )}
    return (
        <form className="QuoteForm">
            <h2 className="QuoteForm__title">Wanna leave a quote of your own?</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Quote</label>
                    <input value={quote.text}
                        onChange={
                            (evt) => {
                                const copy = {...quote}
                                copy.text = evt.target.value
                                updateQuotes(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="What did they say?"
                         />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Author</label>
                    <input value={quote.author}
                        onChange={
                            (evt) => {
                                const copy = {...quote}
                                copy.author = evt.target.value
                                updateQuotes(copy)
                            }
                    }
                    required autoFocus
                    type="text" 
                    className="form-control"
                    placeholder="Who said this?" />
                </div>
            </fieldset>
            <button onClick={addNewQuote} className="btn btn-primary">
                Save
            </button>
        </form>
    )            
}