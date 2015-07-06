Ext.data.JsonP.Gnt_column_ResourceAssignment({
  "subclasses": [

  ],
  "html_filename": "ResourceAssignment.html",
  "docauthor": null,
  "singleton": false,
  "code_type": "ext_define",
  "superclasses": [

  ],
  "members": {
    "property": [

    ],
    "method": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "cfg": [
      {
        "type": "Boolean",
        "html_filename": "ResourceAssignment.html",
        "shortDoc": "Set to true to show the assignment units (in percent). ...",
        "static": false,
        "href": "ResourceAssignment.html#Gnt-column-ResourceAssignment-cfg-showUnits",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/column/ResourceAssignment.js",
        "private": false,
        "alias": null,
        "name": "showUnits",
        "owner": "Gnt.column.ResourceAssignment",
        "linenr": 58,
        "deprecated": null,
        "doc": "<p>Set to <code>true</code> to show the assignment units (in percent). Default value is <code>true</code>.</p>\n"
      }
    ],
    "event": [

    ]
  },
  "mixins": [

  ],
  "static": false,
  "href": "ResourceAssignment.html#Gnt-column-ResourceAssignment",
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
  "filename": "js//Gnt/column/ResourceAssignment.js",
  "private": false,
  "xtypes": [
    "resourceassigmentcolumn"
  ],
  "alias": null,
  "name": "Gnt.column.ResourceAssignment",
  "extends": "Ext.grid.column.Column",
  "author": null,
  "allMixins": [

  ],
  "linenr": 9,
  "deprecated": null,
  "doc": "<p><p><img src=\"doc-resources/gantt/images/resource-assignment.png\" alt=\"\"></p></p>\n\n<p>A Column representing the resource assignments of a task. To make the column editable, pass a configured instance of a <a href=\"#/api/Gnt.widget.AssignmentCellEditor\" rel=\"Gnt.widget.AssignmentCellEditor\" class=\"docClass\">Gnt.widget.AssignmentCellEditor</a>\nto it and add the <a href=\"#/api/Sch.plugin.TreeCellEditing\" rel=\"Sch.plugin.TreeCellEditing\" class=\"docClass\">Sch.plugin.TreeCellEditing</a> plugin to your gantt panel:</p>\n\n<pre><code>var assignmentEditor = Ext.create('Gnt.widget.AssignmentCellEditor', {\n    assignmentStore     : assignmentStore,\n    resourceStore       : resourceStore\n});\n\nvar gantt = Ext.create('Gnt.panel.Gantt', {\n    height      : 600,\n    width       : 1000,\n\n    // Setup your static columns\n    columns         : [\n        ...\n        {\n            xtype       : 'resourceassigmentcolumn',\n\n            editor      : assignmentEditor,\n            width       : 80\n        }\n        ...\n    ],\n\n    plugins             : [\n        Ext.create('Sch.plugin.TreeCellEditing', {\n            clicksToEdit: 1\n        })\n    ],\n    ...\n})\n</code></pre>\n"
});