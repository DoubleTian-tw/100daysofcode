function hashmap(ransomNote, magazine){
    let map = {};
    let cnt;
    for(let i = 0; i < magazine.length; i++){
        let currentChar = magazine.charAt(i);

        if (currentChar in map)
            map[currentChar] += 1
        else
            map[currentChar] = 1

    }
    for(let j = 0; j < ransomNote.length; j++){
        let currentChar = ransomNote.charAt(j);
        if (currentChar in map && map[currentChar] > 0) 
            map[currentChar] -= 1
        else
            return false
    }
    return true;
}


function fun(ransomNote, magazine){
    console.log(`ransomNote:${ransomNote},magazine:${magazine}`);
    
    for(let i = 0; i < ransomNote.length; i++)
    {
        let currentChar = ransomNote.charAt(i);

        let indexMagazine = magazine.indexOf(currentChar);

        if (indexMagazine == -1) return false;

        console.log(`1:${magazine.substring(0, indexMagazine)},2:${magazine.substring(indexMagazine + 1)}`);
        magazine = magazine.substring(0, indexMagazine) + magazine.substring(indexMagazine + 1);
        console.log(`magazine:${magazine}`);
    }  
    return true;
}

let ransomNote = "jjhafiecg"
let magazine = "gj"
// console.log(`ransomNote:${ransomNote}, magazine:${magazine}`);
// console.log(fun("aa","aab"));
// console.log(fun("jjhafiecg","gj"));
console.log(hashmap("aa", "aab"));
console.log(hashmap("jjhafiecg", "gj"));
