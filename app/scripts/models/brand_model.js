/*global Ember*/
EmberProducts.Brand = DS.Model.extend({
    name: DS.attr('string'),

    logo: DS.attr('string'),

    description: DS.attr('string')
});

// probably should be mixed-in...
EmberProducts.Brand.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
EmberProducts.Brand.FIXTURES = [
  
  {
    id: 0,
    
    name: 'foo',
    
    logo: 'foo',
    
    description: 'foo'
    
  },
  
  {
    id: 1,
    
    name: 'foo',
    
    logo: 'foo',
    
    description: 'foo'
    
  }
  
];
