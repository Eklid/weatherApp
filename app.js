function onSearch() {
  let city = document.getElementById("city-search").value;

  document.getElementById("city-content").innerText =
    "You can get more details about " +
    city +
    " by exploring our official website at your mobile phone";

  if (city == "Durres" || city == "durres" || city == "Durresi") {
    document.getElementById("location").innerHTML =
      '<i class="fas fa-map-marker-alt"></i> Durres, Albania';

    let text = "Durres \nCity";
    let text1 = "";
    let pulsor = "|";
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        text1 += text.charAt(i);
        document.getElementById("city").innerText = text1 + pulsor;
      }, 300 * i);
    }
    document.getElementById("gradeCelcius").innerHTML =
      '<i class="fas fa-sun"></i> 29&#8451;';

    document.getElementById("distance").innerHTML =
      '<i class="fas fa-map-marker-alt"></i> Distance: 151m';

    document.getElementById("duration").innerHTML =
      '<i class="fas fa-stopwatch"></i> Duration: 5h';

    document.getElementsByTagName("body")[0].style.backgroundImage =
      'url("durres3.jpg")';
  }

  if (city == "Vlora" || city == "vlora" || city == "Vlore") {
    document.getElementById("location").innerHTML =
      '<i class="fas fa-map-marker-alt"></i> Vlore, Albania';

    let text = "Vlora \nCity";
    let text1 = "";
    let pulsor = "|";
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        text1 += text.charAt(i);
        document.getElementById("city").innerText = text1 + pulsor;
      }, 300 * i);
    }
    document.getElementById("gradeCelcius").innerHTML =
      '<i class="fas fa-sun"></i> 30&#8451;';

    document.getElementById("distance").innerHTML =
      '<i class="fas fa-map-marker-alt"></i> Distance: 111m';

    document.getElementById("duration").innerHTML =
      '<i class="fas fa-stopwatch"></i> Duration: 8h';

    document.getElementsByTagName("body")[0].style.backgroundImage =
      'url("vlora1.png")';
  }

  if (city == "Berat" || city == "berat" || city == "Berati") {
    document.getElementById("location").innerHTML =
      '<i class="fas fa-map-marker-alt"></i> Vlore, Albania';

    let text = "Berat \nCity";
    let text1 = "";
    let pulsor = "|";
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        text1 += text.charAt(i);
        document.getElementById("city").innerText = text1 + pulsor;
      }, 300 * i);
    }
    document.getElementById("gradeCelcius").innerHTML =
      '<i class="fas fa-sun"></i> 20&#8451;';

    document.getElementById("distance").innerHTML =
      '<i class="fas fa-map-marker-alt"></i> Distance: 171m';

    document.getElementById("duration").innerHTML =
      '<i class="fas fa-stopwatch"></i> Duration: 15h';

    document.getElementsByTagName("body")[0].style.backgroundImage =
      'url("Berat.png")';
  }

  if (city == "Fier" || city == "fier" || city == "Fieri") {
    document.getElementById("location").innerHTML =
      '<i class="fas fa-map-marker-alt"></i> Vlore, Albania';

    let text = "Fier \nCity";
    let text1 = "";
    let pulsor = "|";
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        text1 += text.charAt(i);
        document.getElementById("city").innerText = text1 + pulsor;
      }, 300 * i);
    }
    document.getElementById("gradeCelcius").innerHTML =
      '<i class="fas fa-sun"></i> 24&#8451;';

    document.getElementById("distance").innerHTML =
      '<i class="fas fa-map-marker-alt"></i> Distance: 171m';

    document.getElementById("duration").innerHTML =
      '<i class="fas fa-stopwatch"></i> Duration: 15h';

    document.getElementsByTagName("body")[0].style.backgroundImage =
      'url("Fier.png")';
  }

  if (city == "Shkoder" || city == "shkoder" || city == "Shkodra") {
    document.getElementById("location").innerHTML =
      '<i class="fas fa-map-marker-alt"></i> Shkoder, Albania';

    let text = "Shkoder \nCity";
    let text1 = "";
    let pulsor = "|";
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        text1 += text.charAt(i);
        document.getElementById("city").innerText = text1 + pulsor;
      }, 300 * i);
    }
    document.getElementById("gradeCelcius").innerHTML =
      '<i class="fas fa-sun"></i> 19&#8451;';

    document.getElementById("distance").innerHTML =
      '<i class="fas fa-map-marker-alt"></i> Distance: 201m';

    document.getElementById("duration").innerHTML =
      '<i class="fas fa-stopwatch"></i> Duration: 18h';

    document.getElementsByTagName("body")[0].style.backgroundImage =
      'url("Shkodra.png")';
  }

  if (city == "Tropoj" || city == "tropoj" || city == "Tropoja") {
    document.getElementById("location").innerHTML =
      '<i class="fas fa-map-marker-alt"></i> Tropoja, Albania';

    let text = "Tropoja \nCity";
    let text1 = "";
    let pulsor = "|";
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        text1 += text.charAt(i);
        document.getElementById("city").innerText = text1 + pulsor;
      }, 300 * i);
    }
    document.getElementById("gradeCelcius").innerHTML =
      '<i class="fas fa-sun"></i> 12&#8451;';

    document.getElementById("distance").innerHTML =
      '<i class="fas fa-map-marker-alt"></i> Distance: 197m';

    document.getElementById("duration").innerHTML =
      '<i class="fas fa-stopwatch"></i> Duration: 9h';

    document.getElementsByTagName("body")[0].style.backgroundImage =
      'url("Tropoja1.png")';
  }

  if (city == "Korca" || city == "korca" || city == "Korce") {
    document.getElementById("location").innerHTML =
      '<i class="fas fa-map-marker-alt"></i> Korca, Albania';

    let text = "Korca \nCity";
    let text1 = "";
    let pulsor = "|";
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        text1 += text.charAt(i);
        document.getElementById("city").innerText = text1 + pulsor;
      }, 300 * i);
    }
    document.getElementById("gradeCelcius").innerHTML =
      '<i class="fas fa-sun"></i> 17&#8451;';

    document.getElementById("distance").innerHTML =
      '<i class="fas fa-map-marker-alt"></i> Distance: 167m';

    document.getElementById("duration").innerHTML =
      '<i class="fas fa-stopwatch"></i> Duration: 22h';

    document.getElementsByTagName("body")[0].style.backgroundImage =
      'url("Korca.png")';
  }

  if (city == "Elbasan" || city == "elbasan" || city == "Elbasani") {
    document.getElementById("location").innerHTML =
      '<i class="fas fa-map-marker-alt"></i> Elbasan, Albania';

    let text = "Elbasan \nCity";
    let text1 = "";
    let pulsor = "|";
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        text1 += text.charAt(i);
        document.getElementById("city").innerText = text1 + pulsor;
      }, 300 * i);
    }
    document.getElementById("gradeCelcius").innerHTML =
      '<i class="fas fa-sun"></i> 20&#8451;';

    document.getElementById("distance").innerHTML =
      '<i class="fas fa-map-marker-alt"></i> Distance: 138m';

    document.getElementById("duration").innerHTML =
      '<i class="fas fa-stopwatch"></i> Duration: 20h';

    document.getElementsByTagName("body")[0].style.backgroundImage =
      'url("Elbasani.png")';
  }

  if (city == "Tepelen" || city == "tepelen" || city == "Tepelena") {
    document.getElementById("location").innerHTML =
      '<i class="fas fa-map-marker-alt"></i> Tepelen, Albania';

    let text = "Tepelen \nCity";
    let text1 = "";
    let pulsor = "|";
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        text1 += text.charAt(i);
        document.getElementById("city").innerText = text1 + pulsor;
      }, 300 * i);
    }
    document.getElementById("gradeCelcius").innerHTML =
      '<i class="fas fa-sun"></i> 24&#8451;';

    document.getElementById("distance").innerHTML =
      '<i class="fas fa-map-marker-alt"></i> Distance: 118m';

    document.getElementById("duration").innerHTML =
      '<i class="fas fa-stopwatch"></i> Duration: 14h';

    document.getElementsByTagName("body")[0].style.backgroundImage =
      'url("Tepelena.png")';
  }

  if (city == "Gjirokaster" || city == "gjirokaster" || city == "GJirokastra") {
    document.getElementById("location").innerHTML =
      '<i class="fas fa-map-marker-alt"></i> Gjirokaster, Albania';

    let text = "Gjirokaster \nCity";
    let text1 = "";
    let pulsor = "|";
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        text1 += text.charAt(i);
        document.getElementById("city").innerText = text1 + pulsor;
      }, 300 * i);
    }
    document.getElementById("gradeCelcius").innerHTML =
      '<i class="fas fa-sun"></i> 18&#8451;';

    document.getElementById("distance").innerHTML =
      '<i class="fas fa-map-marker-alt"></i> Distance: 178m';

    document.getElementById("duration").innerHTML =
      '<i class="fas fa-stopwatch"></i> Duration: 19h';

    document.getElementsByTagName("body")[0].style.backgroundImage =
      'url("Gjirokaster.png")';
  }

  if (city == "Sarand" || city == "sarand" || city == "Saranda") {
    document.getElementById("location").innerHTML =
      '<i class="fas fa-map-marker-alt"></i> Sarand, Albania';

    let text = "Saranda \nCity";
    let text1 = "";
    let pulsor = "|";
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        text1 += text.charAt(i);
        document.getElementById("city").innerText = text1 + pulsor;
      }, 300 * i);
    }
    document.getElementById("gradeCelcius").innerHTML =
      '<i class="fas fa-sun"></i> 30&#8451;';

    document.getElementById("distance").innerHTML =
      '<i class="fas fa-map-marker-alt"></i> Distance: 128m';

    document.getElementById("duration").innerHTML =
      '<i class="fas fa-stopwatch"></i> Duration: 24h';

    document.getElementsByTagName("body")[0].style.backgroundImage =
      'url("Saranda.png")';
  }
}
