Ext.data.JsonP.Gnt_data_TaskStore({
  "subclasses": [

  ],
  "html_filename": "TaskStore.html",
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
            "type": "Gnt.model.Task",
            "optional": false,
            "name": "task",
            "doc": "\n"
          }
        ],
        "html_filename": "TaskStore.html",
        "shortDoc": "Cascade the updates to the depended tasks of given task (re-schedule them as soon as possible). ...",
        "static": false,
        "href": "TaskStore.html#Gnt-data-TaskStore-method-cascadeChangesForTask",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/data/TaskStore.js",
        "private": false,
        "alias": null,
        "name": "cascadeChangesForTask",
        "owner": "Gnt.data.TaskStore",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 496,
        "deprecated": null,
        "doc": "<p>Cascade the updates to the depended tasks of given <code>task</code> (re-schedule them as soon as possible).</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "TaskStore.html",
        "shortDoc": "Will just fire the clearfilter event for now, as there's no native TreeStore filtering in ExtJS. ...",
        "static": false,
        "href": "TaskStore.html#Gnt-data-TaskStore-method-clearFilter",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/data/TaskStore.js",
        "private": false,
        "alias": null,
        "name": "clearFilter",
        "owner": "Gnt.data.TaskStore",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 379,
        "deprecated": null,
        "doc": "<p>Will just fire the <code>clearfilter</code> event for now, as there's no native TreeStore filtering in ExtJS. The gantt chart however listens\nthis event and performs filtering on the underlaying NodeStore. So, the filtering will work, but it requires the presence of\ngantt panel.</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "TaskStore.html",
        "shortDoc": "Will just fire the filter event for now, as there's no native TreeStore filtering in ExtJS. ...",
        "static": false,
        "href": "TaskStore.html#Gnt-data-TaskStore-method-filter",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/data/TaskStore.js",
        "private": false,
        "alias": null,
        "name": "filter",
        "owner": "Gnt.data.TaskStore",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 369,
        "deprecated": null,
        "doc": "<p>Will just fire the <code>filter</code> event for now, as there's no native TreeStore filtering in ExtJS. The gantt chart however listens\nthis event and performs filtering on the underlaying NodeStore. So, the filtering will work, but it requires the presence of\ngantt panel.</p>\n"
      },
      {
        "params": [
          {
            "type": "String",
            "optional": false,
            "name": "id",
            "doc": "\n"
          }
        ],
        "html_filename": "TaskStore.html",
        "shortDoc": "Returns a task by its id ...",
        "static": false,
        "href": "TaskStore.html#Gnt-data-TaskStore-method-getById",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/data/TaskStore.js",
        "private": false,
        "alias": null,
        "name": "getById",
        "owner": "Gnt.data.TaskStore",
        "return": {
          "type": "Gnt.model.Task",
          "doc": "\n"
        },
        "linenr": 310,
        "deprecated": null,
        "doc": "<p>Returns a task by its <code>id</code></p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "TaskStore.html",
        "shortDoc": "Returns the critical path(s) that can affect the end date of the project ...",
        "static": false,
        "href": "TaskStore.html#Gnt-data-TaskStore-method-getCriticalPaths",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/data/TaskStore.js",
        "private": false,
        "alias": null,
        "name": "getCriticalPaths",
        "owner": "Gnt.data.TaskStore",
        "return": {
          "type": "Array",
          "doc": "<p>paths An array of arrays (containing task chains)</p>\n"
        },
        "linenr": 389,
        "deprecated": null,
        "doc": "<p>Returns the critical path(s) that can affect the end date of the project</p>\n"
      },
      {
        "params": [
          {
            "type": "String",
            "optional": false,
            "name": "sourceId",
            "doc": "\n"
          },
          {
            "type": "String",
            "optional": false,
            "name": "targetId",
            "doc": "\n"
          }
        ],
        "html_filename": "TaskStore.html",
        "shortDoc": "Returns true if there is a dependency (either \"normal\" or \"transitive\") between tasks\nwith sourceId and targetId ...",
        "static": false,
        "href": "TaskStore.html#Gnt-data-TaskStore-method-hasTransitiveDependency",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/data/TaskStore.js",
        "private": false,
        "alias": null,
        "name": "hasTransitiveDependency",
        "owner": "Gnt.data.TaskStore",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "linenr": 452,
        "deprecated": null,
        "doc": "<p>Returns <code>true</code> if there is a dependency (either \"normal\" or \"transitive\") between tasks\nwith <code>sourceId</code> and <code>targetId</code></p>\n"
      },
      {
        "params": [
          {
            "type": "String",
            "optional": false,
            "name": "fromId",
            "doc": "\n"
          },
          {
            "type": "String",
            "optional": false,
            "name": "toId",
            "doc": "\n"
          }
        ],
        "html_filename": "TaskStore.html",
        "shortDoc": "Returns true if the dependency from task fromId to task toId is valid. ...",
        "static": false,
        "href": "TaskStore.html#Gnt-data-TaskStore-method-isValidDependency",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/data/TaskStore.js",
        "private": false,
        "alias": null,
        "name": "isValidDependency",
        "owner": "Gnt.data.TaskStore",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "linenr": 419,
        "deprecated": null,
        "doc": "<p>Returns <code>true</code> if the dependency from task <code>fromId</code> to task <code>toId</code> is valid.\nNot valid dependecies are:\n- dependency with itself\n- dependency between the child/parent tasks\n- transitive dependencies, like if A -> B, B -> C, then A -> C is not valid</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.data.Calendar",
            "optional": false,
            "name": "calendar",
            "doc": "\n"
          }
        ],
        "html_filename": "TaskStore.html",
        "shortDoc": "Sets the calendar for this task store ...",
        "static": false,
        "href": "TaskStore.html#Gnt-data-TaskStore-method-setCalendar",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/data/TaskStore.js",
        "private": false,
        "alias": null,
        "name": "setCalendar",
        "owner": "Gnt.data.TaskStore",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 353,
        "deprecated": null,
        "doc": "<p>Sets the calendar for this task store</p>\n"
      },
      {
        "params": [
          {
            "type": "Ext.data.Store",
            "optional": false,
            "name": "dependencyStore",
            "doc": "\n"
          }
        ],
        "html_filename": "TaskStore.html",
        "shortDoc": "Sets the dependency store for this task store ...",
        "static": false,
        "href": "TaskStore.html#Gnt-data-TaskStore-method-setDependencyStore",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/data/TaskStore.js",
        "private": false,
        "alias": null,
        "name": "setDependencyStore",
        "owner": "Gnt.data.TaskStore",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 321,
        "deprecated": null,
        "doc": "<p>Sets the dependency store for this task store</p>\n"
      }
    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "cfg": [
      {
        "type": "Boolean",
        "html_filename": "TaskStore.html",
        "shortDoc": "Set this option to true to activate the \"buffered\" mode. ...",
        "static": false,
        "href": "TaskStore.html#Gnt-data-TaskStore-cfg-buffered",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/data/TaskStore.js",
        "private": false,
        "alias": null,
        "name": "buffered",
        "owner": "Gnt.data.TaskStore",
        "linenr": 90,
        "deprecated": null,
        "doc": "<p>Set this option to <code>true</code> to activate the \"buffered\" mode. When using this option, your gantt should use the special\nvertical scroller, which provides a virtual paging:</p>\n\n<pre><code>    verticalScroller    : {\n        xtype               : 'schpagingscroller',\n        activePrefetch      : false\n    },\n</code></pre>\n"
      },
      {
        "type": "Gnt.data.Calendar",
        "html_filename": "TaskStore.html",
        "shortDoc": "A calendar instance to use for this task store. ...",
        "static": false,
        "href": "TaskStore.html#Gnt-data-TaskStore-cfg-calendar",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/data/TaskStore.js",
        "private": false,
        "alias": null,
        "name": "calendar",
        "owner": "Gnt.data.TaskStore",
        "linenr": 68,
        "deprecated": null,
        "doc": "<p>A <a href=\"#/api/Gnt.data.Calendar\" rel=\"Gnt.data.Calendar\" class=\"docClass\">calendar</a> instance to use for this task store. <strong>Should be loaded prior the task store</strong>.\nThis option can be also specified as the configuration option for the gantt panel. If not provided, a default calendar, containig the weekends\nonly (no holidays) will be created.</p>\n"
      },
      {
        "type": "Boolean",
        "html_filename": "TaskStore.html",
        "shortDoc": "A boolean flag indicating whether a change in some task should be propagated to its depended tasks. ...",
        "static": false,
        "href": "TaskStore.html#Gnt-data-TaskStore-cfg-cascadeChanges",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/data/TaskStore.js",
        "private": false,
        "alias": null,
        "name": "cascadeChanges",
        "owner": "Gnt.data.TaskStore",
        "linenr": 110,
        "deprecated": null,
        "doc": "<p>A boolean flag indicating whether a change in some task should be propagated to its depended tasks. Defaults to <code>false</code>.\nThis option can be also specified as the configuration option for the gantt panel.</p>\n"
      },
      {
        "type": "Int",
        "html_filename": "TaskStore.html",
        "shortDoc": "If you usually have deeply nested dependencies, it might be a good idea to add a small delay\nto allow the modified re...",
        "static": false,
        "href": "TaskStore.html#Gnt-data-TaskStore-cfg-cascadeDelay",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/data/TaskStore.js",
        "private": false,
        "alias": null,
        "name": "cascadeDelay",
        "owner": "Gnt.data.TaskStore",
        "linenr": 130,
        "deprecated": null,
        "doc": "<p>If you usually have deeply nested dependencies, it might be a good idea to add a small delay\nto allow the modified record to be refreshed in the UI right away and then handle the cascading</p>\n"
      },
      {
        "type": "Ext.data.Store",
        "html_filename": "TaskStore.html",
        "shortDoc": "A Ext.data.Store instance with dependencies information. ...",
        "static": false,
        "href": "TaskStore.html#Gnt-data-TaskStore-cfg-dependencyStore",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/data/TaskStore.js",
        "private": false,
        "alias": null,
        "name": "dependencyStore",
        "owner": "Gnt.data.TaskStore",
        "linenr": 76,
        "deprecated": null,
        "doc": "<p>A <code>Ext.data.Store</code> instance with dependencies information.\nThis option can be also specified as a configuration option for the gantt panel.</p>\n"
      },
      {
        "type": "Number",
        "html_filename": "TaskStore.html",
        "shortDoc": "When using buffered : true this option will allow you to specify the size of the page - ie how many\nrows should be re...",
        "static": false,
        "href": "TaskStore.html#Gnt-data-TaskStore-cfg-pageSize",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/data/TaskStore.js",
        "private": false,
        "alias": null,
        "name": "pageSize",
        "owner": "Gnt.data.TaskStore",
        "linenr": 104,
        "deprecated": null,
        "doc": "<p>When using <code>buffered : true</code> this option will allow you to specify the size of the page - ie how many\nrows should be rendered in the gantt. When scrolling, new rows will replaces the old ones.</p>\n"
      },
      {
        "type": "Boolean",
        "html_filename": "TaskStore.html",
        "shortDoc": "A boolean flag indicating whether a change in some task should update its parent task. ...",
        "static": false,
        "href": "TaskStore.html#Gnt-data-TaskStore-cfg-recalculateParents",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/data/TaskStore.js",
        "private": false,
        "alias": null,
        "name": "recalculateParents",
        "owner": "Gnt.data.TaskStore",
        "linenr": 117,
        "deprecated": null,
        "doc": "<p>A boolean flag indicating whether a change in some task should update its parent task. Defaults to <code>true</code>.\nThis option can be also specified as the configuration option for the gantt panel.</p>\n"
      },
      {
        "type": "Boolean",
        "html_filename": "TaskStore.html",
        "shortDoc": "A boolean flag indicating whether a task should be moved to the next working day if it falls on holiday,\nduring move/...",
        "static": false,
        "href": "TaskStore.html#Gnt-data-TaskStore-cfg-skipWeekendsDuringDragDrop",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/data/TaskStore.js",
        "private": false,
        "alias": null,
        "name": "skipWeekendsDuringDragDrop",
        "owner": "Gnt.data.TaskStore",
        "linenr": 123,
        "deprecated": null,
        "doc": "<p>A boolean flag indicating whether a task should be moved to the next working day if it falls on holiday,\nduring move/resize operations. Defaults to <code>true</code>.\nThis option can be also specified as the configuration option for the gantt panel.</p>\n"
      },
      {
        "type": "Boolean",
        "html_filename": "TaskStore.html",
        "static": false,
        "href": "TaskStore.html#Gnt-data-TaskStore-cfg-weekendsAreWorkdays",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/data/TaskStore.js",
        "private": false,
        "alias": null,
        "name": "weekendsAreWorkdays",
        "owner": "Gnt.data.TaskStore",
        "linenr": 83,
        "deprecated": null,
        "doc": "<p>This option will be translated to the <a href=\"#/api/Gnt.data.Calendar-cfg-weekendsAreWorkdays\" rel=\"Gnt.data.Calendar-cfg-weekendsAreWorkdays\" class=\"docClass\">corresponding option</a> of the calendar.</p>\n"
      }
    ],
    "event": [
      {
        "params": [
          {
            "type": "Gnt.data.TaskStore",
            "optional": false,
            "name": "self",
            "doc": "<p>This task store</p>\n"
          },
          {
            "type": "Object",
            "optional": false,
            "name": "args",
            "doc": "<p>The arguments passed to <code>clearFilter</code> method</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "TaskStore.html",
        "shortDoc": "Will be fired on the call to clearFilter method ...",
        "static": false,
        "href": "TaskStore.html#Gnt-data-TaskStore-event-clearfilter",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/data/TaskStore.js",
        "private": false,
        "alias": null,
        "name": "clearfilter",
        "owner": "Gnt.data.TaskStore",
        "linenr": 154,
        "deprecated": null,
        "doc": "<p>Will be fired on the call to <code>clearFilter</code> method</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.data.TaskStore",
            "optional": false,
            "name": "self",
            "doc": "<p>This task store</p>\n"
          },
          {
            "type": "Object",
            "optional": false,
            "name": "args",
            "doc": "<p>The arguments passed to <code>filter</code> method</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "TaskStore.html",
        "shortDoc": "Will be fired on the call to filter method ...",
        "static": false,
        "href": "TaskStore.html#Gnt-data-TaskStore-event-filter",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/data/TaskStore.js",
        "private": false,
        "alias": null,
        "name": "filter",
        "owner": "Gnt.data.TaskStore",
        "linenr": 146,
        "deprecated": null,
        "doc": "<p>Will be fired on the call to <code>filter</code> method</p>\n"
      }
    ]
  },
  "mixins": [

  ],
  "static": false,
  "href": "TaskStore.html#Gnt-data-TaskStore",
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
  "filename": "js//Gnt/data/TaskStore.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Gnt.data.TaskStore",
  "extends": "Ext.data.TreeStore",
  "author": null,
  "allMixins": [

  ],
  "linenr": 9,
  "deprecated": null,
  "doc": "<p>A class, representing the tree of tasks of the gantt chart. An individual task will be represented as an instance of the <a href=\"#/api/Gnt.model.Task\" rel=\"Gnt.model.Task\" class=\"docClass\">Gnt.model.Task</a> class. The store\nexpects the data loaded to be hierarchical. Each parent node should contain its children in property called 'children' (please note that this is different from the old 1.x\nversion where the task store expected a flat data structure)</p>\n\n<h2>Parent tasks</h2>\n\n<p>By default, when the start/end date of the task gets changed, its parent task will be also updated. Parent tasks always start at it earliest child and ends\nat the end date of its latest child. So be prepared to see several updates and possibly several requests to server. You can batch them with the Ext.data.proxy.Proxy.batchActions configuration\noption.</p>\n\n<p>Overall, this behavior can be controlled with the <a href=\"#/api/Gnt.data.TaskStore-cfg-recalculateParents\" rel=\"Gnt.data.TaskStore-cfg-recalculateParents\" class=\"docClass\">recalculateParents</a> configuration option (defaults to true).</p>\n\n<h2>Cascading</h2>\n\n<p>In the similar way, when the start/end date of the task gets changed, gantt <em>can</em> update any dependent tasks, so they will start on the earliest date possible.\nThis behavior is called \"cascading\" and is enabled or disabled using the <a href=\"#/api/Gnt.data.TaskStore-cfg-cascadeChanges\" rel=\"Gnt.data.TaskStore-cfg-cascadeChanges\" class=\"docClass\">cascadeChanges</a> configuration option.</p>\n\n<h2>Integration notes</h2>\n\n<p>When integrating the Gantt panel with your database, you should persist at least the following properties seen in the class diagram below.</p>\n\n<p><p><img src=\"doc-resources/gantt/images/gantt-class-diagram.png\" alt=\"\"></p></p>\n\n<p>The bottom 3 properties (<code>index</code>, <code>parentId</code>, <code>depth</code>) of the Task class stem from the Ext.data.NodeInterface and are required to place the tasks correctly in the tree structure.</p>\n\n<p>If you store your data in a relational database, below is a suggested Task table definition:</p>\n\n<p><p><img src=\"doc-resources/gantt/images/gantt-task-table.png\" alt=\"\"></p></p>\n\n<p> ...as well as a Dependency table definition:</p>\n\n<p><p><img src=\"doc-resources/gantt/images/gantt-dependency-table.png\" alt=\"\"></p></p>\n\n<p>The types for the fields doesn't have to be as seen above, it's merely a simple suggestion. You could for instance use 'string' or a UID as the type of the Id field.</p>\n\n<p>Your server should respond with a hierarchical structure where parent nodes contain an array or their child nodes in a <code>children</code> property. If you don't have any local\nsorters, defined on the task store, these child nodes should be sorted by their <code>index</code> property before the server responds.</p>\n\n<p>When creating new task nodes or updating existing ones, the server should always respond with an array of the created/updated tasks. Each task should contain <em>all</em> fields.</p>\n"
});