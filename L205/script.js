for (var i = 2; i < 100; i++) {
  var ndiv = 0;
  for (var j = i - 1; j > 1; j--) {
    if (i % j == 0) {
      ndiv++;
      break;
    }
  }
  if (ndiv == 0) {
    alert(i);
  }
}