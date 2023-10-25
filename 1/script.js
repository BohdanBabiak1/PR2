function addZero(time){
    if (time < 10){
        return ("0" + time)
    }
    else{
        return time
    }
}

function time() {
    var time = new Date();
    chas.value = addZero(time.getHours()) + ":" + addZero(time.getMinutes()) + ":" + addZero(time.getSeconds())
    setTimeout("time()", 1000);
    }
time();