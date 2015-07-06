Ext.data.JsonP.Gnt_model_Resource({
  "subclasses": [

  ],
  "html_filename": "Resource.html",
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
  "href": "Resource.html#Gnt-model-Resource",
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
  "filename": "js//Gnt/model/Resource.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Gnt.model.Resource",
  "extends": "Ext.data.Model",
  "author": null,
  "allMixins": [

  ],
  "linenr": 9,
  "deprecated": null,
  "doc": "<p>This class represent a single Resource in your gantt chart. Its a subclass of the Ext.data.Model.\nPlease refer to Ext.data.Model documentation to become familar with the base interface of the resource.</p>\n\n<p>Resource has only 2 mandatory fields - <code>Id</code> and <code>Name</code>. If you want to add some fields, describing resources - subclass this class:</p>\n\n<pre><code>Ext.define('MyProject.model.Resource', {\n    extend      : 'Gnt.model.Resource',\n\n    fields      : [\n        // `Id` and `Name` fields are already provided by the superclass\n        { name: 'Company',          type : 'string' }\n    ],\n\n    getCompany : function () {\n        return this.get('Company') \n    },\n    ...\n})\n</code></pre>\n\n<p>See also: <a href=\"#/api/Gnt.model.Assignment\" rel=\"Gnt.model.Assignment\" class=\"docClass\">Gnt.model.Assignment</a>, <a href=\"#/api/Gnt.column.ResourceAssignment\" rel=\"Gnt.column.ResourceAssignment\" class=\"docClass\">Gnt.column.ResourceAssignment</a></p>\n"
});