const form = document.getElementById("reportForm");
const reportList = document.getElementById("reportList");

let reports = [];

form.addEventListener("submit", function(e){

e.preventDefault();

const team = document.getElementById("team").value;
const location = document.getElementById("location").value;
const issue = document.getElementById("issue").value;

const report = {
team: team,
location: location,
issue: issue,
date: new Date().toLocaleString()
};

reports.push(report);

displayReports();

form.reset();

});

function displayReports(){

reportList.innerHTML = "";

reports.forEach(function(report){

const li = document.createElement("li");

li.textContent =
report.date + " | " +
report.team + " | " +
report.location + " | " +
report.issue;

reportList.appendChild(li);

});

}
