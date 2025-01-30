'use strict'

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

export class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  append(value) {
    const newNode = new Node(value)

    // check if head is empty
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
    this.size++
  }

  prepend(value) {
    const newNode = new Node(value)

    // check if head is empty
    if (!this.head) {
      this.head = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.size++
  }

  getSize() {
    return this.size
  }

  getHead() {
    return this.head
  }

  tail() {
    let current = this.head
    while (current.next) {
      current = current.next
    }
    return current
  }

  at(index) {
    if (index < 0) {
      return null
    }

    let count = 0
    let current = this.head

    while (current) {
      if (count === index) {
        return current
      }
      count++
      current = current.next
    }
    return null
  }

  pop() {
    if (!this.head) {
      return null
    }

    if (!this.head.next) {
      this.head = null
      this.size--
      return
    }

    let current = this.head
    while (current.next.next) {
      current = current.next
    }

    current.next = null
    this.size--
  }

  contains(value) {
    let current = this.head
    while (current) {
      if (current.value === value) {
        return true
      }
      current = current.next
    }
    return false
  }

  find(value) {
    let count = 0
    let current = this.head
    while (current) {
      if (current.value === value) {
        return count
      }
      count++
      current = current.next
    }
    return null
  }

  toString() {
    let objs = []
    let current = this.head
    while (current) {
      objs.push('( '+ current.value.toString() + ' )')
      current = current.next
    }
    objs.push('null')
    return objs.join(' -> ')
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      return null
    }
    const newNode = new Node(value)

    if (index === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      let count = 0
      let current = this.head

      while (count < index - 1) {
        current = current.next
        count++
      }

      newNode.next = current.next
      current.next = newNode
    }
    this.size++
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return null
    }

    let removedNode

    if (index === 0) {
      removedNode = this.head
      this.head = this.head.next
    } else {
      let count = 0
      let current = this.head

      while (count < index - 1) {
        current = current.next
        count++
      }

      removedNode = current.next
      current.next = current.next.next
    }

    this.size--
  }
}

