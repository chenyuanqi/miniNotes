Ext.data.JsonP.Sch_view_TimelineTreeView({
  "subclasses": [
    "Gnt.view.Gantt",
    "Sch.view.SchedulerTreeView"
  ],
  "html_filename": "TimelineTreeView.html",
  "docauthor": null,
  "singleton": false,
  "code_type": "assignment",
  "superclasses": [

  ],
  "members": {
    "property": [

    ],
    "method": [
      {
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "name": "preventRefresh",
            "doc": "<p><code>true</code> to prevent the refresh of view</p>\n"
          }
        ],
        "html_filename": "TimelineView.html",
        "shortDoc": "This function fits the time columns into the available space in the grid. ...",
        "static": false,
        "href": "TimelineView.html#Sch-mixin-TimelineView-method-fitColumns",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelineView.js",
        "private": false,
        "alias": null,
        "name": "fitColumns",
        "owner": "Sch.mixin.TimelineView",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 362,
        "deprecated": null,
        "doc": "<p>This function fits the time columns into the available space in the grid.</p>\n"
      },
      {
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e",
            "doc": "<p>, the EventObject instance</p>\n"
          },
          {
            "type": "String",
            "optional": true,
            "name": "roundingMethod",
            "doc": "<p>(optional), 'floor' to floor the value or 'round' to round the value to nearest increment</p>\n"
          }
        ],
        "html_filename": "TimelineView.html",
        "shortDoc": "Gets the time for a DOM event such as 'mousemove' or 'click' ...",
        "static": false,
        "href": "TimelineView.html#Sch-mixin-TimelineView-method-getDateFromDomEvent",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelineView.js",
        "private": false,
        "alias": null,
        "name": "getDateFromDomEvent",
        "owner": "Sch.mixin.TimelineView",
        "return": {
          "type": "Date",
          "doc": "<p>The date corresponding to the EventObject x coordinate</p>\n"
        },
        "linenr": 524,
        "deprecated": null,
        "doc": "<p>Gets the time for a DOM event such as 'mousemove' or 'click'</p>\n"
      },
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
        "html_filename": "TimelineView.html",
        "shortDoc": "Gets the date for an XY coordinate ...",
        "static": false,
        "href": "TimelineView.html#Sch-mixin-TimelineView-method-getDateFromXY",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelineView.js",
        "private": false,
        "alias": null,
        "name": "getDateFromXY",
        "owner": "Sch.mixin.TimelineView",
        "return": {
          "type": "Date",
          "doc": "<p>the Date corresponding to the xy coordinate</p>\n"
        },
        "linenr": 657,
        "deprecated": null,
        "doc": "<p>Gets the date for an XY coordinate</p>\n"
      },
      {
        "params": [
          {
            "type": "Ext.data.Model",
            "optional": false,
            "name": "record",
            "doc": "<p>The record</p>\n"
          }
        ],
        "html_filename": "TimelineView.html",
        "shortDoc": "Returns the Ext Element representing an event record ...",
        "static": false,
        "href": "TimelineView.html#Sch-mixin-TimelineView-method-getElementFromEventRecord",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelineView.js",
        "private": false,
        "alias": null,
        "name": "getElementFromEventRecord",
        "owner": "Sch.mixin.TimelineView",
        "return": {
          "type": "Ext.Element",
          "doc": "<p>The Ext Element representing the event record</p>\n"
        },
        "linenr": 383,
        "deprecated": null,
        "doc": "<p>Returns the Ext Element representing an event record</p>\n\n"
      },
      {
        "params": [

        ],
        "html_filename": "TimelineView.html",
        "shortDoc": "Method to get a the current end date of the scheduler view ...",
        "static": false,
        "href": "TimelineView.html#Sch-mixin-TimelineView-method-getEnd",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelineView.js",
        "private": false,
        "alias": null,
        "name": "getEnd",
        "owner": "Sch.mixin.TimelineView",
        "return": {
          "type": "Date",
          "doc": "<p>The end date</p>\n"
        },
        "linenr": 713,
        "deprecated": null,
        "doc": "<p>Method to get a the current end date of the scheduler view</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "TimelineView.html",
        "shortDoc": "Returns the current view orientation ...",
        "static": false,
        "href": "TimelineView.html#Sch-mixin-TimelineView-method-getOrientation",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelineView.js",
        "private": false,
        "alias": null,
        "name": "getOrientation",
        "owner": "Sch.mixin.TimelineView",
        "return": {
          "type": "String",
          "doc": "<p>The view orientation ('horizontal' or 'vertical')</p>\n"
        },
        "linenr": 612,
        "deprecated": null,
        "doc": "<p>Returns the current view orientation</p>\n"
      },
      {
        "params": [
          {
            "type": "Ext.data.Model",
            "optional": false,
            "name": "record",
            "doc": "<p>The record</p>\n"
          }
        ],
        "html_filename": "TimelineView.html",
        "shortDoc": "Returns the Ext Element representing an event record ...",
        "static": false,
        "href": "TimelineView.html#Sch-mixin-TimelineView-method-getOuterElementFromEventRecord",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelineView.js",
        "private": false,
        "alias": null,
        "name": "getOuterElementFromEventRecord",
        "owner": "Sch.mixin.TimelineView",
        "return": {
          "type": "Ext.Element",
          "doc": "<p>The Ext Element representing the event record</p>\n"
        },
        "linenr": 398,
        "deprecated": null,
        "doc": "<p>Returns the Ext Element representing an event record</p>\n\n"
      },
      {
        "params": [

        ],
        "html_filename": "TimelineView.html",
        "shortDoc": "[Experimental] Returns the pixel increment for the current view resolution. ...",
        "static": false,
        "href": "TimelineView.html#Sch-mixin-TimelineView-method-getSnapPixelAmount",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelineView.js",
        "private": false,
        "alias": null,
        "name": "getSnapPixelAmount",
        "owner": "Sch.mixin.TimelineView",
        "return": {
          "type": "Int",
          "doc": "<p>The width increment</p>\n"
        },
        "linenr": 562,
        "deprecated": null,
        "doc": "<p>[Experimental] Returns the pixel increment for the current view resolution.</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "TimelineView.html",
        "shortDoc": "Method to get a the current start date of the scheduler view ...",
        "static": false,
        "href": "TimelineView.html#Sch-mixin-TimelineView-method-getStart",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelineView.js",
        "private": false,
        "alias": null,
        "name": "getStart",
        "owner": "Sch.mixin.TimelineView",
        "return": {
          "type": "Date",
          "doc": "<p>The start date</p>\n"
        },
        "linenr": 705,
        "deprecated": null,
        "doc": "<p>Method to get a the current start date of the scheduler view</p>\n"
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
        "html_filename": "TimelineView.html",
        "shortDoc": "Gets the start and end dates for an element Region ...",
        "static": false,
        "href": "TimelineView.html#Sch-mixin-TimelineView-method-getStartEndDatesFromRegion",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelineView.js",
        "private": false,
        "alias": null,
        "name": "getStartEndDatesFromRegion",
        "owner": "Sch.mixin.TimelineView",
        "return": {
          "type": "Object",
          "doc": "<p>an object containing start/end properties</p>\n"
        },
        "linenr": 418,
        "deprecated": null,
        "doc": "<p>Gets the start and end dates for an element Region</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "TimelineView.html",
        "shortDoc": "Returns the current time resolution object, which contains a unit identifier and an increment count. ...",
        "static": false,
        "href": "TimelineView.html#Sch-mixin-TimelineView-method-getTimeResolution",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelineView.js",
        "private": false,
        "alias": null,
        "name": "getTimeResolution",
        "owner": "Sch.mixin.TimelineView",
        "return": {
          "type": "Object",
          "doc": "<p>The time resolution object</p>\n"
        },
        "linenr": 492,
        "deprecated": null,
        "doc": "<p>Returns the current time resolution object, which contains a unit identifier and an increment count.</p>\n"
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
        "html_filename": "TimelineView.html",
        "shortDoc": "Returns the region for a \"global\" time span in the view. ...",
        "static": false,
        "href": "TimelineView.html#Sch-mixin-TimelineView-method-getTimeSpanRegion",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelineView.js",
        "private": false,
        "alias": null,
        "name": "getTimeSpanRegion",
        "owner": "Sch.mixin.TimelineView",
        "return": {
          "type": "Ext.util.Region",
          "doc": "<p>The region for the time span</p>\n"
        },
        "linenr": 678,
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
        "html_filename": "TimelineView.html",
        "shortDoc": "Gets xy coordinates relative to the element containing the time columns time for a date ...",
        "static": false,
        "href": "TimelineView.html#Sch-mixin-TimelineView-method-getXYFromDate",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelineView.js",
        "private": false,
        "alias": null,
        "name": "getXYFromDate",
        "owner": "Sch.mixin.TimelineView",
        "return": {
          "type": "Array",
          "doc": "<p>the XY coordinates representing the date</p>\n"
        },
        "linenr": 668,
        "deprecated": null,
        "doc": "<p>Gets xy coordinates relative to the element containing the time columns time for a date</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "TimelineView.html",
        "shortDoc": "Returns true, if there are any columns with position : right provided to this view ...",
        "static": false,
        "href": "TimelineView.html#Sch-mixin-TimelineView-method-hasRightColumns",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelineView.js",
        "private": false,
        "alias": null,
        "name": "hasRightColumns",
        "owner": "Sch.mixin.TimelineView",
        "return": {
          "type": "Boolean",
          "doc": "<p>The formatted date</p>\n"
        },
        "linenr": 175,
        "deprecated": null,
        "doc": "<p>Returns true, if there are any columns with <code>position : right</code> provided to this view</p>\n"
      },
      {
        "params": [
          {
            "type": "Ext.data.Model",
            "optional": false,
            "name": "eventRec",
            "doc": "<p>, the event record to scroll into view</p>\n"
          },
          {
            "type": "Mixed",
            "optional": false,
            "name": "highlight",
            "doc": "<p>, either true/false or a highlight config object used to highlight the element after scrolling it into view</p>\n"
          }
        ],
        "html_filename": "TimelineView.html",
        "shortDoc": "Scrolls an event record into the viewport (only works for events that have already been rendered) ...",
        "static": false,
        "href": "TimelineView.html#Sch-mixin-TimelineView-method-scrollEventIntoView",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelineView.js",
        "private": false,
        "alias": null,
        "name": "scrollEventIntoView",
        "owner": "Sch.mixin.TimelineView",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 292,
        "deprecated": null,
        "doc": "<p>Scrolls an event record into the viewport (only works for events that have already been rendered)</p>\n"
      },
      {
        "params": [
          {
            "type": "Int",
            "optional": false,
            "name": "margin",
            "doc": "<p>The new margin value</p>\n"
          },
          {
            "type": "Boolean",
            "optional": false,
            "name": "preventRefresh",
            "doc": "<p>true to skip refreshing the view</p>\n"
          }
        ],
        "html_filename": "TimelineView.html",
        "shortDoc": "Sets the amount of margin to keep between bars and rows. ...",
        "static": false,
        "href": "TimelineView.html#Sch-mixin-TimelineView-method-setBarMargin",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelineView.js",
        "private": false,
        "alias": null,
        "name": "setBarMargin",
        "owner": "Sch.mixin.TimelineView",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 721,
        "deprecated": null,
        "doc": "<p>Sets the amount of margin to keep between bars and rows.</p>\n"
      },
      {
        "params": [
          {
            "type": "Number",
            "optional": false,
            "name": "width",
            "doc": "<p>The width to set</p>\n"
          },
          {
            "type": "Boolean",
            "optional": false,
            "name": "preventRefresh",
            "doc": "<p><code>true</code> to prevent view refresh</p>\n"
          }
        ],
        "html_filename": "TimelineView.html",
        "shortDoc": "Sets the width of individual time column ...",
        "static": false,
        "href": "TimelineView.html#Sch-mixin-TimelineView-method-setColumnWidth",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelineView.js",
        "private": false,
        "alias": null,
        "name": "setColumnWidth",
        "owner": "Sch.mixin.TimelineView",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 757,
        "deprecated": null,
        "doc": "<p>Sets the width of individual time column</p>\n"
      },
      {
        "params": [
          {
            "type": "String",
            "optional": false,
            "name": "orientation",
            "doc": "<p>Either 'horizontal' or 'vertical'</p>\n"
          }
        ],
        "html_filename": "TimelineView.html",
        "shortDoc": "Sets the current orientation. ...",
        "static": false,
        "href": "TimelineView.html#Sch-mixin-TimelineView-method-setOrientation",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelineView.js",
        "private": false,
        "alias": null,
        "name": "setOrientation",
        "owner": "Sch.mixin.TimelineView",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 601,
        "deprecated": null,
        "doc": "<p>Sets the current orientation.</p>\n"
      },
      {
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "name": "readOnly",
            "doc": "<p>The new readOnly state</p>\n"
          }
        ],
        "html_filename": "TimelineView.html",
        "shortDoc": "Sets the readonly state which limits the interactivity (resizing, drag and drop etc). ...",
        "static": false,
        "href": "TimelineView.html#Sch-mixin-TimelineView-method-setReadOnly",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelineView.js",
        "private": false,
        "alias": null,
        "name": "setReadOnly",
        "owner": "Sch.mixin.TimelineView",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 591,
        "deprecated": null,
        "doc": "<p>Sets the readonly state which limits the interactivity (resizing, drag and drop etc).</p>\n"
      },
      {
        "params": [
          {
            "type": "Number",
            "optional": false,
            "name": "height",
            "doc": "<p>The height to set</p>\n"
          },
          {
            "type": "Boolean",
            "optional": false,
            "name": "preventRefresh",
            "doc": "<p><code>true</code> to prevent view refresh</p>\n"
          }
        ],
        "html_filename": "TimelineView.html",
        "shortDoc": "Sets the height of row ...",
        "static": false,
        "href": "TimelineView.html#Sch-mixin-TimelineView-method-setRowHeight",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelineView.js",
        "private": false,
        "alias": null,
        "name": "setRowHeight",
        "owner": "Sch.mixin.TimelineView",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 734,
        "deprecated": null,
        "doc": "<p>Sets the height of row</p>\n"
      },
      {
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "name": "enabled",
            "doc": "<p>true to enable snapping when interacting with events.</p>\n"
          }
        ],
        "html_filename": "TimelineView.html",
        "shortDoc": "Controls whether the scheduler should snap to the resolution when interacting with it. ...",
        "static": false,
        "href": "TimelineView.html#Sch-mixin-TimelineView-method-setSnapEnabled",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelineView.js",
        "private": false,
        "alias": null,
        "name": "setSnapEnabled",
        "owner": "Sch.mixin.TimelineView",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 579,
        "deprecated": null,
        "doc": "<p>Controls whether the scheduler should snap to the resolution when interacting with it.</p>\n"
      },
      {
        "params": [
          {
            "type": "Object",
            "optional": false,
            "name": "unit",
            "doc": "\n"
          },
          {
            "type": "Object",
            "optional": false,
            "name": "increment",
            "doc": "\n"
          }
        ],
        "html_filename": "TimelineView.html",
        "shortDoc": "Sets the current time resolution, composed by a unit identifier and an increment count. ...",
        "static": false,
        "href": "TimelineView.html#Sch-mixin-TimelineView-method-setTimeResolution",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelineView.js",
        "private": false,
        "alias": null,
        "name": "setTimeResolution",
        "owner": "Sch.mixin.TimelineView",
        "return": {
          "type": "Object",
          "doc": "<p>The time resolution object</p>\n"
        },
        "linenr": 500,
        "deprecated": null,
        "doc": "<p>Sets the current time resolution, composed by a unit identifier and an increment count.</p>\n"
      }
    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "cfg": [
      {
        "type": "String",
        "html_filename": "TimelineView.html",
        "static": false,
        "href": "TimelineView.html#Sch-mixin-TimelineView-cfg-orientation",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelineView.js",
        "private": false,
        "alias": null,
        "name": "orientation",
        "owner": "Sch.mixin.TimelineView",
        "linenr": 35,
        "deprecated": null,
        "doc": "<p>The view orientation</p>\n"
      },
      {
        "type": "String",
        "html_filename": "TimelineView.html",
        "static": false,
        "href": "TimelineView.html#Sch-mixin-TimelineView-cfg-overScheduledEventClass",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelineView.js",
        "private": false,
        "alias": null,
        "name": "overScheduledEventClass",
        "owner": "Sch.mixin.TimelineView",
        "linenr": 40,
        "deprecated": null,
        "doc": "<p>A CSS class to apply to each event in the view on mouseover (defaults to 'sch-event-hover').</p>\n"
      },
      {
        "type": "String",
        "html_filename": "TimelineView.html",
        "static": false,
        "href": "TimelineView.html#Sch-mixin-TimelineView-cfg-selectedEventCls",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelineView.js",
        "private": false,
        "alias": null,
        "name": "selectedEventCls",
        "owner": "Sch.mixin.TimelineView",
        "linenr": 46,
        "deprecated": null,
        "doc": "<p>A CSS class to apply to each event in the view on mouseover (defaults to 'sch-event-selected').</p>\n"
      }
    ],
    "event": [
      {
        "params": [
          {
            "type": "Sch.mixin.SchedulerPanel",
            "optional": false,
            "name": "scheduler",
            "doc": "<p>The scheduler object</p>\n"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "name": "eventRecord",
            "doc": "<p>The event record of the clicked record</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "TimelineView.html",
        "shortDoc": "Fires before the event tooltip is shown, return false to suppress it. ...",
        "static": false,
        "href": "TimelineView.html#Sch-mixin-TimelineView-event-beforetooltipshow",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelineView.js",
        "private": false,
        "alias": null,
        "name": "beforetooltipshow",
        "owner": "Sch.mixin.TimelineView",
        "linenr": 106,
        "deprecated": null,
        "doc": "<p>Fires before the event tooltip is shown, return false to suppress it.</p>\n"
      },
      {
        "params": [
          {
            "type": "Sch.mixin.SchedulerPanel",
            "optional": false,
            "name": "scheduler",
            "doc": "<p>The scheduler object</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "clickedDate",
            "doc": "<p>The clicked date</p>\n"
          },
          {
            "type": "Int",
            "optional": false,
            "name": "rowIndex",
            "doc": "<p>The row index</p>\n"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e",
            "doc": "<p>The event object</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "TimelineView.html",
        "shortDoc": "Fires after a click on the schedule area ...",
        "static": false,
        "href": "TimelineView.html#Sch-mixin-TimelineView-event-scheduleclick",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelineView.js",
        "private": false,
        "alias": null,
        "name": "scheduleclick",
        "owner": "Sch.mixin.TimelineView",
        "linenr": 114,
        "deprecated": null,
        "doc": "<p>Fires after a click on the schedule area</p>\n"
      },
      {
        "params": [
          {
            "type": "Sch.mixin.SchedulerPanel",
            "optional": false,
            "name": "scheduler",
            "doc": "<p>The scheduler object</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "clickedDate",
            "doc": "<p>The clicked date</p>\n"
          },
          {
            "type": "Int",
            "optional": false,
            "name": "rowIndex",
            "doc": "<p>The row index</p>\n"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e",
            "doc": "<p>The event object</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "TimelineView.html",
        "shortDoc": "Fires after a context menu click on the schedule area ...",
        "static": false,
        "href": "TimelineView.html#Sch-mixin-TimelineView-event-schedulecontextmenu",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelineView.js",
        "private": false,
        "alias": null,
        "name": "schedulecontextmenu",
        "owner": "Sch.mixin.TimelineView",
        "linenr": 134,
        "deprecated": null,
        "doc": "<p>Fires after a context menu click on the schedule area</p>\n"
      },
      {
        "params": [
          {
            "type": "Sch.mixin.SchedulerPanel",
            "optional": false,
            "name": "scheduler",
            "doc": "<p>The scheduler object</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "clickedDate",
            "doc": "<p>The clicked date</p>\n"
          },
          {
            "type": "Int",
            "optional": false,
            "name": "rowIndex",
            "doc": "<p>The row index</p>\n"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e",
            "doc": "<p>The event object</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "TimelineView.html",
        "shortDoc": "Fires after a doubleclick on the schedule area ...",
        "static": false,
        "href": "TimelineView.html#Sch-mixin-TimelineView-event-scheduledblclick",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelineView.js",
        "private": false,
        "alias": null,
        "name": "scheduledblclick",
        "owner": "Sch.mixin.TimelineView",
        "linenr": 124,
        "deprecated": null,
        "doc": "<p>Fires after a doubleclick on the schedule area</p>\n"
      }
    ]
  },
  "mixins": [
    "Sch.mixin.TimelineView"
  ],
  "static": false,
  "href": "TimelineTreeView.html#Sch-view-TimelineTreeView",
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
  "filename": "../ExtScheduler2.x/js/Sch/view/TimelineTreeView.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Sch.view.TimelineTreeView",
  "extends": "Ext.tree.View",
  "author": null,
  "allMixins": [
    "Sch.mixin.TimelineView"
  ],
  "linenr": 10,
  "deprecated": null,
  "doc": "<p>A tree view class, that have consumed the <a href=\"#/api/Sch.mixin.TimelineView\" rel=\"Sch.mixin.TimelineView\" class=\"docClass\">Sch.mixin.TimelineView</a> mixin. Used internally.</p>\n"
});