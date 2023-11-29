// const heading = React.createElement("h1", 
// {id : "heading"}, 
// "Hello World from React");

const parent = React.createElement("div", {id : "parent"} , [
    React.createElement("div", {id : "child"}, [
        React.createElement("h1", {id : "heading"}, "Iam an h1 tag"),
    React.createElement("h12", {id : "heading1"}, "Iam an h2 tag")
    ]),
    React.createElement("div", {id : "child1"}, [
        React.createElement("h1", {}, "Iam an h1 tag"),
    React.createElement("h12", {}, "Iam an h2 tag")
    ])
]) // React.createElement() creates an object

console.log(parent) // object

const root = ReactDOM.createRoot(document.getElementById("root")); // reactDom is responsible for creating root or assigning root inside react

root.render(parent); // it converts the object to html element which is being understood by web browesers