let dictionary = [];

function addWord(){
  if(wordValidCheck(document.getElementById('addWord').value)){
    dictionary.push(document.getElementById('addWord').value);
    document.querySelector('.addLabel').innerText = 'Add your word here: ';
  }else{
    document.querySelector('.addLabel').innerText = 'You must insert a word!';
  }
  document.getElementById('addWord').value ='';
}

function searchWord(){
  if(wordValidCheck(document.getElementById('searchWord').value)){
    document.querySelector('.searchLabel').innerText = 'Search your word here: ';
    if(dictionary.indexOf(document.getElementById('searchWord').value) != -1){
      document.querySelector('.resultStatus').innerText = 'Your word exist';
    }else{
      document.querySelector('.resultStatus').innerText = 'Your word doesn\'t exist';
    }
  }else{
    document.querySelector('.searchLabel').innerText = 'You must search a word';
  }
  document.getElementById('searchWord').value = '';
}

function wordValidCheck(word){
  let myWord = word.toLowerCase();
  if(myWord.charAt(0) >= 'a' && myWord.charAt(0) <= 'z'){
    return true;
  }
  return false;
}
