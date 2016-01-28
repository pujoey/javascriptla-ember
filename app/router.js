import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('user', {path: ':username'}, function () {
    this.route('repos');
    this.route('settings', function() {
      this.route('profile');
    });
  });
});

export default Router;
