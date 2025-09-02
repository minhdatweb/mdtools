async function loadHTML(id, url) {
  const res = await fetch(url);
  const text = await res.text();
  document.getElementById(id).innerHTML = text;
}

loadHTML("header", "bb/header.html");
loadHTML("footer", "bb/footer.html");
