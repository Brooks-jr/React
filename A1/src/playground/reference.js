// =======================
//  JSX - JAVASCRIPT XML
// =======================

// get DOM element ID
const appRoot = document.getElementById('app');
// =============================================================
// =============================================================


// app object
const appInfo = {
    title: 'React App 1',
    subtitle: 'First react app!',
    options: []
};

// get input field data and add to options array
const formSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        appInfo.options.push(option);
        e.target.elements.option.value = '';
        console.log(appInfo.options);
        renderApp();
    }
};

// remove all options
const deleteAllOptions = () => {
    appInfo.options = [];
    renderApp();
};

const getOption = () => {
    const randomNum = Math.floor(Math.random() * appInfo.options.length);
    const option = appInfo.options[randomNum];
    console.log(option);
}

// render app to reactDOM
const renderApp = () => {
    const template = (
        <div>
            <h1>{appInfo.title}</h1>

            {appInfo.subtitle && <p>{appInfo.subtitle}</p>}

            <p>{appInfo.options.length > 0 ? 'here are your options' : 'no options'}</p>

            <p>{'option count = ' + appInfo.options.length}</p>

            <button disabled={appInfo.options.length === 0} onClick={getOption}>What to do?</button>

            <button onClick={deleteAllOptions}>Remove All</button>

            <ol>
                {
                    appInfo.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>

            <form onSubmit={formSubmit}>
                <input type="text" name="option" />
                <button>add option</button>
            </form>
        </div>
    );

    // render template to DOM element
    ReactDOM.render(template, appRoot);
};


// =============================================================
// =============================================================

// call rendering function
renderApp();