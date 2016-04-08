import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    register: function() {
      var params = {
        email:  this.get('email'),
        password:  this.get('password')
      }
    this.sendAction('register', params)
      // var newUser = this.store.createRecord('user', {
      //
      // });

      // user.save();
     }
   }
});
