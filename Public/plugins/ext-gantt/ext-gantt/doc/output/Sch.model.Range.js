Ext.data.JsonP.Sch_model_Range({
  "subclasses": [

  ],
  "html_filename": "Range.html",
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
            "type": "Function",
            "optional": false,
            "name": "func",
            "doc": "<p>The function to call for each date</p>\n"
          },
          {
            "type": "Object",
            "optional": false,
            "name": "scope",
            "doc": "<p>The scope to use for the function call</p>\n"
          }
        ],
        "html_filename": "Range.html",
        "shortDoc": "Iterates over the results from getDates ...",
        "static": false,
        "href": "Range.html#Sch-model-Range-method-forEachDate",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/model/Range.js",
        "private": false,
        "alias": null,
        "name": "forEachDate",
        "owner": "Sch.model.Range",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 58,
        "deprecated": null,
        "doc": "<p>Iterates over the results from <a href=\"#/api/Sch.model.Range-method-getDates\" rel=\"Sch.model.Range-method-getDates\" class=\"docClass\">getDates</a></p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "Range.html",
        "shortDoc": "Returns an array of dates in this range. ...",
        "static": false,
        "href": "Range.html#Sch-model-Range-method-getDates",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/model/Range.js",
        "private": false,
        "alias": null,
        "name": "getDates",
        "owner": "Sch.model.Range",
        "return": {
          "type": "Array[Date]",
          "doc": "\n"
        },
        "linenr": 41,
        "deprecated": null,
        "doc": "<p>Returns an array of dates in this range. If the range starts/ends not at the beginning of day, the whole day will be included.</p>\n"
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
  "href": "Range.html#Sch-model-Range",
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
  "filename": "../ExtScheduler2.x/js/Sch/model/Range.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Sch.model.Range",
  "extends": "Ext.data.Model",
  "author": null,
  "allMixins": [

  ],
  "linenr": 9,
  "deprecated": null,
  "doc": "<p>This class represent a simple date range. Its being used in various plugins which operate on ranges. It is a subclass of the Ext.data.Model.\nPlease refer to Ext.data.Model documentation to become familar with the base interface of this class.</p>\n\n<p>Range has the following fields:</p>\n\n<ul>\n<li><code>StartDate</code> - start date of the task in the ISO 8601 format</li>\n<li><code>EndDate</code> - end date of the task in the ISO 8601 format (not inclusive)</li>\n<li><code>Cls</code> - an optional CSS class to be associated with the range. Default value is 'sch-daterange'</li>\n</ul>\n\n"
});