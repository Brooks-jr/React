import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

const now = moment();
// console.log(now.format('Do MMM, YYYY'));

export default class ExpenseForm extends React.Component {
    // default states
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    };


    // DESCRIPTION on change HANDLER
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    // NOTE on change HANDLER
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };
    // AMOUNT on change HANDLER
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    // DATE on change HANDLER
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };

    // FOCUSED on change HANDLER
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    // SUBMIT HANDLER
    onSubmit = (e) => {
        e.preventDefault();
        // ERROR
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: '*Description and Amount Fields Required' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Description" autoFocus value={this.state.description} onChange={this.onDescriptionChange} />
                    <input type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange} />
                    <SingleDatePicker date={this.state.createdAt} onDateChange={this.onDateChange} focused={this.state.calendarFocused} onFocusChange={this.onFocusChange} numberOfMonths={1} isOutsideRange={() => false} />
                    <textarea cols="40" rows="10" placeholder="Note (optional)" value={this.state.note} onChange={this.onNoteChange}></textarea>
                    <button>Add+</button>
                </form>
            </div>
        )
    }
}
