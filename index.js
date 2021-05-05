var button = document.querySelectorAll("button").length;
for(var i = 0; i<button; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var text = this.innerHTML;
        console.log(text);
        animation(text);

    })
}

function animation(text){
    var selactionButton = document.querySelector("."+ text);
        selactionButton.classList.add("anim");

        setTimeout(function(){
            selactionButton.classList.remove("anim");
        },1000);
}

