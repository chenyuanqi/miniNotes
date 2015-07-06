Ext.data.JsonP.Gnt_column_PercentDone({
  "subclasses": [

  ],
  "html_filename": "PercentDone.html",
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

    ],
    "event": [

    ]
  },
  "mixins": [

  ],
  "static": false,
  "href": "PercentDone.html#Gnt-column-PercentDone",
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
  "filename": "js//Gnt/column/PercentDone.js",
  "private": false,
  "xtypes": [
    "percentdonecolumn"
  ],
  "alias": null,
  "name": "Gnt.column.PercentDone",
  "extends": "Ext.grid.Column.Number",
  "author": null,
  "allMixins": [

  ],
  "linenr": 11,
  "deprecated": null,
  "doc": "<p>A Column representing a <code>PercentDone</code> field of the task. The column is editable, however to enable the editing you will need to add a\n<code>Sch.plugin.TreeCellEditing</code> plugin to your gantt panel. The overall setup will look like this:</p>\n\n<pre><code>var gantt = Ext.create('Gnt.panel.Gantt', {\n    height      : 600,\n    width       : 1000,\n\n    // Setup your static columns\n    columns         : [\n        ...\n        {\n            xtype       : 'percentdonecolumn',\n            width       : 80\n        }\n        ...\n    ],\n\n    plugins             : [\n        Ext.create('Sch.plugin.TreeCellEditing', {\n            clicksToEdit: 1\n        })\n    ],\n    ...\n})\n</code></pre>\n"
});