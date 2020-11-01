let mainSearch = document.getElementById("mainSearch");
let mainSearchGroup = document.getElementById("mainSearchGroup");
let mainSearchIcon = document.getElementById("mainSearchIcon");

mainSearch.addEventListener("focus",function () {
    mainSearchGroup.classList.add("col-md-4");
    mainSearchGroup.classList.remove("col-md-2");
    mainSearchIcon.style.backgroundColor = "#fff";
    mainSearchIcon.style.color = "#22766E";
})

mainSearch.addEventListener("blur",function () {
    mainSearchGroup.classList.add("col-md-2");
    mainSearchGroup.classList.remove("col-md-4");
    mainSearchIcon.style.backgroundColor = "#ED4A43";
    mainSearchIcon.style.color = "#fff";
})