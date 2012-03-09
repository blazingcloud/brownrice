console.log('blog.js')

var TEMPLATE_URI= 'blog.mustache?callback=?'
$.get(TEMPLATE_URI,function(_template) {
  var template = _template
var process_blog = function(data) {
  for(var i = 0, length = data.length; i < length; i++) {
    $('.main').append(Mustache.render(template, data[i]))
  }
}
$.getJSON('http://blazingcloud.net/feed/json?callback=?',process_blog)
})


