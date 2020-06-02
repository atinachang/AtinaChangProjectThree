function PlaySound(fileName) {
    var path = "./" + fileName + ".mp3"
    var sound = new Audio(path);
    sound.play();
}