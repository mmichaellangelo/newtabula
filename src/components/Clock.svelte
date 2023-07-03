<div id="clock_container">
    <h1 id="clock">{clockText}</h1>
</div>

<script lang="ts">

    /*----- PROPS ----- */
    export let showSeconds: boolean = true;
    export let showMeridian: boolean = true;

    let clockText: string;

    function startTime() {
        let pm = false;
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        if (h > 12) {
            h -= 12;
            pm = true;
        } else {
            pm = false;
        }
        m = checkTime(m);
        s = checkTime(s);
        clockText = h + ":" + m;
        if (showSeconds) { clockText = clockText.concat(":" + s); }
        if (showMeridian) { clockText = clockText.concat(pm ? " PM" : " AM"); }
        setTimeout(startTime, 1000);
    }
    
    function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }

    startTime();

    //////////////////////////////////////////////////////////////////////

    function saveToDo(todo) {
    if (localStorage.getItem("todo") == todo) {
        return;
    } else {

        let encodedToDo = encodeToDo(todo)

    }
    }

    function encodeToDo(todo) {
    let encoded = "";

    for (let i = 0; i < todo.length; i++) {
        encoded.concat(todo[i][0] + ':' + todo[i][1]);
        if (i != todo.length - 1) {
        encoded.concat(":");
        }
    }

    return encoded;
    }

    function decodeToDo(todo) {
    const todoArray = todo.split(":")
    let formattedArray
    for (let i = 0; i < todoArray.length; i+=2) {
        formattedArray[i][i+1] = [todoArray[i]][todoArray[i+1]]
    }
    return formattedArray;
    }
</script>

<style>
    #clock {
        color: white;
        font-size: 3rem;
    }

    #clock_container {
        margin: auto;
        display: flex;
        justify-content: center;

    }
</style>