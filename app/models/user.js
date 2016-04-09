import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr(),
  password: DS.attr(),
  ratings: DS.hasMany('rating', {async: true})
});
