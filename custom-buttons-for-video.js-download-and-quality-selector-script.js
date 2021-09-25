//Download button js
 var player = videojs(document.querySelector('.video-js'), {
 plugins: {
 vjsdownload:{
 beforeElement: 'playbackRateMenuButton',
 textControl: 'Download video',
 
 name: 'downloadButton',
 downloadURL: '' //optional if you need a different download url than the source
 }
 }
 } , 
 function() {
 console.log('Callback video-js initiated');
 this.on('downloadvideo', function(){
 console.log('downloadvideo triggered'); 
 });
 });
 //Quality Selecter js
 videojs("my_video_1", {}, function() {
 var player = this;
 player.controlBar.addChild('QualitySelector');
 });
