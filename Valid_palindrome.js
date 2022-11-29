var isPalindrome = function(s) {
    var text = s.toLowerCase().replaceAll(/[^A-Za-z0-9]/g,"")
    var reversed = text.split("").reverse().join("")

    console.log(reversed)

    if(reversed===text){
        return true
    }
    else{
        return false
    }
};