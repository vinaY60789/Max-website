function book() {
  let name = document.getElementById("name").value;
  let date = document.getElementById("date").value;
  let service = document.getElementById("service").value;

  let msg = `Booking:%0A${name}%0A${date}%0A${service}`;
  window.open(`https://wa.me/917895252570?text=${msg}`);

  save(name, date, service);
}

function pay() {
  window.open("upi://pay?pa=7895252570@fam");
}

function save(name, date, service) {
  let data = JSON.parse(localStorage.getItem("bookings") || "[]");
  data.push({name, date, service});
  localStorage.setItem("bookings", JSON.stringify(data));
}

function showAdmin() {
  document.getElementById("adminPanel").style.display = "block";

  let data = JSON.parse(localStorage.getItem("bookings") || "[]");
  let list = document.getElementById("data");
  list.innerHTML = "";

  data.forEach(d => {
    let li = document.createElement("li");
    li.innerText = `${d.name} - ${d.date} - ${d.service}`;
    list.appendChild(li);
  });
}
