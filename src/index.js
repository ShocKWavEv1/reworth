import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./ThemeContext";
import 'semantic-ui-css/semantic.min.css';
import './index.scss';

function ReactRoot() {
    return (
        <ThemeProvider>
            <App />
        </ThemeProvider>
    );
}

ReactDOM.render(<ReactRoot />, document.getElementById("root"));
