// const element = React.createElement(
//   "h1",
//   { id: "heading" },
//   "HEllo world from react separate file 2"
// );

const element = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", {}, "I am h1 tag"),
  React.createElement("h1", {}, "I am h2 tag"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
