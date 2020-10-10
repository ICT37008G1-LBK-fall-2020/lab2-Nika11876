for (var i = 2; i < 20; i++) {
  var ndiv = 0;
  if (i % 2 != 0 || i == 2) {
    for (var j = i - 1; j > 2; j--) {
      if (i % j == 0) {
        ndiv++;
        break;
      }
    }
    if (ndiv == 0) {
      alert(i);
    }
  }
}
