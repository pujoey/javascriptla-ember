import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let token =;
    let url =;
    return $.getJSON(url);
  }
});
