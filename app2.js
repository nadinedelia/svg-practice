const moonPath = "M54 100C54 155.228 100 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0C100 0 54 44.7715 54 100Z"

const sunPath = "M200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100Z"

const darkMode = document.querySelector("#darkMode");
let toggle = false;

darkMode.addEventListener('click', () => {
    const timeline = anime.timeline({
        duration : 750, 
        easing : "easeOutExpo"
    });

    timeline.add({
        targets: ".sun",
        d: [
            {value: moonPath}
        ]
    })
    .add({
        targets: '#darkMode',
        rotate: 320
    },
    "-= 350"
    )
    .add({
        targets: "section",
        backgroundColor: toggle ? 'rgb(255,255,255)' : 'rgb(22,22,22)'
    },
    '-=700'
    );
    if(!toggle){
        toggle = true;
    }else{
        toggle = false;
    }
});