function clock() {

    var div = document.createElement("div");
    div.id = "time";
    

    function currentTime() {
        var date = new Date();
        hour = date.getHours();
        min = date.getMinutes();
        sec = date.getSeconds();

        hour = updateTime(hour);
        min = updateTime(min);
        sec = updateTime(sec);
        document.getElementById("time").innerText = hour + " : " + min + " : " + sec;
        document.getElementById("time").setAttribute(
            "style",
            "font-size: 24px; font-weight: bold; background-color: yellow; text-align: center; display: inline; border: 3px solid black; padding: 5px; border-radius: 20px"
            
        );
        var t = setTimeout(function(){ currentTime() }, 1000);
        
    }
    
    function updateTime(k) {
        if (k < 10) {
            return "0" + k;
        }
        else {
            return k;
        }
    }

    currentTime();

    }

clock();