window.onload=function()
{
    var arrOfPtags = document.getElementsByTagName("p");
    for (var i = 0;i < arrOfPtags.length; i++){
         size= arrOfPtags[i].getElementsByTagName("img");
         if (size.length)
         {
            arrOfPtags[i].style.background='white'
         }
             
    }
}