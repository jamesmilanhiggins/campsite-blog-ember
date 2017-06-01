import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      comments: this.store.findAll('comment')
    });
  },
  actions: {
    // destroyPost(post) {
    //   post.destroyRecord();
    //   this.transitionTo('index');
    // },

    // saveComment3(params) {
    //   var newComment = this.store.createRecord('comment', params);
    //   newComment.save();
    //   this.transitionTo('index');
    // },

    savePost3(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    }
  }
});
