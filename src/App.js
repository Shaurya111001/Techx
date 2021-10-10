import "./App.css";
import { useState } from "react";
import styled from "styled-components";
import Admin from "./admin/Admin";
import Form from "./admin/components/Form";
import Employee from "./employee/Employee";
import Front from "./FrontPage/front";
import Form2 from "./admin/components/Transaction/Form2";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/front">
            <Front/>
            </Route>
          <Route path="/admin">
            <Admin/>
          </Route>
          <Route path="/addemployee">
            <Form />
          </Route>
          <Route path="/Transaction">
            <Form2 />
          </Route>
		  <Route path="/employee">
            <Employee />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

const Container = styled.div`
overflow: hidden;`;

export default App;