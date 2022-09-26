import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Start from './component/Start';
import Brand from './component/Brand';
import Menu from './component/Menu';
import Information from './component/Information';
import Store from './component/Store';
import Franchise from './component/Franchise';
import New from './component/New';
import Faq from './component/Faq';
import Navbar from "./component/Navbar";
import Kitchen from './component/Kitchen';
import Farm from './component/Farm';
import Bowl from './menu/Bowl';
import Bowl1 from './menu/bowl/Bowl1';
import Bowl2 from './menu/bowl/Bowl2';
import Bowl3 from './menu/bowl/Bowl3';
import Bowl4 from './menu/bowl/Bowl4';
import Salad from './menu/Salad';
import Salad1 from './menu/Salad/Salad1';
import Salad2 from './menu/Salad/Salad2';
import Salad3 from './menu/Salad/Salad3';
import Salad4 from './menu/Salad/Salad4';
import Salad5 from './menu/Salad/Salad5';
import Salad6 from './menu/Salad/Salad6';
import Sand from './menu/Sand';
import Sand1 from './menu/Sand/Sand1';
import Sand2 from './menu/Sand/Sand2';
import Sand3 from './menu/Sand/Sand3';
import Wrap from './menu/Wrap';
import Wrap1 from './menu/Wrap/Wrap1';
import Wrap2 from './menu/Wrap/Wrap2';
import Wrap3 from './menu/Wrap/Wrap3';
import WarmWrap from './menu/WarmWrap';
import WarmWrap1 from './menu/WarmWrap/WarmWrap1';
import WarmWrap2 from './menu/WarmWrap/WarmWrap2';
import WarmWrap3 from './menu/WarmWrap/WarmWrap3';
import Topping from './menu/Topping';
import Dressing from './menu/Dressing';
import Side from './menu/Side';
import Application from './component/Application';
import Reservation from './component/Reservation';
import QuickMenu from './component/QuickMenu';
import Notice from './component/Notice';

function App() {

  return (
    <div id="wrap">
      <div className="header">
        <Navbar />
        <div>
            <Route path="/" exact={true}  component={Start} />
            <Route path="/brand" component={Brand} />
            <Route path="/kitchen" component={Kitchen} />
            <Route path="/farm" component={Farm} />
            <Route path="/menu" component={Menu} />
            <Route path="/bowl" component={Bowl} />
            <Route path="/bowl1" component={Bowl1} />
            <Route path="/bowl2" component={Bowl2} />
            <Route path="/bowl3" component={Bowl3} />
            <Route path="/bowl4" component={Bowl4} />
            <Route path="/salad" component={Salad} />
            <Route path="/salad1" component={Salad1} />
            <Route path="/salad2" component={Salad2} />
            <Route path="/salad3" component={Salad3} />
            <Route path="/salad4" component={Salad4} />
            <Route path="/salad5" component={Salad5} />
            <Route path="/salad6" component={Salad6} />
            <Route path="/sand" component={Sand} />
            <Route path="/sand1" component={Sand1} />
            <Route path="/sand2" component={Sand2} />
            <Route path="/sand3" component={Sand3} />
            <Route path="/warmWrap" component={WarmWrap} />
            <Route path="/warmWrap1" component={WarmWrap1} />
            <Route path="/warmWrap2" component={WarmWrap2} />
            <Route path="/warmWrap3" component={WarmWrap3} />
            <Route path="/wrap" component={Wrap} />
            <Route path="/wrap1" component={Wrap1} />
            <Route path="/wrap2" component={Wrap2} />
            <Route path="/wrap3" component={Wrap3} />
            <Route path="/topping" component={Topping} />
            <Route path="/dressing" component={Dressing} />
            <Route path="/information" component={Information} />
            <Route path="/store" component={Store} />
            <Route path="/franchise" component={Franchise} />
            <Route path="/application" component={Application} />
            <Route path="/reservation" component={Reservation} />
            <Route path="/side" component={Side} />
            <Route path="/new" component={New} />
            <Route path="/notice" component={Notice} />
            <Route path="/faq" component={Faq} />
        </div>
      </div>
      <QuickMenu />
    </div>
  )
}

export default App;