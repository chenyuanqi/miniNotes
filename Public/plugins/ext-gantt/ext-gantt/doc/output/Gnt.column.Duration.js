Ext.data.JsonP.Gnt_column_Duration({
  "subclasses": [

  ],
  "html_filename": "Duration.html",
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
        "html_filename": "Duration.html",
        "static": false,
        "href": "Duration.html#Gnt-column-Duration-cfg-align",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/column/Duration.js",
        "private": false,
        "alias": null,
        "name": "align",
        "owner": "Gnt.column.Duration",
        "linenr": 68,
        "deprecated": null,
        "doc": "<p>An align of the text in the column, default value is 'left'</p>\n"
      },
      {
        "type": "Number",
        "html_filename": "Duration.html",
        "static": false,
        "href": "Duration.html#Gnt-column-Duration-cfg-decimalPrecision",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/column/Duration.js",
        "private": false,
        "alias": null,
        "name": "decimalPrecision",
        "owner": "Gnt.column.Duration",
        "linenr": 73,
        "deprecated": null,
        "doc": "<p>A number of digits to show after the dot when rendering the value of the field or when editing it</p>\n"
      },
      {
        "type": "String",
        "html_filename": "Duration.html",
        "static": false,
        "href": "Duration.html#Gnt-column-Duration-cfg-header",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/column/Duration.js",
        "private": false,
        "alias": null,
        "name": "header",
        "owner": "Gnt.column.Duration",
        "linenr": 57,
        "deprecated": null,
        "doc": "<p>A text of the header, default value is <code>Duration</code></p>\n"
      },
      {
        "type": "Number",
        "html_filename": "Duration.html",
        "static": false,
        "href": "Duration.html#Gnt-column-Duration-cfg-width",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/column/Duration.js",
        "private": false,
        "alias": null,
        "name": "width",
        "owner": "Gnt.column.Duration",
        "linenr": 63,
        "deprecated": null,
        "doc": "<p>A width of the column, default value is 80</p>\n"
      }
    ],
    "event": [

    ]
  },
  "mixins": [

  ],
  "static": false,
  "href": "Duration.html#Gnt-column-Duration",
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
  "filename": "js//Gnt/column/Duration.js",
  "private": false,
  "xtypes": [
    "durationcolumn"
  ],
  "alias": null,
  "name": "Gnt.column.Duration",
  "extends": "Ext.grid.column.Column",
  "author": null,
  "allMixins": [

  ],
  "linenr": 9,
  "deprecated": null,
  "doc": "<p><p><img src=\"doc-resources/gantt/images/duration-field.png\" alt=\"\"></p></p>\n\n<p>A Column representing a <code>Duration</code> field of a task. The column is editable, however to enable the editing you will need to add a\n<code>Sch.plugin.TreeCellEditing</code> pluing to your gantt panel. The overall setup will look like this:</p>\n\n<pre><code>var gantt = Ext.create('Gnt.panel.Gantt', {\n    height      : 600,\n    width       : 1000,\n\n    // Setup your grid columns\n    columns         : [\n        ...\n        {\n            xtype       : 'durationcolumn',\n            width       : 70\n        }\n        ...\n    ],\n\n    plugins             : [\n        Ext.create('Sch.plugin.TreeCellEditing', {\n            clicksToEdit: 1\n        })\n    ],\n    ...\n})\n</code></pre>\n\n<p>This column uses a specialized editor <a href=\"#/api/Gnt.column.Duration.Editor\" rel=\"Gnt.column.Duration.Editor\" class=\"docClass\">Gnt.column.Duration.Editor</a> and field - <a href=\"#/api/Gnt.column.Duration.Field\" rel=\"Gnt.column.Duration.Field\" class=\"docClass\">Gnt.column.Duration.Field</a> which allows the\nuser to specify not only the duration value, but also the duration units.</p>\n\n<p>When rendering the name of the duration unit, the <a href=\"#/api/Sch.util.Date-method-getReadableNameOfUnit\" rel=\"Sch.util.Date-method-getReadableNameOfUnit\" class=\"docClass\">Sch.util.Date.getReadableNameOfUnit</a> method will be used to retrieve the name of the unit.</p>\n"
});