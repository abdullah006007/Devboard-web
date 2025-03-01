// connecting with blog page
document
  .getElementById("discover-something")
  .addEventListener("click", function () {
    window.location.href = "blog.html";
  });

//time

const currentDate = new Date();

const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const second = currentDate.getSeconds();

let amOrPm = hours >= 12 ? "PM" : "AM";
let hour = hours % 12 || 12;

// date

const monthName = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = currentDate.getMonth();
let currentMonth = monthName[month];

const getDate = currentDate.getDate();

const dayName = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
let day = currentDate.getDay();
let currentDay = dayName[day];

let year = currentDate.getFullYear();

let liveDate = (document.getElementById("date-and-time").innerHTML = `

<p>${currentDay}, <br>
<span class="font-bold ">
 ${currentMonth} ${getDate} ${year} </span> </p>

`);

// complete Button Task

const buttons = document.querySelectorAll("button.rounded-lg");

let task = document.getElementById("task-number");
let taskNumber = parseInt(task.innerText);

let complete = document.getElementById("completed-task");
let taskCompleted = parseInt(complete.innerText);

for (let button of buttons) {
  count = 0;
  sum = 0;
  add = 0;

  button.addEventListener("click", function (event) {
    alert("Board updated Successfully");
    count = count + 1;
    sum = taskNumber - count;
    add = taskCompleted + count;

    if (sum >= 0) {
      document.getElementById("task-number").innerText = sum;
    }
    if (sum === 0) {
      alert("congrats!!! You have completed all the current task");
    }

    document.getElementById("completed-task").innerText = add;

    button.classList.remove("bg-[#3752FD]");
    button.classList.remove("hidden");
    button.classList.add("bg-slate-300", "text-slate-400");
    button.setAttribute("disabled", true);

    let selectedButton = event.target.parentElement.parentElement.querySelector(
      "h2.font-medium.text-xl.mb-4"
    );

    let smallContainer = document.getElementById("pTag-dive");
    let smallp = document.createElement("p");
    smallp.classList.add("bg-slate-100", "p-3", "rounded-lg", "mb-2");
    smallp.innerHTML = `You have completed task <span class="font-medium">${selectedButton.innerText}</span> at ${hour}:${minutes}:${second} ${amOrPm} `;
    smallContainer.appendChild(smallp);

    document.getElementById("clear-btn").addEventListener("click", function () {
      smallp.classList.add("hidden");
    });
  });
}


document.getElementById("thme-changer").addEventListener("click", function () {
  let randomColor = getRandomColor();

  document.getElementById("body-id").style.backgroundColor = randomColor;
});

// Function to generate a random hex color
function getRandomColor() {
  const num1 = Math.floor(Math.random() * 256);
  const num2 = Math.floor(Math.random() * 256);
  const num3 = Math.floor(Math.random() * 256);
  randomRGB = `rgb(${num1}, ${num2}, ${num3})`;
  return randomRGB;

}

