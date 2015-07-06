Ext.data.JsonP.Sch_plugin_TreeCellEditing({
  "subclasses": [

  ],
  "html_filename": "TreeCellEditing.html",
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
  "href": "TreeCellEditing.html#Sch-plugin-TreeCellEditing",
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
  "filename": "../ExtScheduler2.x/js/Sch/plugin/TreeCellEditing.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Sch.plugin.TreeCellEditing",
  "extends": "Ext.grid.plugin.CellEditing",
  "author": null,
  "allMixins": [

  ],
  "linenr": 9,
  "deprecated": null,
  "doc": "<p>A specialized \"cell editing\" plugin, purposed to correctly work with trees. Add it to your component (scheduler with tree view or gantt)\nas usual grid plugin:</p>\n\n<pre><code>var gantt = Ext.create('Gnt.panel.Gantt', {\n\n    plugins             : [\n        Ext.create('Sch.plugin.TreeCellEditing', {\n            clicksToEdit: 1\n        })\n    ],\n    ...\n})\n</code></pre>\n"
});