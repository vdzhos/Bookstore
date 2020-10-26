let mainSearch = document.getElementById("mainSearch");
let mainSearchGroup = document.getElementById("mainSearchGroup");

mainSearch.addEventListener("focus",function () {
    mainSearchGroup.classList.add("col-md-4");
    mainSearchGroup.classList.remove("col-md-2");
})

mainSearch.addEventListener("blur",function () {
    mainSearchGroup.classList.add("col-md-2");
    mainSearchGroup.classList.remove("col-md-4");
})