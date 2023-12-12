import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-status-2-самолет-l');
  this.route('i-i-s-status-2-самолет-e',
  { path: 'i-i-s-status-2-самолет-e/:id' });
  this.route('i-i-s-status-2-самолет-e.new',
  { path: 'i-i-s-status-2-самолет-e/new' });
});

export default Router;
