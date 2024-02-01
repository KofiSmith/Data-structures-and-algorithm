class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    //
    hash(key){
         let total = 0
        for(let i= 0; i<key.length; i++){
            total += key.charCodeAt(i)
        }
        return total%this.size
    }
    //set method adds a new key value pair to be stored in the hash table
    set(key, value){
        const index = this.hash(key)
        this.table[index] = value
    }

    //get method takes a key and displays its corresponding value
    get(key){
         const index = this.hash(key)
         return this.table[index]
    }
    //remove deletes a row(key value pair) from the table given its key
    remove(key){
        const index = this.hash(key)
        this.table[index] = undefined
    }
    //display traverses the table and shows each key value pair stored 
    display(){
        for(let i=0; i<this.table.length; i++){
            if(this.table[i]){
                console.log(i, this.table[i])
            }
        }
    }
}

//Try case
const table = new HashTable(50)

table.set("name", "Bruce")
table.set("age", 25)
table.display()

console.log(table.get("name"))
table.remove("name")
table.set("name","Clark")
table.display()
//Theres a collision to be handled
