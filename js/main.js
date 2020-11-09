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

$('.carousel .carousel-item').each(function(){
    var minPerSlide = 6;
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
    }
});