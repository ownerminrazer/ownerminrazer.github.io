var videos = ['play_with_fire.mp4', '99_problems.mp4','bleed.mp4', 'despicable.mp4', 'akame_new.mp4'];
var audioContext;
var analyser, audioSourceNode, frequency_array;

function hack(number) {
    $.backstretch([
        { url: "/media/"+videos[number], mute: false, loop: false, isVideo: true }
    ]);
    // if(change){
    //     audio.pause();
    // }else{
        var elem = document.body;
        requestFullScreen(elem);
    // }

    vidos = document.querySelector('video');
    context = new (window.AudioContext || window.webkitAudioContext)();
    analyser = context.createAnalyser();
    source = context.createMediaElementSource(vidos);
    source.connect(analyser);
    analyser.connect(context.destination);
    frequency_array = new Uint8Array(analyser.frequencyBinCount);
    animationLooper();

    vidos.onended = function(){
        setTimeout(function () {
            hack(getR(0,videos.length));
        }, 2200);
    };
}
// я вот на самом деле хуй знает как этот FFT работает, но как то тут на костылях сделал
// скорее всего это из за бекстретча, но в любом случае работает))))
function animationLooper(){
    analyser.getByteFrequencyData(frequency_array);
    for(var i = 0; i < 1; i++){
        if (screen.width <= 900){ // adaptivnost` ebat`

            if(screen.width <= 490){
                $('#line').width(frequency_array[i]*1.5);
                $('.caption a').css({"text-shadow":" -"+frequency_array[i]*0.02+"px 0 "+frequency_array[i]*0.01+"px rgb(30,242,241), "+frequency_array[i]*0.02+"px 0 "+frequency_array[i]*0.01+"px rgb(246,5,10)"});
            }else{
                $('#line').width(frequency_array[i]*2);
                $('.caption a').css({"text-shadow":" -"+frequency_array[i]*0.02+"px 0 "+frequency_array[i]*0.01+"px rgb(30,242,241), "+frequency_array[i]*0.02+"px 0 "+frequency_array[i]*0.01+"px rgb(246,5,10)"});
            }

        } else{
            $('#line').width(frequency_array[i]*5);

            if (frequency_array[1] >= 248){
                $('.caption a').css({"text-shadow":" -"+frequency_array[i]*0.02+"px 0 "+frequency_array[i]*0.01+"px rgb(30,242,241), "+frequency_array[i]*0.02+"px 0 "+frequency_array[i]*0.01+"px rgb(246,5,10), " + getR(-180, 180 ) + "px "+ getR(-180, 180 ) +"px 0px rgb(246,5,10), " + getR(-180, 180 ) + "px "+ getR(-180, 180 ) +"px 1px rgb(30,242,241)"});
            }else{
                $('.caption a').css({"text-shadow":" -"+frequency_array[i]*0.02+"px 0 "+frequency_array[i]*0.01+"px rgb(30,242,241), "+frequency_array[i]*0.02+"px 0 "+frequency_array[i]*0.01+"px rgb(246,5,10)"});
            }

        }
    }
    window.requestAnimationFrame(animationLooper);
}

function enterprise() {
    $(".katana").css({"transition": ".7s"});
    $(".preview_content").css({"top": "-100px"});
    $(".katana").css({"transform": "rotate(460deg) rotateX(0deg) rotateY(0deg)", "left": "140%", "bottom": "170%"});
    $(".katana").css({"animation": "unset"});
    $(".path").css({"transition": ".7s", "filter":"drop-shadow(0px 0px 16px rgb(255, 0, 0))", "color":"#d20000"});
    setTimeout(function () {
        $(".katana").css({"transition": ".7s","transform": "rotate(460deg) rotateX(50deg) rotateY(50deg)", "left": "140%", "bottom": "240%"});
    }, 200);
    setTimeout(function () {
        $(".katana").css({'left':'-460%'});
    }, 1000);
    setTimeout(function () {
        $(".path_2").css({"top":"27px"});
    }, 1350);
    setTimeout(function () {
        $(".preview_content").css({"opacity" : "0"});
    }, 2200);
    setTimeout(function () {
        $(".content").css({"display": "block", "opacity": "1"});
        hack(getR(0,videos.length));
    }, 3500);
}

function getR(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

