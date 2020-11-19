import * as React from "react";
const Button = React.lazy(() => import("./Button"));

const App = () => (
  <div>
    <h1>Typescript</h1>
    <h2>App 1</h2>
    <React.Suspense fallback="Loading Button">
      <Button labelName={"Hello World"} onClick={() => { console.log("Hello World") }} />
    </React.Suspense>
  </div>
);

export default App;
