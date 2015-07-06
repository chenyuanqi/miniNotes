Ext.data.JsonP.Sch_mixin_SchedulerView({
  "subclasses": [

  ],
  "html_filename": "SchedulerView.html",
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
      }
    ]
  },
  "mixins": [

  ],
  "static": false,
  "href": "SchedulerView.html#Sch-mixin-SchedulerView",
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
    "Sch.view.SchedulerGridView",
    "Sch.view.SchedulerTreeView"
  ],
  "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerView.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Sch.mixin.SchedulerView",
  "extends": "Ext.Base",
  "author": null,
  "allMixins": [

  ],
  "linenr": 11,
  "deprecated": null,
  "doc": "<p>A mixin for Ext.view.View classes, providing \"scheduling\" functionality to the consuming view. A consuming class\nshould have already consumed the <a href=\"#/api/Sch.mixin.TimelineView\" rel=\"Sch.mixin.TimelineView\" class=\"docClass\">Sch.mixin.TimelineView</a> mixin.</p>\n\n<p>Generally, should not be used directly, if you need to subclass the view, subclass the <a href=\"#/api/Sch.view.SchedulerGridView\" rel=\"Sch.view.SchedulerGridView\" class=\"docClass\">Sch.view.SchedulerGridView</a> or <a href=\"#/api/Sch.view.SchedulerTreeView\" rel=\"Sch.view.SchedulerTreeView\" class=\"docClass\">Sch.view.SchedulerTreeView</a>\ninstead.</p>\n"
});