import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import "./App.css";
import styled from "styled-components";
import { PageContextProvider as HomePageProvider } from "./pages/Home/context";

const App = () => {
  return (
    <Container>
      <Switch>
        <Route path="/">
          <HomePageProvider>
            <Home />
          </HomePageProvider>
        </Route>
      </Switch>
    </Container>
  );
};

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1003%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/rect%3e%3cpath d='M 0%2c145 C 57.6%2c121.8 172.8%2c17.2 288%2c29 C 403.2%2c40.8 460.8%2c187.4 576%2c204 C 691.2%2c220.6 748.8%2c124.2 864%2c112 C 979.2%2c99.8 1036.8%2c145.8 1152%2c143 C 1267.2%2c140.2 1382.4%2c107 1440%2c98L1440 560L0 560z' fill='rgba(245%2c 245%2c 245%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c458 C 96%2c448.2 288%2c397.4 480%2c409 C 672%2c420.6 768%2c521.8 960%2c516 C 1152%2c510.2 1344%2c407.2 1440%2c380L1440 560L0 560z' fill='rgba(223%2c 223%2c 223%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1003'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
`;
