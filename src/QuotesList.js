import React from 'react'
import QuotesItem from './QuotesItem'

const QuotesList = (props) => {
    const { quotes, removeItem, editItem } = props


    return (
        <div>
            {
                quotes.length === 0 ? (
                    <div>
                        <h1>No quotes found</h1>
                        <p> add your first quote</p>
                    </div>
                ) : (
                    <div>
                        <h1> My Quotes - {quotes.length}</h1>
                        {quotes.map((quote) => {
                            return <QuotesItem
                                key={quote.id}
                                {...quote}
                                removeItem={removeItem}
                                editItem={editItem} /> // here {...quote} is the prop we are passing to the QuotesItem Component
                        })}
                    </div>
                )
            }


        </div>
    )
}

export default QuotesList