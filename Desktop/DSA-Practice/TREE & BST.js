

//{{{{{{{{{{{{{{{{{{{{{{{   BINARY SEARCH TREE   }}}}}}}}}}}}}}}}}}}}}}}

//<<<<<<<<<<<<   main operation   >>>>>>>>>>>>>>>>>


// class node {
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class binarysearchtree{
//     constructor(){
//         this.root = null
//     }

//     insert (value){
//         let newnode = new node(value)
//         if(this.root == null){
//             this.root = newnode
//         }else{
//             this.insertnode(this.root,newnode)
//         }
//     }

//     insertnode(root,newnode){
//         if(root.value >newnode.value){
//             if(root.left == null){
//                 root.left = newnode
//             }else{
//                 this.insertnode(root.left,newnode)
//             }
//         }else{
//             if(root.right == null ){
//                 root.right = newnode
//             }else{
//                 this.insertnode(root.right,newnode)
//             }
//         }
//     }

//     search(value,curr =this.root){
//         if(!curr){
//             return false
//         }
//         if(curr.value == value ){
//             return true
//         }else if(curr.value >value){
//             return this.search(value,curr.left)
//         }else{
//             return this.search(value,curr.right)
//         }

//     }

//     inorder(root){
//         if(root){
//             this.inorder(root.left)
//             console.log(root.value)
//             this.inorder(root.right)
//         }
//     }

//     preorder(root){
//         if(root){
//             console.log(root.value)
//             this.preorder(root.left)
//             this.preorder(root.right)
//         }
//     }

//     postorder(root){
//         if(root){
//             this.postorder(root.left)
//             this.postorder(root.right)
//             console.log(root.value)
//         }
//     }

//     levelorder(root){
//         let queue =[]
//         queue.push(this.root)

//         while(queue.length){
//             let curr = queue.shift()
//             console.log(curr.value  )

//             if(curr.left){
//                 queue.push(curr.left)
//             }    
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }

//     min (node){
//         while(node.left){
//             node = node.left
//         }
//         return node
//     }

//     remove(value,root= this.root){
//         if(!root) return null

//         if(root.value >value){
//             root.left = this.remove(value ,root.left)
//         }else if(root.value < value){
//             root.right = this.remove(value, root.right)
//         }else{
//             if(!root.left && !root.right){
//                 return null
//             }

//             if(!root.left) return root.right
//             if(!root.right) return root.left

//             let minright =  this.min(root.right)
//             root.value = minright.value
//             root.right = this.remove(minright.value , root.right)
//         }
//     }

//     is_bst(root,min= -Infinity, max = Infinity){
//         if(!root) return true

//         if(root.value>=min || root.value >=max){
//             return false
//         }

//         return this.is_bst(root.left,min,root.value) &&
//                this.is_bst(root.right,root.value,max)
//     }

// }




// let bst = new  binarysearchtree()
// console.log(bst)
// bst.insert(50)
// bst.insert(40)
// bst.insert(60)
// console.log(bst)

// bst.remove(40)
// bst.inorder(bst.root)
// console.log(bst.is_bst(bst))
// bst.inorder(bst.root)

// bst.preorder(bst.root)
// console.log(bst.search(40))
// bst.postorder(bst.root)
// console.log(bst.search(40))
// bst.levelorder(bst.root)

//============================================== IMPLEMENTATION ================================================================

class node {
    constructor(value){
        this.value = value
        this.left =  null 
        this.right = null
    }
}

class bst {
    constructor (){
        this.root = null
    }
    
    //=========================================== INSERATION ====================================================

    insert(value){
        let newnode = new node (value)
        
        if(!this.root){
            this.root = newnode
        }else{
            this.insertnode(this.root,newnode)
        }
    }

    
    insertnode(root,newnode){
        if(root.value> newnode.value){
            if(root.left ==null){
                root.left = newnode
            }else{
                this.insertnode(root.left,newnode)
            }
        }else{
            if(root.right ==null){
                root.right = newnode
            }else{
                this.insertnode(root.right ,newnode)
            }
        }
    }
    
    //=============================================== SEARCH ================================================
    
    search(value,node = this.root){
        if(!node) return false
        
        if(value == node.value){
            return true
        }else if(value < node.value){
            return this.search(value,node.left)
        }else{
            return this.search(value,node.right)
        }
    }

