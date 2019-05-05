


export class Tree{
    constructor(data){
        var node = new Node(data);
        this._root = node
    }

// Breadth First Traversal
    traverseBF(cb){
        var q = new Queue;

        q.enqueue(this._root);
        
        var currNode=q.dequeue();
        
        while (currNode){
          
            cb(currNode)
            for (var i = 0; i<currNode.children.length; i++){
               
                q.enqueue(currNode.children[i]);
            }


         
           
            currNode = q.dequeue();
        }

    }


// Depth First Traversal
    traverseDF(cb){
        (function recurse(node){
            cb(node)
            for (var i = 0; i<node.children.length;i++){
                recurse(node.children[i])
            }
        })(this._root)
    }


    contains(cb,traversal){
        traversal.call(this, cb);
    }

    addNode(data,toNode,traversal){
        var child = new Node(data);
        var parent = null
        var level = null
        const callback = (node)=>{
            if(node.data==toNode){
                parent = node
            }
        }

        this.contains(callback,traversal);

        if(parent){
            parent.children.push(child);
            child.level = parent.level+1
            child.parent = parent;
        }
        else{
            throw new Error('Parent Non Existent');
            return false;
        }

    }

    removeNode(data,traversal){
        var parent = null;
        const callback = (node)=>{
            if(node.data==data){
                parent=node.parent
            }
        }        
        
        this.contains(callback,traversal);

        if(parent){
            let index =null;
            for (var i=0; i<parent.children.length;i++){
                if(parent.children[i].data == data){
                    index =i;
                }
            }
            parent.children.splice(index,1)
        }
    }

}




class Queue{
    constructor(){
        this.queue =[];
        this.MAX = 99;
        this.MIN = 0;
        this.rear = 0;
        this.front=0;
    }

    isFull(){
        if(this.rear>this.MAX){
            return true
        }
        else{
            return false
        }
    }

    isEmpty(){
        if(this.rear==0){
            return true
        }
        else{
            return false
        }
    }

    peek(){
        return this.queue[this.front];
    }

    enqueue(data){

       if(!this.isFull()){
           this.queue[this.rear] = data;
           
           this.rear++
           this.tostring();
       }
       else{
           return false
       }


    }

    dequeue(){
        if(!this.isEmpty()){
            var data = this.queue[this.front];
            for(var i=0; i<this.rear;i++){
                this.queue[i]=this.queue[i+1]
            }
            this.queue.pop();
            this.rear--
            this.tostring();
            return data;
        }
        else{

            return false
        }
    }

    tostring(){
        // console.log(this.queue);
    }
}

class Node{
    constructor(data){
        this.parent =null;
        this.children =[]
        this.data =data
        this.level=null;
    }

    addParent(parent){
        this.parent = parent;
    }

    addChildren(child){
        this.children.push(child);
    }
}




var tree = new Tree('0');
 



