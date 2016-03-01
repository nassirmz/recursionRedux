// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node){
  // if no starting node is given, we set starting node to document.body
  if (node === undefined) {
  	node = document.body;
  }

  // Create an empty array to hold out results
  var nodes = [];

  // if the current nodes classList contains our className, we push that node to nodes
  if ( _.contains(node.classList, className)) {
  	nodes.push(node);
  }

  // For each child element, we recursively call our function
  _.each(node.childNodes, function(element) {
  	// we save the result in an array
  	var childArr = getElementsByClassName(className, element);
  	// we concat the returned childArr with our nodes array
  	nodes = nodes.concat(childArr);
  });

  // Finally we return nodes array
  return nodes;

};
