class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: props.options
        };
    }

    // Method to delete all options
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    // Method to randomly select an option from the options array
    handlePickOption() {
        this.setState(() => {
            const randomNum = Math.floor(Math.random() * this.state.options.length);
            const option = this.state.options[randomNum];
            alert(option);
        });
    }

    // Method to add options into the options array
    handleAddOption(option) {
        if (!option) {
            return 'Must enter a valid value';
        }else if (this.state.options.indexOf(option) > -1) {
            return 'Option already exist';
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            };
        });
    }

    render() {
        const title = 'The Decidueye App';
        const subtitle = 'Can\'t decide? Let my App do it!';

        return(
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} handlePickOption={this.handlePickOption}/>
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

App.defaultProps = {
    options: []
};

// stateless functional component
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'App title'
};

// stateless functional component
const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePickOption} disabled={!props.hasOptions}>what should i do?</button>
        </div>
    );
};

// stateless functional component
const Options = (props) => {
    return(
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.map((option) => <Option key={option} optionText={option} />) }
        </div>
    );
};

// stateless functional component
const Option = (props) => {
    return(
        <div>
            {props.optionText}
        </div>
    );
};


class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return {error: error};
        });
    }

    render() {
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>add option</button>
                </form>
            </div>
        );
    }
}

const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));