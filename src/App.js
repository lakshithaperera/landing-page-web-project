import {ThemeProvider} from "styled-components";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Product } from "./components/Product/Product";
import GlobalStyles from "./Global.styled";

const theme = {
  colors:{
    buttonTextColor:' hsl(356, 100%, 66%)',
    buttonHoverBackground:'hsl(355, 100%, 74%)',
    whiteColor:'hsl(0, 0%, 100%)',
    headingsTextColor:'hsl(208, 49%, 24%)',
    bodyTextColor: ' hsl(207, 13%, 34%)',
    liteGrayColor: 'hsl(240, 2%, 79%)',
    footerBackgroundColor: 'hsl(240, 10%, 16%)',
    headerBackgroundGradient: 'linear-gradient(to right, hsl(13, 100%, 72%) , hsl(353, 100%, 62%))',
    bodyBackgroundGradient: 'linear-gradient(to right, hsl(237, 17%, 21%) , hsl(237, 23%, 32%))'
    
  },
  tab:'992px',
  mobile:'600px'
}

function App() {
  return (
   <ThemeProvider theme={theme}>
       <GlobalStyles />
       <Home/>
       <Product/>
       <Footer/>
   </ThemeProvider>
  );
}

export default App;
