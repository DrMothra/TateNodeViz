/**
 * Created by atg on 02/12/2016.
 */

//Node.js testing

var gc = require("graphcommons");
var accessKey = process.env.GRAPH_COMMONS_API_KEY;

var callback = function(node) {
    //console.log("Graph = ", graph);
    //console.log("Edges = ", graph.edges);
    //console.log("Nodes = ", graph.nodes);
    console.log("Graph updated");
};

var graph_id = "dd035705-b303-453a-b2e9-324f9e4ef7d7";
var node_id = "9001b23b-eeed-29a5-c0c7-78587942c3ae";
var graphcommons = new gc(accessKey);

var signalNode = { "signals" :
    [
        {
            "action": "node_create",
            "type": "NodeType",
            "name": "NodeName",
            "description": "test description",
            "properties": {
                "prop1": "one",
                "prop2": 2
            }
        }
    ]
};

var signalEdge = { "signals" :
    [
        {
            "action": "edge_create",
            "from_type": "Person",
            "from_name": "Dave",
            "to_type": "Person",
            "to_name": "Gemma",
            "name": "Friends"
        }
    ]
};

//graphcommons.update_graph(graph_id, signalNode, callback);

graphcommons.update_graph(graph_id, signalEdge, callback);

