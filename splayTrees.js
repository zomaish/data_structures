/**
  Average operations are O(log n)
  Any sequence of k splay ops starting from an empty tree, and number of items  is never > n will take O(k log n)
  All operations will still average O(log n)
  splay trees used for caching


 
  zig-zig: rotate parent to replace grand-parent then move node to replace parent
  zig-zag: rotate node to replace its parent and then rotate node to replace grand-parent

**/


//find: Walk down the tree untill you find the element. If element doesn't exist, then last element becoms root