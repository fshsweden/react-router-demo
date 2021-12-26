import { render } from "react-dom";
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  HashRouter,
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

/* move this to own file later.. */
const countReducer = function (state = 0, action) {
  console.log("countReducer! action=" + action.type);
  switch (action.type) {
    case "INCREMENT":
      console.log("Increasing!");
      return state + 1;
    case "DECREMENT":
      console.log("Decreasing!");
      return state - 1;
    default:
      return state;
  }
};

let store = createStore(countReducer);

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
          <Route path="page3" element={<Page3 />} />

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />

        </Route>
      </Routes>
    </HashRouter>
  </Provider>,
  rootElement
);