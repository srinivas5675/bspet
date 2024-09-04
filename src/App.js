// Filename - App.js

import React from "react";
import "./App.css";
import DataEntryForm from "./components/Tabledatacoll";
import DataFetchingComponent from "./components/Servicecall";
function App() {
    return (
        <div>
          <DataEntryForm/>
<DataFetchingComponent/>
        </div>
    );
}

export default App;
