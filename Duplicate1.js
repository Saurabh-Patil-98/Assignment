//find duplicate and same values in two array
//var fullWordList = ['1','2','3','4','5'];
//var wordsToRemove = ['1','2','3'];

var fullWordList = ['1','2','3','4','5'];
var wordsToRemove = ['1','2','3'];
var duplicatesV =[];
var sameV =[];

for(var i=0; i<fullWordList.length; i++){
    var word=fullWordList[i];
    
    if(wordsToRemove.includes(word)){
        duplicatesV.push(word);
    }else{
        sameV.push(word);
    }
}
console.log('Duplicates : ',duplicatesV);
console.log('Same Values : ', sameV);

//output: Duplicates : ['1', '2', '3']
//        Same Values : ['4', '5']