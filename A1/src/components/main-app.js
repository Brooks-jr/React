import React from 'react';
import AddOption from './add-options';
import Header from './header';
import Action from './action';
import Options from './options-list';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: props.options
        };
    }

    // Component lifecycle
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options: options }));
            }
        } catch (e) {
            // do nothing if error
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json =JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('will unmount');
    }

    // Method to delete all options
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    // Method to delete a single option
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({ 
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    // Method to randomly select an option from the options array
    handlePickOption() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    // Method to add options into the options array
    handleAddOption(option) {
        if (!option) {
            return 'Must enter a valid value';
        }else if (this.state.options.indexOf(option) > -1) {
            return 'Option already exist';
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

    render() {
        const title = 'The Decidueye App';
        const subtitle = 'Can\'t decide? Let my App do it!';

        return(
            <div>
                <Header title={title} subtitle={subtitle} />

                <Action hasOptions={this.state.options.length > 0} handlePickOption={this.handlePickOption}/>

                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions} 
                    handleDeleteOption={this.handleDeleteOption} 
                />

                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

App.defaultProps = {
    options: []
};

export default App;