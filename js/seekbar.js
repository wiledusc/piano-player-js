const seekbar = {
    max: 0,
    steps: 0,
    duration: 0,

    setValue: function (value) {
        document.getElementById('seek-obj').value = value;
    },
    setMax: function (maxValue) {
       seekbar.max = maxValue;
    },
    getValue: function () {
        return document.getElementById('seek-obj');
    },
    calculateTotalValue: function (length) {
        var minutes = Math.floor(length / 60);
        seconds_int = length - minutes * 60;
        seconds_str = seconds_int.toString();
        seconds = seconds_str.substr(0, 2);
        time = minutes + ':' + seconds;
        return time;
    },
    start: function () {
        seekbar.duration = parseInt(seekbar.max/1000) * 10;
        seekbar.step = ( 100 / seekbar.duration ) ;
        seekbar.setValue(0);
        for (let i = 1; i <= seekbar.duration; i++) {
            setTimeout(() => {
                seekbar.setValue(i * seekbar.step);
            }, i * 100);
            
        }
    }
}