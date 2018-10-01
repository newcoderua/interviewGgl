// SCOPE

// JavaScript has two scopes – global and local. Any 
// variable declared outside of a function belongs to 
// the global scope, and is therefore accessible from 
// anywhere in your code. Each function has its own 
// scope, and any variable declared within that function 
// is only accessible from that function and any nested 
// functions.

// let and const 
// const is easy - readOnly and it belongs to block, not function
// let is same as var, but sticks to block, not function.

// ES6 features
// 1. Interpolation - ${}
// 2. Desctructuring assignments
//     const { firstName, lastName } = fullNameObject
// 3. Arrow functions
//     Using arrows functions in ES6 allows us to stop using that = this or self = this or _this = this or .bind(this). For example, this code in ES5 is ugly:

//     var _this = this
//     $('.btn').click(function(event){
//     _this.sendData()
//     })
//     This is the ES6 code without _this = this:

//     $('.btn').click((event) =>{
//     this.sendData()
//     })
// 4. Promises
// 5. let and const 
// 6. Classes in ES6
//     If you love object-oriented programming (OOP), 
//     then you’ll love this feature. It makes writing 
//     classes and inheriting from them as easy as liking
//      a comment on Facebook.
// 7. Modules in ES6
//     module.exports = {
//         port: 3000,
//         getAccounts: function() {
//         ...
//         }
//     }

// Babel is a JavaScript compiler
// Babel is a toolchain that is mainly used to convert 
// ECMAScript 2015+ code into a backwards compatible 
// version of JavaScript in current and older browsers 
// or environments.

// Webpack is a tool wherein you use a configuration to 
// explain to the builder how to load specific things. 
// You describe to Webpack how to load *.js files, or 
// how it should look at .scss files, etc. Then, when 
// you run it, it goes into your entry point and walks 
// up and down your program and figures out exactly what
//  it needs, in what order it needs it, and what each 
//  piece depends on. It will then create bundles — as 
//  few as possible, as optimized as possible, that you 
//  include as the scripts in your application.
