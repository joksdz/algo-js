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
    let current = this.head 
    if (idx === 0)
      {
        node.next = this.head
        this.head = node.next 
        return this.head
      }
    for (let i = 1 ; i < idx  && current !== null ; i++ ) 
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
  remove(node)
  {
    let head = this.head
    if (node === this.head)
      {
        this.head = node.next
      }
    if(node === null){return "bad arg"}
    for (let i = 1 ; i < node.data - 1 ; i++)
      {
        head = head.next 
      }
    head.next = node.next 
    
    
    
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

let n1 = new Node(1)
let n2 = new Node(2)
let n3 = new Node(3)
let n4 = new Node(4)
let n5 = new Node(5)
let n6 = new Node(6)
let n7 = new Node(7)
let list = new List(n1)
list.head = n1 


list.insertAt(n2 , 1)
list.insertAt(n3 , 2)
list.insertAt(n4 , 3)
list.insertAt(n5 , 4)
list.insertAt(n6 , 5)
list.insertAt(n7 , 6)
list.remove(n5)
console.log(list)

