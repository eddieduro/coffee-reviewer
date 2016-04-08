import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  actions: {
    login(){
      let {email, password} = this.getProperties('email', 'password');
      console.log(email, password);
      console.log(this.get("session"));
      this.get("session").login(email, password).then(()=>{
        this.transitionToPreviousRoute();
      }).catch((reason)=>{
        console.log("Error: " + reason);
      });
      this.sendAction('login')
    },
    transitionToPreviousRoute(){
      var previousTransition = this.get('previousTransition');
      if(previousTransition){
        this.set('previousTransition', null);
        previousTransition.retry();
      } else {
        this.transitionTo('index');
      }
    }
  }
});
