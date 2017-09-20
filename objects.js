var playlist = { artist: "title" };

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist,{ [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName) {
<<<<<<< HEAD
  delete playlist[artistName];
=======
  delete playlist.artistName
>>>>>>> f81bbb4e9dc930f0678162e360106656acc923d1
  return playlist
}
