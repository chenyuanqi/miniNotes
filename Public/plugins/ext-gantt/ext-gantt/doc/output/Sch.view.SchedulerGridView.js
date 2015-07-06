Ext.data.JsonP.Sch_view_SchedulerGridView({
  "subclasses": [

  ],
  "html_filename": "SchedulerGridView.html",
  "docauthor": null,
  "singleton": false,
  "code_type": "assignment",
  "superclasses": [
    "Sch.view.TimelineGridView"
  ],
  "members": {
    "property": [

    ],
    "method": [
      {
        "params": [
          {
            "type": "Ext.data.Model",
            "optional": false,
            "name": "resourceRecord",
            "doc": "<p>the resource for which the event is being created</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "startDate",
            "doc": "\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "endDate",
            "doc": "\n"
          },
          {
            "type": "Event",
            "optional": false,
            "name": "e",
            "doc": "<p>The event object</p>\n"
          }
        ],
        "html_filename": "SchedulerView.html",
        "shortDoc": "An empty function by default, but provided so that you can perform custom validation on the item being created ...",
        "static": false,
        "href": "SchedulerView.html#Sch-mixin-SchedulerView-method-createValidatorFn",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
        "private": false,
        "alias": null,
        "name": "createValidatorFn",
        "owner": "Sch.mixin.SchedulerView",
        "return": {
          "type": "Boolean",
          "doc": "<p>true if the creation event is valid, else false</p>\n"
        },
        "linenr": 126,
        "deprecated": null,
        "doc": "<p>An empty function by default, but provided so that you can perform custom validation on the item being created</p>\n"
      },
      {
        "params": [
          {
            "type": "Array",
            "optional": false,
            "name": "dragRecords",
            "doc": "<p>an array containing the records for the events being dragged</p>\n"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "name": "targetResourceRecord",
            "doc": "<p>the target resource of the the event</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "date",
            "doc": "<p>The date corresponding to the drag proxy position</p>\n"
          },
          {
            "type": "Int",
            "optional": false,
            "name": "duration",
            "doc": "<p>The duration of the item being dragged in milliseconds</p>\n"
          },
          {
            "type": "Event",
            "optional": false,
            "name": "e",
            "doc": "<p>The event object</p>\n"
          }
        ],
        "html_filename": "SchedulerView.html",
        "shortDoc": "An empty function by default, but provided so that you can perform custom validation on\nthe item being dragged. ...",
        "static": false,
        "href": "SchedulerView.html#Sch-mixin-SchedulerView-method-dndValidatorFn",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
        "private": false,
        "alias": null,
        "name": "dndValidatorFn",
        "owner": "Sch.mixin.SchedulerView",
        "return": {
          "type": "Boolean",
          "doc": "<p>true if the drop position is valid, else false to prevent a drop</p>\n"
        },
        "linenr": 98,
        "deprecated": null,
        "doc": "<p>An empty function by default, but provided so that you can perform custom validation on\nthe item being dragged. This function is called during a drag and drop process and also after the drop is made</p>\n"
      },
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
        "html_filename": "SchedulerView.html",
        "shortDoc": "Returns the current set of rendered event nodes ...",
        "static": false,
        "href": "SchedulerView.html#Sch-mixin-SchedulerView-method-getEventNodes",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
        "private": false,
        "alias": null,
        "name": "getEventNodes",
        "owner": "Sch.mixin.SchedulerView",
        "return": {
          "type": "CompositeElement",
          "doc": "<p>The collection of event nodes</p>\n"
        },
        "linenr": 558,
        "deprecated": null,
        "doc": "<p>Returns the current set of rendered event nodes</p>\n"
      },
      {
        "params": [
          {
            "type": "string",
            "optional": false,
            "name": "id",
            "doc": "<p>The id of the DOM node</p>\n"
          }
        ],
        "html_filename": "SchedulerView.html",
        "shortDoc": "Returns the event record for a DOM id ...",
        "static": false,
        "href": "SchedulerView.html#Sch-mixin-SchedulerView-method-getEventRecordFromDomId",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
        "private": false,
        "alias": null,
        "name": "getEventRecordFromDomId",
        "owner": "Sch.mixin.SchedulerView",
        "return": {
          "type": "Ext.data.Model",
          "doc": "<p>The event record</p>\n"
        },
        "linenr": 470,
        "deprecated": null,
        "doc": "<p>Returns the event record for a DOM id </p>\n\n"
      },
      {
        "params": [

        ],
        "html_filename": "SchedulerView.html",
        "shortDoc": "Returns events that are (partly or fully) inside the timespan of the current view. ...",
        "static": false,
        "href": "SchedulerView.html#Sch-mixin-SchedulerView-method-getEventsInView",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
        "private": false,
        "alias": null,
        "name": "getEventsInView",
        "owner": "Sch.mixin.SchedulerView",
        "return": {
          "type": "MixedCollection",
          "doc": "<p>The collection of events</p>\n"
        },
        "linenr": 542,
        "deprecated": null,
        "doc": "<p>Returns events that are (partly or fully) inside the timespan of the current view.</p>\n"
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
        "html_filename": "SchedulerView.html",
        "shortDoc": "Returns the current row height used by the view (only applicable in a horizontal view) ...",
        "static": false,
        "href": "SchedulerView.html#Sch-mixin-SchedulerView-method-getRowHeight",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
        "private": false,
        "alias": null,
        "name": "getRowHeight",
        "owner": "Sch.mixin.SchedulerView",
        "return": {
          "type": "Boolean",
          "doc": "<p>The row height</p>\n"
        },
        "linenr": 336,
        "deprecated": null,
        "doc": "<p>Returns the current row height used by the view (only applicable in a horizontal view)</p>\n"
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
        "html_filename": "SchedulerView.html",
        "shortDoc": "Gets the Ext.util.Region represented by the schedule and optionally only for a single resource. ...",
        "static": false,
        "href": "SchedulerView.html#Sch-mixin-SchedulerView-method-getScheduleRegion",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
        "private": false,
        "alias": null,
        "name": "getScheduleRegion",
        "owner": "Sch.mixin.SchedulerView",
        "return": {
          "type": "Ext.util.Region",
          "doc": "<p>The region of the schedule</p>\n"
        },
        "linenr": 440,
        "deprecated": null,
        "doc": "<p>Gets the Ext.util.Region represented by the schedule and optionally only for a single resource. The view will ask the scheduler for\nthe resource availability by calling getResourceAvailability. By overriding that method you can constrain events differently for\ndifferent resources.</p>\n"
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
            "type": "Date",
            "optional": false,
            "name": "start",
            "doc": "<p>The start date</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "end",
            "doc": "<p>The end date</p>\n"
          },
          {
            "type": "Mixed",
            "optional": false,
            "name": "event",
            "doc": "<p>The event (or null)</p>\n"
          },
          {
            "type": "Mixed",
            "optional": false,
            "name": "resource",
            "doc": "<p>The resource</p>\n"
          }
        ],
        "html_filename": "SchedulerView.html",
        "shortDoc": "Checks if a date range is allocated or not for a given resource. ...",
        "static": false,
        "href": "SchedulerView.html#Sch-mixin-SchedulerView-method-isDateRangeAvailable",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
        "private": false,
        "alias": null,
        "name": "isDateRangeAvailable",
        "owner": "Sch.mixin.SchedulerView",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the timespan is available for the resource</p>\n"
        },
        "linenr": 521,
        "deprecated": null,
        "doc": "<p>Checks if a date range is allocated or not for a given resource.</p>\n"
      },
      {
        "params": [
          {
            "type": "Ext.data.Model",
            "optional": false,
            "name": "resourceRecord",
            "doc": "<p>The resource record</p>\n"
          },
          {
            "type": "Ext.data.Model/Date",
            "optional": false,
            "name": "eventRecord",
            "doc": "<p>The resource record if operating on an existing event, or the clicked date if the operation is a create operation.</p>\n"
          }
        ],
        "html_filename": "SchedulerView.html",
        "shortDoc": "Empty by default but provided so that you can override it. ...",
        "static": false,
        "href": "SchedulerView.html#Sch-mixin-SchedulerView-method-onDestroy",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
        "private": false,
        "alias": null,
        "name": "onDestroy",
        "owner": "Sch.mixin.SchedulerView",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 566,
        "deprecated": null,
        "doc": "<p>Empty by default but provided so that you can override it. This is called when before a drag/resize/create operation which\nenables you to restrict the editing to a portion of the visible scheduler (for example the availability of a resource).</p>\n"
      },
      {
        "params": [
          {
            "type": "Ext.data.Model",
            "optional": false,
            "name": "resourceRecord",
            "doc": "<p>the resource of the row in which the event is located</p>\n"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "name": "eventRecord",
            "doc": "<p>the event being resized</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "startDate",
            "doc": "\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "endDate",
            "doc": "\n"
          },
          {
            "type": "Event",
            "optional": false,
            "name": "e",
            "doc": "<p>The event object</p>\n"
          }
        ],
        "html_filename": "SchedulerView.html",
        "shortDoc": "An empty function by default, but provided so that you can perform custom validation on\nan item being resized. ...",
        "static": false,
        "href": "SchedulerView.html#Sch-mixin-SchedulerView-method-resizeValidatorFn",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
        "private": false,
        "alias": null,
        "name": "resizeValidatorFn",
        "owner": "Sch.mixin.SchedulerView",
        "return": {
          "type": "Boolean",
          "doc": "<p>true if the resize state is valid, else false</p>\n"
        },
        "linenr": 112,
        "deprecated": null,
        "doc": "<p>An empty function by default, but provided so that you can perform custom validation on\nan item being resized.</p>\n"
      },
      {
        "params": [
          {
            "type": "mixed",
            "optional": false,
            "name": "el",
            "doc": "<p>The DOM node or Ext Element to lookup</p>\n"
          }
        ],
        "html_filename": "SchedulerView.html",
        "shortDoc": "Returns the event record for a DOM element ...",
        "static": false,
        "href": "SchedulerView.html#Sch-mixin-SchedulerView-method-resolveEventRecord",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
        "private": false,
        "alias": null,
        "name": "resolveEventRecord",
        "owner": "Sch.mixin.SchedulerView",
        "return": {
          "type": "Ext.data.Model",
          "doc": "<p>The event record</p>\n"
        },
        "linenr": 452,
        "deprecated": null,
        "doc": "<p>Returns the event record for a DOM element </p>\n\n"
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
        "type": "Boolean",
        "html_filename": "SchedulerView.html",
        "static": false,
        "href": "SchedulerView.html#Sch-mixin-SchedulerView-cfg-allowOverlap",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
        "private": false,
        "alias": null,
        "name": "allowOverlap",
        "owner": "Sch.mixin.SchedulerView",
        "linenr": 59,
        "deprecated": null,
        "doc": "<p>Set to false if you don't want to allow events overlapping (defaults to true).</p>\n"
      },
      {
        "type": "Int",
        "html_filename": "SchedulerView.html",
        "static": false,
        "href": "SchedulerView.html#Sch-mixin-SchedulerView-cfg-barMargin",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
        "private": false,
        "alias": null,
        "name": "barMargin",
        "owner": "Sch.mixin.SchedulerView",
        "linenr": 48,
        "deprecated": null,
        "doc": "<p>Controls how much space to leave between the event bars and the row borders.</p>\n"
      },
      {
        "type": "Boolean",
        "html_filename": "SchedulerView.html",
        "static": false,
        "href": "SchedulerView.html#Sch-mixin-SchedulerView-cfg-constrainDragToResource",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
        "private": false,
        "alias": null,
        "name": "constrainDragToResource",
        "owner": "Sch.mixin.SchedulerView",
        "linenr": 64,
        "deprecated": null,
        "doc": "<p>true to only only dragging events within the same resource.</p>\n"
      },
      {
        "type": "Boolean",
        "html_filename": "SchedulerView.html",
        "shortDoc": "True to layout events without overlapping, meaning the row height will be dynamically calculated to fit any overlappi...",
        "static": false,
        "href": "SchedulerView.html#Sch-mixin-SchedulerView-cfg-dynamicRowHeight",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
        "private": false,
        "alias": null,
        "name": "dynamicRowHeight",
        "owner": "Sch.mixin.SchedulerView",
        "linenr": 74,
        "deprecated": null,
        "doc": "<p>True to layout events without overlapping, meaning the row height will be dynamically calculated to fit any overlapping events.</p>\n"
      },
      {
        "type": "String",
        "html_filename": "SchedulerView.html",
        "shortDoc": "Defines which resize handles to use. ...",
        "static": false,
        "href": "SchedulerView.html#Sch-mixin-SchedulerView-cfg-eventResizeHandles",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
        "private": false,
        "alias": null,
        "name": "eventResizeHandles",
        "owner": "Sch.mixin.SchedulerView",
        "linenr": 54,
        "deprecated": null,
        "doc": "<p>Defines which resize handles to use. Possible values: 'none', 'start', 'end', 'both'. Defaults to 'end'</p>\n"
      },
      {
        "type": "Boolean",
        "html_filename": "SchedulerView.html",
        "shortDoc": "True to size events based on the rowHeight and barMargin settings. ...",
        "static": false,
        "href": "SchedulerView.html#Sch-mixin-SchedulerView-cfg-managedEventSizing",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
        "private": false,
        "alias": null,
        "name": "managedEventSizing",
        "owner": "Sch.mixin.SchedulerView",
        "linenr": 80,
        "deprecated": null,
        "doc": "<p>True to size events based on the rowHeight and barMargin settings. Set this to false if you want to control height and top properties via CSS instead.</p>\n"
      },
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
        "type": "Boolean",
        "html_filename": "SchedulerView.html",
        "static": false,
        "href": "SchedulerView.html#Sch-mixin-SchedulerView-cfg-readOnly",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
        "private": false,
        "alias": null,
        "name": "readOnly",
        "owner": "Sch.mixin.SchedulerView",
        "linenr": 69,
        "deprecated": null,
        "doc": "<p>true to disable editing and interaction such as drag and drop, resizing and creation of new events.</p>\n"
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
            "type": "Mixed",
            "optional": false,
            "name": "view",
            "doc": "<p>The scheduler view instance</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "SchedulerView.html",
        "shortDoc": "Always fires after a drag-create operation ...",
        "static": false,
        "href": "SchedulerView.html#Sch-mixin-SchedulerView-event-afterdragcreate",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
        "private": false,
        "alias": null,
        "name": "afterdragcreate",
        "owner": "Sch.mixin.SchedulerView",
        "linenr": 287,
        "deprecated": null,
        "doc": "<p>Always fires after a drag-create operation</p>\n"
      },
      {
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "name": "view",
            "doc": "<p>The scheduler view instance</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "SchedulerView.html",
        "shortDoc": "Fires when after a drag n drop operation, even when drop was performed on an invalid location ...",
        "static": false,
        "href": "SchedulerView.html#Sch-mixin-SchedulerView-event-aftereventdrop",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
        "private": false,
        "alias": null,
        "name": "aftereventdrop",
        "owner": "Sch.mixin.SchedulerView",
        "linenr": 252,
        "deprecated": null,
        "doc": "<p>Fires when after a drag n drop operation, even when drop was performed on an invalid location</p>\n"
      },
      {
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "name": "view",
            "doc": "<p>The scheduler view instance</p>\n"
          },
          {
            "type": "Sch.model.Resource",
            "optional": false,
            "name": "resource",
            "doc": "<p>The resource record</p>\n"
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
        "html_filename": "SchedulerView.html",
        "shortDoc": "Fires before a drag starts, return false to stop the execution ...",
        "static": false,
        "href": "SchedulerView.html#Sch-mixin-SchedulerView-event-beforedragcreate",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
        "private": false,
        "alias": null,
        "name": "beforedragcreate",
        "owner": "Sch.mixin.SchedulerView",
        "linenr": 261,
        "deprecated": null,
        "doc": "<p>Fires before a drag starts, return false to stop the execution</p>\n"
      },
      {
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "name": "view",
            "doc": "<p>The scheduler view instance</p>\n"
          },
          {
            "type": "Sch.model.Event",
            "optional": false,
            "name": "newEventRecord",
            "doc": "<p>The newly created event record</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "SchedulerView.html",
        "shortDoc": "Fires after a successful drag-create operation, before the new event is added to the store. ...",
        "static": false,
        "href": "SchedulerView.html#Sch-mixin-SchedulerView-event-beforeeventadd",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
        "private": false,
        "alias": null,
        "name": "beforeeventadd",
        "owner": "Sch.mixin.SchedulerView",
        "linenr": 295,
        "deprecated": null,
        "doc": "<p>Fires after a successful drag-create operation, before the new event is added to the store. Return false to prevent the event from being added to the store.</p>\n"
      },
      {
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "name": "view",
            "doc": "<p>The scheduler view instance</p>\n"
          },
          {
            "type": "Sch.model.Event",
            "optional": false,
            "name": "record",
            "doc": "<p>The record corresponding to the node that's about to be dragged</p>\n"
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
        "html_filename": "SchedulerView.html",
        "shortDoc": "Fires before a dnd operation is initiated, return false to cancel it ...",
        "static": false,
        "href": "SchedulerView.html#Sch-mixin-SchedulerView-event-beforeeventdrag",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
        "private": false,
        "alias": null,
        "name": "beforeeventdrag",
        "owner": "Sch.mixin.SchedulerView",
        "linenr": 226,
        "deprecated": null,
        "doc": "<p>Fires before a dnd operation is initiated, return false to cancel it</p>\n"
      },
      {
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "name": "view",
            "doc": "<p>The scheduler view instance</p>\n"
          },
          {
            "type": "Sch.model.Event",
            "optional": false,
            "name": "record",
            "doc": "<p>The record about to be resized</p>\n"
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
        "html_filename": "SchedulerView.html",
        "shortDoc": "Fires before a resize starts, return false to stop the execution ...",
        "static": false,
        "href": "SchedulerView.html#Sch-mixin-SchedulerView-event-beforeeventresize",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
        "private": false,
        "alias": null,
        "name": "beforeeventresize",
        "owner": "Sch.mixin.SchedulerView",
        "linenr": 188,
        "deprecated": null,
        "doc": "<p>Fires before a resize starts, return false to stop the execution</p>\n"
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
            "type": "Mixed",
            "optional": false,
            "name": "view",
            "doc": "<p>The scheduler view instance</p>\n"
          },
          {
            "type": "Sch.model.Event",
            "optional": false,
            "name": "newEventRecord",
            "doc": "<p>The newly created event record (added to the store in onEventCreated method)</p>\n"
          },
          {
            "type": "Sch.model.Resource",
            "optional": false,
            "name": "resource",
            "doc": "<p>The resource record to which the event belongs</p>\n"
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
        "html_filename": "SchedulerView.html",
        "shortDoc": "Fires after a successful drag-create operation ...",
        "static": false,
        "href": "SchedulerView.html#Sch-mixin-SchedulerView-event-dragcreateend",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
        "private": false,
        "alias": null,
        "name": "dragcreateend",
        "owner": "Sch.mixin.SchedulerView",
        "linenr": 277,
        "deprecated": null,
        "doc": "<p>Fires after a successful drag-create operation</p>\n"
      },
      {
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "name": "view",
            "doc": "<p>The scheduler view instance</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "SchedulerView.html",
        "shortDoc": "Fires before a drag starts, return false to stop the execution ...",
        "static": false,
        "href": "SchedulerView.html#Sch-mixin-SchedulerView-event-dragcreatestart",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
        "private": false,
        "alias": null,
        "name": "dragcreatestart",
        "owner": "Sch.mixin.SchedulerView",
        "linenr": 270,
        "deprecated": null,
        "doc": "<p>Fires before a drag starts, return false to stop the execution</p>\n"
      },
      {
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "name": "view",
            "doc": "<p>The scheduler view instance</p>\n"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "name": "eventRecord",
            "doc": "<p>The event record of the clicked event</p>\n"
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
        "html_filename": "SchedulerView.html",
        "shortDoc": "Fires when an event is clicked ...",
        "static": false,
        "href": "SchedulerView.html#Sch-mixin-SchedulerView-event-eventclick",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
        "private": false,
        "alias": null,
        "name": "eventclick",
        "owner": "Sch.mixin.SchedulerView",
        "linenr": 160,
        "deprecated": null,
        "doc": "<p>Fires when an event is clicked</p>\n"
      },
      {
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "name": "view",
            "doc": "<p>The scheduler view instance</p>\n"
          },
          {
            "type": "Sch.model.Event",
            "optional": false,
            "name": "eventRecord",
            "doc": "<p>The event record of the clicked event</p>\n"
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
        "html_filename": "SchedulerView.html",
        "shortDoc": "Fires when contextmenu is activated on an event ...",
        "static": false,
        "href": "SchedulerView.html#Sch-mixin-SchedulerView-event-eventcontextmenu",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
        "private": false,
        "alias": null,
        "name": "eventcontextmenu",
        "owner": "Sch.mixin.SchedulerView",
        "linenr": 178,
        "deprecated": null,
        "doc": "<p>Fires when contextmenu is activated on an event</p>\n"
      },
      {
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "name": "view",
            "doc": "<p>The scheduler view instance</p>\n"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "name": "eventRecord",
            "doc": "<p>The event record of the clicked event</p>\n"
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
        "html_filename": "SchedulerView.html",
        "shortDoc": "Fires when an event is double clicked ...",
        "static": false,
        "href": "SchedulerView.html#Sch-mixin-SchedulerView-event-eventdblclick",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
        "private": false,
        "alias": null,
        "name": "eventdblclick",
        "owner": "Sch.mixin.SchedulerView",
        "linenr": 169,
        "deprecated": null,
        "doc": "<p>Fires when an event is double clicked</p>\n"
      },
      {
        "params": [
          {
            "type": "SchedulerPanel",
            "optional": false,
            "name": "scheduler",
            "doc": "<p>The scheduler object</p>\n"
          },
          {
            "type": "Array",
            "optional": false,
            "name": "records",
            "doc": "<p>the records being dragged</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "SchedulerView.html",
        "shortDoc": "Fires when a dnd operation starts ...",
        "static": false,
        "href": "SchedulerView.html#Sch-mixin-SchedulerView-event-eventdragstart",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
        "private": false,
        "alias": null,
        "name": "eventdragstart",
        "owner": "Sch.mixin.SchedulerView",
        "linenr": 235,
        "deprecated": null,
        "doc": "<p>Fires when a dnd operation starts</p>\n"
      },
      {
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "name": "view",
            "doc": "<p>The scheduler view instance</p>\n"
          },
          {
            "type": "Array",
            "optional": false,
            "name": "records",
            "doc": "<p>the affected records (if copies were made, they were not inserted into the store)</p>\n"
          },
          {
            "type": "Boolean",
            "optional": false,
            "name": "isCopy",
            "doc": "<p>True if the records were copied instead of moved</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "SchedulerView.html",
        "shortDoc": "Fires after a succesful drag and drop operation ...",
        "static": false,
        "href": "SchedulerView.html#Sch-mixin-SchedulerView-event-eventdrop",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
        "private": false,
        "alias": null,
        "name": "eventdrop",
        "owner": "Sch.mixin.SchedulerView",
        "linenr": 243,
        "deprecated": null,
        "doc": "<p>Fires after a succesful drag and drop operation</p>\n"
      },
      {
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "name": "view",
            "doc": "<p>The scheduler view instance</p>\n"
          },
          {
            "type": "Sch.model.Event",
            "optional": false,
            "name": "record",
            "doc": "<p>The event record being resized</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "startDate",
            "doc": "<p>The new start date of the event</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "endDate",
            "doc": "<p>The new end date of the event</p>\n"
          },
          {
            "type": "Ext.Element",
            "optional": false,
            "name": "element",
            "doc": "<p>The proxy element being resized</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "SchedulerView.html",
        "shortDoc": "Fires during a resize operation and provides information about the current start and end of the resized event ...",
        "static": false,
        "href": "SchedulerView.html#Sch-mixin-SchedulerView-event-eventpartialresize",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
        "private": false,
        "alias": null,
        "name": "eventpartialresize",
        "owner": "Sch.mixin.SchedulerView",
        "linenr": 205,
        "deprecated": null,
        "doc": "<p>Fires during a resize operation and provides information about the current start and end of the resized event</p>\n"
      },
      {
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "name": "view",
            "doc": "<p>The scheduler view instance</p>\n"
          },
          {
            "type": "Sch.model.Event",
            "optional": false,
            "name": "record",
            "doc": "<p>The updated event record</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "SchedulerView.html",
        "shortDoc": "Fires after a succesful resize operation ...",
        "static": false,
        "href": "SchedulerView.html#Sch-mixin-SchedulerView-event-eventresizeend",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
        "private": false,
        "alias": null,
        "name": "eventresizeend",
        "owner": "Sch.mixin.SchedulerView",
        "linenr": 216,
        "deprecated": null,
        "doc": "<p>Fires after a succesful resize operation</p>\n"
      },
      {
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "name": "view",
            "doc": "<p>The scheduler view instance</p>\n"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "name": "record",
            "doc": "<p>The record corresponding to the element about to be resized</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "SchedulerView.html",
        "shortDoc": "Fires when resize starts ...",
        "static": false,
        "href": "SchedulerView.html#Sch-mixin-SchedulerView-event-eventresizestart",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
        "private": false,
        "alias": null,
        "name": "eventresizestart",
        "owner": "Sch.mixin.SchedulerView",
        "linenr": 197,
        "deprecated": null,
        "doc": "<p>Fires when resize starts</p>\n"
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
    "Sch.mixin.SchedulerView"
  ],
  "static": false,
  "href": "SchedulerGridView.html#Sch-view-SchedulerGridView",
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
  "filename": "../ExtScheduler2.x/js/Sch/view/SchedulerGridView.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Sch.view.SchedulerGridView",
  "extends": "Sch.view.TimelineGridView",
  "author": null,
  "allMixins": [
    "Sch.mixin.SchedulerView",
    "Sch.mixin.TimelineView"
  ],
  "linenr": 10,
  "deprecated": null,
  "doc": "<p>Desc</p>\n"
});