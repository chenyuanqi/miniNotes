Ext.data.JsonP.Gnt_column_StartDate({
  "subclasses": [

  ],
  "html_filename": "StartDate.html",
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
        "type": "String",
        "html_filename": "StartDate.html",
        "static": false,
        "href": "StartDate.html#Gnt-column-StartDate-cfg-align",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/column/StartDate.js",
        "private": false,
        "alias": null,
        "name": "align",
        "owner": "Gnt.column.StartDate",
        "linenr": 65,
        "deprecated": null,
        "doc": "<p>An align of the text in the column, default value is 'left'</p>\n"
      },
      {
        "type": "string",
        "html_filename": "StartDate.html",
        "static": false,
        "href": "StartDate.html#Gnt-column-StartDate-cfg-format",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/column/StartDate.js",
        "private": false,
        "alias": null,
        "name": "format",
        "owner": "Gnt.column.StartDate",
        "linenr": 54,
        "deprecated": null,
        "doc": "<p>A format to render the date in, default value is <code>Y-m-d</code></p>\n"
      },
      {
        "type": "string",
        "html_filename": "StartDate.html",
        "static": false,
        "href": "StartDate.html#Gnt-column-StartDate-cfg-header",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/column/StartDate.js",
        "private": false,
        "alias": null,
        "name": "header",
        "owner": "Gnt.column.StartDate",
        "linenr": 49,
        "deprecated": null,
        "doc": "<p>A text of the header, default value is <code>Start</code></p>\n"
      },
      {
        "type": "Number",
        "html_filename": "StartDate.html",
        "static": false,
        "href": "StartDate.html#Gnt-column-StartDate-cfg-width",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/column/StartDate.js",
        "private": false,
        "alias": null,
        "name": "width",
        "owner": "Gnt.column.StartDate",
        "linenr": 60,
        "deprecated": null,
        "doc": "<p>A width of the column, default value is 100</p>\n"
      }
    ],
    "event": [

    ]
  },
  "mixins": [

  ],
  "static": false,
  "href": "StartDate.html#Gnt-column-StartDate",
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
  "filename": "js//Gnt/column/StartDate.js",
  "private": false,
  "xtypes": [
    "startdatecolumn"
  ],
  "alias": null,
  "name": "Gnt.column.StartDate",
  "extends": "Ext.grid.column.Date",
  "author": null,
  "allMixins": [

  ],
  "linenr": 10,
  "deprecated": null,
  "doc": "<p>A Column representing a <code>StartDate</code> field of a task. The column is editable, however to enable the editing you will need to add a\n<code>Sch.plugin.TreeCellEditing</code> plugin to your gantt panel. The overall setup will look like this:</p>\n\n<pre><code>var gantt = Ext.create('Gnt.panel.Gantt', {\n    height      : 600,\n    width       : 1000,\n\n    // Setup your static columns\n    columns         : [\n        ...\n        {\n            xtype       : 'startdatecolumn',\n            width       : 80\n        }\n        ...\n    ],\n\n    plugins             : [\n        Ext.create('Sch.plugin.TreeCellEditing', {\n            clicksToEdit: 1\n        })\n    ],\n    ...\n})\n</code></pre>\n\n<p>Note, that this column will provide only a day-level editor (using standard ExtJS \"datefield\"). If you need a more precise editing (ie also specify\nthe starting hour/minute) you will need to provide your own field.</p>\n"
});