(function(global){
  function init() {
    console.log('init');
  }
  function PicturePuzzle(){
    if(this === flobal) {
      return new PicturePuzzle();
    }
    console.log('this: ', this);
  }

  global.PicturePuzzle = PicturePuzzle;
})(window)
