import react from "react";
import QuoteForm from './QuoteForm'


const AddQuote = (props) => {
    const { addItem } = props

    const formSubmission = (formData) => {
        //console.log('add quote', formData);
        addItem(formData)
    }
    return (
        <div>
            <h2> Add Quote</h2>
            <QuoteForm formSubmission={formSubmission} />
        </div>
    )
}
export default AddQuote