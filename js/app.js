document.addEventListener('DOMContentLoaded', () => {

  const newItemForm = document.querySelector('#new-item-form');//setting listener
  newItemForm.addEventListener('submit', handleNewItemForm)

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteClick);

  const playList = document.querySelector('#playlist');
  playList.addEventListener('click', handlePlayListClick);

})

const handleNewItemForm = function (event) {
  event.preventDefault();
  const playListItem = createPlayListItem(event.target);
  const playList = document.querySelector('#playlist');
  playList.appendChild(playListItem);

  event.target.reset();
}

//============ Create elements ==============
const createPlayListItem = function(form){
  const playListItem = document.createElement('div');
  playListItem.classList.add('cd-item');// Album background

  const albumDescription = document.createElement('div');
  albumDescription.classList.add('cd-description');

  const artist= document.createElement('h3');
  artist.textContent = form.artist.value;
  albumDescription.appendChild(artist);

  const album = document.createElement('h4');
  album.textContent = form.album.value;
  albumDescription.appendChild(album);

  const genre = document.createElement('h5');
  //adding emoji to genre
  const emoji = getEmojiByGenre(form.genre.value);
  genre.textContent = form.genre.value + ' ' + emoji;
  albumDescription.appendChild(genre);

  const deleteCd = document.createElement('a');
  deleteCd.classList.add('delete')//Identificador para seleccionar el elemento (conditional)
  deleteCd.textContent = '⛔';
  playListItem.appendChild(deleteCd);
  playListItem.appendChild(albumDescription);

  return playListItem;
}
//function to add emojis to genre
const getEmojiByGenre = (genre) => {
  switch(genre) {
  case 'Rock':
    return '🎸';
    break;
  case 'Pop':
    return '👩‍🎤  ' ;
    break;s
  case 'Indie':
    return '🎹';
    break;
  case 'Electronic':
    return '🎛️';
  case 'Punk':
    return '🤬';
    break;
  case 'Jazz':
    return '🎷';
  }

};


const handleDeleteClick = function(event){
  const playList = document.querySelector('#play-list');
  playList.textContent = '';
}

//======================= Extension ====================================
//Add delele each cd
const handlePlayListClick = function(event){
  console.log(event.target);
  const clickedElement = event.target//obtiene-muestra el elemento donde se inicio el evento
  if (clickedElement.className == 'delete') { //className accede a la clase del elemento
    const parentElement = clickedElement.closest('.cd-item');//closest busca el elemento mas cercano que tenga la clase cd-item
    parentElement.remove()
  }

}
