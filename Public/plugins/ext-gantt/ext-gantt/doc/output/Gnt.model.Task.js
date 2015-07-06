Ext.data.JsonP.Gnt_model_Task({
  "subclasses": [

  ],
  "html_filename": "Task.html",
  "docauthor": null,
  "singleton": false,
  "code_type": "ext_define",
  "superclasses": [

  ],
  "members": {
    "property": [

    ],
    "method": [
      {
        "params": [
          {
            "type": "Node/Array",
            "optional": false,
            "name": "node",
            "doc": "<p>The node or Array of nodes to append</p>\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Insert node(s) as the last child node of this node. ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-appendChild",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "appendChild",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Node",
          "doc": "<p>The appended node if single append, or null if an array was passed</p>\n"
        },
        "linenr": 1010,
        "deprecated": null,
        "doc": "<p>Insert node(s) as the last child node of this node.</p>\n\n\n<p>If the node was previously a child node of another parent node, it will be removed from that node first.</p>\n\n"
      },
      {
        "params": [
          {
            "type": "Function",
            "optional": false,
            "name": "fn",
            "doc": "<p>The function to call</p>\n"
          },
          {
            "type": "Object",
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the current Node.</p>\n"
          },
          {
            "type": "Array",
            "optional": true,
            "name": "args",
            "doc": "<p>(optional) The args to call the function with (default to passing the current Node)</p>\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Bubbles up the tree from this node, calling the specified function with each node. ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-bubble",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "bubble",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 1385,
        "deprecated": null,
        "doc": "<p>Bubbles up the tree from this node, calling the specified function with each node. The arguments to the function\nwill be the args provided or the current node. If the function returns false at any point,\nthe bubble is stopped.</p>\n"
      },
      {
        "params": [
          {
            "type": "Function",
            "optional": false,
            "name": "fn",
            "doc": "<p>The function to call</p>\n"
          },
          {
            "type": "Object",
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the current Node.</p>\n"
          },
          {
            "type": "Array",
            "optional": true,
            "name": "args",
            "doc": "<p>(optional) The args to call the function with (default to passing the current Node)</p>\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Cascades down the tree from this node, calling the specified function with each node. ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-cascadeBy",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "cascadeBy",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 1412,
        "deprecated": null,
        "doc": "<p>Cascades down the tree from this node, calling the specified function with each node. The arguments to the function\nwill be the args provided or the current node. If the function returns false at any point,\nthe cascade is stopped on that branch.</p>\n"
      },
      {
        "params": [
          {
            "type": "Function",
            "optional": false,
            "name": "recursive",
            "doc": "<p>(Optional) True to recursively collapse all the children</p>\n"
          },
          {
            "type": "Function",
            "optional": false,
            "name": "callback",
            "doc": "<p>(Optional) The function to execute once the collapse completes</p>\n"
          },
          {
            "type": "Object",
            "optional": false,
            "name": "scope",
            "doc": "<p>(Optional) The scope to run the callback in</p>\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Collapse this node. ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-collapse",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "collapse",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 1684,
        "deprecated": null,
        "doc": "<p>Collapse this node.</p>\n"
      },
      {
        "params": [
          {
            "type": "Function",
            "optional": false,
            "name": "recursive",
            "doc": "<p>(Optional) True to recursively collapse all the children</p>\n"
          },
          {
            "type": "Function",
            "optional": false,
            "name": "callback",
            "doc": "<p>(Optional) The function to execute once all the children are collapsed</p>\n"
          },
          {
            "type": "Object",
            "optional": false,
            "name": "scope",
            "doc": "<p>(Optional) The scope to run the callback in</p>\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Collapse all the children of this node. ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-collapseChildren",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "collapseChildren",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 1721,
        "deprecated": null,
        "doc": "<p>Collapse all the children of this node.</p>\n"
      },
      {
        "params": [
          {
            "type": "Node",
            "optional": false,
            "name": "node",
            "doc": "\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Returns true if this node is an ancestor (at any point) of the passed node. ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-contains",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "contains",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "linenr": 1493,
        "deprecated": null,
        "doc": "<p>Returns true if this node is an ancestor (at any point) of the passed node.</p>\n"
      },
      {
        "params": [
          {
            "type": "String",
            "optional": true,
            "name": "id",
            "doc": "<p>(optional) A new id, defaults to this Node's id. See <code>id</code>.</p>\n"
          },
          {
            "type": "Boolean",
            "optional": true,
            "name": "deep",
            "doc": "<p>(optional) <p>If passed as <code>true</code>, all child Nodes are recursively copied into the new Node.</p></p>\n\n<p>If omitted or false, the copy will have no child Nodes.</p>\n\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Creates a copy (clone) of this Node. ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-copy",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "copy",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Node",
          "doc": "<p>A copy of this Node.</p>\n"
        },
        "linenr": 1153,
        "deprecated": null,
        "doc": "<p>Creates a copy (clone) of this Node.</p>\n"
      },
      {
        "params": [
          {
            "type": "Object",
            "optional": false,
            "name": "node",
            "doc": "\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Ensures that the passed object is an instance of a Record with the NodeInterface applied ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-createNode",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "createNode",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "linenr": 873,
        "deprecated": null,
        "doc": "<p>Ensures that the passed object is an instance of a Record with the NodeInterface applied</p>\n"
      },
      {
        "params": [
          {
            "type": "Object",
            "optional": false,
            "name": "silent",
            "doc": "\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Destroys the node. ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-destroy",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "destroy",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 1190,
        "deprecated": null,
        "doc": "<p>Destroys the node.</p>\n"
      },
      {
        "params": [
          {
            "type": "Function",
            "optional": false,
            "name": "fn",
            "doc": "<p>The function to call</p>\n"
          },
          {
            "type": "Object",
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the current Node in the iteration.</p>\n"
          },
          {
            "type": "Array",
            "optional": true,
            "name": "args",
            "doc": "<p>(optional) The args to call the function with (default to passing the current Node)</p>\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Interates the child nodes of this node, calling the specified function with each node. ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-eachChild",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "eachChild",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 1432,
        "deprecated": null,
        "doc": "<p>Interates the child nodes of this node, calling the specified function with each node. The arguments to the function\nwill be the args provided or the current node. If the function returns false at any point,\nthe iteration stops.</p>\n"
      },
      {
        "params": [
          {
            "type": "Function",
            "optional": false,
            "name": "recursive",
            "doc": "<p>(Optional) True to recursively expand all the children</p>\n"
          },
          {
            "type": "Function",
            "optional": false,
            "name": "callback",
            "doc": "<p>(Optional) The function to execute once the expand completes</p>\n"
          },
          {
            "type": "Object",
            "optional": false,
            "name": "scope",
            "doc": "<p>(Optional) The scope to run the callback in</p>\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Expand this node. ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-expand",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "expand",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 1602,
        "deprecated": null,
        "doc": "<p>Expand this node.</p>\n"
      },
      {
        "params": [
          {
            "type": "Function",
            "optional": false,
            "name": "recursive",
            "doc": "<p>(Optional) True to recursively expand all the children</p>\n"
          },
          {
            "type": "Function",
            "optional": false,
            "name": "callback",
            "doc": "<p>(Optional) The function to execute once all the children are expanded</p>\n"
          },
          {
            "type": "Object",
            "optional": false,
            "name": "scope",
            "doc": "<p>(Optional) The scope to run the callback in</p>\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Expand all the children of this node. ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-expandChildren",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "expandChildren",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 1653,
        "deprecated": null,
        "doc": "<p>Expand all the children of this node.</p>\n"
      },
      {
        "params": [
          {
            "type": "String",
            "optional": false,
            "name": "attribute",
            "doc": "<p>The attribute name</p>\n"
          },
          {
            "type": "Mixed",
            "optional": false,
            "name": "value",
            "doc": "<p>The value to search for</p>\n"
          },
          {
            "type": "Boolean",
            "optional": false,
            "name": "deep",
            "doc": "<p>(Optional) True to search through nodes deeper than the immediate children</p>\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Finds the first child that has the attribute with the specified value. ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-findChild",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "findChild",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Node",
          "doc": "<p>The found child or null if none was found</p>\n"
        },
        "linenr": 1452,
        "deprecated": null,
        "doc": "<p>Finds the first child that has the attribute with the specified value.</p>\n"
      },
      {
        "params": [
          {
            "type": "Function",
            "optional": false,
            "name": "fn",
            "doc": "<p>A function which must return <code>true</code> if the passed Node is the required Node.</p>\n"
          },
          {
            "type": "Object",
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the Node being tested.</p>\n"
          },
          {
            "type": "Boolean",
            "optional": false,
            "name": "deep",
            "doc": "<p>(Optional) True to search through nodes deeper than the immediate children</p>\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Finds the first child by a custom function. ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-findChildBy",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "findChildBy",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Node",
          "doc": "<p>The found child or null if none was found</p>\n"
        },
        "linenr": 1465,
        "deprecated": null,
        "doc": "<p>Finds the first child by a custom function. The child matches if the function passed returns <code>true</code>.</p>\n"
      },
      {
        "params": [
          {
            "type": "Object",
            "optional": false,
            "name": "dependencyStore",
            "doc": "<p>Optional</p>\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Returns all dependencies of this task (both incoming and outcoming) ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-getAllDependencies",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "getAllDependencies",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Array[Gnt.model.Dependency]",
          "doc": "\n"
        },
        "linenr": 622,
        "deprecated": null,
        "doc": "<p>Returns all dependencies of this task (both incoming and outcoming)</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "Task.html",
        "shortDoc": "Returns the calendar instance, associated with this task ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-getCalendar",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "getCalendar",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Gnt.data.Calendar",
          "doc": "<p>calendar</p>\n"
        },
        "linenr": 173,
        "deprecated": null,
        "doc": "<p>Returns the <a href=\"#/api/Gnt.data.Calendar\" rel=\"Gnt.data.Calendar\" class=\"docClass\">calendar</a> instance, associated with this task</p>\n"
      },
      {
        "params": [
          {
            "type": "String",
            "optional": false,
            "name": "unit",
            "doc": "<p>Unit to return return the duration in. Defaults to the <code>DurationUnit</code> field of this task</p>\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Returns the duration of the task in the calendar days in the given units. ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-getCalendarDuration",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "getCalendarDuration",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Number",
          "doc": "<p>duration</p>\n"
        },
        "linenr": 358,
        "deprecated": null,
        "doc": "<p>Returns the duration of the task in the calendar days in the given units. Please refer to the \"Task durations\" section for additional imporant details\nabout duration units.</p>\n"
      },
      {
        "params": [
          {
            "type": "Number",
            "optional": false,
            "name": "index",
            "doc": "\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Returns the child node at the specified index. ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-getChildAt",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "getChildAt",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Node",
          "doc": "\n"
        },
        "linenr": 1345,
        "deprecated": null,
        "doc": "<p>Returns the child node at the specified index.</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "Task.html",
        "shortDoc": "Returns the dependency store instance, associated with this task ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-getDependencyStore",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "getDependencyStore",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Ext.data.Store",
          "doc": "<p>dependency store</p>\n"
        },
        "linenr": 189,
        "deprecated": null,
        "doc": "<p>Returns the dependency store instance, associated with this task</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "Task.html",
        "shortDoc": "Returns depth of this node (the root node has a depth of 0) ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-getDepth",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "getDepth",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Number",
          "doc": "\n"
        },
        "linenr": 1377,
        "deprecated": null,
        "doc": "<p>Returns depth of this node (the root node has a depth of 0)</p>\n"
      },
      {
        "params": [
          {
            "type": "String",
            "optional": false,
            "name": "unit",
            "doc": "<p>Unit to return return the duration in. Defaults to the <code>DurationUnit</code> field of this task</p>\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Returns the duration of the task in the working days in the given units. ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-getDuration",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "getDuration",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Number",
          "doc": "<p>duration</p>\n"
        },
        "linenr": 341,
        "deprecated": null,
        "doc": "<p>Returns the duration of the task in the working days in the given units.</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "Task.html",
        "shortDoc": "Returns the end date of this task ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-getEndDate",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "getEndDate",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Date",
          "doc": "<p>end date</p>\n"
        },
        "linenr": 270,
        "deprecated": null,
        "doc": "<p>Returns the end date of this task</p>\n"
      },
      {
        "params": [
          {
            "type": "Object",
            "optional": false,
            "name": "dependencyStore",
            "doc": "<p>Optional</p>\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Returns all incoming dependencies of this task ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-getIncomingDependencies",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "getIncomingDependencies",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Array[Gnt.model.Dependency]",
          "doc": "\n"
        },
        "linenr": 645,
        "deprecated": null,
        "doc": "<p>Returns all incoming dependencies of this task</p>\n"
      },
      {
        "params": [
          {
            "type": "Object",
            "optional": false,
            "name": "dependencyStore",
            "doc": "<p>Optional</p>\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Returns all outcoming dependencies of this task ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-getOutComingDependencies",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "getOutComingDependencies",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Array[Gnt.model.Dependency]",
          "doc": "\n"
        },
        "linenr": 668,
        "deprecated": null,
        "doc": "<p>Returns all outcoming dependencies of this task</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "Task.html",
        "shortDoc": "Returns the start date of this task ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-getStartDate",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "getStartDate",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Date",
          "doc": "<p>start date</p>\n"
        },
        "linenr": 223,
        "deprecated": null,
        "doc": "<p>Returns the start date of this task</p>\n"
      },
      {
        "params": [
          {
            "type": "Object",
            "optional": false,
            "name": "ignoreAbsense",
            "doc": "\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Returns the task store instance, associated with this task ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-getTaskStore",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "getTaskStore",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Ext.data.Store",
          "doc": "<p>task store</p>\n"
        },
        "linenr": 205,
        "deprecated": null,
        "doc": "<p>Returns the <a href=\"#/api/Gnt.data.TaskStore\" rel=\"Gnt.data.TaskStore\" class=\"docClass\">task store</a> instance, associated with this task</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "Task.html",
        "shortDoc": "Returns true if this node has one or more child nodes, else false. ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-hasChildNodes",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "hasChildNodes",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "linenr": 988,
        "deprecated": null,
        "doc": "<p>Returns true if this node has one or more child nodes, else false.</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "Task.html",
        "shortDoc": "Increase the indendation level of this task in the tree ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-indent",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "indent",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 549,
        "deprecated": null,
        "doc": "<p>Increase the indendation level of this task in the tree</p>\n"
      },
      {
        "params": [
          {
            "type": "Node",
            "optional": false,
            "name": "node",
            "doc": "\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Returns the index of a child node ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-indexOf",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "indexOf",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Number",
          "doc": "<p>The index of the node or -1 if it was not found</p>\n"
        },
        "linenr": 1368,
        "deprecated": null,
        "doc": "<p>Returns the index of a child node</p>\n"
      },
      {
        "params": [
          {
            "type": "Node",
            "optional": false,
            "name": "node",
            "doc": "<p>The node to insert</p>\n"
          },
          {
            "type": "Node",
            "optional": false,
            "name": "refNode",
            "doc": "<p>The node to insert before (if null the node is appended)</p>\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Inserts the first node before the second node in this nodes childNodes collection. ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-insertBefore",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "insertBefore",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Node",
          "doc": "<p>The inserted node</p>\n"
        },
        "linenr": 1218,
        "deprecated": null,
        "doc": "<p>Inserts the first node before the second node in this nodes childNodes collection.</p>\n"
      },
      {
        "params": [
          {
            "type": "Number",
            "optional": false,
            "name": "index",
            "doc": "<p>The zero-based index to insert the node at</p>\n"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "name": "node",
            "doc": "<p>The node to insert</p>\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Insert a node into this node ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-insertChild",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "insertChild",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Ext.data.Model",
          "doc": "<p>The record you just inserted</p>\n"
        },
        "linenr": 1300,
        "deprecated": null,
        "doc": "<p>Insert a node into this node</p>\n"
      },
      {
        "params": [
          {
            "type": "Node",
            "optional": false,
            "name": "node",
            "doc": "\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Returns true if the passed node is an ancestor (at any point) of this node. ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-isAncestor",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "isAncestor",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "linenr": 1502,
        "deprecated": null,
        "doc": "<p>Returns true if the passed node is an ancestor (at any point) of this node.</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "Task.html",
        "shortDoc": "Returns true if this node has one or more child nodes, or if the expandable\nnode attribute is explicitly specified as...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-isExpandable",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "isExpandable",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "linenr": 996,
        "deprecated": null,
        "doc": "<p>Returns true if this node has one or more child nodes, or if the <tt>expandable</tt>\nnode attribute is explicitly specified as true (see attributes), otherwise returns false.</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "Task.html",
        "shortDoc": "Returns true if this node is expaned ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-isExpanded",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "isExpanded",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "linenr": 1555,
        "deprecated": null,
        "doc": "<p>Returns true if this node is expaned</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "Task.html",
        "shortDoc": "Returns true if this node is the first child of its parent ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-isFirst",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "isFirst",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "linenr": 980,
        "deprecated": null,
        "doc": "<p>Returns true if this node is the first child of its parent</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "Task.html",
        "shortDoc": "Returns true if this node is the last child of its parent ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-isLast",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "isLast",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "linenr": 972,
        "deprecated": null,
        "doc": "<p>Returns true if this node is the last child of its parent</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "Task.html",
        "shortDoc": "Returns true if this node is a leaf ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-isLeaf",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "isLeaf",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "linenr": 885,
        "deprecated": null,
        "doc": "<p>Returns true if this node is a leaf</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "Task.html",
        "shortDoc": "Returns true if this node is loaded ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-isLoaded",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "isLoaded",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "linenr": 1563,
        "deprecated": null,
        "doc": "<p>Returns true if this node is loaded</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "Task.html",
        "shortDoc": "Returns true if this node is loading ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-isLoading",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "isLoading",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "linenr": 1571,
        "deprecated": null,
        "doc": "<p>Returns true if this node is loading</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "Task.html",
        "shortDoc": "Returns true if this task is a milestone (has the same start and end dates). ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-isMilestone",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "isMilestone",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "linenr": 612,
        "deprecated": null,
        "doc": "<p>Returns true if this task is a milestone (has the same start and end dates).</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "Task.html",
        "shortDoc": "Returns true if this node is the root node ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-isRoot",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "isRoot",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "linenr": 1579,
        "deprecated": null,
        "doc": "<p>Returns true if this node is the root node</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "Task.html",
        "shortDoc": "Returns true if this node is visible ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-isVisible",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "isVisible",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "linenr": 1587,
        "deprecated": null,
        "doc": "<p>Returns true if this node is visible</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "Task.html",
        "shortDoc": "Decrease the indendation level of this task in the tree ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-outdent",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "outdent",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 563,
        "deprecated": null,
        "doc": "<p>Decrease the indendation level of this task in the tree</p>\n"
      },
      {
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "name": "destroy",
            "doc": "<p><tt>true</tt> to destroy the node upon removal. Defaults to <tt>false</tt>.</p>\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Removes this node from its parent ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-remove",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "remove",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Node",
          "doc": "<p>this</p>\n"
        },
        "linenr": 1316,
        "deprecated": null,
        "doc": "<p>Removes this node from its parent</p>\n"
      },
      {
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "name": "destroy",
            "doc": "<p><tt>true</tt> to destroy the node upon removal. Defaults to <tt>false</tt>.</p>\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Removes all child nodes from this node. ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-removeAll",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "removeAll",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Node",
          "doc": "<p>this</p>\n"
        },
        "linenr": 1330,
        "deprecated": null,
        "doc": "<p>Removes all child nodes from this node.</p>\n"
      },
      {
        "params": [
          {
            "type": "Node",
            "optional": false,
            "name": "node",
            "doc": "<p>The node to remove</p>\n"
          },
          {
            "type": "Boolean",
            "optional": false,
            "name": "destroy",
            "doc": "<p><tt>true</tt> to destroy the node upon removal. Defaults to <tt>false</tt>.</p>\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Removes a child node from this node. ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-removeChild",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "removeChild",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Node",
          "doc": "<p>The removed node</p>\n"
        },
        "linenr": 1099,
        "deprecated": null,
        "doc": "<p>Removes a child node from this node.</p>\n"
      },
      {
        "params": [
          {
            "type": "Node",
            "optional": false,
            "name": "newChild",
            "doc": "<p>The replacement node</p>\n"
          },
          {
            "type": "Node",
            "optional": false,
            "name": "oldChild",
            "doc": "<p>The node to replace</p>\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Replaces one child node in this node with another. ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-replaceChild",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "replaceChild",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Node",
          "doc": "<p>The replaced node</p>\n"
        },
        "linenr": 1354,
        "deprecated": null,
        "doc": "<p>Replaces one child node in this node with another.</p>\n"
      },
      {
        "params": [
          {
            "type": "Number",
            "optional": false,
            "name": "number",
            "doc": "<p>The number of duration units</p>\n"
          },
          {
            "type": "String",
            "optional": false,
            "name": "unit",
            "doc": "<p>The unit of the duration. Defaults to the <code>DurationUnit</code> field of this task</p>\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Sets the Duration + DurationUnit + EndDate fields of this task, considering the weekends/holidays rules. ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-setDuration",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "setDuration",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 372,
        "deprecated": null,
        "doc": "<p>Sets the <code>Duration + DurationUnit + EndDate</code> fields of this task, considering the weekends/holidays rules.\nThe modifications are wrapped with <code>beginEdit/endEdit</code> calls.</p>\n"
      },
      {
        "params": [
          {
            "type": "Date",
            "optional": false,
            "name": "date",
            "doc": "<p>End date to set</p>\n"
          },
          {
            "type": "Boolean",
            "optional": false,
            "name": "keepDuration",
            "doc": "<p>Pass <code>true</code> to keep the duration of the task (\"move\" the task), <code>false</code> to change the duration (\"resize\" the task).\nDefault is <code>true</code></p>\n"
          },
          {
            "type": "Boolean",
            "optional": false,
            "name": "skipNonWorkingTime",
            "doc": "<p>Pass <code>true</code> to automatically move the start date to the previous working day (if it falls on weekend/holiday).\nDefault is <code>false</code></p>\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Depending from the arguments, set either StartDate + EndDate fields of this task, or EndDate + Duration\nconsidering t...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-setEndDate",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "setEndDate",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 280,
        "deprecated": null,
        "doc": "<p>Depending from the arguments, set either <code>StartDate + EndDate</code> fields of this task, or <code>EndDate + Duration</code>\nconsidering the weekends/holidays rules. The modifications are wrapped with <code>beginEdit/endEdit</code> calls.</p>\n"
      },
      {
        "params": [
          {
            "type": "Date",
            "optional": false,
            "name": "date",
            "doc": "<p>Start date to set</p>\n"
          },
          {
            "type": "Boolean",
            "optional": false,
            "name": "keepDuration",
            "doc": "<p>Pass <code>true</code> to keep the duration of the task (\"move\" the task), <code>false</code> to change the duration (\"resize\" the task).\nDefault is <code>true</code></p>\n"
          },
          {
            "type": "Boolean",
            "optional": false,
            "name": "skipNonWorkingTime",
            "doc": "<p>Pass <code>true</code> to automatically move the start date to the next working day (if it falls on weekend/holiday).\nDefault is <code>false</code></p>\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Depending from the arguments, set either StartDate + EndDate fields of this task, or StartDate + Duration\nconsidering...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-setStartDate",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "setStartDate",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 233,
        "deprecated": null,
        "doc": "<p>Depending from the arguments, set either <code>StartDate + EndDate</code> fields of this task, or <code>StartDate + Duration</code>\nconsidering the weekends/holidays rules. The modifications are wrapped with <code>beginEdit/endEdit</code> calls.</p>\n"
      },
      {
        "params": [
          {
            "type": "Date",
            "optional": false,
            "name": "startDate",
            "doc": "<p>Start date to set</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "endDate",
            "doc": "<p>End date to set</p>\n"
          },
          {
            "type": "Boolean",
            "optional": false,
            "name": "skipNonWorkingTime",
            "doc": "<p>Pass <code>true</code> to automatically move the start/end dates to the next/previous working day (if they falls on weekend/holiday).\nDefault is <code>false</code></p>\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Sets the StartDate / EndDate / Duration fields of this task, considering the weekends/holidays rules. ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-setStartEndDate",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "setStartEndDate",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 314,
        "deprecated": null,
        "doc": "<p>Sets the <code>StartDate / EndDate / Duration</code> fields of this task, considering the weekends/holidays rules.\nThe modifications are wrapped with <code>beginEdit/endEdit</code> calls.</p>\n"
      },
      {
        "params": [
          {
            "type": "Function",
            "optional": false,
            "name": "fn",
            "doc": "<p>A function which, when passed two Nodes, returns -1, 0 or 1 depending upon required sort order.</p>\n"
          },
          {
            "type": "Boolean",
            "optional": false,
            "name": "recursive",
            "doc": "<p>Whether or not to apply this sort recursively</p>\n"
          },
          {
            "type": "Boolean",
            "optional": false,
            "name": "suppressEvent",
            "doc": "<p>Set to true to not fire a sort event.</p>\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Sorts this nodes children using the supplied sort function. ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-sort",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "sort",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 1518,
        "deprecated": null,
        "doc": "<p>Sorts this nodes children using the supplied sort function.</p>\n"
      },
      {
        "params": [
          {
            "type": "Object",
            "optional": false,
            "name": "silent",
            "doc": "\n"
          }
        ],
        "html_filename": "Task.html",
        "shortDoc": "Updates general data of this node like isFirst, isLast, depth. ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-method-updateInfo",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "updateInfo",
        "owner": "Gnt.model.Task",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "linenr": 911,
        "deprecated": null,
        "doc": "<p>Updates general data of this node like isFirst, isLast, depth. This\nmethod is internally called after a node is moved. This shouldn't\nhave to be called by the developer unless they are creating custom\nTree plugins.</p>\n"
      }
    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "cfg": [
      {
        "type": "Gnt.data.Calendar",
        "html_filename": "Task.html",
        "shortDoc": "Optional. ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-cfg-calendar",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "calendar",
        "owner": "Gnt.model.Task",
        "linenr": 121,
        "deprecated": null,
        "doc": "<p>Optional. An explicitly provided <a href=\"#/api/Gnt.data.Calendar\" rel=\"Gnt.data.Calendar\" class=\"docClass\">calendar</a> instance. Usually will be retrieved by the task from the <a href=\"#/api/Gnt.data.TaskStore\" rel=\"Gnt.data.TaskStore\" class=\"docClass\">task store</a>.</p>\n"
      },
      {
        "type": "Ext.data.Store",
        "html_filename": "Task.html",
        "shortDoc": "Optional. ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-cfg-dependencyStore",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "dependencyStore",
        "owner": "Gnt.model.Task",
        "linenr": 127,
        "deprecated": null,
        "doc": "<p>Optional. An explicitly provided Ext.data.Store with dependencies information. Usually will be retrieved by the task from the <a href=\"#/api/Gnt.data.TaskStore\" rel=\"Gnt.data.TaskStore\" class=\"docClass\">task store</a>.</p>\n"
      },
      {
        "type": "Gnt.data.TaskStore",
        "html_filename": "Task.html",
        "shortDoc": "Optional. ...",
        "static": false,
        "href": "Task.html#Gnt-model-Task-cfg-taskStore",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/model/Task.js",
        "private": false,
        "alias": null,
        "name": "taskStore",
        "owner": "Gnt.model.Task",
        "linenr": 133,
        "deprecated": null,
        "doc": "<p>Optional. An explicitly provided <a href=\"#/api/Gnt.data.TaskStore\" rel=\"Gnt.data.TaskStore\" class=\"docClass\">Gnt.data.TaskStore</a> with tasks information. Usually will be set by the <a href=\"#/api/Gnt.data.TaskStore\" rel=\"Gnt.data.TaskStore\" class=\"docClass\">task store</a>.</p>\n"
      }
    ],
    "event": [

    ]
  },
  "mixins": [

  ],
  "static": false,
  "href": "Task.html#Gnt-model-Task",
  "component": false,
  "protected": false,
  "inheritable": false,
  "alternateClassNames": [

  ],
  "statics": {
    "property": [

    ],
    "method": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "cfg": [

    ],
    "event": [

    ]
  },
  "tagname": "class",
  "mixedInto": [

  ],
  "filename": "js//Gnt/model/Task.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Gnt.model.Task",
  "extends": "Ext.data.Model",
  "author": null,
  "allMixins": [

  ],
  "linenr": 9,
  "deprecated": null,
  "doc": "<p>This class represent a single task in your gantt chart. Its a subclass of the Ext.data.Model.\nPlease refer to Ext.data.Model documentation to become familar with the base interface of the task.</p>\n\n<p>Task has the following fields. If you want to add new fields or change the options for the existing fields,\nyou can do that by subclassing this class (see example below). <strong>NOTE</strong>: The names of the fields have to stay the same!</p>\n\n<h2>Fields</h2>\n\n<ul>\n<li><code>Id</code> - (mandatory) unique identificator of task</li>\n<li><code>Name</code> - name of the task (task title)</li>\n<li><code>StartDate</code> - start date of the task in the ISO 8601 format. See Ext.Date for a formats definitions.</li>\n<li><code>EndDate</code> - end date of the task in the ISO 8601 format, <strong>see \"Start and End dates\" section for important notes</strong></li>\n<li><code>Duration</code> - the numeric part of the task duration (the number of units)</li>\n<li><code>DurationUnit</code> - the unit part of the task duration (corresponds to units defined by <code>Sch.util.Date</code>), defaults to days</li>\n<li><code>PercentDone</code> - the percentage of completeness for this task (integer from 0 to 100)</li>\n<li><code>ManuallyScheduled</code> - when set to <code>true</code>, the <code>StartDate</code> of the task will not be changed by any of the incoming dependecies.\nAdditionally, task can be scheduled to start/end on a weekend or calendar holiday.</li>\n</ul>\n\n\n<h2>Subclassing the task</h2>\n\n<pre><code>Ext.define('MyProject.model.Task', {\n    extend      : 'Gnt.model.Task',\n\n    fields      : [\n        // change the input format for the `StartDate/EndDate` fields to seconds from Unix Epoch\n        { name: 'StartDate',        type: 'date', dateFormat : 'U' },\n        { name: 'EndDate',          type: 'date', dateFormat : 'U' },\n\n        // adding new field\n        { name: 'MyField',          type : 'number', defaultValue : 0 }\n    ],\n\n    myCheckMethod : function () {\n        return this.get('MyField') &gt; 0 \n    },\n    ...\n})\n</code></pre>\n\n<h2>Start and End dates</h2>\n\n<p>For all tasks, the range between start date and end date is supposed to be not-inclusive on the right side: StartDate &lt;= date &lt; EndDate.\nSo, for example, the task which starts at 2011/07/18 and has 2 days duration, should have the end date: 2011/07/20, <strong>not</strong> 2011/07/19 23:59:59.</p>\n\n<p>Such convention simplifies the calculations, since you don't have to constantly change the end date to ends with those \"59:59\" but should always be\nconsidered, when writing the application. For example a 1 day task, which starts at 2011/07/18 00:00:00, will end at 2011/07/19 00:00:00, and so on.</p>\n\n<h2>Convertion to \"days\" duration unit</h2>\n\n<p>Some duration units can not be converted to \"days\" consistenly. For example a month may have 28, 29, 30 or 31 days. The year may have 365 or 366 days and so on.\nSo, in such convertion operations, we will always assume, that task with duration of 1 month have the duration of 30 days. This is <a href=\"#/api/Gnt.data.Calendar-cfg-daysPerMonth\" rel=\"Gnt.data.Calendar-cfg-daysPerMonth\" class=\"docClass\">a configuration option</a> of the calendar</p>\n\n<h2>Task API</h2>\n\n<p>One important thing to consider is that, if you are using the holidays skipping feature, then you need to use the task API call to update the fields like <code>StartDate / EndDate / Duration</code>.\nThose calls will calculate the correct value of each the field, taking into account the information from calendar.</p>\n\n<h2>Server-side integration</h2>\n\n<p>Also, at least for now, you should not use the \"save\" method of the model, available in Ext4:</p>\n\n<pre><code>task.save() // WON'T WORK\n</code></pre>\n\n<p>This is because there are some quirks in CRUD for tree stores. Those quirks are sorted out in the TaskStore. To save the changes in task to server\nuse the \"sync\" method of the task store:</p>\n\n<pre><code>taskStore.sync() // WORK\n</code></pre>\n"
});