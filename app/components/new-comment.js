import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    saveComment1() {
     var params = {
       author: this.get('author'),
       rating: this.get('rating'),
       content: this.get('content')
     };
     this.set('addNewComment', false);
     this.sendAction('saveComment2', params);
   }
  }
});
