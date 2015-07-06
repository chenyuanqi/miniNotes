Ext.data.JsonP.Sch_view_Vertical({
  "subclasses": [

  ],
  "html_filename": "Vertical.html",
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
            "type": "Array",
            "optional": false,
            "name": "xy",
            "doc": "<p>The page X and Y coordinates</p>\n"
          },
          {
            "type": "String",
            "optional": false,
            "name": "roundingMethod",
            "doc": "<p>The rounding method to use</p>\n"
          }
        ],
        "html_filename": "Vertical.html",
        "shortDoc": "Gets the date for an XY coordinate ...",
        "static": false,
        "href": "Vertical.html#Sch-view-Vertical-method-getDateFromXY",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/view/Vertical.js",
        "private": false,
        "alias": null,
        "name": "getDateFromXY",
        "owner": "Sch.view.Vertical",
        "return": {
          "type": "Date",
          "doc": "<p>the Date corresponding to the xy coordinate</p>\n"
        },
        "linenr": 32,
        "deprecated": null,
        "doc": "<p>Gets the date for an XY coordinate</p>\n"
      },
      {
        "params": [
          {
            "type": "Region",
            "optional": false,
            "name": "region",
            "doc": "<p>The region to map to start and end dates</p>\n"
          },
          {
            "type": "String",
            "optional": false,
            "name": "roundingMethod",
            "doc": "<p>The rounding method to use</p>\n"
          }
        ],
        "html_filename": "Vertical.html",
        "shortDoc": "Gets the start and end dates for an element Region ...",
        "static": false,
        "href": "Vertical.html#Sch-view-Vertical-method-getStartEndDatesFromRegion",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/view/Vertical.js",
        "private": false,
        "alias": null,
        "name": "getStartEndDatesFromRegion",
        "owner": "Sch.view.Vertical",
        "return": {
          "type": "Object",
          "doc": "<p>an object containing start/end properties</p>\n"
        },
        "linenr": 342,
        "deprecated": null,
        "doc": "<p>Gets the start and end dates for an element Region</p>\n"
      },
      {
        "params": [
          {
            "type": "Date",
            "optional": false,
            "name": "startDate",
            "doc": "<p>The start date of the span</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "endDate",
            "doc": "<p>The end date of the span</p>\n"
          }
        ],
        "html_filename": "Vertical.html",
        "shortDoc": "Returns the region for a \"global\" time span in the view. ...",
        "static": false,
        "href": "Vertical.html#Sch-view-Vertical-method-getTimeSpanRegion",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/view/Vertical.js",
        "private": false,
        "alias": null,
        "name": "getTimeSpanRegion",
        "owner": "Sch.view.Vertical",
        "return": {
          "type": "Ext.util.Region",
          "doc": "<p>The region for the time span</p>\n"
        },
        "linenr": 327,
        "deprecated": null,
        "doc": "<p>Returns the region for a \"global\" time span in the view. Coordinates are relative to element containing the time columns</p>\n"
      },
      {
        "params": [
          {
            "type": "Date",
            "optional": false,
            "name": "xy",
            "doc": "<p>, the page X and Y coordinates</p>\n"
          },
          {
            "type": "Boolean",
            "optional": false,
            "name": "local",
            "doc": "<p>, true to return a coordinate local to the element containing the calendar columns</p>\n"
          }
        ],
        "html_filename": "Vertical.html",
        "shortDoc": "Gets xy coordinates relative to the element containing the time columns time for a date ...",
        "static": false,
        "href": "Vertical.html#Sch-view-Vertical-method-getXYFromDate",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/view/Vertical.js",
        "private": false,
        "alias": null,
        "name": "getXYFromDate",
        "owner": "Sch.view.Vertical",
        "return": {
          "type": "Array",
          "doc": "<p>the XY coordinates representing the date</p>\n"
        },
        "linenr": 54,
        "deprecated": null,
        "doc": "<p>Gets xy coordinates relative to the element containing the time columns time for a date</p>\n"
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
  "href": "Vertical.html#Sch-view-Vertical",
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
  "filename": "../ExtScheduler2.x/js/Sch/view/Vertical.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Sch.view.Vertical",
  "extends": "Ext.Base",
  "author": null,
  "allMixins": [

  ],
  "linenr": 11,
  "deprecated": null,
  "doc": "<p>A mixin, purposed to be consumed along with <a href=\"#/api/Sch.mixin.TimelineView\" rel=\"Sch.mixin.TimelineView\" class=\"docClass\">Sch.mixin.TimelineView</a> and providing the implementation of some methods, specific to vertical orientation.</p>\n"
});