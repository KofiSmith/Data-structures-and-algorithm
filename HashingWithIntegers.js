
//Hashing with integers

function HashTable(){
    this.table = new Array();
    this.simpleHash = simpleHash;
    this.put = put;
    this.showDistro = showDistro;
}

function simpleHash(data){
    var total = 0;
    for(let i=0;i<data.length;++i){
        total += data.charCodeAt(i)
    }
    console.log("Hash value: "+data+" -->"+total);
    return total%this.table.length;
}

function put(key){
    var pos = this.simpleHash(key);
    this.table[pos] = key
}

function get(key){
    return this.table[simpleHash[key]]
}

function showDistro(){
    for(let i=0;i<this.table.length; ++i){
        if(this.table[i]!=undefined){
            console.log(i+": "+this.table[i])
        }
    }
}

function genRandomInt(min, max){
    return Math.floor(Math.random()*(max-min + 1)) + min;
}

function genStuData(arr){
    for(let i=0; i<arr.length; ++i){
        var num = ""
        for(let j = 1;j<=9; ++j){
            num += Math.floor(Math.random()*10)
        }
        num += genRandomInt(50,100)
        arr[i] = num;
    }
    
}

var numStudents = 10;
var arrSize = 97;
var idLen = 9;
var students = new Array(numStudents)
genStuData(students)
console.log("Student data: \n")
for(let i=0; i<students.length; ++i){
    console.log(students[i].substring(0,8)+" "+students[i].substring(9))
}
console.log("\n\nDatadistribution")
var hTable = new HashTable()
for(let i= 0; i<students.length;++i){
    hTable.put(students[i])
}
hTable.showDistro()
