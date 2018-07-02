
// const appRoot = document.getElementById('app');

// const app = {
//     title: 'Hidden Message',
//     message: ''
// };

// // const toggleMessage = () => {
// //     if (app.message.length <= 0) {
// //         app.message = 'you can see me!';
// //     } else (
// //         app.message = ''
// //     );
// //     renderApp();
// // }

// const toggleMessage = () => { app.message.length <= 0 ? app.message = 'you can see me!' : app.message = '';
//     renderApp();
// }


// const renderApp = () => {

//     const templateThree = (

//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={toggleMessage}>{app.message === '' ? 'Reveal!' : 'Hide!'}</button>
//             <p>{app.message}</p>
//         </div>
//     );

//     ReactDOM.render(templateThree, appRoot);
// };

// renderApp();
// ============================================================================
// ============================================================================


// \\\\\\\\\\\\\\\\\\\\\\\//
//     COMPONENT STATE    //
// \\\\\\\\\\\\\\\\\\\\\\\//

class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        // state object
        this.state = {
            visibility: false
        };
    }
    handleToggle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render(){
        return (
            <div>
                <h1>Hidden Message</h1>
                <button onClick={this.handleToggle}>{this.state.visibility ? 'Hide Message!' : 'Show Message!'}</button>
                {this.state.visibility && (
                    <div>
                        <p>You can see me!</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));
