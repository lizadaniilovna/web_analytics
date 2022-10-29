import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Result } from "./Result";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Step1} />
          <Route path="/step2" component={Step2} />
          <Route path="/step3" component={Step3} />
          <Route path="/result" component={Result} />
        </Switch>
      </Router>

      <a href="https://metrika.yandex.ru/stat/?id=90966830&amp;from=informer" target="_blank" rel="noreferrer">
        <img
          src="https://metrika-informer.com/informer/90966830/3_1_20EC20FF_00CC00FF_0_pageviews"
          style={{ width: "88px", height: "31px", border: 0 }} alt="Яндекс.Метрика"
          title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)" />
      </a>
    </>
  );
}

export default App;