const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
   return this.rootNode
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    this.rootNode = addWithin(this.rootNode, data)

    function addWithin(node, data) {
        if(!node) {
          return new Node(data)
        }

        if(node.data === data) {
          return node
        }

        if(data < node.data) {
          node.left = addWithin(node.left, data)
          } else {
            node.right = addWithin(node.right, data)
          }

        return node
      }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    return searchWithin(this.rootNode, data);

    function searchWithin(node, data) {
      if(!node) {
        return false;
      }

      if(node.data === data) {
        return true
      }

      return data < node.data ? 
        searchWithin(node.left, data) :
        searchWithin(node.right, data)
    }
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    return findWithin(this.rootNode, data);

    function findWithin(node, data) {
      if(!node) {
        return null;
      }

      if(node.data === data) {
        return node
      }

      return data < node.data ? 
        findWithin(node.left, data) :
        findWithin(node.right, data)
    }
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data) {
      if(!node) {
        return null;
      }

      if(data < node.data) {
        node.left = removeNode(node.left, data);
        return node; 
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node; 
      } else {
        // equal datas - we should remove this item
        if(!node.left && !node.right) {
          // put null instead of item
          return null
        }

        if(!node.left) {
          // set right child insteaf of item
          node = node.right
          return node
        }

        if(!node.right) {
          // set left child insteaf of item
          node = node.left
          return node
        }

        // both children exist for this item
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data)
        return node;
      }
    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    if(!this.rootNode) {
      return;
    }

    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }

    return node.data
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    if(!this.rootNode) {
      return;
    }

    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }

    return node.data
   
  }
}
const tree = new BinarySearchTree()
tree.add(2);
console.log(tree);
module.exports = {
  BinarySearchTree
};