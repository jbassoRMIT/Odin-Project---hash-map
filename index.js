class HashMap{
    constructor(array={},loadFactor=0.75,capacity=16){
        this.array=array;
        this.loadFactor=loadFactor;
        this.capacity=capacity;
    }
    hash(key){
        let hashCode=0;

        let prime=31;
        for(let i=0;i<key.length;i++){
            hashCode=prime*hashCode+key.charCodeAt(i);
        }
        return hashCode;
    }

    set(key,value){
        this.array[key]=value;
    }

    get(key){
        if(this.array[key]){
            return this.array[key];
        }
        else{
            return null;
        }
    }

    has(key){
        if(this.array[key]){
            return true;
        }
        else{
            return false;
        }
    }

    remove(key){
        //use delete method;
        if(this.array[key]){
            delete this.array[key];
            return true;
        }
        else {
            return false;
        }
    }

}

const test=new HashMap();
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('banana', 'green')
console.log(test.array);
console.log(test.get("banana"));
console.log(test.get("toy"));
console.log(test.has("banana"));
console.log(test.has("toy"))
console.log(test.remove("banana"));
console.log(test.array);
