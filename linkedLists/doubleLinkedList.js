class Node {
  constructor(d) {
    this.data = d;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  add(d) {
    let node = new Node(d);
    
    if (!this.length) {
      this.head = node;
      this.tail = this.head;
      ++this.length;
      return;
    }
    
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    ++this.length;
  }

  remove(index){

    //check for out-of-bounds values
    if (index > -1 && index < this._length){

      var current = this._head,
          i = 0;

      //special case: removing first item
      if (index === 0){
        this._head = current.next;

        /*
         * If there's only one item in the list and you remove it,
         * then this._head will be null. In that case, you should
         * also set this._tail to be null to effectively destroy
         * the list. Otherwise, set the previous pointer on the
         * new this._head to be null.
         */
        if (!this._head){
            this._tail = null;
        } else {
            this._head.prev = null;
        }

      //special case: removing last item
      } else if (index === this._length -1){
          current = this._tail;
          this._tail = current.prev;
          this._tail.next = null;
      } else {

          //find the right location
          while(i++ < index){
              current = current.next;
          }

          //skip over the item to remove
          current.prev.next = current.next;
      }

      //decrement the length
      this._length--;

      //return the value
      return current.data;            

    } else {
        return null;
    }
  }

  

  searchAt(pos) {
  }
  
  
  remove(pos) {   
  }
  
  printHead() {
    let c = this.head;
    let a = new Array(this.length);
    let i=0;
    
    while(c.next) {
      a[i] = c.data;
      c = c.next;
      i++;
    }
    
   a[i] = c.data;
    
    return a.join(" -> ");
  }
  printTail() {
    let c = this.tail;
    let a = new Array(this.length);
    let i=0;
    
    while(c.prev) {
      a[i] = c.data;
      c = c.prev;
      i++;
    }
    
   a[i] = c.data;
    
    return a.join(" -> ");
  }
}

const ll = new LinkedList();
for (let i=1; i<4; i++) {
  ll.add(i)
}

