import React from 'react';  
import {Switch, Route,HashRouter} from 'react-router-dom'  
  
import P1 from './p1';
import P2 from './p2';
import P3 from './p3';
import P4 from './p4';
import P5 from './p5';
import P6 from './p6';
import P7 from './p7';
import P8 from './p8';
import P9 from './p9';
import P10 from './p10';
import P11 from './p11';
import NotFound from './p404';

console.log(new P7());
new P7().www();
 
const MainRoute = () => (
  <HashRouter>
	  <Switch> 
		<Route exact path="/" component={P1}/>  
		<Route path="/p2" component={P2} />  
		<Route path="/p3" component={P3} />
		<Route path="/p4" component={P4} />
		<Route path="/p5" component={P5} />
		<Route path="/p6" component={P6} />
		<Route path="/p7" component={P7} />
		<Route path="/p8" component={P8} />
		<Route path="/p9" component={P9} />
		<Route path="/p10" component={P10} />
		<Route path="/p11" component={P11} />
		<Route component={NotFound}/>
	  </Switch>
  </HashRouter>
)  
  
export default MainRoute;  