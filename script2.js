const form = document.getElementById("form");
const input = document.getElementById("input");
const list = document.getElementById("list");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (input.value==="") return;
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${input.value}$</span>
        <div>
            <button class="done-btn">acspt</button>
            <button class="delete-btn">suprime</button>
        </div>
    `;
    list.appendChild(li);
    input.value="";
    li.querySelector(".done-btn").addEventListener("click",function() {
        li.classList.toggle("done");
    });
    li.querySelector(".delete-btn").addEventListener("click", function() {
        li.remove();
    });
});
