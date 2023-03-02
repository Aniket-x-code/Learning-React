const Pet = () =>{

    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Luna"),
        React.createElement("h2", {}, "Ribona"),
        React.createElement("h2", {}, "Malfory"),
    ]);

    };

const App = ()=>{
    return React.createElement (
        "div",
        {},
       [
         React.createElement("h1", {}, "adopt me !"),
         React.createElement(Pet),
         React.createElement(Pet),
         React.createElement(Pet),
        
       ]
    ) 
};

    const container = document.getElementById('root');
    const root = ReactDOM.createRoot(container);
    root.render(React.createElement(App));