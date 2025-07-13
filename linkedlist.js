class Node {
  constructor(data){
    this.data = data ;
    this.next = null;
  }
}
class List{
  constructor(head = null)
   {
     this.head = head
   }
  size() {
    let count = this.head.data; 
    let node = this.head;
    while (node) {
        count++;
        node = node.next
    }
    return count;
}
  clear()
  {
    this.head = null
  }
  getLast(){
    let node = this.head
    
      while(node.next)
      {
        node = node.next
      }
       return node 
      
  }
  getFirst()
  {
  return this.head
  }
  insertFirst(node)
  {
    node.next = this.head
    this.head = node 
   
    
  }
  insertLast(node)
  {
   let current = this.head
    while(current.next)
      {
        current = current.next
      }
    current.next = node 
  }
  insertAt(node , idx){
   
    if (idx === 0)
      {
        node.next = this.head
        this.head = node
        return 
      }
    let current = this.head
    for (let i = 0 ; i < idx -1  && current !== null ; i++ ) 
      {
        current = current.next 
      }
    if(current  === null)
      {
        return console.log("bad position")
      }
    
    node.next = current.next 
    current.next = node
  }
  getmid()
  {
    let first, m = this.head
        while(first !== null && first.next !== null)
          {
            first = first.next.next
            m = m.next
          }
        return m.data
      
  }
  remove(node) {
  if (!this.head || !node) {
    return "bad arg";
  }
  
  
  if (this.head === node) {
    this.head = this.head.next;
    return;
  }
  
  let current = this.head;
  
  
  while (current.next && current.next !== node) {
    current = current.next;
  }
  
 
  if (current.next === node) {
    current.next = node.next;
  } else {
    return "Node not found";
  }
}
  getAt(idx)
  {
    let node = this.head 
    if (idx === 0 ) 
      {
        return this.head.data
      }
    for (let i = 1; i < idx; i++) 
      {
        node = node.next 
      }
    return node.data
  }

}
let n0 = new Node(0)
let n1 = new Node(1)
let n2 = new Node(2)
let n3 = new Node(3)
let n4 = new Node(4)
let n5 = new Node(5)
let n6 = new Node(6)
let n7 = new Node(7)
let list = new List(n1)
list.head = n1 

list.insertAt(n0 , 0)
list.insertAt(n2 , 2)
list.insertAt(n3 , 3)
list.insertAt(n4 , 4)
list.insertAt(n5 , 5)
list.insertAt(n6 , 6)
list.insertAt(n7 , 7)
list.remove(n5)
console.log(list)

