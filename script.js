fetch("data.json")
.then(response => response.json())
.then(data => {

let open = 0
let pending = 0
let completed = 0

const table = document.querySelector("#concernTable tbody")

data.forEach(item => {

if(item.status === "Open") open++
if(item.status === "Pending") pending++
if(item.status === "Completed") completed++

let row = document.createElement("tr")

row.innerHTML = `

<td>${item.date}</td>
<td>${item.department}</td>
<td>${item.concern}</td>
<td>${item.status}</td>
`

table.appendChild(row)

})

document.getElementById("openCount").textContent = open
document.getElementById("pendingCount").textContent = pending
document.getElementById("completeCount").textContent = completed

})
