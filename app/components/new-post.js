import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    savePost1() {
      var params = {
        author: this.get('author'),
        image: this.get('image'),
        location: this.get('location'),
        content: this.get('content'),
        category: this.get('category')
      };
      this.set('addNewPost', false);
      this.sendAction('savePost2', params);
    }
  }
});
