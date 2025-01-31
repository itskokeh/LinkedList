import { LinkedList } from "./app.js"

const list = new LinkedList()

list.append('dog')
list.append('cat')
list.append('parrot')
list.append('hamster')
list.append('snake')
list.append('turtle')
console.log(list.toString())  // ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

list.insertAt('eagle', 3)
console.log(list.toString())  //  ( dog ) -> ( cat ) -> ( parrot ) -> ( eagle ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

console.log(list.removeAt(5))  //  Node { value: 'snake', next: Node { value: 'turtle', next: null } }
console.log(list.toString())  //  ( dog ) -> ( cat ) -> ( parrot ) -> ( eagle ) -> ( hamster ) -> ( turtle ) -> null
console.log(list.getSize())  //  6
console.log(list.getHead())  /*  Node {
                                    value: 'dog',
                                    next: Node { value: 'cat', next: Node { value: 'parrot', next: [Node] } }
                                  }  */
console.log(list.find('dog'))  // 0
console.log(list.contains('eagle'))  //  true
console.log(list.contains('frog'))  //  false

console.log(list.pop())  //  Node { value: 'turtle', next: null }
console.log(list.toString())  //  ( dog ) -> ( cat ) -> ( parrot ) -> ( eagle ) -> ( hamster ) -> null
console.log(list.at(5))  //  null
console.log(list.getTail())  //  Node { value: 'hamster', next: null }

list.prepend('cartoon')
list.prepend('Thomas Shelby')
list.prepend('Ada Thorne')
console.log(list.toString())  //  ( Ada Thorne ) -> ( Thomas Shelby ) -> ( cartoon ) -> ( dog ) -> ( cat ) -> ( parrot ) -> ( eagle ) -> ( hamster ) -> null
