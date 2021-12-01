let userInput = $("input").val();
$(".play").text(userInput);

$(".play").click(function() {
    let fortune = Math.ceil(Math.random() * 4);
    console.log(fortune)
});
 if (fortune > .3333333333){
 $(".computerChoice").append("rock");
    }