function addZero(time){
    if (time < 10){
        return ("0" + time)
    }
    else{
        return time
    }
}

var timer = -5
function time() {
    var time = new Date();
    chas.value = addZero(time.getHours()) + ":" + addZero(time.getMinutes()) + ":" + addZero(time.getSeconds())
    setTimeout("time()", 5000);
    
    timer += 5
    if (timer == 30){
        window.close()
    }
}
time();