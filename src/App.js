import "./App.css";
import Parent2022 from "./2022/components/Parent2022";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Route,
  Link,
  Routes,
  useParams,
  BrowserRouter,
} from "react-router-dom";
import { theme2022 } from "./2022/style/theme/theme2022";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      mmb: 515,
      sm: 768,
      cd: 850,
      md: 981,
      lg: 1280,
      xl: 1536,
      xxl: 2000,
    },
  },
  palette: {
    purplePrimary: {
      main: "#673ab7",
    },
    purpleSecondary: {
      main: '#651fff',
    },
  },
});

window.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    let hash = window.location.href;
    // console.log(hash, "location Hash");
    let hashText = hash.split("#")[1];
    // console.log(hashText, "location Hash Text");
    if (hashText !== undefined || hashText !== null) {
      let element = document.getElementById(hashText);
      // console.log(element, "location Hash element");
      element?.scrollIntoView();
    }
  }, 500);
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ThemeProvider theme={theme}>
                <Parent2022 theme={theme2022} />
              </ThemeProvider>
            }
          />
          {/* <Route
            path="/2022"
            element={
              <ThemeProvider theme={theme}>
                <Parent2022 theme={theme2022} />
              </ThemeProvider>
            }
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
