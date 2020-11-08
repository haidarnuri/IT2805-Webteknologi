
let timer = 0;

const pics = [["food1",1,3] , ["food2",2,0] , ["food3",3,1] , ["food4",0,2]];
let instance = 0;




function rotatePic() {
    document.getElementById("ic").innerHTML = "<img id='hb' src='img/ImageCarousel/"+pics[instance][0]+".jpg'>";
    instance = pics[instance][1];

    
}
function setPic(pic){
    console.log(pic)
    instance = pic;
    timer =  0;
    rotatePic()
}
function color(){
    for(i = 0; i < pics.length; i++){
        document.getElementById("b"+i).style.backgroundColor = "grey";

    }
    document.getElementById("b"+pics[instance][2]).style.backgroundColor = "black";
}

function boot(){
    var output = "";
    for(i = 0; i < pics.length; i++){
        output += "<button class='icb' onclick='setPic("+i+")' id='b"+i+"'></button>"

    }
    document.getElementById("b-area").innerHTML = output;
}

function main(){
    
    if(timer > 1000){
        rotatePic();
        timer = 0; 
    }
    color();
    timer++;
    setTimeout(function(){main()},5);
}
boot();
main();