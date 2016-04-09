import DS from 'ember-data';

export default DS.Model.extend({
  roaster: DS.attr(),
  blend: DS.attr(),
  notes: DS.attr(),
  price: DS.attr(),
  ratings: DS.hasMany('ratings', {async: true})
});
