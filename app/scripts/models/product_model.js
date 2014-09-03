/*global Ember*/
EmberProducts.Product = DS.Model.extend({
    name: DS.attr('string'),

    description: DS.attr('string')
});

// probably should be mixed-in...
EmberProducts.Product.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
EmberProducts.Product.FIXTURES = [
  
  {
    id: 0,
    
    name: 'Filson 256',
    
    description: 'Our toughest, most dependable briefcase is appropriate for everyday use in the field. \
      Inside is a wide carrying compartment, two full-length open pockets and sewn-on compartments for calculator, \
      business cards, pencils and pens. Narrow pockets on both ends and full-length outer pockets on both sides. \
      You won\'t find more durability in a fabric briefcase. Meets carry-on requirements. Made in USA.'
    
  },
  
  {
    id: 1,
    
    name: 'Filson 257',
    
    description: 'Protect your laptop in this large briefcase made with our nearly indestructible Rugged Twill. \
      Inside are four roomy full-length sections. One is the perfect size for a laptop computer. \
      More pockets hold a battery pack, diskettes, calculator, business cards, pens, pencils and notebooks. \
      Narrow pockets on both ends, full-length outer pockets on both sides and adjustable, removable leather \
      shoulder strap with brass-plated roller buckle and leather pad. Leather grip and storm flap with snap closures. \
      Double bottom. Meets carry-on requirements. Made in USA.'
    
  }
  
];
