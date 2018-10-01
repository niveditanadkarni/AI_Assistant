function formatTime(t) {
    var time = new Date(t);
    return time;
}

function onSessionStart(session) {
    console.log("START", formatTime(session.startTime), session.url);
    postUrl = "http://172.20.10.12:3000/";
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        var msg = xhr.responseText;
        console.log(msg);
    }
    xhr.open("POST", postUrl, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ "logemail": "test1@gmail.com", "logpassword": "test1" }));

    console.log(xhr.status);
    console.log(JSON.stringify(xhr.responseText));
    console.log(xhr.responseText);
    console.log(xhr);

}

function onSessionEnd(session) {
    console.log("END", formatTime(session.endTime), session.url);
}
var stopTracking = startTrackingActivity(onSessionStart, onSessionEnd);