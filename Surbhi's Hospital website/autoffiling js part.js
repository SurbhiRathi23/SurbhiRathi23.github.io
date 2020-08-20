var programBar = document.querySelectionAll('skill-program >div);
var skillsContainer = document.getElementById('skill-Container');
window.addEventListener('scroll',checkscroll);
var animationDem = false;
function initialize Bars(){
    for(let bar of progressBar){
        bar.style.width = 0 +'%';

    }
}
initializeBar();
function fillBars(){
    for(let bar of programBar){
        let targetwidth=bar.getAttribute('data-bar-width');
        let currentwidth =0;
        let interval = setInterval(function()
        {
            if(currentwidth>targetwidth){
                clearInterval(Interval);
                return;
            }
            currentwidth++;
            bar.style.width = currentwidth +'%';
        },30);

    }
}
function checkscroll(){
    var coordinate = skillsContainer.getBoundingClientRect();
    if(!animation && coordinates.top<=window.innerheight){
     animations = true;
     console.log('skills section visible');
     fillBars()
     
    }



    }
}












