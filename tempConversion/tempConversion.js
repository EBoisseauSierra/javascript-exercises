var ftoc = function(tFarenheit) {
  // round to first decimal
  return Math.round(((tFarenheit - 32) * 5 / 9) * 10) / 10;
}

var ctof = function(tCelsius) {
  return Math.round(((tCelsius / 5 * 9) + 32) * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
