Ext.data.JsonP.Sch_model_Resource({
  "subclasses": [

  ],
  "html_filename": "Resource2.html",
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

        ],
        "html_filename": "Resource2.html",
        "shortDoc": "Returns an array of events, associated with this resource ...",
        "static": false,
        "href": "Resource2.html#Sch-model-Resource-method-getEvents",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/model/Resource.js",
        "private": false,
        "alias": null,
        "name": "getEvents",
        "owner": "Sch.model.Resource",
        "return": {
          "type": "Array[Sch.model.Event]",
          "doc": "\n"
        },
        "linenr": 49,
        "deprecated": null,
        "doc": "<p>Returns an array of events, associated with this resource</p>\n"
      }
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
  "href": "Resource2.html#Sch-model-Resource",
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
  "filename": "../ExtScheduler2.x/js/Sch/model/Resource.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Sch.model.Resource",
  "extends": "Ext.data.Model",
  "author": null,
  "allMixins": [

  ],
  "linenr": 9,
  "deprecated": null,
  "doc": "<p>This class represent a single Resource in the scheduler chart. Its a subclass of the Ext.data.Model.\nPlease refer to Ext.data.Model documentation to become familar with the base interface of the resource.</p>\n\n<p>A Resource has only 2 mandatory fields - <code>Id</code> and <code>Name</code>. If you want to add more fields with meta data describing your resources then you should subclass this class:</p>\n\n<pre><code>Ext.define('MyProject.model.Resource', {\n    extend      : 'Sch.model.Resource',\n\n    fields      : [\n        // `Id` and `Name` fields are already provided by the superclass\n        { name: 'Company',          type : 'string' }\n    ],\n\n    getCompany : function () {\n        return this.get('Company');\n    },\n    ...\n});\n</code></pre>\n"
});