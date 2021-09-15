var games = ["https://static.playunblocked.com/2019/11/ninjago-skybound/","https://www.lego.com/assets/ninjago/games/chens-return/index.html?locale=en-us","https://rishith-maker-1.github.io/123/" , "https://rishith-maker-1.github.io/456/", "https://rishith-maker-1.github.io/101112/", "https://rishith-maker-1.github.io/789/"] ;
var names = ["Ninjago Skybound","Chen's Return", "Star Wars", "Star Wars 2", "Dc Super Heroes", "Batman The Video Game"] ;
var i = 0;
function update()
{
    i++;
    var num = 5
    if(i > num)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedgame = [games[i]];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names[i]] ;
 
    document.getElementById("games").src = updatedgame;
    document.getElementById("name").innerHTML = updatedName;
}