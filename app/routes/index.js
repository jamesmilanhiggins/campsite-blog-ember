import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },
  actions: {
    destroyPost(post) {
      post.destroyRecord();
      this.transitionTo('index');
    },

    savePost3(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    },

    update(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !==undefined) {
          post.set(key, params[key]);
        }
      });
      post.save();
      this.transitionTo('index');
    }
  }
});
