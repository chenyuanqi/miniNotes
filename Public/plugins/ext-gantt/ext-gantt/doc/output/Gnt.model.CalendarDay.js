Ext.data.JsonP.Gnt_model_CalendarDay({
  "subclasses": [

  ],
  "html_filename": "CalendarDay.html",
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
        "html_filename": "CalendarDay.html",
        "shortDoc": "Returns the date for this day (will clear the time part) ...",
        "static": false,
        "href": "CalendarDay.html#Gnt-model-CalendarDay-method-getDate",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/CalendarDay.js",
        "private": false,
        "alias": null,
        "name": "getDate",
        "owner": "Gnt.model.CalendarDay",
        "return": {
          "type": "Date",
          "doc": "\n"
        },
        "linenr": 69,
        "deprecated": null,
        "doc": "<p>Returns the date for this day (will clear the time part)</p>\n"
      },
      {
        "params": [
          {
            "type": "Date",
            "optional": false,
            "name": "date",
            "doc": "\n"
          }
        ],
        "html_filename": "CalendarDay.html",
        "shortDoc": "Set the date for this day (will clear the time part) ...",
        "static": false,
        "href": "CalendarDay.html#Gnt-model-CalendarDay-method-setDate",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/model/CalendarDay.js",
        "private": false,
        "alias": null,
        "name": "setDate",
        "owner": "Gnt.model.CalendarDay",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 60,
        "deprecated": null,
        "doc": "<p>Set the date for this day (will clear the time part)</p>\n"
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
  "href": "CalendarDay.html#Gnt-model-CalendarDay",
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
  "filename": "js//Gnt/model/CalendarDay.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Gnt.model.CalendarDay",
  "extends": "Ext.data.Model",
  "author": null,
  "allMixins": [

  ],
  "linenr": 9,
  "deprecated": null,
  "doc": "<p>A model representing a single day in the calendar. A collection of this model is supposed to be provided for the <a href=\"#/api/Gnt.data.Calendar\" rel=\"Gnt.data.Calendar\" class=\"docClass\">calendar</a></p>\n\n<h2>Fields</h2>\n\n<ul>\n<li><code>Date</code> - (mandatory) the date for this day in the ISO 8601 format</li>\n<li><code>Name</code> - optional name of the day (holiday name for example)</li>\n<li><code>IsWorkingDay</code> - optional boolean flag, allowing you to specify the exceptions - working days which falls on the weekends. Default value is <code>false</code></li>\n<li><code>Cls</code> - optional name of the CSS class, which can be used by various pluging working with weekends and holidays. Default value is <code>gnt-holiday</code>\nIf some holidays lasts for several days, then all days should have the same <code>Cls</code> value.</li>\n</ul>\n\n"
});