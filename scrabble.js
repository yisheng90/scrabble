var tiles = "orppgma"
var word = "program"
var check = ""
var points 
var pointsLabel = {
  'a':1,
  'b':3,
  'c':3,
  'd':2,
  'e':1,
  'f':4,
  'g':2,
  'h':4,
  'i':1,
  'j':8,
  'k':5,
  'l':1,
  'm':3,
  'n':1,
  'o':1,
  'p':3,
  'q':10,
  'r':1,
  's':1,
  't':1,
  'u':1,
  'v':4,
  'w':4,
  'x':8,
  'y':4,
  'z':10,
  '?':0
}

function scrabble (tiles, word) {
  points = 0
  for (var i = 0; i< word.length; i++) {
    if ( tiles.includes(word[i])) {
      check += word[i]
      tiles = tiles.replace(tiles[tiles.indexOf(word[i])],"")
      points += pointsLabel[word[i]]
    } else if (tiles.includes('?')) {
      check += word[i]
      tiles = tiles.replace(tiles[tiles.indexOf('?')],"")
    } else {
      return false
    }
  
    if (i=== word.length-1) {
      return true
    }
  
  }

}



console.log(scrabble("lailmy", "daily"))
console.log(scrabble("eerriin", "eerie"))
console.log(scrabble("orrpgma", "program")) 
console.log(scrabble("orppgma", "program"))
console.log(scrabble("pizza??", "pizzazz"))
console.log(scrabble("piizza?", "pizzazz"))
console.log(scrabble("a??????", "program"))
console.log(scrabble("b??????", "program"))


function longest(tiles) {
  var content 
  var filter =""
  var control
  require('fs').readFile('./enable1.js', function (err, data) {
    if (err) {
      throw err
    }
    content = data.toString().split(/\r?\n/)
    for (var i =0; i< content.length; i++) {
      control =  tiles
      if (content[i].length <= tiles.length && scrabble(tiles, content[i]) !== null) {
        if (scrabble(tiles, content[i])) {
          if (filter.length < content[i].length) {
            filter = content[i]
          }
        }
            
      }
    }
   console.log(filter);
  })
 
}

//longest("vaakojeaietg????????")


function highest(tiles) {
  var highestScore = 0
  var content 
  var filter =""
  var control
  require('fs').readFile('./enable1.js', function (err, data) {
    if (err) {
      throw err
    }
    content = data.toString().split(/\r?\n/)
    for (var i =0; i< content.length; i++) {
      control =  tiles
      if (content[i].length <= tiles.length && scrabble(tiles, content[i]) !== null) {
        if (scrabble(tiles, content[i])) {
          if (highestScore < points) {
            filter = content[i]
            highestScore = points
          }
        }
            
      }
    }
   console.log(filter, points);
  })
 
}

highest("udosjanyuiuebr??") 
highest("vaakojeaietg????????")