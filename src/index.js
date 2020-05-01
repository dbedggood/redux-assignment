import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./redux"

import "./styles/index.scss"
import App from "./App"

ReactDOM.render(
    <Provider store={store}>
        <Router basename="/albums">
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Router>
    </Provider>,
    document.getElementById("root")
)
