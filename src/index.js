var ejs = require('ejs')
var fs = require('fs')
var str = fs.readFileSync('./views/example1.ejs')
var content = str.toString()
var dd = ejs.render(content, { user: { name: 'huang' } })
var options = { cache: {}, filename: 'xyz', root: 'C:/Users/huang/Desktop/learnEjs/views' }
console.log(dd)
fs.writeFileSync('./views/exsample1.txt', str)
var str2 = fs.readFileSync('./views/example2.ejs').toString()
var datas = ['geddy', 'neil', 'alex']
var tt = ejs.render(str2, { user: { name: 'huang' }, people: datas }, options)
fs.writeFileSync('./views/exsample2.txt', tt)