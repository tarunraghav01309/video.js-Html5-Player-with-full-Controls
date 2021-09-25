# video.js-Html5-Player-with-full-Controls
video.js-Html5-Player-with-full-Controls, Like download video, quality changer, captions.etc


<body>
 <video id='my_video_1' class='video-js vjs-default-skin' width='640px' height='267px'
     controls preload="none" poster='http://video-js.zencoder.com/oceans-clip.jpg'
     data-setup='{ "aspectRatio":"640:267", "playbackRates": [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4] }'>
   <source
   src="https://drive.google.com/uc?export=download&id=1tPIIQuWEePIrvxCSoeIU4zWUOIZuAj6m"
   type="video/mp4"
   size="576"
   label="auto"
   selected="true"
   />
   
   <track
   kind="captions"
   label="English"
   srclang="en"
   src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"
   default/>
 </video>
 <head>
 <!--Add video.js Latest CSS Stylesheet-->
 <link href='https://vjs.zencdn.net/7.15.4/video-js.css' rel='stylesheet' />
 <!--Add video.js Latest JS Script-->
 <script src='https://vjs.zencdn.net/7.15.4/video.min.js'></script>
 <!--Quality Selecter CSS -->
 <link href='https://unpkg.com/@silvermine/videojs-quality-selector/dist/css/quality-selector.css' rel='stylesheet'>
 <!--custom-buttons-for-video.js-download-and-quality-selector-style.css-->
 <link href='https://cdn.jsdelivr.net/gh/tarunraghav01309/video.js-Html5-Player-with-full-Controls/custom-buttons-for-video.js-download-and-quality-selector-style.css' rel='stylesheet'>
 <!--Download Video.js Plugin-->
 <script src='https://7ds7.github.io/videojs-vjsdownload/dist/videojs-vjsdownload.js'></script>
 <!--Quality Selecter JS-->
 <script src='https://unpkg.com/@silvermine/videojs-quality-selector/dist/js/silvermine-videojs-quality-selector.min.js'></script>
 <!--custom-buttons-for-video.js-download-and-quality-selector-script.js-->
 <script src='https://cdn.jsdelivr.net/gh/tarunraghav01309/video.js-Html5-Player-with-full-Controls/custom-buttons-for-video.js-download-and-quality-selector-script.js'></script>
 <!--If you'd like to support IE8 (for Video.js versions prior to v7) --> 
 <script src='https://vjs.zencdn.net/ie8/1.1.2/videojs-ie8.min.js'></script>
</head>
</body>
