import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';

import { routes } from '../imports/routes/routes';
import '../imports/startup/simple-schema-configuration.js';

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById("app"));
});