function Song() {

    var note = [];

    function setNote(key, time) {
        note.push({key, time});
    }

    function playSong() {
        note.map( note => {
            setTimeout(() => play(note.key), note.time);
        });
    }

    function setSong(newSound) {
        note = newSound;
    }

    function getSong() {
        return note;
    }

    return {
        setNote,
        getSong,
        playSong,
        setSong,
    }
}