import "./App.css";
import styled from "styled-components";
import Admin from "./admin/Admin";
import Employee from "./employee/Employee";
import Front from "./FrontPage/front";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/FrontEnd">
            <Front/>
            </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/employee">
            <Employee />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

const Container = styled.div``;

export default App;