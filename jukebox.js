//let songsample = 'A C#*2 A C B C*2'; //test value for parseSong

let ele = [];
let arrNotes = [];

parseNote = function(note){
  let noteObj = {};
  ele = note.split('*');
  if(ele[1]){
    ele[1]=parseInt(ele[1]);
  }else{
    ele[1]=1;
  }
    noteObj.pitch = ele[0];
    noteObj.beats = ele[1];
    return noteObj;
  }

parseSong = function(song){
  arrNotes = song.split(' ');
  let songArr = [];

  for(i=0;i<=arrNotes.length-1;i++){
    let oneNote = null;
    oneNote = parseNote(arrNotes[i]);
    songArr.push(oneNote);
  }
  //console.log(songArr)
  return songArr;
}

onComplete = function functionName() {
  console.log('Song complete');
}

let song = prompt('Input a valid song');
playSong(parseSong(song), 400, onComplete);

//parseSong(songsample);
