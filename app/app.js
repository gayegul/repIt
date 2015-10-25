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
}

function onPlayerStateChange(event) {
  if(event.data === YT.PlayerState.ENDED) {
    player.seekTo(0);
  }
}

function searchVideo() {
  console.log($('#query'));
  videoId = $('#query').val().match(/https?:\/\/www\.youtube\.com\/watch\?v=([^&#!]+)/i)[1];
  console.log(videoId);
  getVideo(videoId);
}
