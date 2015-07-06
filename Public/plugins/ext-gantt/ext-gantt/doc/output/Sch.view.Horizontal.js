Ext.data.JsonP.Sch_view_Horizontal({
  "subclasses": [

  ],
  "html_filename": "Horizontal.html",
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
        "html_filename": "Horizontal.html",
        "shortDoc": "Gets the date for an XY coordinate ...",
        "static": false,
        "href": "Horizontal.html#Sch-view-Horizontal-method-getDateFromXY",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/view/Horizontal.js",
        "private": false,
        "alias": null,
        "name": "getDateFromXY",
        "owner": "Sch.view.Horizontal",
        "return": {
          "type": "Date",
          "doc": "<p>the Date corresponding to the xy coordinate</p>\n"
        },
        "linenr": 28,
        "deprecated": null,
        "doc": "<p>Gets the date for an XY coordinate</p>\n"
      },
      {
        "params": [
          {
            "type": "Ext.data.Model",
            "optional": true,
            "name": "resourceRecord",
            "doc": "<p>(optional) The resource record</p>\n"
          },
          {
            "type": "Ext.data.Model",
            "optional": true,
            "name": "eventRecord",
            "doc": "<p>(optional) The event record</p>\n"
          }
        ],
        "html_filename": "Horizontal.html",
        "shortDoc": "Gets the Ext.util.Region represented by the schedule and optionally only for a single resource. ...",
        "static": false,
        "href": "Horizontal.html#Sch-view-Horizontal-method-getScheduleRegion",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/view/Horizontal.js",
        "private": false,
        "alias": null,
        "name": "getScheduleRegion",
        "owner": "Sch.view.Horizontal",
        "return": {
          "type": "Ext.util.Region",
          "doc": "<p>The region of the schedule</p>\n"
        },
        "linenr": 129,
        "deprecated": null,
        "doc": "<p>Gets the Ext.util.Region represented by the schedule and optionally only for a single resource. This method will call getDateConstraints to\nallow for additional resource/event based constraints. By overriding that method you can constrain events differently for\ndifferent resources.</p>\n"
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
        "html_filename": "Horizontal.html",
        "shortDoc": "Gets the start and end dates for an element Region ...",
        "static": false,
        "href": "Horizontal.html#Sch-view-Horizontal-method-getStartEndDatesFromRegion",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/view/Horizontal.js",
        "private": false,
        "alias": null,
        "name": "getStartEndDatesFromRegion",
        "owner": "Sch.view.Horizontal",
        "return": {
          "type": "Object",
          "doc": "<p>an object containing start/end properties</p>\n"
        },
        "linenr": 221,
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
        "html_filename": "Horizontal.html",
        "shortDoc": "Returns the region for a \"global\" time span in the view. ...",
        "static": false,
        "href": "Horizontal.html#Sch-view-Horizontal-method-getTimeSpanRegion",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/view/Horizontal.js",
        "private": false,
        "alias": null,
        "name": "getTimeSpanRegion",
        "owner": "Sch.view.Horizontal",
        "return": {
          "type": "Ext.util.Region",
          "doc": "<p>The region for the time span</p>\n"
        },
        "linenr": 206,
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
        "html_filename": "Horizontal.html",
        "shortDoc": "Gets xy coordinates relative to the element containing the time columns time for a date ...",
        "static": false,
        "href": "Horizontal.html#Sch-view-Horizontal-method-getXYFromDate",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/view/Horizontal.js",
        "private": false,
        "alias": null,
        "name": "getXYFromDate",
        "owner": "Sch.view.Horizontal",
        "return": {
          "type": "Array",
          "doc": "<p>the XY coordinates representing the date</p>\n"
        },
        "linenr": 53,
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
  "href": "Horizontal.html#Sch-view-Horizontal",
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
  "filename": "../ExtScheduler2.x/js/Sch/view/Horizontal.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Sch.view.Horizontal",
  "extends": "Ext.Base",
  "author": null,
  "allMixins": [

  ],
  "linenr": 11,
  "deprecated": null,
  "doc": "<p>A mixin, purposed to be consumed along with <a href=\"#/api/Sch.mixin.TimelineView\" rel=\"Sch.mixin.TimelineView\" class=\"docClass\">Sch.mixin.TimelineView</a> and providing the implementation of some methods, specific to horizontal orientation.</p>\n"
});