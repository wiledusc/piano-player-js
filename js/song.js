function Song() {

    var notes = [];

    function setNote(key, time) {
        notes.push({ key, time });
    }

    function playSong() {
        notes.map((note, index) => {
            var time = index == 0 ? 0 : (note.time - notes[0].time);
            setTimeout( () => {
                play(note.key);
            }, time)
            
        });
        seekbar.start();
    }

    function setSong(newSound) {
        notes = newSound;
        seekbar.setMax(notes[notes.length-1].time);
    }

    function getSong() {
        return notes;
    }

    return {
        setNote,
        getSong,
        playSong,
        setSong,
    }
}