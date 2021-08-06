/* eslint-disable no-new */
import React, { FunctionComponent, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import Pages from "./pages/index";
import "./App.css"
import data from "./data/pageData";
import theme from "./theme";

import { SlideAnimation } from "./utils/animation";

const App:FunctionComponent = () => {
  
  useEffect(() => {
    new SlideAnimation()
  },[])

  return(
    <ThemeProvider theme={theme}>
      <div className="slider-container">
        {data.map((pg) => <Pages key={pg.id} title={pg.title} subTitle={pg.subTitle} number={pg.id} color={pg.color} Icon={pg.Icon} />)}
      </div>
    </ThemeProvider>
  )}

export default App;
