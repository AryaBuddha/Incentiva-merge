import {Route, Switch} from 'react-router-dom'

import Navbar from './Components/Shared/Navbar/Navbar.jsx'
import Insights from './Components/Insights/Insights'
import StudyMode from './Components/StudyMode/StudyMode'
import Tasks from './Components/Tasks/Tasks'
import Notes from './Components/Notes/Notes'


const App = () => {
  return (
    <Switch>
      <Navbar>
        <Route exact path="/tasks" component={Tasks}/>
        <Route exact path="/notes" component={Notes}/>
        <Route exact path="/study" component={StudyMode}/>
        <Route exact path="/insights" component={Insights}/>
        <Route exact path="/" component={Tasks}/>
      </Navbar>
    </Switch>
  );
}

export default App;
