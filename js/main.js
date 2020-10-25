let mainSearch = document.getElementById("mainSearch");
let mainSearchGroup = document.getElementById("mainSearchGroup");

mainSearch.addEventListener("focus",function () {
    mainSearchGroup.style.width = "30%";
})

mainSearch.addEventListener("blur",function () {
    mainSearchGroup.style.width = "18%";
})