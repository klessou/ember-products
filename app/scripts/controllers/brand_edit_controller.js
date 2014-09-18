EmberProducts.BrandEditController = Ember.ObjectController.extend({
  needs: 'brand',

  edit: true,

  created: function() {
    return moment(this.get('model.created')).fromNow();
  }.property('model.created'),

  changed: function() {
    return moment(this.get('model.changed')).fromNow();
  }.property('model.changed'),

  actions: {
    save: function(){
      self = this;
      this.transitionToRoute('brand',this.get('model'));
    },
    cancel: function() {
      self = this;
      this.get('bufferBackup').forEach(function(attr){
        self.get('controllers.brand.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('brand', this.get('model'));
    }
  }
});

