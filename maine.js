
let button = document.querySelector("#button");
let trray = [ "سبحان الله",
      "الحمد لله",
      "لا إله إلا الله",
      "الله أكبر",
      "لا حول ولا قوة إلا بالله",
      "سبحان الله وبحمده",
      "سبحان الله العظيم",
      "أستغفر الله العظيم",
      "اللهم صل وسلم على نبينا محمد"]
button.addEventListener('click' , function () {
       const randomIndex = Math.floor(Math.random() *trray.length);
    document.querySelector("#input").innerHTML = trray[randomIndex];
})
console.log(input)