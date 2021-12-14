class nodeList {
    constructor(data){
        this.data = data;
        this.next = null;
    }

    getData(){
        return this.data;
    }

    getNext(){
        return this.next;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
    
    size(){
        let count = 0; 
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }

    insert(data, position = this.length){
        //get the inserted element
        //assign the address of the inserted element to desired node
        //assign the previous node address to the inserted element
        let node = new nodeList(data); //our data is now our node

        /*pushing before head node*/
        if(this.head === null){
            this.head = node;
            this.length++;
            return this.head;
        }

        /*pushing after head node*/
        let iter = 1;
        let currNode = this.head;
        while(currNode.next != null && iter < position){
            currNode = currNode.next; iter++;
        }

        node.next = currNode.next;
        currNode.next = node;
        this.length++;
        return node;
    }

    printData(){
        //for loop for the length of the linked list
        //keep printing data for if num < length;
        //this.data = data;
        let result = [];
        let temp = this.head;
        while(temp){
            result.push(temp.getData());
            temp = temp.getNext();
        }

        console.log(result.join(' => '))
    }
}

// let node1 = new nodeList(5);
// let node2 = new nodeList(2);
// let node3 = new nodeList(10);

// node1.next = node2;
// node2.next = node3;

let list = new LinkedList();

list.insert(10);
list.insert(20);
list.insert(30,2);
list.insert(40);

list.printData();

