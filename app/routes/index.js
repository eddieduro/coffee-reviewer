import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return Ember.RSVP.hash({
      user: this.store.findAll('user'),
      coffee: this.store.findAll('coffee'),
      rating: this.store.findAll('rating')
    })
  },
  actions: {

  }
});
