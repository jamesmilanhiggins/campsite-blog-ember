import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  image: DS.attr(),
  location: DS.attr(),
  content: DS.attr(),
  category: DS.attr()
});
