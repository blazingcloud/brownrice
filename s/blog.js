console.log('blog.js')

var TEMPLATE_URI= 'blog.mustache?callback=?'
var template = $.get(TEMPLATE_URI)
var process_blog = function(data) {
console.log(data)
}

$.getJSON('http://blazingcloud.net/feed/json?callback=?',process_blog)


