Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push("Products")}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var g,h,i,j,k,l="",m=this,n=c.helperMissing,o=this.escapeExpression;return e.buffer.push('<div>\n  <nav class="navbar navbar-default navbar-fixed-top" role="navigation">\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      <a class="navbar-brand" href="#">Products for ember</a>\n    </div>\n    <div class="collapse navbar-collapse navbar-ex1-collapse">\n      <ul class="nav navbar-nav">\n        <li>'),i={},j={},k={hash:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[b],types:["STRING"],hashContexts:j,hashTypes:i,data:e},g=c["link-to"]||b["link-to"],h=g?g.call(b,"products",k):n.call(b,"link-to","products",k),(h||0===h)&&e.buffer.push(h),e.buffer.push('</li>\n        <li><a href="#">About us</a></li>\n        <li class="dropdown">\n          <a href="#" class="dropdown-toggle" data-toggle="dropdown">And so forth<span class="caret"></span></a>\n          <ul class="dropdown-menu" role="menu">\n            <li><a href="#">Action</a></li>\n            <li><a href="#">Another action</a></li>\n            <li><a href="#">Something else here</a></li>\n            <li class="divider"></li>\n            <li><a href="#">Separated link</a></li>\n            <li class="divider"></li>\n            <li><a href="#">One more separated link</a></li>\n          </ul>\n        </li>\n      </ul>\n      <form class="navbar-form navbar-left" role="search">\n      <div class="form-group">\n        <input type="text" class="form-control" placeholder="Search">\n      </div>\n      <button type="submit" class="btn btn-default">Submit</button>\n      </form>\n    </div>\n  </nav>\n  <div class="container" id="main">\n    <div class="row">\n      <div>\n'),e.buffer.push('\n        <div class="col-md-12">\n          '),i={},j={},e.buffer.push(o(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:j,hashTypes:i,data:e}))),e.buffer.push("\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"),l}),Ember.TEMPLATES.index=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<div class="well">\n	Example to use Yeoman and Ember.js for a product administration :-)\n</div>\n')}),Ember.TEMPLATES.product=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,g,h="";return b.buffer.push("\n  <button "),e={"class":a},f={"class":"STRING"},g={hash:{"class":":btn :btn-default :btn-sm editMode:active"},contexts:[],types:[],hashContexts:e,hashTypes:f,data:b},b.buffer.push(o((d=c["bind-attr"]||a["bind-attr"],d?d.call(a,g):n.call(a,"bind-attr",g)))),b.buffer.push(' title="edit">\n    <span class="glyphicon glyphicon-pencil"></span>\n  </button>\n  '),h}function g(a,b){var d,e,f="";return b.buffer.push('\n<div class="alert alert-danger fade in" role="alert">\n  <button type="button" '),d={},e={},b.buffer.push(o(c.action.call(a,"cancelDelete",{hash:{},contexts:[a],types:["STRING"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push(' class="close"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>\n  <h4>Damn! Really?</h4>\n  <p>Be careful, if you remove this product you will not be able to revert this action.</p>\n  <p>\n    <button type="button" '),d={},e={},b.buffer.push(o(c.action.call(a,"confirmDelete",{hash:{},contexts:[a],types:["STRING"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push(' class="btn btn-danger :btn-sm">Proceed anyway</button>\n    <button type="button" '),d={},e={},b.buffer.push(o(c.action.call(a,"cancelDelete",{hash:{},contexts:[a],types:["STRING"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push(' class="btn btn-default :btn-sm">Cancel</button>\n  </p>\n</div>\n'),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var h,i,j,k,l,m="",n=c.helperMissing,o=this.escapeExpression,p=this;return e.buffer.push('<div class="text-right">\n  '),j={},k={},l={hash:{},inverse:p.noop,fn:p.program(1,f,e),contexts:[b],types:["STRING"],hashContexts:k,hashTypes:j,data:e},h=c["link-to"]||b["link-to"],i=h?h.call(b,"product.edit",l):n.call(b,"link-to","product.edit",l),(i||0===i)&&e.buffer.push(i),e.buffer.push("\n  <button "),k={"class":b},j={"class":"STRING"},l={hash:{"class":":btn :btn-default :btn-sm :red deleteMode:active"},contexts:[],types:[],hashContexts:k,hashTypes:j,data:e},e.buffer.push(o((h=c["bind-attr"]||b["bind-attr"],h?h.call(b,l):n.call(b,"bind-attr",l)))),e.buffer.push(" "),j={},k={},e.buffer.push(o(c.action.call(b,"delete",{hash:{},contexts:[b],types:["STRING"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push(' title="delete">\n    <span class="glyphicon glyphicon-trash"></span>\n  </button>\n</div>\n\n'),j={},k={},i=c["if"].call(b,"deleteMode",{hash:{},inverse:p.noop,fn:p.program(3,g,e),contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}),(i||0===i)&&e.buffer.push(i),e.buffer.push('\n\n <div class="jumbotron">\n  <h1>'),j={},k={},e.buffer.push(o(c._triageMustache.call(b,"brand",{hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push(" - "),j={},k={},e.buffer.push(o(c._triageMustache.call(b,"name",{hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push("</h1>\n  <p>"),j={},k={},e.buffer.push(o(c._triageMustache.call(b,"category",{hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push(" : "),j={},k={},e.buffer.push(o(c._triageMustache.call(b,"usage",{hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push("</p>\n  <img "),k={src:b},j={src:"ID"},l={hash:{src:"mainImage"},contexts:[],types:[],hashContexts:k,hashTypes:j,data:e},e.buffer.push(o((h=c["bind-attr"]||b["bind-attr"],h?h.call(b,l):n.call(b,"bind-attr",l)))),e.buffer.push(">\n  <p>"),j={},k={},e.buffer.push(o(c._triageMustache.call(b,"description",{hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push("</p>\n  <p>"),j={},k={},e.buffer.push(o(c._triageMustache.call(b,"features",{hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push("</p>\n  <p>"),j={},k={},e.buffer.push(o(c._triageMustache.call(b,"specialFeatures",{hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push("</p>\n  <p>"),j={},k={},e.buffer.push(o(c._triageMustache.call(b,"fabricInfo",{hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push("</p>\n  <p>"),j={},k={},e.buffer.push(o(c._triageMustache.call(b,"productCare",{hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push("</p>\n  <p>"),j={},k={},e.buffer.push(o(c._triageMustache.call(b,"alternateNames",{hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push("</p>\n  "),e.buffer.push("\n</div>\n\n"),j={},k={},e.buffer.push(o(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push("\n"),m}),Ember.TEMPLATES["product/edit"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push('\n<div class="bg-info">\n  <p class="text-info">Created: '),d={},e={},b.buffer.push(n(c._triageMustache.call(a,"created",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push('</p>\n  <p class="text-info">Changed: '),d={},e={},b.buffer.push(n(c._triageMustache.call(a,"changed",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("</p>\n</div>\n"),f}function g(a,b){var d,e,f="";return b.buffer.push("\n    "),d={},e={},b.buffer.push(n(c.view.call(a,"EmberProducts.FotoUp",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("\n    "),e={width:a,srcBinding:a},d={width:"STRING",srcBinding:"STRING"},b.buffer.push(n(c.view.call(a,"EmberProducts.FotoPreview",{hash:{width:"200",srcBinding:"foto"},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("\n"),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var h,i,j,k,l,m="",n=this.escapeExpression,o=this,p=c.helperMissing;return e.buffer.push("<h1>Product : "),j={},k={},e.buffer.push(n(c._triageMustache.call(b,"name",{hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push("</h1>\n\n"),j={},k={},h=c["if"].call(b,"edit",{hash:{},inverse:o.noop,fn:o.program(1,f,e),contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push('\n\n<div class="form-group">\n  <label for="modelName">Name</label>\n  '),k={value:b,classNames:b,id:b},j={value:"ID",classNames:"STRING",id:"STRING"},l={hash:{value:"name",classNames:"form-control",id:"modelName"},contexts:[],types:[],hashContexts:k,hashTypes:j,data:e},e.buffer.push(n((h=c.input||b.input,h?h.call(b,l):p.call(b,"input",l)))),e.buffer.push('\n</div>\n<div class="form-group">\n  <label for="modelBrand">Brand</label>\n  '),k={value:b,classNames:b,id:b},j={value:"ID",classNames:"STRING",id:"STRING"},l={hash:{value:"brand",classNames:"form-control",id:"modelBrand"},contexts:[],types:[],hashContexts:k,hashTypes:j,data:e},e.buffer.push(n((h=c.input||b.input,h?h.call(b,l):p.call(b,"input",l)))),e.buffer.push('\n</div>\n<div class="form-group">\n  <label for="modelCategory">Category</label>\n  '),k={content:b,value:b,classNames:b,id:b},j={content:"ID",value:"ID",classNames:"STRING",id:"STRING"},e.buffer.push(n(c.view.call(b,"Ember.Select",{hash:{content:"categories",value:"category",classNames:"form-control",id:"modelCategory"},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push('\n</div>\n<div class="form-group">\n  <label for="modelUsage">Usage</label>\n  '),k={value:b,classNames:b,id:b},j={value:"ID",classNames:"STRING",id:"STRING"},l={hash:{value:"usage",classNames:"form-control",id:"modelUsage"},contexts:[],types:[],hashContexts:k,hashTypes:j,data:e},e.buffer.push(n((h=c.input||b.input,h?h.call(b,l):p.call(b,"input",l)))),e.buffer.push('\n</div>\n<div class="form-group">\n  <label for="modelMainImage">Main image (url)</label>\n  '),k={value:b,classNames:b,id:b},j={value:"ID",classNames:"STRING",id:"STRING"},l={hash:{value:"mainImage",classNames:"form-control",id:"modelMainImage"},contexts:[],types:[],hashContexts:k,hashTypes:j,data:e},e.buffer.push(n((h=c.input||b.input,h?h.call(b,l):p.call(b,"input",l)))),e.buffer.push('\n</div>\n<div class="form-group">\n  <label for="modelDescription">Description</label>\n  '),k={value:b,classNames:b,id:b,rows:b},j={value:"ID",classNames:"STRING",id:"STRING",rows:"STRING"},l={hash:{value:"description",classNames:"form-control",id:"modelDescription",rows:"10"},contexts:[],types:[],hashContexts:k,hashTypes:j,data:e},e.buffer.push(n((h=c.textarea||b.textarea,h?h.call(b,l):p.call(b,"textarea",l)))),e.buffer.push('\n</div>  \n<div class="form-group">\n  <label for="modelFeatures">Features</label>\n  '),k={value:b,classNames:b,id:b,rows:b},j={value:"ID",classNames:"STRING",id:"STRING",rows:"STRING"},l={hash:{value:"features",classNames:"form-control",id:"modelFeatures",rows:"4"},contexts:[],types:[],hashContexts:k,hashTypes:j,data:e},e.buffer.push(n((h=c.textarea||b.textarea,h?h.call(b,l):p.call(b,"textarea",l)))),e.buffer.push('\n</div>\n<div class="form-group">\n  <label for="modelFabricInfo">Fabric info</label>\n  '),k={value:b,classNames:b,id:b,rows:b},j={value:"ID",classNames:"STRING",id:"STRING",rows:"STRING"},l={hash:{value:"fabricInfo",classNames:"form-control",id:"modelFabricInfo",rows:"3"},contexts:[],types:[],hashContexts:k,hashTypes:j,data:e},e.buffer.push(n((h=c.textarea||b.textarea,h?h.call(b,l):p.call(b,"textarea",l)))),e.buffer.push('\n</div>\n<div class="form-group">\n  <label for="modelProductCare">Product care</label>\n  '),k={value:b,classNames:b,id:b,rows:b},j={value:"ID",classNames:"STRING",id:"STRING",rows:"STRING"},l={hash:{value:"productCare",classNames:"form-control",id:"modelProductCare",rows:"3"},contexts:[],types:[],hashContexts:k,hashTypes:j,data:e},e.buffer.push(n((h=c.textarea||b.textarea,h?h.call(b,l):p.call(b,"textarea",l)))),e.buffer.push('\n</div>\n<div class="form-group">\n  <label for="modelAlternateNames">Alternate names</label>\n  '),k={value:b,classNames:b,id:b},j={value:"ID",classNames:"STRING",id:"STRING"},l={hash:{value:"alternateNames",classNames:"form-control",id:"modelAlternateNames"},contexts:[],types:[],hashContexts:k,hashTypes:j,data:e},e.buffer.push(n((h=c.input||b.input,h?h.call(b,l):p.call(b,"input",l)))),e.buffer.push("\n</div>\n\n"),e.buffer.push("\n\n"),k={contentBinding:b},j={contentBinding:"STRING"},i=c.view.call(b,"Ember.View",{hash:{contentBinding:"foto"},inverse:o.noop,fn:o.program(3,g,e),contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}),(i||0===i)&&e.buffer.push(i),e.buffer.push('\n\n<button class="btn btn-primary" '),j={},k={},e.buffer.push(n(c.action.call(b,"save",{hash:{},contexts:[b],types:["STRING"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push('>Update</button>\n<button class="btn btn-warning" '),j={},k={},e.buffer.push(n(c.action.call(b,"cancel",{hash:{},contexts:[b],types:["STRING"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push(">Cancel</button>\n\n"),j={},k={},e.buffer.push(n(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push("\n"),m}),Ember.TEMPLATES.products=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push('<span class="glyphicon glyphicon-plus"></span>')}function g(a,b){var d,e,f,g,i,j="";return b.buffer.push("\n        "),f={classNames:a},g={classNames:"STRING"},i={hash:{classNames:"list-group-item"},inverse:q.noop,fn:q.program(4,h,b),contexts:[a,a],types:["STRING","ID"],hashContexts:f,hashTypes:g,data:b},d=c["link-to"]||a["link-to"],e=d?d.call(a,"product","",i):r.call(a,"link-to","product","",i),(e||0===e)&&b.buffer.push(e),b.buffer.push("\n      "),j}function h(a,b){var d,e,f="";return d={},e={},b.buffer.push(p(c._triageMustache.call(a,"name",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push(" ("),d={},e={},b.buffer.push(p(c._triageMustache.call(a,"id",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push(")"),f}function i(a,b){b.buffer.push("Add a new")}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var j,k,l,m,n,o="",p=this.escapeExpression,q=this,r=c.helperMissing;return e.buffer.push('<div class="col-md-3">\n  <div class="panel panel-default">\n    <div class="panel-heading">Products list '),l={},m={},n={hash:{},inverse:q.noop,fn:q.program(1,f,e),contexts:[b],types:["STRING"],hashContexts:m,hashTypes:l,data:e},j=c["link-to"]||b["link-to"],k=j?j.call(b,"products.create",n):r.call(b,"link-to","products.create",n),(k||0===k)&&e.buffer.push(k),e.buffer.push('</div>\n    <div class="panel-body">\n      <div class="list-group">\n      '),l={},m={},k=c.each.call(b,"model",{hash:{},inverse:q.noop,fn:q.program(3,g,e),contexts:[b],types:["ID"],hashContexts:m,hashTypes:l,data:e}),(k||0===k)&&e.buffer.push(k),e.buffer.push('\n      </div>\n    </div>\n    <p class="text-center">\n      '),m={classNames:b},l={classNames:"STRING"},n={hash:{classNames:"btn btn-primary btn-sm"},inverse:q.noop,fn:q.program(6,i,e),contexts:[b],types:["STRING"],hashContexts:m,hashTypes:l,data:e},j=c["link-to"]||b["link-to"],k=j?j.call(b,"products.create",n):r.call(b,"link-to","products.create",n),(k||0===k)&&e.buffer.push(k),e.buffer.push('\n    </p>\n  </div>\n</div>\n\n<div class="col-md-9">\n'),l={},m={},e.buffer.push(p(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:m,hashTypes:l,data:e}))),e.buffer.push("\n</div>\n"),o});