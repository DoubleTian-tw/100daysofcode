class DVD {
    constructor(name, director, year) {
        this.name = name;
        this.director = director;
        this.year = year;
    }

    toString() {
        return `${this.name}, directed by ${this.director}, release in ${this.year}s`;
    }
} 

let allDVD = new Array(10);

let DVD1 = new DVD("Name1","Bob","1995");
let DVD2 = new DVD("Name2","Crap","2000");
let DVD3 = new DVD("Name3","Saliy","2010");

allDVD[0] = DVD1;
allDVD[3] = DVD2;
allDVD[5] = DVD3;

document.getElementById("allDVD").innerHTML = 
    allDVD[0] + "<br>" + allDVD[3] + "<br>" + allDVD[5]

//Given a binary array nums, return the maximum number of consecutive 1's in the array.


