Ext.data.JsonP.Gnt_view_Gantt({
  "subclasses": [

  ],
  "html_filename": "Gantt2.html",
  "docauthor": null,
  "singleton": false,
  "code_type": "ext_define",
  "superclasses": [
    "Sch.view.TimelineTreeView"
  ],
  "members": {
    "property": [

    ],
    "method": [
      {
        "params": [
          {
            "type": "Gnt.model.Task",
            "optional": false,
            "name": "record",
            "doc": "<p>The task record</p>\n"
          }
        ],
        "html_filename": "Gantt2.html",
        "shortDoc": "Programmatically activates the editor for the field ...",
        "static": false,
        "href": "Gantt2.html#Gnt-view-Gantt-method-editLeftLabel",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/view/Gantt.js",
        "private": false,
        "alias": null,
        "name": "editLeftLabel",
        "owner": "Gnt.view.Gantt",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 921,
        "deprecated": null,
        "doc": "<p>Programmatically activates the editor for the field</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.model.Task",
            "optional": false,
            "name": "record",
            "doc": "<p>The task record</p>\n"
          }
        ],
        "html_filename": "Gantt2.html",
        "shortDoc": "Programmatically activates the editor for the field ...",
        "static": false,
        "href": "Gantt2.html#Gnt-view-Gantt-method-editRightLabel",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/view/Gantt.js",
        "private": false,
        "alias": null,
        "name": "editRightLabel",
        "owner": "Gnt.view.Gantt",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 932,
        "deprecated": null,
        "doc": "<p>Programmatically activates the editor for the field</p>\n"
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

        ],
        "html_filename": "Gantt2.html",
        "shortDoc": "Returns the critical path(s) that can affect the end date of the project ...",
        "static": false,
        "href": "Gantt2.html#Gnt-view-Gantt-method-getCriticalPaths",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/view/Gantt.js",
        "private": false,
        "alias": null,
        "name": "getCriticalPaths",
        "owner": "Gnt.view.Gantt",
        "return": {
          "type": "Array",
          "doc": "<p>paths An array of arrays (containing task chains)</p>\n"
        },
        "linenr": 774,
        "deprecated": null,
        "doc": "<p>Returns the critical path(s) that can affect the end date of the project</p>\n"
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

        ],
        "html_filename": "Gantt2.html",
        "shortDoc": "Wrapper function returning the dependency manager instance ...",
        "static": false,
        "href": "Gantt2.html#Gnt-view-Gantt-method-getDependencyView",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/view/Gantt.js",
        "private": false,
        "alias": null,
        "name": "getDependencyView",
        "owner": "Gnt.view.Gantt",
        "return": {
          "type": "Gnt.view.Dependency",
          "doc": "<p>dependencyManager The dependency manager instance</p>\n"
        },
        "linenr": 527,
        "deprecated": null,
        "doc": "<p>Wrapper function returning the dependency manager instance</p>\n"
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
        "html_filename": "Gantt2.html",
        "shortDoc": "Returns the editor defined for the left task field ...",
        "static": false,
        "href": "Gantt2.html#Gnt-view-Gantt-method-getLeftEditor",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/view/Gantt.js",
        "private": false,
        "alias": null,
        "name": "getLeftEditor",
        "owner": "Gnt.view.Gantt",
        "return": {
          "type": "Gnt.feature.LabelEditor",
          "doc": "<p>editor The editor</p>\n"
        },
        "linenr": 905,
        "deprecated": null,
        "doc": "<p>Returns the editor defined for the left task field</p>\n"
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
        "html_filename": "Gantt2.html",
        "shortDoc": "Returns the editor defined for the right task field ...",
        "static": false,
        "href": "Gantt2.html#Gnt-view-Gantt-method-getRightEditor",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/view/Gantt.js",
        "private": false,
        "alias": null,
        "name": "getRightEditor",
        "owner": "Gnt.view.Gantt",
        "return": {
          "type": "Gnt.feature.LabelEditor",
          "doc": "<p>editor The editor</p>\n"
        },
        "linenr": 913,
        "deprecated": null,
        "doc": "<p>Returns the editor defined for the right task field</p>\n"
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
        "html_filename": "Gantt2.html",
        "shortDoc": "Returns the associated task store ...",
        "static": false,
        "href": "Gantt2.html#Gnt-view-Gantt-method-getTaskStore",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/view/Gantt.js",
        "private": false,
        "alias": null,
        "name": "getTaskStore",
        "owner": "Gnt.view.Gantt",
        "return": {
          "type": "Gnt.data.TaskStore",
          "doc": "\n"
        },
        "linenr": 536,
        "deprecated": null,
        "doc": "<p>Returns the associated task store</p>\n"
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

        ],
        "html_filename": "Gantt2.html",
        "shortDoc": "Highlights the critical path(s) that can affect the end date of the project. ...",
        "static": false,
        "href": "Gantt2.html#Gnt-view-Gantt-method-highlightCriticalPaths",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/view/Gantt.js",
        "private": false,
        "alias": null,
        "name": "highlightCriticalPaths",
        "owner": "Gnt.view.Gantt",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 783,
        "deprecated": null,
        "doc": "<p>Highlights the critical path(s) that can affect the end date of the project.\nThis method will reset the selection. While the critical path is highlighted, the selection model is locked.</p>\n"
      },
      {
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "name": "record",
            "doc": "<p>Either the id of a record or a record in the dependency store</p>\n"
          }
        ],
        "html_filename": "Gantt2.html",
        "shortDoc": "Convenience method wrapping the dependency manager method which highlights the elements representing a particular dep...",
        "static": false,
        "href": "Gantt2.html#Gnt-view-Gantt-method-highlightDependency",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/view/Gantt.js",
        "private": false,
        "alias": null,
        "name": "highlightDependency",
        "owner": "Gnt.view.Gantt",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 849,
        "deprecated": null,
        "doc": "<p>Convenience method wrapping the dependency manager method which highlights the elements representing a particular dependency</p>\n"
      },
      {
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "name": "task",
            "doc": "<p>Either a task record or the id of a task</p>\n"
          },
          {
            "type": "Boolean",
            "optional": false,
            "name": "highlightDependentTasks",
            "doc": "<p><code>true</code> to highlight the depended tasks. Defaults to <code>true</code></p>\n"
          }
        ],
        "html_filename": "Gantt2.html",
        "shortDoc": "Highlights a task and optionally any dependent tasks. ...",
        "static": false,
        "href": "Gantt2.html#Gnt-view-Gantt-method-highlightTask",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/view/Gantt.js",
        "private": false,
        "alias": null,
        "name": "highlightTask",
        "owner": "Gnt.view.Gantt",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 736,
        "deprecated": null,
        "doc": "<p>Highlights a task and optionally any dependent tasks.</p>\n"
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
      },
      {
        "params": [

        ],
        "html_filename": "Gantt2.html",
        "shortDoc": "Removes the highlighting of the critical path(s) and unlocks the selection model. ...",
        "static": false,
        "href": "Gantt2.html#Gnt-view-Gantt-method-unhighlightCriticalPaths",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/view/Gantt.js",
        "private": false,
        "alias": null,
        "name": "unhighlightCriticalPaths",
        "owner": "Gnt.view.Gantt",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 816,
        "deprecated": null,
        "doc": "<p>Removes the highlighting of the critical path(s) and unlocks the selection model.</p>\n"
      },
      {
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "name": "depId",
            "doc": "<p>Either the id of a record or a record in the dependency store</p>\n"
          }
        ],
        "html_filename": "Gantt2.html",
        "shortDoc": "Convenience method wrapping the dependency manager method which unhighlights the elements representing a particular d...",
        "static": false,
        "href": "Gantt2.html#Gnt-view-Gantt-method-unhighlightDependency",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/view/Gantt.js",
        "private": false,
        "alias": null,
        "name": "unhighlightDependency",
        "owner": "Gnt.view.Gantt",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 857,
        "deprecated": null,
        "doc": "<p>Convenience method wrapping the dependency manager method which unhighlights the elements representing a particular dependency</p>\n"
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
            "type": "Gnt.view.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt view instance</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "Gantt2.html",
        "shortDoc": "Always fires after a dependency drag-drop operation ...",
        "static": false,
        "href": "Gantt2.html#Gnt-view-Gantt-event-afterdependencydragdrop",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/view/Gantt.js",
        "private": false,
        "alias": null,
        "name": "afterdependencydragdrop",
        "owner": "Gnt.view.Gantt",
        "linenr": 286,
        "deprecated": null,
        "doc": "<p>Always fires after a dependency drag-drop operation</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.view.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt view instance</p>\n"
          },
          {
            "type": "Gnt.model.Task",
            "optional": false,
            "name": "taskRecord",
            "doc": "<p>record The updated record</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "Gantt2.html",
        "shortDoc": "Fires after a succesful progress bar resize operation ...",
        "static": false,
        "href": "Gantt2.html#Gnt-view-Gantt-event-afterprogressbarresize",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/view/Gantt.js",
        "private": false,
        "alias": null,
        "name": "afterprogressbarresize",
        "owner": "Gnt.view.Gantt",
        "linenr": 187,
        "deprecated": null,
        "doc": "<p>Fires after a succesful progress bar resize operation</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.view.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt view instance</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "Gantt2.html",
        "shortDoc": "Fires after a drag and drop operation, regardless if the drop valid or invalid ...",
        "static": false,
        "href": "Gantt2.html#Gnt-view-Gantt-event-aftertaskdrop",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/view/Gantt.js",
        "private": false,
        "alias": null,
        "name": "aftertaskdrop",
        "owner": "Gnt.view.Gantt",
        "linenr": 222,
        "deprecated": null,
        "doc": "<p>Fires after a drag and drop operation, regardless if the drop valid or invalid</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.view.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt view instance</p>\n"
          },
          {
            "type": "Gnt.model.Task",
            "optional": false,
            "name": "taskRecord",
            "doc": "<p>The task that has been resized</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "Gantt2.html",
        "shortDoc": "Fires after a succesful resize operation ...",
        "static": false,
        "href": "Gantt2.html#Gnt-view-Gantt-event-aftertaskresize",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/view/Gantt.js",
        "private": false,
        "alias": null,
        "name": "aftertaskresize",
        "owner": "Gnt.view.Gantt",
        "linenr": 161,
        "deprecated": null,
        "doc": "<p>Fires after a succesful resize operation</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.view.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt view instance</p>\n"
          },
          {
            "type": "Gnt.model.Task",
            "optional": false,
            "name": "taskRecord",
            "doc": "<p>The source task record</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "Gantt2.html",
        "shortDoc": "Fires before a dependency drag operation starts (from a \"task terminal\"). ...",
        "static": false,
        "href": "Gantt2.html#Gnt-view-Gantt-event-beforedependencydrag",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/view/Gantt.js",
        "private": false,
        "alias": null,
        "name": "beforedependencydrag",
        "owner": "Gnt.view.Gantt",
        "linenr": 261,
        "deprecated": null,
        "doc": "<p>Fires before a dependency drag operation starts (from a \"task terminal\").</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.view.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt view instance</p>\n"
          },
          {
            "type": "Gnt.model.Task",
            "optional": false,
            "name": "taskRecord",
            "doc": "<p>The record about to be have its progress bar resized</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "Gantt2.html",
        "shortDoc": "Fires before a progress bar resize starts, return false to stop the execution ...",
        "static": false,
        "href": "Gantt2.html#Gnt-view-Gantt-event-beforeprogressbarresize",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/view/Gantt.js",
        "private": false,
        "alias": null,
        "name": "beforeprogressbarresize",
        "owner": "Gnt.view.Gantt",
        "linenr": 171,
        "deprecated": null,
        "doc": "<p>Fires before a progress bar resize starts, return false to stop the execution</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.view.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt view instance</p>\n"
          },
          {
            "type": "Gnt.model.Task",
            "optional": false,
            "name": "taskRecord",
            "doc": "<p>The task record that's about to be dragged</p>\n"
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
        "html_filename": "Gantt2.html",
        "shortDoc": "Fires before a task drag drop is initiated, return false to cancel it ...",
        "static": false,
        "href": "Gantt2.html#Gnt-view-Gantt-event-beforetaskdrag",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/view/Gantt.js",
        "private": false,
        "alias": null,
        "name": "beforetaskdrag",
        "owner": "Gnt.view.Gantt",
        "linenr": 197,
        "deprecated": null,
        "doc": "<p>Fires before a task drag drop is initiated, return false to cancel it</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.view.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt view instance</p>\n"
          },
          {
            "type": "Gnt.model.Task",
            "optional": false,
            "name": "taskRecord",
            "doc": "<p>The task about to be resized</p>\n"
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
        "html_filename": "Gantt2.html",
        "shortDoc": "Fires before a resize starts, return false to stop the execution ...",
        "static": false,
        "href": "Gantt2.html#Gnt-view-Gantt-event-beforetaskresize",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/view/Gantt.js",
        "private": false,
        "alias": null,
        "name": "beforetaskresize",
        "owner": "Gnt.view.Gantt",
        "linenr": 130,
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
            "type": "Gnt.view.Gantt",
            "optional": false,
            "name": "g",
            "doc": "<p>The gantt view instance</p>\n"
          },
          {
            "type": "Gnt.model.Dependency",
            "optional": false,
            "name": "record",
            "doc": "<p>The dependency record</p>\n"
          },
          {
            "type": "Ext.EvenObject",
            "optional": false,
            "name": "event",
            "doc": "<p>The event object</p>\n"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "name": "target",
            "doc": "<p>The target of this event</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "Gantt2.html",
        "shortDoc": "Fires after double clicking on a dependency line/arrow ...",
        "static": false,
        "href": "Gantt2.html#Gnt-view-Gantt-event-dependencydblclick",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/view/Gantt.js",
        "private": false,
        "alias": null,
        "name": "dependencydblclick",
        "owner": "Gnt.view.Gantt",
        "linenr": 569,
        "deprecated": null,
        "doc": "<p>Fires after double clicking on a dependency line/arrow</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.view.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt view instance</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "Gantt2.html",
        "shortDoc": "Fires when a dependency drag operation starts ...",
        "static": false,
        "href": "Gantt2.html#Gnt-view-Gantt-event-dependencydragstart",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/view/Gantt.js",
        "private": false,
        "alias": null,
        "name": "dependencydragstart",
        "owner": "Gnt.view.Gantt",
        "linenr": 269,
        "deprecated": null,
        "doc": "<p>Fires when a dependency drag operation starts</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.view.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt view instance</p>\n"
          },
          {
            "type": "Gnt.model.Task",
            "optional": false,
            "name": "fromRecord",
            "doc": "<p>The source task record</p>\n"
          },
          {
            "type": "Gnt.model.Task",
            "optional": false,
            "name": "toRecord",
            "doc": "<p>The destination task record</p>\n"
          },
          {
            "type": "Int",
            "optional": false,
            "name": "type",
            "doc": "<p>The dependency type</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "Gantt2.html",
        "shortDoc": "Fires when a dependency drag drop operation has completed successfully and a new dependency has been created. ...",
        "static": false,
        "href": "Gantt2.html#Gnt-view-Gantt-event-dependencydrop",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/view/Gantt.js",
        "private": false,
        "alias": null,
        "name": "dependencydrop",
        "owner": "Gnt.view.Gantt",
        "linenr": 276,
        "deprecated": null,
        "doc": "<p>Fires when a dependency drag drop operation has completed successfully and a new dependency has been created.</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.view.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt view instance</p>\n"
          },
          {
            "type": "Mixed",
            "optional": false,
            "name": "value",
            "doc": "<p>The current field value</p>\n"
          },
          {
            "type": "Mixed",
            "optional": false,
            "name": "startValue",
            "doc": "<p>The original field value</p>\n"
          },
          {
            "type": "Gnt.model.Task",
            "optional": false,
            "name": "taskRecord",
            "doc": "<p>The affected record</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "Gantt2.html",
        "shortDoc": "Fires after a change has been made to a label field, but before the change is reflected in the underlying field. ...",
        "static": false,
        "href": "Gantt2.html#Gnt-view-Gantt-event-labeledit_beforecomplete",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/view/Gantt.js",
        "private": false,
        "alias": null,
        "name": "labeledit_beforecomplete",
        "owner": "Gnt.view.Gantt",
        "linenr": 239,
        "deprecated": null,
        "doc": "<p>Fires after a change has been made to a label field, but before the change is reflected in the underlying field.</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.view.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt view instance</p>\n"
          },
          {
            "type": "Gnt.model.Task",
            "optional": false,
            "name": "taskRecord",
            "doc": "<p>The task record</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "Gantt2.html",
        "shortDoc": "Fires before editing is started for a field ...",
        "static": false,
        "href": "Gantt2.html#Gnt-view-Gantt-event-labeledit_beforestartedit",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/view/Gantt.js",
        "private": false,
        "alias": null,
        "name": "labeledit_beforestartedit",
        "owner": "Gnt.view.Gantt",
        "linenr": 231,
        "deprecated": null,
        "doc": "<p>Fires before editing is started for a field</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.view.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt view instance</p>\n"
          },
          {
            "type": "Mixed",
            "optional": false,
            "name": "value",
            "doc": "<p>The current field value</p>\n"
          },
          {
            "type": "Mixed",
            "optional": false,
            "name": "startValue",
            "doc": "<p>The original field value</p>\n"
          },
          {
            "type": "Gnt.model.Task",
            "optional": false,
            "name": "taskRecord",
            "doc": "<p>The affected record</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "Gantt2.html",
        "shortDoc": "Fires after editing is complete and any changed value has been written to the underlying field. ...",
        "static": false,
        "href": "Gantt2.html#Gnt-view-Gantt-event-labeledit_complete",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/view/Gantt.js",
        "private": false,
        "alias": null,
        "name": "labeledit_complete",
        "owner": "Gnt.view.Gantt",
        "linenr": 249,
        "deprecated": null,
        "doc": "<p>Fires after editing is complete and any changed value has been written to the underlying field.</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.view.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt view instance</p>\n"
          },
          {
            "type": "Gnt.model.Task",
            "optional": false,
            "name": "taskRecord",
            "doc": "<p>The task being resized</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "startDate",
            "doc": "<p>The start date of the task</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "endDate",
            "doc": "<p>The end date of the task</p>\n"
          },
          {
            "type": "Ext.Element",
            "optional": false,
            "name": "The",
            "doc": "<p>element being resized</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "Gantt2.html",
        "shortDoc": "Fires during a resize operation and provides information about the current start and end of the resized event ...",
        "static": false,
        "href": "Gantt2.html#Gnt-view-Gantt-event-partialtaskresize",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/view/Gantt.js",
        "private": false,
        "alias": null,
        "name": "partialtaskresize",
        "owner": "Gnt.view.Gantt",
        "linenr": 149,
        "deprecated": null,
        "doc": "<p>Fires during a resize operation and provides information about the current start and end of the resized event</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.view.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt view instance</p>\n"
          },
          {
            "type": "Gnt.model.Task",
            "optional": false,
            "name": "taskRecord",
            "doc": "<p>The record about to be have its progress bar resized</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "Gantt2.html",
        "shortDoc": "Fires when a progress bar resize starts ...",
        "static": false,
        "href": "Gantt2.html#Gnt-view-Gantt-event-progressbarresizestart",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/view/Gantt.js",
        "private": false,
        "alias": null,
        "name": "progressbarresizestart",
        "owner": "Gnt.view.Gantt",
        "linenr": 179,
        "deprecated": null,
        "doc": "<p>Fires when a progress bar resize starts</p>\n"
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
      },
      {
        "params": [
          {
            "type": "Gnt.view.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt view instance</p>\n"
          },
          {
            "type": "Gnt.model.Task",
            "optional": false,
            "name": "taskRecord",
            "doc": "<p>The task record</p>\n"
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
        "html_filename": "Gantt2.html",
        "shortDoc": "Fires when a task is clicked ...",
        "static": false,
        "href": "Gantt2.html#Gnt-view-Gantt-event-taskclick",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/view/Gantt.js",
        "private": false,
        "alias": null,
        "name": "taskclick",
        "owner": "Gnt.view.Gantt",
        "linenr": 98,
        "deprecated": null,
        "doc": "<p>Fires when a task is clicked</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.view.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt view instance</p>\n"
          },
          {
            "type": "Gnt.model.Task",
            "optional": false,
            "name": "taskRecord",
            "doc": "<p>The task record</p>\n"
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
        "html_filename": "Gantt2.html",
        "shortDoc": "Fires when contextmenu is activated on a task ...",
        "static": false,
        "href": "Gantt2.html#Gnt-view-Gantt-event-taskcontextmenu",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/view/Gantt.js",
        "private": false,
        "alias": null,
        "name": "taskcontextmenu",
        "owner": "Gnt.view.Gantt",
        "linenr": 118,
        "deprecated": null,
        "doc": "<p>Fires when contextmenu is activated on a task</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.view.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt view instance</p>\n"
          },
          {
            "type": "Gnt.model.Task",
            "optional": false,
            "name": "taskRecord",
            "doc": "<p>The task record</p>\n"
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
        "html_filename": "Gantt2.html",
        "shortDoc": "Fires when a task is double clicked ...",
        "static": false,
        "href": "Gantt2.html#Gnt-view-Gantt-event-taskdblclick",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/view/Gantt.js",
        "private": false,
        "alias": null,
        "name": "taskdblclick",
        "owner": "Gnt.view.Gantt",
        "linenr": 108,
        "deprecated": null,
        "doc": "<p>Fires when a task is double clicked</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.view.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt view instance</p>\n"
          },
          {
            "type": "Gnt.model.Task",
            "optional": false,
            "name": "taskRecord",
            "doc": "<p>The record being dragged</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "Gantt2.html",
        "shortDoc": "Fires when a dnd operation starts ...",
        "static": false,
        "href": "Gantt2.html#Gnt-view-Gantt-event-taskdragstart",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/view/Gantt.js",
        "private": false,
        "alias": null,
        "name": "taskdragstart",
        "owner": "Gnt.view.Gantt",
        "linenr": 206,
        "deprecated": null,
        "doc": "<p>Fires when a dnd operation starts</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.view.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt view instance</p>\n"
          },
          {
            "type": "Gnt.model.Task",
            "optional": false,
            "name": "taskRecord",
            "doc": "<p>The dropped record</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "Gantt2.html",
        "shortDoc": "Fires after a succesful drag and drop operation ...",
        "static": false,
        "href": "Gantt2.html#Gnt-view-Gantt-event-taskdrop",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/view/Gantt.js",
        "private": false,
        "alias": null,
        "name": "taskdrop",
        "owner": "Gnt.view.Gantt",
        "linenr": 214,
        "deprecated": null,
        "doc": "<p>Fires after a succesful drag and drop operation</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.view.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt view instance</p>\n"
          },
          {
            "type": "Gnt.model.Task",
            "optional": false,
            "name": "taskRecord",
            "doc": "<p>The task about to be resized</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "Gantt2.html",
        "shortDoc": "Fires when resize starts ...",
        "static": false,
        "href": "Gantt2.html#Gnt-view-Gantt-event-taskresizestart",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/view/Gantt.js",
        "private": false,
        "alias": null,
        "name": "taskresizestart",
        "owner": "Gnt.view.Gantt",
        "linenr": 140,
        "deprecated": null,
        "doc": "<p>Fires when resize starts</p>\n"
      }
    ]
  },
  "mixins": [

  ],
  "static": false,
  "href": "Gantt2.html#Gnt-view-Gantt",
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
  "filename": "js//Gnt/view/Gantt.js",
  "private": false,
  "xtypes": [
    "ganttview"
  ],
  "alias": null,
  "name": "Gnt.view.Gantt",
  "extends": "Sch.view.TimelineTreeView",
  "author": null,
  "allMixins": [
    "Sch.mixin.TimelineView"
  ],
  "linenr": 9,
  "deprecated": null,
  "doc": "<p>A view of the gantt panel.</p>\n"
});