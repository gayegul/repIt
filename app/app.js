$(document).ready(function() {
  var player;
  var videoId;

  function getVideo(videoId) {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: videoId,
      playerVars: { 'autoplay': 0, 'controls': 1 },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  function onPlayerReady(event) {
    event.target.playVideo();
    $('#query').val('');
  }

  function onPlayerStateChange(event) {
    console.log(event);
    if(event.data === YT.PlayerState.ENDED) {
      player.seekTo(0);
    }
  }

  function searchVideo() {
    if(player) {
      player.destroy();
    }
    videoId = $('#query').val().match(/https?:\/\/www\.youtube\.com\/watch\?v=([^&#!]+)/i)[1];
    getVideo(videoId);
  }

  $('#ytButton').on('click', searchVideo);

});
