function clock() {

    let div = document.createElement("div");
    div.id = "time";

    function currentTime() {
        let date = new Date();
        hour = date.getHours();
        min = date.getMinutes();
        sec = date.getSeconds();

        hour = updateTime(hour);
        min = updateTime(min);
        sec = updateTime(sec);
        document.getElementById("time").innerText = "Good     " + hour + " : " + min + " : " + sec + updatePartOfDay();
        document.getElementById("time").setAttribute(
            "style",
            "font-size: 24px; font-weight: bold; text-align: center; display: grid; justify-content: space-around; border: 3px solid black; padding: 5px; border-radius: 20px;",
            
        );
        let t = setTimeout(function(){ currentTime() }, 1000);
        
    }

    function updatePartOfDay() {
        let date = new Date();
        hour = date.getHours();
        hour = updateTime(hour);

        if (hour >= 3 && hour <= 11) {
            return "     morning";
        } else if (hour >= 12 && hour <= 18) {
            return "     afternoon"
        } else {
            return "     evening"
        }
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

const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}

document.getElementById("time").addEventListener("click", setBg);