    //============================================== MIN  VALUE =================================================

    min(node){
        if(!node) return null
        while(node.left){
            node= node.left
        }
        return node
    }

    //============================================= REMOVE A VALUE ==================================================
    
    remove(value, node = this.root){
        if(!node ) {
            console.log("nog found")
            return
        }
        if(value < node.value){
            node.left =this.remove(value,node.left)
        }else if(value> node.value){
            node.right =this.remove(value,node.right)
        }else{
            if(!node.left && !node.right){
                return null
            }
            if(!node.left) return node.right
            if(!node.right) return node.left
            
            let minright = this.min(node.right)
            node.value = minright.value
            node.right = this.remove(minright.value,node.right)
        }
    }

    //========================================== CHECK  IS BST =====================================================
    
    is_bst(root,min = -Infinity , max = Infinity){
        if(!root) return true
        if(min>= root.left || max<= root.right){
            return false
        }
        return this.is_bst(root.left,min,root.value) &&
               this.is_bst(root.right ,root.value,max)
    }

    //============================================ 4 TYPE OF TRAVERSEL ===================================================
    
    preorder(node){
        if(node){
        console.log(node.value)
        this.preorder(node.left)
        this.preorder(node.right)
        }
    }
    
    inorder(node){
        if(node){
            this.inorder(node.left)
            console.log(node.value)
            this.inorder(node.right)
        }
    }
    
    postorder(root = this.root){
        if(root){
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.value)
        }
    }
    
    levelorder(node){
        let que =[]
        que.push(node)
        while(que.length){
            let curr = que.shift()
            console.log(curr.value)
            if(curr.left){
                que.push(curr.left)
            }
            if(curr.right){
                que.push(curr.right)
            }
        }
    }

    //============================================ FIND SECOND LARGEST VALUE ===================================================
    
    secondlarge(root= this.root){
        if(root){
            let curr = root
            let prev = curr
            while(curr.right){
                prev = curr
                curr= curr.right
            }
            if(!curr.left) return prev.value
            
            let next =curr.left
            
            while(next.right){
                next = next.right
            }
            return next.value
        }
    }

    //======================================  FIND THE HIGHT OF THE BST =========================================================

    hight(root = this.root){
        if(!root){
            return -1
        }
        let left = this.hight(root.left)
        let right  = this.hight(root.right)

        return Math.max(left,right)+1
    }

    //================================================= CHECK THE TREE  IS BALANCED ..? =======================================================

    isbalanced(node){
        let checkhight = (root)=>{
            if(!root){
                return 0
            }
            let left = checkhight(root.left)
            if(left === -1){
                return -1
            }
            
            let right = checkhight(root.right)
            
            if(right ===-1){
                return -1
            }
            
            if(Math.abs(left -right)>1){
                return -1
            }
            
            return Math.max(left,right)+1
        }
        return checkhight(node) !==-1
    }

    //========================================== K TH SMALL ELEMENT IN BST ====================================================

        kth_small(k , node = this.root){
            let count =0
            let result = null
        let inorder=(root)=>{
            if(!root  || result !==null){
                return 
            }
            inorder(root.left)
            count++
            if(count ==k){
               result = root.value
               return 
            }
            
            inorder(root.right)
            
        }
        inorder(node)
        return result
    }

    //========================================== K TH LARGE ELEMENT IN BST ====================================================

    kth_large(k , node = this.root){
        let count =0
        let result = null
        let inorder=(root)=>{
            if(!root  || result !==null){
                return 
            }
            inorder(root.right)
            count++
            if(count ==k){
               result = root.value
               return 
            }
            
            inorder(root.left)
            
        }
        inorder(node)
        return result
    }
}

let mybst = new bst ()
mybst.insert(50)
mybst.insert(60)
mybst.insert(30)
mybst.insert(80)
console.log(mybst.search(50))
mybst.preorder(mybst.root)
console.log(mybst.search(30))
mybst.inorder(mybst.root)
console.log("bst?",mybst.is_bst(mybst))
mybst.postorder()
console.log(mybst.search(30))
mybst.levelorder(mybst.root)
console.log("bst?",mybst.is_bst(mybst))
console.log(mybst.secondlarge(mybst.root))
console.log(mybst)
console.log(mybst.hight())
console.log(mybst.kth_small(2))
console.log(mybst.kth_large(2))

