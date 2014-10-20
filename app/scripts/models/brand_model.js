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
    
    name: 'Filson',
    
    logo: 'http://www.filson.com/images/common/filson-logo-vintage.png',
    
    description: 'C.C. Filson is a Seattle, Washington, United States-based,\
     privately owned outfitter and manufacturer of goods for outdoor enthusiasts.\
     The company designs, manufactures, distributes and sells men\'s and women\'s\
     outdoor clothing, accessories and luggage. Filson sells its products\
     via company-owned retail stores, catalogs and the Filson website as well\
     as through authorized dealers in the United States and international\
     distributors. The company was originally established in Seattle in 1897 as\
     C.C. Filson\'s Pioneer Alaska Clothing and Blanket Manufacturers to meet\
     the needs of prospectors passing through Seattle on their way to the\
     Klondike Gold Rush.'
    
  },
  
  {
    id: 1,
    
    name: 'Bleu de Chauffe',
    
    logo: 'http://kingdomofstyle.typepad.co.uk/.a/6a00d8341c2f0953ef01a3fd25d518970b-750wi',
    
    description: 'Bleu de Chauffe workshop is located in Aveyron, just near by Millau and  the famous viaduct (France).\
    The cutting, fabrication and stitching are hand-made by qualified artisans renowed for their skill, experience and expertise. Bleu de Chauffe bags are the best example of what our workshop have to offer.'
    
  }
  
];
