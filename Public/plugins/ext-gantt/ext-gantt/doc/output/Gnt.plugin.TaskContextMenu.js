Ext.data.JsonP.Gnt_plugin_TaskContextMenu({
  "subclasses": [

  ],
  "html_filename": "TaskContextMenu.html",
  "docauthor": null,
  "singleton": false,
  "code_type": "ext_define",
  "superclasses": [

  ],
  "members": {
    "property": [
      {
        "type": "Gnt.model.Task",
        "html_filename": "TaskContextMenu.html",
        "static": false,
        "href": "TaskContextMenu.html#Gnt-plugin-TaskContextMenu-property-rec",
        "protected": false,
        "inheritable": false,
        "tagname": "property",
        "filename": "js//Gnt/plugin/TaskContextMenu.js",
        "private": false,
        "alias": null,
        "name": "rec",
        "owner": "Gnt.plugin.TaskContextMenu",
        "linenr": 114,
        "deprecated": null,
        "doc": "<p>Contains the task model, on which the right click have occured</p>\n"
      }
    ],
    "method": [
      {
        "params": [

        ],
        "html_filename": "TaskContextMenu.html",
        "shortDoc": "Handler for the \"add milestone\" menu item ...",
        "static": false,
        "href": "TaskContextMenu.html#Gnt-plugin-TaskContextMenu-method-addMilestone",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/plugin/TaskContextMenu.js",
        "private": false,
        "alias": null,
        "name": "addMilestone",
        "owner": "Gnt.plugin.TaskContextMenu",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 466,
        "deprecated": null,
        "doc": "<p>Handler for the \"add milestone\" menu item</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "TaskContextMenu.html",
        "shortDoc": "Handler for the \"add predecessor\" menu item ...",
        "static": false,
        "href": "TaskContextMenu.html#Gnt-plugin-TaskContextMenu-method-addPredecessor",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/plugin/TaskContextMenu.js",
        "private": false,
        "alias": null,
        "name": "addPredecessor",
        "owner": "Gnt.plugin.TaskContextMenu",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 437,
        "deprecated": null,
        "doc": "<p>Handler for the \"add predecessor\" menu item</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "TaskContextMenu.html",
        "shortDoc": "Handler for the \"add subtask\" menu item ...",
        "static": false,
        "href": "TaskContextMenu.html#Gnt-plugin-TaskContextMenu-method-addSubtask",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/plugin/TaskContextMenu.js",
        "private": false,
        "alias": null,
        "name": "addSubtask",
        "owner": "Gnt.plugin.TaskContextMenu",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 399,
        "deprecated": null,
        "doc": "<p>Handler for the \"add subtask\" menu item</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "TaskContextMenu.html",
        "shortDoc": "Handler for the \"add successor\" menu item ...",
        "static": false,
        "href": "TaskContextMenu.html#Gnt-plugin-TaskContextMenu-method-addSuccessor",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/plugin/TaskContextMenu.js",
        "private": false,
        "alias": null,
        "name": "addSuccessor",
        "owner": "Gnt.plugin.TaskContextMenu",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 412,
        "deprecated": null,
        "doc": "<p>Handler for the \"add successor\" menu item</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "TaskContextMenu.html",
        "shortDoc": "Handler for the \"add task above\" menu item ...",
        "static": false,
        "href": "TaskContextMenu.html#Gnt-plugin-TaskContextMenu-method-addTaskAboveAction",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/plugin/TaskContextMenu.js",
        "private": false,
        "alias": null,
        "name": "addTaskAboveAction",
        "owner": "Gnt.plugin.TaskContextMenu",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 383,
        "deprecated": null,
        "doc": "<p>Handler for the \"add task above\" menu item</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "TaskContextMenu.html",
        "shortDoc": "Handler for the \"add task below\" menu item ...",
        "static": false,
        "href": "TaskContextMenu.html#Gnt-plugin-TaskContextMenu-method-addTaskBelowAction",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/plugin/TaskContextMenu.js",
        "private": false,
        "alias": null,
        "name": "addTaskBelowAction",
        "owner": "Gnt.plugin.TaskContextMenu",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 391,
        "deprecated": null,
        "doc": "<p>Handler for the \"add task below\" menu item</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "TaskContextMenu.html",
        "shortDoc": "This method is being called during plugin initialization. ...",
        "static": false,
        "href": "TaskContextMenu.html#Gnt-plugin-TaskContextMenu-method-createMenuItems",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/plugin/TaskContextMenu.js",
        "private": false,
        "alias": null,
        "name": "createMenuItems",
        "owner": "Gnt.plugin.TaskContextMenu",
        "return": {
          "type": "Array",
          "doc": "\n"
        },
        "linenr": 122,
        "deprecated": null,
        "doc": "<p>This method is being called during plugin initialization. Override if you need to customize the items in the menu.\nThe method should return the array of the menu items, which will be used as the value of <code>items</code> property.</p>\n"
      }
    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "cfg": [
      {
        "type": "Object",
        "html_filename": "TaskContextMenu.html",
        "shortDoc": "A object, purposed for I18n. ...",
        "static": false,
        "href": "TaskContextMenu.html#Gnt-plugin-TaskContextMenu-cfg-texts",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/plugin/TaskContextMenu.js",
        "private": false,
        "alias": null,
        "name": "texts",
        "owner": "Gnt.plugin.TaskContextMenu",
        "linenr": 77,
        "deprecated": null,
        "doc": "<p>A object, purposed for I18n. Contains the following keys/values:</p>\n\n<ul>\n<li>newTaskText         : 'New task',</li>\n<li>newMilestoneText    : 'New milestone',</li>\n<li>deleteTask          : 'Delete task',</li>\n<li>editLeftLabel       : 'Edit left label',</li>\n<li>editRightLabel      : 'Edit right label',</li>\n<li>add                 : 'Add...',</li>\n<li>deleteDependency    : 'Delete dependency...',</li>\n<li>addTaskAbove        : 'Task above',</li>\n<li>addTaskBelow        : 'Task below',</li>\n<li>addMilestone        : 'Milestone',</li>\n<li>addSubtask          : 'Sub-task',</li>\n<li>addSuccessor        : 'Successor',</li>\n<li>addPredecessor      : 'Predecessor'</li>\n</ul>\n\n"
      },
      {
        "type": "String",
        "html_filename": "TaskContextMenu.html",
        "shortDoc": "The event upon which the menu shall be shown. ...",
        "static": false,
        "href": "TaskContextMenu.html#Gnt-plugin-TaskContextMenu-cfg-triggerEvent",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/plugin/TaskContextMenu.js",
        "private": false,
        "alias": null,
        "name": "triggerEvent",
        "owner": "Gnt.plugin.TaskContextMenu",
        "linenr": 70,
        "deprecated": null,
        "doc": "<p>The event upon which the menu shall be shown. Defaults to 'taskcontextmenu', meaning the menu is shown when right-clicking a task.\nYou can change this to 'itemcontextmenu' if you want the menu to be shown when right clicking the left grid area too.</p>\n"
      }
    ],
    "event": [

    ]
  },
  "mixins": [

  ],
  "static": false,
  "href": "TaskContextMenu.html#Gnt-plugin-TaskContextMenu",
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
  "filename": "js//Gnt/plugin/TaskContextMenu.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Gnt.plugin.TaskContextMenu",
  "extends": "Ext.menu.Menu",
  "author": null,
  "allMixins": [

  ],
  "linenr": 9,
  "deprecated": null,
  "doc": "<p>Plugin for showing a context menu when right clicking a task:</p>\n\n<p><p><img src=\"doc-resources/gantt/images/context-menu.png\" alt=\"\"></p></p>\n\n<p>You can add it to your gantt chart like this:</p>\n\n<pre><code>var gantt = Ext.create('Gnt.panel.Gantt', {\n\n    plugins             : [\n        Ext.create(\"Gnt.plugin.TaskContextMenu\")\n    ],\n    ...\n})\n</code></pre>\n\n<p>To customize the content of the menu, subclass this plugin and provide your own implementation of the <code>createMenuItems</code> method.\nYou can also customize various handlers for menu items, like <code>addTaskAbove</code>, <code>deleteTask</code> etc. For example:</p>\n\n<pre><code>Ext.define('MyProject.plugin.TaskContextMenu', {\n    extends     : 'Gnt.plugin.TaskContextMenu',\n\n    createMenuItems : function () {\n        return this.callParent().concat({\n            text        : 'My handler',\n\n            handler     : this.onMyHandler,\n            scope       : this\n        })\n    },\n\n    onMyHandler : function () {\n        // the task on which the right click have occured\n        var task        = this.rec;\n\n        ...\n    }\n});\n\nvar gantt = Ext.create('Gnt.panel.Gantt', {\n\n    plugins             : [\n        Ext.create(\"MyProject.plugin.TaskContextMenu\")\n    ],\n    ...\n})\n</code></pre>\n"
});