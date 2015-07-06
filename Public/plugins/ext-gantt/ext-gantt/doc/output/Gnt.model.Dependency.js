Ext.data.JsonP.Gnt_model_Dependency({
  "subclasses": [

  ],
  "html_filename": "Dependency2.html",
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
  "href": "Dependency2.html#Gnt-model-Dependency",
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
  "filename": "js//Gnt/model/Dependency.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Gnt.model.Dependency",
  "extends": "Ext.data.Model",
  "author": null,
  "allMixins": [

  ],
  "linenr": 9,
  "deprecated": null,
  "doc": "<p>This class represent a single Dependency in your gantt chart. Its a subclass of the Ext.data.Model.\nPlease refer to Ext.data.Model documentation to become familar with the base interface of this class.</p>\n\n<p>Dependency has the following fields:</p>\n\n<ul>\n<li><code>From</code> - The id of the task at which the dependency starts</li>\n<li><code>To</code> - The id of the task at which the dependency ends</li>\n<li><code>Type</code> - The integer constant, representing the type of dependency:\n\n<ul>\n<li>0 - start-to-start dependency</li>\n<li>1 - start-to-end dependency</li>\n<li>2 - end-to-start dependency</li>\n<li>3 - end-to-end dependency</li>\n</ul>\n</li>\n</ul>\n\n"
});