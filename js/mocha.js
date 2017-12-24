mocha.ui('bdd');
mocha.reporter('html');
var expect = chai.expect;

window.addEventListener('load', function() {
  mocha.run();
});
