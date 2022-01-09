function onClick() {
  document.getElementById("location").innerHTML =
    '<i class="fas fa-map-marker-alt"></i> Tirana, Albania';

  let text = "Tirana \nCity";
  let text1 = "";
  let pulsor = "|";
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      text1 += text.charAt(i);
      document.getElementById("city").innerText = text1 + pulsor;
    }, 300 * i);
  }
  document.getElementById("gradeCelcius").innerHTML =
    '<i class="fas fa-sun"></i> 25&#8451;';

  document.getElementById("distance").innerHTML =
    '<i class="fas fa-map-marker-alt"></i> Distance: 51m';

  document.getElementById("duration").innerHTML =
    '<i class="fas fa-stopwatch"></i> Duration: 10h';

  document.getElementsByTagName("body")[0].style.backgroundImage =
    'url("tirana.jpg")';
}
