

// let count = 0;

// // add
// const countUp = () => {
//     count++;
//     renderApp();
// }
// // minus
// const countDown = () => {
//     count--;
//     renderApp();
// }
// // reset
// const countReset = () => {
//     count = 0;
//     renderApp();
// }

// const renderApp = () => {
    
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={countUp}>+1</button>
//             <button onClick={countReset}>Reset</button>
//             <button onClick={countDown}>-1</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// };

// renderApp();
// ============================================================================
// ============================================================================


// \\\\\\\\\\\\\\\\\\\\\\\//
//     COMPONENT STATE    //
// \\\\\\\\\\\\\\\\\\\\\\\//

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
        this.handleReset = this.handleReset.bind(this);
        // state object
        this.state = {
            count: props.count
        };
    }

    // component lifecycle
    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);

        if (!isNaN(count)) {
            this.setState(() => ({ count: count }));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }

    handleAdd() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinus() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        })
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAdd}>+1</button>
                <button onClick={this.handleReset}>Reset</button>
                <button onClick={this.handleMinus}>-1</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0
};

ReactDOM.render(<Counter />, document.getElementById('app'));