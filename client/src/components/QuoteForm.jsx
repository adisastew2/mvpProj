import React from 'react';


const QuoteForm = () => (
    <div>
        Add a Quote:
        <form action="/quotes" method="POST">
            <input type="text" placeholder="name" name="name" />
            <input type="text" placeholder="quote" name="quote" />
            <button type="submit">Submit</button>
         </ form>
    </div>
)


export default QuoteForm;