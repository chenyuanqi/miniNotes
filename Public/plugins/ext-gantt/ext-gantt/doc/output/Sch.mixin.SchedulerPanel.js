Ext.data.JsonP.Sch_mixin_SchedulerPanel({
  "subclasses": [

  ],
  "html_filename": "SchedulerPanel.html",
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
            "name": "eventRecord",
            "doc": "<p>The event about to be rendered</p>\n"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "name": "resourceRecord",
            "doc": "<p>The resource row in which the event is being created</p>\n"
          },
          {
            "type": "Object",
            "optional": false,
            "name": "tplData",
            "doc": "<p>An object that will be applied to the containing <a href=\"#/api/Sch.mixin.SchedulerPanel-cfg-eventTpl\" rel=\"Sch.mixin.SchedulerPanel-cfg-eventTpl\" class=\"docClass\">eventTpl</a>.</p>\n"
          },
          {
            "type": "Int",
            "optional": false,
            "name": "row",
            "doc": "<p>The row index</p>\n"
          },
          {
            "type": "Int",
            "optional": false,
            "name": "col",
            "doc": "<p>The column index</p>\n"
          },
          {
            "type": "Ext.data.Store",
            "optional": false,
            "name": "ds",
            "doc": "<p>The resource store</p>\n"
          }
        ],
        "html_filename": "SchedulerPanel.html",
        "shortDoc": "An empty function by default, but provided so that you can override it. ...",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-method-eventRenderer",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "eventRenderer",
        "owner": "Sch.mixin.SchedulerPanel",
        "return": {
          "type": "String/Object",
          "doc": "<p>A simple string, or a custom object which will be applied to the <a href=\"#/api/Sch.mixin.SchedulerPanel-cfg-eventBodyTemplate\" rel=\"Sch.mixin.SchedulerPanel-cfg-eventBodyTemplate\" class=\"docClass\">eventBodyTemplate</a>, creating the actual HTML</p>\n"
        },
        "linenr": 86,
        "deprecated": null,
        "doc": "<p>An empty function by default, but provided so that you can override it. This function is called each time an event\nis rendered into the schedule to render the contents of the event.\nBy default, the eventTpl includes placeholders for 'cls', 'style', and 'text'. The cls property is a CSS class which will be added to the\nevent element. The style property is an inline style declaration for the event element.\nThe text property will be rendered inside the bar. If you override the default eventTpl, you can of course\ninclude other placeholder in your template markup. Note: You will still need to keep the original built-in placeholders for the scheduler to work.</p>\n\n<pre> eventRenderer : function (eventRec, resourceRec, templateData) {\n     templateData.style = 'color:white';                 // You can use inline styles too.\n     templateData.cls = resourceRec.get('Category');     // Read a property from the resource record, used as a CSS class to style the event\n     return eventRec.get('StartDate').format('Y-m-d') + ': ' + eventRec.get('Name');\n }\n</pre>\n\n"
      },
      {
        "params": [

        ],
        "html_filename": "SchedulerPanel.html",
        "shortDoc": "Returns the selection model being used and creates it via the configuration\nif it has not been created already. ...",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-method-getEventSelectionModel",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "getEventSelectionModel",
        "owner": "Sch.mixin.SchedulerPanel",
        "return": {
          "type": "Ext.selection.Model",
          "doc": "<p>selModel</p>\n"
        },
        "linenr": 343,
        "deprecated": null,
        "doc": "<p>Returns the selection model being used and creates it via the configuration\nif it has not been created already.</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "SchedulerPanel.html",
        "shortDoc": "Returns the instance of accociated event store ...",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-method-getEventStore",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "getEventStore",
        "owner": "Sch.mixin.SchedulerPanel",
        "return": {
          "type": "Ext.data.Store",
          "doc": "\n"
        },
        "linenr": 335,
        "deprecated": null,
        "doc": "<p>Returns the instance of accociated event store</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "SchedulerPanel.html",
        "shortDoc": "Returns the instance of accociated resource store ...",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-method-getResourceStore",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "getResourceStore",
        "owner": "Sch.mixin.SchedulerPanel",
        "return": {
          "type": "Ext.data.Store",
          "doc": "\n"
        },
        "linenr": 326,
        "deprecated": null,
        "doc": "<p>Returns the instance of accociated resource store</p>\n"
      },
      {
        "params": [
          {
            "type": "String",
            "optional": false,
            "name": "orientation",
            "doc": "<p>Either \"horizontal\" or \"vertical\"</p>\n"
          }
        ],
        "html_filename": "SchedulerPanel.html",
        "shortDoc": "Switch the orientation of this panel ...",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-method-setOrientation",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "setOrientation",
        "owner": "Sch.mixin.SchedulerPanel",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 425,
        "deprecated": null,
        "doc": "<p>Switch the orientation of this panel</p>\n"
      }
    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "cfg": [
      {
        "type": "Boolean",
        "html_filename": "SchedulerPanel.html",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-cfg-allowOverlap",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "allowOverlap",
        "owner": "Sch.mixin.SchedulerPanel",
        "linenr": 66,
        "deprecated": null,
        "doc": "<p>Set to false if you don't want to allow events overlapping (defaults to true).</p>\n"
      },
      {
        "type": "Object",
        "html_filename": "SchedulerPanel.html",
        "shortDoc": "Custom config to pass to the Sch.feature.DragCreator instance Custom config to pass to the Sch.Resize instance Custom...",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-cfg-createConfig",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "createConfig",
        "owner": "Sch.mixin.SchedulerPanel",
        "linenr": 135,
        "deprecated": null,
        "doc": "<p>Custom config to pass to the Sch.feature.DragCreator instance Custom config to pass to the Sch.Resize instance Custom config to pass to the Sch.SchedulerDragZone instance Custom config to pass to the Sch.SchedulerDropZone instance</p>\n"
      },
      {
        "type": "Boolean",
        "html_filename": "SchedulerPanel.html",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-cfg-enableDragCreation",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "enableDragCreation",
        "owner": "Sch.mixin.SchedulerPanel",
        "linenr": 55,
        "deprecated": null,
        "doc": "<p>true to enable creating new events by click and drag, defaults to true</p>\n"
      },
      {
        "type": "Boolean",
        "html_filename": "SchedulerPanel.html",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-cfg-enableEventDragDrop",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "enableEventDragDrop",
        "owner": "Sch.mixin.SchedulerPanel",
        "linenr": 50,
        "deprecated": null,
        "doc": "<p>true to enable drag and drop of events, defaults to true</p>\n"
      },
      {
        "type": "Int",
        "html_filename": "SchedulerPanel.html",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-cfg-endParamName",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "endParamName",
        "owner": "Sch.mixin.SchedulerPanel",
        "linenr": 76,
        "deprecated": null,
        "doc": "<p>The name of the end date parameter that will be passed to in every <code>eventStore</code> load request.</p>\n"
      },
      {
        "type": "String",
        "html_filename": "SchedulerPanel.html",
        "shortDoc": "The field in your data model that will be rendered into each event bar. ...",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-cfg-eventBarTextField",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "eventBarTextField",
        "owner": "Sch.mixin.SchedulerPanel",
        "linenr": 60,
        "deprecated": null,
        "doc": "<p>The field in your data model that will be rendered into each event bar.\nYou can alternatively use the eventBarRenderer to get full control over what gets displayed.</p>\n"
      },
      {
        "type": "Ext.Template",
        "html_filename": "SchedulerPanel.html",
        "shortDoc": "The template used to generate the markup of your events in the scheduler. ...",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-cfg-eventBodyTemplate",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "eventBodyTemplate",
        "owner": "Sch.mixin.SchedulerPanel",
        "linenr": 129,
        "deprecated": null,
        "doc": "<p>The template used to generate the markup of your events in the scheduler. To 'populate' the eventBodyTemplate with data, use the eventRenderer method</p>\n"
      },
      {
        "type": "Object",
        "html_filename": "SchedulerPanel.html",
        "shortDoc": "The configuration object for the event selection model. ...",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-cfg-eventSelModel",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "eventSelModel",
        "owner": "Sch.mixin.SchedulerPanel",
        "linenr": 45,
        "deprecated": null,
        "doc": "<p>The configuration object for the event selection model. See <a href=\"#/api/Sch.selection.EventModel\" rel=\"Sch.selection.EventModel\" class=\"docClass\">Sch.selection.EventModel</a> for available configuration options.</p>\n"
      },
      {
        "type": "String",
        "html_filename": "SchedulerPanel.html",
        "shortDoc": "The xtype of the selection model to be used to events. ...",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-cfg-eventSelModelType",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "eventSelModelType",
        "owner": "Sch.mixin.SchedulerPanel",
        "linenr": 40,
        "deprecated": null,
        "doc": "<p>The xtype of the selection model to be used to events. Should be a <a href=\"#/api/Sch.selection.EventModel\" rel=\"Sch.selection.EventModel\" class=\"docClass\">Sch.selection.EventModel</a> or its subclass.</p>\n"
      },
      {
        "type": "Ext.data.Store",
        "html_filename": "SchedulerPanel.html",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-cfg-eventStore",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "eventStore",
        "owner": "Sch.mixin.SchedulerPanel",
        "linenr": 112,
        "deprecated": null,
        "doc": "<p>The Ext.data.Store holding the events to be rendered into the scheduler (required).</p>\n"
      },
      {
        "type": "Ext.Template",
        "html_filename": "SchedulerPanel.html",
        "shortDoc": "The wrapping template used to renderer your events in the scheduler. ...",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-cfg-eventTpl",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "eventTpl",
        "owner": "Sch.mixin.SchedulerPanel",
        "linenr": 123,
        "deprecated": null,
        "doc": "<p>The wrapping template used to renderer your events in the scheduler. Normally you should now override this,\nonly do so if you need total control of how the events are rendered/styled. See the eventBodyTemplate for more information.</p>\n"
      },
      {
        "type": "Boolean",
        "html_filename": "SchedulerPanel.html",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-cfg-passStartEndParameters",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "passStartEndParameters",
        "owner": "Sch.mixin.SchedulerPanel",
        "linenr": 81,
        "deprecated": null,
        "doc": "<p>true to apply start and end dates of the current view to any <code>eventStore</code> load requests.</p>\n"
      },
      {
        "type": "Ext.data.Store",
        "html_filename": "SchedulerPanel.html",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-cfg-resourceStore",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "resourceStore",
        "owner": "Sch.mixin.SchedulerPanel",
        "linenr": 117,
        "deprecated": null,
        "doc": "<p>The Ext.data.Store holding the resources to be rendered into the scheduler (required).</p>\n"
      },
      {
        "type": "Int",
        "html_filename": "SchedulerPanel.html",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-cfg-startParamName",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "startParamName",
        "owner": "Sch.mixin.SchedulerPanel",
        "linenr": 71,
        "deprecated": null,
        "doc": "<p>The name of the start date parameter that will be passed to in every <code>eventStore</code> load request.</p>\n"
      }
    ],
    "event": [
      {
        "params": [
          {
            "type": "SchedulerPanel",
            "optional": false,
            "name": "scheduler",
            "doc": "<p>The scheduler object</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "SchedulerPanel.html",
        "shortDoc": "Always fires after a drag-create operation ...",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-event-afterdragcreate",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "afterdragcreate",
        "owner": "Sch.mixin.SchedulerPanel",
        "linenr": 307,
        "deprecated": null,
        "doc": "<p>Always fires after a drag-create operation</p>\n"
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
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "SchedulerPanel.html",
        "shortDoc": "Fires when after a drag n drop operation, even when drop was performed on an invalid location ...",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-event-aftereventdrop",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "aftereventdrop",
        "owner": "Sch.mixin.SchedulerPanel",
        "linenr": 272,
        "deprecated": null,
        "doc": "<p>Fires when after a drag n drop operation, even when drop was performed on an invalid location</p>\n"
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
            "type": "Ext.data.Model",
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
        "html_filename": "SchedulerPanel.html",
        "shortDoc": "Fires before a drag starts, return false to stop the execution ...",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-event-beforedragcreate",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "beforedragcreate",
        "owner": "Sch.mixin.SchedulerPanel",
        "linenr": 281,
        "deprecated": null,
        "doc": "<p>Fires before a drag starts, return false to stop the execution</p>\n"
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
            "type": "Ext.data.Model",
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
        "html_filename": "SchedulerPanel.html",
        "shortDoc": "Fires after a successful drag-create operation, before the new event is added to the store. ...",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-event-beforeeventadd",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "beforeeventadd",
        "owner": "Sch.mixin.SchedulerPanel",
        "linenr": 315,
        "deprecated": null,
        "doc": "<p>Fires after a successful drag-create operation, before the new event is added to the store. Return false to prevent the event from being added to the store.</p>\n"
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
            "type": "Ext.data.Model",
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
        "html_filename": "SchedulerPanel.html",
        "shortDoc": "Fires before a dnd operation is initiated, return false to cancel it ...",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-event-beforeeventdrag",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "beforeeventdrag",
        "owner": "Sch.mixin.SchedulerPanel",
        "linenr": 246,
        "deprecated": null,
        "doc": "<p>Fires before a dnd operation is initiated, return false to cancel it</p>\n"
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
            "type": "Ext.data.Model",
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
        "html_filename": "SchedulerPanel.html",
        "shortDoc": "Fires before a resize starts, return false to stop the execution ...",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-event-beforeeventresize",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "beforeeventresize",
        "owner": "Sch.mixin.SchedulerPanel",
        "linenr": 208,
        "deprecated": null,
        "doc": "<p>Fires before a resize starts, return false to stop the execution</p>\n"
      },
      {
        "params": [
          {
            "type": "Sch.selection.EventModel",
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "name": "record",
            "doc": "<p>The deselected event</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "SchedulerPanel.html",
        "shortDoc": "Fired after a record is deselected ...",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-event-deselect",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "deselect",
        "owner": "Sch.mixin.SchedulerPanel",
        "linenr": 387,
        "deprecated": null,
        "doc": "<p>Fired after a record is deselected</p>\n"
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
            "type": "Ext.data.Model",
            "optional": false,
            "name": "newEventRecord",
            "doc": "<p>The newly created event record (added to the store in onEventCreated method)</p>\n"
          },
          {
            "type": "Ext.data.Model",
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
        "html_filename": "SchedulerPanel.html",
        "shortDoc": "Fires after a successful drag-create operation ...",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-event-dragcreateend",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "dragcreateend",
        "owner": "Sch.mixin.SchedulerPanel",
        "linenr": 297,
        "deprecated": null,
        "doc": "<p>Fires after a successful drag-create operation</p>\n"
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
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "SchedulerPanel.html",
        "shortDoc": "Fires before a drag starts, return false to stop the execution ...",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-event-dragcreatestart",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "dragcreatestart",
        "owner": "Sch.mixin.SchedulerPanel",
        "linenr": 290,
        "deprecated": null,
        "doc": "<p>Fires before a drag starts, return false to stop the execution</p>\n"
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
        "html_filename": "SchedulerPanel.html",
        "shortDoc": "Fires when an event is clicked ...",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-event-eventclick",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "eventclick",
        "owner": "Sch.mixin.SchedulerPanel",
        "linenr": 180,
        "deprecated": null,
        "doc": "<p>Fires when an event is clicked</p>\n"
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
        "html_filename": "SchedulerPanel.html",
        "shortDoc": "Fires when contextmenu is activated on an event ...",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-event-eventcontextmenu",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "eventcontextmenu",
        "owner": "Sch.mixin.SchedulerPanel",
        "linenr": 198,
        "deprecated": null,
        "doc": "<p>Fires when contextmenu is activated on an event</p>\n"
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
        "html_filename": "SchedulerPanel.html",
        "shortDoc": "Fires when an event is double clicked ...",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-event-eventdblclick",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "eventdblclick",
        "owner": "Sch.mixin.SchedulerPanel",
        "linenr": 189,
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
        "html_filename": "SchedulerPanel.html",
        "shortDoc": "Fires when a dnd operation starts ...",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-event-eventdragstart",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "eventdragstart",
        "owner": "Sch.mixin.SchedulerPanel",
        "linenr": 255,
        "deprecated": null,
        "doc": "<p>Fires when a dnd operation starts</p>\n"
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
        "html_filename": "SchedulerPanel.html",
        "shortDoc": "Fires after a succesful drag and drop operation ...",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-event-eventdrop",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "eventdrop",
        "owner": "Sch.mixin.SchedulerPanel",
        "linenr": 263,
        "deprecated": null,
        "doc": "<p>Fires after a succesful drag and drop operation</p>\n"
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
            "type": "Ext.data.Model",
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
        "html_filename": "SchedulerPanel.html",
        "shortDoc": "Fires during a resize operation and provides information about the current start and end of the resized event ...",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-event-eventpartialresize",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "eventpartialresize",
        "owner": "Sch.mixin.SchedulerPanel",
        "linenr": 225,
        "deprecated": null,
        "doc": "<p>Fires during a resize operation and provides information about the current start and end of the resized event</p>\n"
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
            "type": "Ext.data.Model",
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
        "html_filename": "SchedulerPanel.html",
        "shortDoc": "Fires after a succesful resize operation ...",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-event-eventresizeend",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "eventresizeend",
        "owner": "Sch.mixin.SchedulerPanel",
        "linenr": 236,
        "deprecated": null,
        "doc": "<p>Fires after a succesful resize operation</p>\n"
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
            "type": "Ext.data.Model",
            "optional": false,
            "name": "el",
            "doc": "<p>The record corresponding to  element corresponding about to be resized</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "SchedulerPanel.html",
        "shortDoc": "Fires when resize starts ...",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-event-eventresizestart",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "eventresizestart",
        "owner": "Sch.mixin.SchedulerPanel",
        "linenr": 217,
        "deprecated": null,
        "doc": "<p>Fires when resize starts</p>\n"
      },
      {
        "params": [
          {
            "type": "Sch.selection.EventModel",
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "name": "record",
            "doc": "<p>The selected event</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "SchedulerPanel.html",
        "shortDoc": "Fired after a record is selected ...",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-event-select",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "select",
        "owner": "Sch.mixin.SchedulerPanel",
        "linenr": 395,
        "deprecated": null,
        "doc": "<p>Fired after a record is selected</p>\n"
      },
      {
        "params": [
          {
            "type": "Sch.selection.EventModel",
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "[Ext.data.Model]",
            "optional": false,
            "name": "selected",
            "doc": "<p>The selected events</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "SchedulerPanel.html",
        "shortDoc": "Fired after a selection change has occurred ...",
        "static": false,
        "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel-event-selectionchange",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
        "private": false,
        "alias": null,
        "name": "selectionchange",
        "owner": "Sch.mixin.SchedulerPanel",
        "linenr": 379,
        "deprecated": null,
        "doc": "<p>Fired after a selection change has occurred</p>\n"
      }
    ]
  },
  "mixins": [

  ],
  "static": false,
  "href": "SchedulerPanel.html#Sch-mixin-SchedulerPanel",
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
    "Sch.panel.SchedulerTree",
    "Sch.panel.SchedulerGrid"
  ],
  "filename": "../ExtScheduler2.x/js/Sch/mixin/SchedulerPanel.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Sch.mixin.SchedulerPanel",
  "extends": "Ext.Base",
  "author": null,
  "allMixins": [

  ],
  "linenr": 10,
  "deprecated": null,
  "doc": "<p>A mixin for Ext.panel.Panel classes, providing \"scheduling\" functionality to the consuming panel.\nA consuming class should have already consumed the <a href=\"#/api/Sch.mixin.TimelinePanel\" rel=\"Sch.mixin.TimelinePanel\" class=\"docClass\">Sch.mixin.TimelinePanel</a> mixin.</p>\n\n<p>Generally, should not be used directly, if you need to subclass the scheduler panel, subclass the <a href=\"#/api/Sch.panel.SchedulerGrid\" rel=\"Sch.panel.SchedulerGrid\" class=\"docClass\">Sch.panel.SchedulerGrid</a> or <a href=\"#/api/Sch.panel.SchedulerTree\" rel=\"Sch.panel.SchedulerTree\" class=\"docClass\">Sch.panel.SchedulerTree</a>\ninstead.</p>\n"
});