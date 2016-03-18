$(".form-control").change(function() {

  var r1 = document.getElementById("red1");
  var red1 = r1.options[r1.selectedIndex].text;

  var r2 = document.getElementById("red2");
  var red2 = r2.options[r2.selectedIndex].text;

  var g1 = document.getElementById("green1");
  var green1 = g1.options[g1.selectedIndex].text;

  var g2 = document.getElementById("green2");
  var green2 = g2.options[g2.selectedIndex].text;

  var b1 = document.getElementById("blue1");
  var blue1 = b1.options[b1.selectedIndex].text;

  var b2 = document.getElementById("blue2");
  var blue2 = b2.options[b2.selectedIndex].text;

  var hex = "#" + red1 + red2 + green1 + green2 + blue1 + blue2;

  console.log(hex);

  document.body.style.backgroundColor = hex;
  document.getElementById('copy').innerHTML = hex;
});