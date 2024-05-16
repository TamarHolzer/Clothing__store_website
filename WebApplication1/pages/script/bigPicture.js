var myWrapper;
var isOpen = false;

//  גילוי התמונה הגדולה 

function ShowBig(Obj) {
    //אובייקט התמונה שנלחצה - Obj
    myWrapper = document.querySelector('#outer-wrapper');   // X שמכיל את התמונה ואת ה div ה 
    var myBigImg = document.querySelector('#BigImg');
    myBigImg.src = Obj.getAttribute('src');  /*העתקת קובץ המקור מהתמונה שנלחצה*/
    myWrapper.style.display = "inline"; /* X + הצגת האלמנט שמכיל תמונה */

}

function closeBigImage(){
    myWrapper = document.querySelector('#outer-wrapper');   // X שמכיל את התמונה ואת ה div ה 
    myWrapper.style.display = "none"; /* X + הצגת האלמנט שמכיל תמונה */

}

//  הסתרת התמונה הגדולה

function HideBig() {
    myWrapper.style.display = "none";  /* X + הסתרת האלמנט שמכיל תמונה */
}

function openMenu() {
    var menu = document.querySelector('.sub-menu');
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
        menu.style.display = "block"
    }
    else {
        menu.style.display = "none"

    }
}