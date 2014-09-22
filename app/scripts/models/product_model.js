/*global Ember*/
EmberProducts.Product = DS.Model.extend({
    name: DS.attr('string'),

    category: DS.attr('string'),
    brand: DS.attr('string'),
    usage: DS.attr('string'),

    mainImage: DS.attr('string'),
    description: DS.attr('string'),
    features: DS.attr('string'),
    specialFeatures: DS.attr('string'),
    fabricInfo: DS.attr('string'),
    productCare: DS.attr('string'),
    
    alternateNames: DS.attr('string'),

    changed: DS.attr('date'),
    created: DS.attr('date'),
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

    category: 'Accessories',
    brand: 'Filson',
    usage: 'Workwear; Everyday; Travel',
    
    mainImage: 'http://www.filson.com/images/products/detail/70256-alt-6.jpg',
    description: 'Our toughest, most dependable briefcase is appropriate for everyday use in the field. \
      Inside is a wide carrying compartment, two full-length open pockets and sewn-on compartments for calculator, \
      business cards, pencils and pens. Narrow pockets on both ends and full-length outer pockets on both sides. \
      You won\'t find more durability in a fabric briefcase. Meets carry-on requirements. Made in USA.',
    features: 'Zipper with storm flap 2 stow pockets, 2 utility pockets, \
    2 interior stow pockets, \
    2 interior utility pockets Abrasion- and water-repellent fabric with leather reinforcements \
    Removable, adjustable Bridle Leather shoulder strap with pad Large inner compartment with dividers \
    Meets standard airline carry-on size requirements',
    specialFeatures: '1 interior brass clasp to secure keys; 1 bridle leather carrying/hanging loop.',
    fabricInfo: 'Made from 22-oz. 100% cotton oil finish Rugged Twill with 100% Genuine Bridle Leather.',
    productCare: 'Wipe or brush clean only.',

    alternateNames: '',

    changed: '2014-09-01T00:00:00Z',
    created: '2014-09-01T00:00:00Z',
    
  },
  
  {
    id: 1,
    
    name: 'Filson 257',
    
    category: 'Accessories',
    brand: 'Filson',
    usage: 'Travel, Field, Casual, Business',

    mainImage: 'http://www.filson.com/images/products/detail/70257-alt-9.jpg',
    description: 'Protect your laptop in this large briefcase made with our nearly indestructible Rugged Twill. \
      Inside are four roomy full-length sections. One is the perfect size for a laptop computer. \
      More pockets hold a battery pack, diskettes, calculator, business cards, pens, pencils and notebooks. \
      Narrow pockets on both ends, full-length outer pockets on both sides and adjustable, removable leather \
      shoulder strap with brass-plated roller buckle and leather pad. Leather grip and storm flap with snap closures. \
      Double bottom. Meets carry-on requirements. Made in USA.',
    features: 'Water Repellent. \
      Two-way brass zipper with leather pulls and storm flap with bridle leather snap tab closure. \
      2 full length interior open pockets; 1 non-padded compartment for laptop; \
      1 interior business card pocket; 1 interior calculator/cell phone pocket; \
      2 full width exterior open side pockets; 2 small exterior end utility pockets. Formerly style #257',
    specialFeatures: '1 interior brass clasp to secure keys; 1 bridle leather carrying/hanging loop.',
    fabricInfo: 'Made from 22-oz. 100% cotton oil finish Rugged Twill with 100% Genuine Bridle Leather.',
    productCare: 'Wipe or brush clean only.',
    
    changed: '2014-09-01T00:00:00Z',
    created: '2014-09-01T00:00:00Z',
  },

  {
    id: 2,
    
    name: 'Bleu de Chauffe Courssier',
    
    category: 'Accessories',
    brand: 'Bleu de Chauffe',
    usage: 'Travel, Field, Casual, Business',

    mainImage: 'http://i168.photobucket.com/albums/u170/glltn/2014-09/Bleu-De-Chauffe-For-Heschung-Fall-Winter-2014-Collection-01.jpg',
    description: 'Protect your laptop in this large briefcase made with our nearly indestructible Rugged Twill. \
      Inside are four roomy full-length sections. One is the perfect size for a laptop computer. \
      More pockets hold a battery pack, diskettes, calculator, business cards, pens, pencils and notebooks. \
      Narrow pockets on both ends, full-length outer pockets on both sides and adjustable, removable leather \
      shoulder strap with brass-plated roller buckle and leather pad. Leather grip and storm flap with snap closures. \
      Double bottom. Meets carry-on requirements. Made in USA.',
    features: 'Water Repellent. \
      Two-way brass zipper with leather pulls and storm flap with bridle leather snap tab closure. \
      2 full length interior open pockets; 1 non-padded compartment for laptop; \
      1 interior business card pocket; 1 interior calculator/cell phone pocket; \
      2 full width exterior open side pockets; 2 small exterior end utility pockets. Formerly style #257',
    specialFeatures: '1 interior brass clasp to secure keys; 1 bridle leather carrying/hanging loop.',
    fabricInfo: 'Made from 22-oz. 100% cotton oil finish Rugged Twill with 100% Genuine Bridle Leather.',
    productCare: 'Wipe or brush clean only.',
    
    changed: '2014-09-01T00:00:00Z',
    created: '2014-09-01T00:00:00Z',
  }
  
];
