var playlist = {
  artistName: ''
};

var updatePlaylist = function(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
};

var removeFromPlaylist = function(playlist, artistName) {
  
}