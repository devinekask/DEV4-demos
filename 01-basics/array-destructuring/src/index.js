import "./styles.css";

const runners = [
  "Mo Farah",
  "Almaz Ayana",
  "Meb Keflezighi",
  "Molly Huddle",
  "Galen Rupp",
  "Jemima Jelagat",
  "Usain Bolt"
];

const [first, second] = runners;

document.getElementById("app").innerHTML = `
<h1>The best runners ever</h1>
<p>The best runner ever is ${first}, de second is ${second}`;
