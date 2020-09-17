function quotationText() {
  let quotes = {
    Aristotele: '"Le persone perfette non combattono, non mentono, non commettono errori e non esistono."',
    Cicerone: '"La dignità non consiste nel possedere onori, ma nella consapevolezza di meritarli."',
    Gesu: '"Se sulla terra prevalesse l\'amore, tutte le leggi sarebbero superflue."'
  };
  let colors = [ "Tomato", "Orange", "DodgerBlue", "MediumSeaGreen", "Gray", "Violet"
              ];
  keys = Object.keys(quotes);
  author = keys[(keys.length * Math.random()) << 0];
  text = quotes[author];
  rcolor = colors[(colors.length * Math.random()) << 0];

  document.getElementById("text").innerHTML = text;
  document.getElementById("author").innerHTML = author;
  document.getElementsByClassName("page-background").innerHTML = rcolor;
}