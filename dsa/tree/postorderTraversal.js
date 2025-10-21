/**
 * Definition for a binary tree node.
 */
export class TreeNode {
	/**
	 * @param {number} value 
	 * @description : Initializes a binary tree node with a value, and left and right children set to null.
	 */
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

/**
 * 
 * @param {TreeNode} root : The root of the binary tree (and it's subtrees in recursive calls)
 * @returns {void} : Prints the value of each node in postorder sequence
 * @description : In postorder traversal, we visit the left subtree, then the right subtree, and finally the root node.
 */
export function postorderTraversal(root) {
	if (!root) return;
	postorderTraversal(root.left);
	postorderTraversal(root.right);
	console.log(root.value);
}

/*
Example Tree:

        4
      /   \  
     /     \
    2       5
   / \       \
  1   3       6
*/

// tiny self-checks in console
if (typeof window !== "undefined")
(function selfTest() {
const root = new TreeNode(4);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(3);
    root.right = new TreeNode(5);
    root.right.right = new TreeNode(6);
    console.log("Pre-order Traversal of the tree:");
    postorderTraversal(root); // 1 3 2 6 5 4
})();