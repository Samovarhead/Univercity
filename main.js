var modal = document.getElementById('modal-video');

function modalPlayerOpen (){
	modal.style.display = 'flex';
	player.playVideo();
}

function modalPlayerClose (){
	modal.style.display = 'none';
	player.stopVideo()
}