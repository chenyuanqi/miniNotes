Ext.data.JsonP.Sch_panel_SchedulerGrid({
  "subclasses": [

  ],
  "html_filename": "SchedulerGrid.html",
  "docauthor": null,
  "singleton": false,
  "code_type": "assignment",
  "superclasses": [
    "Sch.panel.TimelineGridPanel"
  ],
  "members": {
    "property": [
      {
        "type": "Object",
        "html_filename": "TimelinePanel.html",
        "shortDoc": "An empty function by default, but provided so that you can manipulate the html cells that make up the schedule. ...",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-property-timeCellRenderer",
        "protected": false,
        "inheritable": false,
        "tagname": "property",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "timeCellRenderer",
        "owner": "Sch.mixin.TimelinePanel",
        "linenr": 465,
        "deprecated": null,
        "doc": "<p>An empty function by default, but provided so that you can manipulate the html cells that make up the schedule.\nThis is called once for each cell, just like a normal GridPanel renderer though returning values from it has no effect.</p>\n"
      },
      {
        "type": "Object",
        "html_filename": "TimelinePanel.html",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-property-timeCellRendererScope",
        "protected": false,
        "inheritable": false,
        "tagname": "property",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "timeCellRendererScope",
        "owner": "Sch.mixin.TimelinePanel",
        "linenr": 478,
        "deprecated": null,
        "doc": "<p>An scope for <code>timeCellRenderer</code> function</p>\n"
      }
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
            "doc": "<p>An object that will be applied to the containing <a href=\"#/api/Sch.panel.SchedulerGrid-cfg-eventTpl\" rel=\"Sch.panel.SchedulerGrid-cfg-eventTpl\" class=\"docClass\">eventTpl</a>.</p>\n"
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
          "doc": "<p>A simple string, or a custom object which will be applied to the <a href=\"#/api/Sch.panel.SchedulerGrid-cfg-eventBodyTemplate\" rel=\"Sch.panel.SchedulerGrid-cfg-eventBodyTemplate\" class=\"docClass\">eventBodyTemplate</a>, creating the actual HTML</p>\n"
        },
        "linenr": 86,
        "deprecated": null,
        "doc": "<p>An empty function by default, but provided so that you can override it. This function is called each time an event\nis rendered into the schedule to render the contents of the event.\nBy default, the eventTpl includes placeholders for 'cls', 'style', and 'text'. The cls property is a CSS class which will be added to the\nevent element. The style property is an inline style declaration for the event element.\nThe text property will be rendered inside the bar. If you override the default eventTpl, you can of course\ninclude other placeholder in your template markup. Note: You will still need to keep the original built-in placeholders for the scheduler to work.</p>\n\n<pre> eventRenderer : function (eventRec, resourceRec, templateData) {\n     templateData.style = 'color:white';                 // You can use inline styles too.\n     templateData.cls = resourceRec.get('Category');     // Read a property from the resource record, used as a CSS class to style the event\n     return eventRec.get('StartDate').format('Y-m-d') + ': ' + eventRec.get('Name');\n }\n</pre>\n\n"
      },
      {
        "params": [

        ],
        "html_filename": "TimelinePanel.html",
        "shortDoc": "Method to get a the current end date of the scheduler view ...",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-method-getEnd",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "getEnd",
        "owner": "Sch.mixin.TimelinePanel",
        "return": {
          "type": "Date",
          "doc": "<p>The end date</p>\n"
        },
        "linenr": 358,
        "deprecated": null,
        "doc": "<p>Method to get a the current end date of the scheduler view</p>\n"
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

        ],
        "html_filename": "TimelinePanel.html",
        "shortDoc": "Returns the view of the scheduler part with time columns. ...",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-method-getSchedulingView",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "getSchedulingView",
        "owner": "Sch.mixin.TimelinePanel",
        "return": {
          "type": "Sch.mixin.SchedulerView",
          "doc": "<p>view A view implementing the <a href=\"#/api/Sch.mixin.SchedulerView\" rel=\"Sch.mixin.SchedulerView\" class=\"docClass\">Sch.mixin.SchedulerView</a> mixin</p>\n"
        },
        "linenr": 455,
        "deprecated": null,
        "doc": "<p>Returns the view of the scheduler part with time columns. This method should be used instead of usual <code>getView</code>,\nbecause <code>getView</code> will return an instance of special \"locking\" view, which has no any scheduler-specific features.</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "TimelinePanel.html",
        "shortDoc": "Method to get a the current start date of the scheduler view ...",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-method-getStart",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "getStart",
        "owner": "Sch.mixin.TimelinePanel",
        "return": {
          "type": "Date",
          "doc": "<p>The start date</p>\n"
        },
        "linenr": 350,
        "deprecated": null,
        "doc": "<p>Method to get a the current start date of the scheduler view</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "TimelinePanel.html",
        "shortDoc": "Returns the Sch.data.TimeAxis instance in use. ...",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-method-getTimeAxis",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "getTimeAxis",
        "owner": "Sch.mixin.TimelinePanel",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 429,
        "deprecated": null,
        "doc": "<p>Returns the <a href=\"#/api/Sch.data.TimeAxis\" rel=\"Sch.data.TimeAxis\" class=\"docClass\">Sch.data.TimeAxis</a> instance in use.</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "TimelinePanel.html",
        "shortDoc": "Convenience method to go to current date. ...",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-method-goToNow",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "goToNow",
        "owner": "Sch.mixin.TimelinePanel",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 395,
        "deprecated": null,
        "doc": "<p>Convenience method to go to current date.</p>\n"
      },
      {
        "params": [
          {
            "type": "Date",
            "optional": false,
            "name": "date",
            "doc": "<p>The date to which to scroll the time line</p>\n"
          }
        ],
        "html_filename": "TimelinePanel.html",
        "shortDoc": "Scrolls the time line to the specified date. ...",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-method-scrollToDate",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "scrollToDate",
        "owner": "Sch.mixin.TimelinePanel",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 442,
        "deprecated": null,
        "doc": "<p>Scrolls the time line to the specified <code>date</code>. Can only be used in horizontal orientation</p>\n"
      },
      {
        "params": [
          {
            "type": "Date",
            "optional": false,
            "name": "amount",
            "doc": "<p>The new end date</p>\n"
          }
        ],
        "html_filename": "TimelinePanel.html",
        "shortDoc": "Changes the time end start date to the supplied date. ...",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-method-setEnd",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "setEnd",
        "owner": "Sch.mixin.TimelinePanel",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 421,
        "deprecated": null,
        "doc": "<p>Changes the time end start date to the supplied date.</p>\n"
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
      },
      {
        "params": [
          {
            "type": "Object",
            "optional": false,
            "name": "readOnly",
            "doc": "\n"
          }
        ],
        "html_filename": "TimelinePanel.html",
        "shortDoc": "The readOnly accessor. ...",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-method-setReadOnly",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "setReadOnly",
        "owner": "Sch.mixin.TimelinePanel",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 250,
        "deprecated": null,
        "doc": "<p>The <a href=\"#/api/Sch.panel.SchedulerGrid-cfg-readOnly\" rel=\"Sch.panel.SchedulerGrid-cfg-readOnly\" class=\"docClass\">readOnly</a> accessor. Use it to switch the <code>readonly</code> state.</p>\n"
      },
      {
        "params": [
          {
            "type": "Date",
            "optional": false,
            "name": "amount",
            "doc": "<p>The new start date</p>\n"
          }
        ],
        "html_filename": "TimelinePanel.html",
        "shortDoc": "Changes the time axis start date to the supplied date. ...",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-method-setStart",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "setStart",
        "owner": "Sch.mixin.TimelinePanel",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 413,
        "deprecated": null,
        "doc": "<p>Changes the time axis start date to the supplied date.</p>\n"
      },
      {
        "params": [
          {
            "type": "Int",
            "optional": false,
            "name": "width",
            "doc": "<p>The new time column width</p>\n"
          }
        ],
        "html_filename": "TimelinePanel.html",
        "shortDoc": "Updates the widths of all time columns to the supplied value. ...",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-method-setTimeColumnWidth",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "setTimeColumnWidth",
        "owner": "Sch.mixin.TimelinePanel",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 366,
        "deprecated": null,
        "doc": "<p>Updates the widths of all time columns to the supplied value. Only applicable when forceFit is set to false on the view.</p>\n"
      },
      {
        "params": [
          {
            "type": "Date",
            "optional": false,
            "name": "start",
            "doc": "<p>The new start date</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "end",
            "doc": "<p>(Optional) The new end date. If not supplied, the <a href=\"#/api/Sch.preset.ViewPreset-cfg-defaultSpan\" rel=\"Sch.preset.ViewPreset-cfg-defaultSpan\" class=\"docClass\">Sch.preset.ViewPreset.defaultSpan</a> property of the current view preset will be used to calculate the new end date.</p>\n"
          }
        ],
        "html_filename": "TimelinePanel.html",
        "shortDoc": "Changes the time axis timespan to the supplied start and end dates. ...",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-method-setTimeSpan",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "setTimeSpan",
        "owner": "Sch.mixin.TimelinePanel",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 402,
        "deprecated": null,
        "doc": "<p>Changes the time axis timespan to the supplied start and end dates.</p>\n"
      },
      {
        "params": [
          {
            "type": "Int",
            "optional": true,
            "name": "amount",
            "doc": "<p>(optional) The number of units to jump forward</p>\n"
          }
        ],
        "html_filename": "TimelinePanel.html",
        "shortDoc": "Moves the time axis forward in time in units specified by the view preset 'shiftUnit', and by the amount specified by...",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-method-shiftNext",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "shiftNext",
        "owner": "Sch.mixin.TimelinePanel",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 379,
        "deprecated": null,
        "doc": "<p>Moves the time axis forward in time in units specified by the view preset 'shiftUnit', and by the amount specified by the parameter or by the shiftIncrement config of the current view preset.</p>\n"
      },
      {
        "params": [
          {
            "type": "Int",
            "optional": true,
            "name": "amount",
            "doc": "<p>(optional) The number of units to jump backward</p>\n"
          }
        ],
        "html_filename": "TimelinePanel.html",
        "shortDoc": "Moves the time axis backward in time in units specified by the view preset 'shiftUnit', and by the amount specified b...",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-method-shiftPrevious",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "shiftPrevious",
        "owner": "Sch.mixin.TimelinePanel",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 387,
        "deprecated": null,
        "doc": "<p>Moves the time axis backward in time in units specified by the view preset 'shiftUnit', and by the amount specified by the parameter or by the shiftIncrement config of the current view preset.</p>\n"
      },
      {
        "params": [
          {
            "type": "String",
            "optional": false,
            "name": "preset",
            "doc": "<p>The name of the new preset</p>\n"
          },
          {
            "type": "Date",
            "optional": true,
            "name": "startDate",
            "doc": "<p>(optional) A new start date for the time axis</p>\n"
          },
          {
            "type": "Date",
            "optional": true,
            "name": "endDate",
            "doc": "<p>(optional) A new end date for the time axis</p>\n"
          }
        ],
        "html_filename": "TimelinePanel.html",
        "shortDoc": "Switches the current header preset. ...",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-method-switchViewPreset",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "switchViewPreset",
        "owner": "Sch.mixin.TimelinePanel",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 284,
        "deprecated": null,
        "doc": "<p>Switches the current header preset. See the <a href=\"#/api/Sch.preset.Manager\" rel=\"Sch.preset.Manager\" class=\"docClass\">Sch.preset.Manager</a> for details. Will fire the <a href=\"#/api/Sch.panel.SchedulerGrid-event-beforeviewchange\" rel=\"Sch.panel.SchedulerGrid-event-beforeviewchange\" class=\"docClass\">beforeviewchange</a> event.\nReturning <code>false</code> from the listener will cancel the switch.</p>\n"
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
        "type": "Date",
        "html_filename": "TimelinePanel.html",
        "shortDoc": "A end date of the timeline. ...",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-cfg-endDate",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "endDate",
        "owner": "Sch.mixin.TimelinePanel",
        "linenr": 84,
        "deprecated": null,
        "doc": "<p>A end date of the timeline. Required</p>\n"
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
        "type": "String",
        "html_filename": "TimelinePanel.html",
        "shortDoc": "Defines which resize handles to use for resizing events. ...",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-cfg-eventResizeHandles",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "eventResizeHandles",
        "owner": "Sch.mixin.TimelinePanel",
        "linenr": 60,
        "deprecated": null,
        "doc": "<p>Defines which resize handles to use for resizing events. Possible values: 'none', 'start', 'end', 'both'. Defaults to 'both'</p>\n"
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
        "type": "Object",
        "html_filename": "TimelinePanel.html",
        "shortDoc": "A custom config object used to initialize the left (locked) grid panel. ...",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-cfg-lockedGridConfig",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "lockedGridConfig",
        "owner": "Sch.mixin.TimelinePanel",
        "linenr": 103,
        "deprecated": null,
        "doc": "<p>A custom config object used to initialize the left (locked) grid panel. See</p>\n"
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
        "type": "Boolean",
        "html_filename": "TimelinePanel.html",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-cfg-readOnly",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "readOnly",
        "owner": "Sch.mixin.TimelinePanel",
        "linenr": 55,
        "deprecated": null,
        "doc": "<p>true to disable editing.</p>\n"
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
        "html_filename": "TimelinePanel.html",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-cfg-rowHeight",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "rowHeight",
        "owner": "Sch.mixin.TimelinePanel",
        "linenr": 65,
        "deprecated": null,
        "doc": "<p>The row height (used in horizontal mode only)</p>\n"
      },
      {
        "type": "Object",
        "html_filename": "TimelinePanel.html",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-cfg-schedulerConfig",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "schedulerConfig",
        "owner": "Sch.mixin.TimelinePanel",
        "linenr": 107,
        "deprecated": null,
        "doc": "<p>A custom config object used to initialize the right (schedule) grid panel.</p>\n"
      },
      {
        "type": "Boolean",
        "html_filename": "TimelinePanel.html",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-cfg-snapToIncrement",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "snapToIncrement",
        "owner": "Sch.mixin.TimelinePanel",
        "linenr": 50,
        "deprecated": null,
        "doc": "<p>true to snap to resolution increment while interacting with scheduled events.</p>\n"
      },
      {
        "type": "Date",
        "html_filename": "TimelinePanel.html",
        "shortDoc": "A start date of the timeline. ...",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-cfg-startDate",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "startDate",
        "owner": "Sch.mixin.TimelinePanel",
        "linenr": 79,
        "deprecated": null,
        "doc": "<p>A start date of the timeline. Required</p>\n"
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
      },
      {
        "type": "Object",
        "html_filename": "TimelinePanel.html",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-cfg-tipCfg",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "tipCfg",
        "owner": "Sch.mixin.TimelinePanel",
        "linenr": 118,
        "deprecated": null,
        "doc": "<p>The Ext.Tooltip config object used to configure a tooltip (only applicable if tooltipTpl is set).</p>\n"
      },
      {
        "type": "Ext.Template",
        "html_filename": "TimelinePanel.html",
        "shortDoc": "Template used to show a tooltip over a scheduled item, null by default (meaning no tooltip). ...",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-cfg-tooltipTpl",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "tooltipTpl",
        "owner": "Sch.mixin.TimelinePanel",
        "linenr": 111,
        "deprecated": null,
        "doc": "<p>Template used to show a tooltip over a scheduled item, null by default (meaning no tooltip). The tooltip will be populated with the data in\nrecord corresponding to the hovered element. See also <a href=\"#/api/Sch.panel.SchedulerGrid-cfg-tipCfg\" rel=\"Sch.panel.SchedulerGrid-cfg-tipCfg\" class=\"docClass\">tipCfg</a>.</p>\n"
      },
      {
        "type": "Object",
        "html_filename": "TimelinePanel.html",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-cfg-validatorFnScope",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "validatorFnScope",
        "owner": "Sch.mixin.TimelinePanel",
        "linenr": 69,
        "deprecated": null,
        "doc": "<p>The scope used for the different validator functions.</p>\n"
      },
      {
        "type": "String",
        "html_filename": "TimelinePanel.html",
        "shortDoc": "A key used to lookup a predefined Sch.preset.ViewPreset (e.g. ...",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-cfg-viewPreset",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "viewPreset",
        "owner": "Sch.mixin.TimelinePanel",
        "linenr": 74,
        "deprecated": null,
        "doc": "<p>A key used to lookup a predefined <a href=\"#/api/Sch.preset.ViewPreset\" rel=\"Sch.preset.ViewPreset\" class=\"docClass\">Sch.preset.ViewPreset</a> (e.g. 'weekAndDay', 'hourAndDay'), managed by <a href=\"#/api/Sch.preset.Manager\" rel=\"Sch.preset.Manager\" class=\"docClass\">Sch.preset.Manager</a>. See Sch.preset.Manager for more information.</p>\n"
      },
      {
        "type": "Int",
        "html_filename": "TimelinePanel.html",
        "shortDoc": "A valid JS date index between 0-6. ...",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-cfg-weekStartDay",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "weekStartDay",
        "owner": "Sch.mixin.TimelinePanel",
        "linenr": 45,
        "deprecated": null,
        "doc": "<p>A valid JS date index between 0-6. (0: Sunday, 1: Monday etc.)</p>\n"
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
        "html_filename": "TimelinePanel.html",
        "shortDoc": "Fires before the event tooltip is shown, return false to suppress it. ...",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-event-beforetooltipshow",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "beforetooltipshow",
        "owner": "Sch.mixin.TimelinePanel",
        "linenr": 200,
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
            "type": "Object",
            "optional": false,
            "name": "preset",
            "doc": "<p>The new preset</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "TimelinePanel.html",
        "shortDoc": "Fires before the current view changes to a new view type or a new time span. ...",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-event-beforeviewchange",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "beforeviewchange",
        "owner": "Sch.mixin.TimelinePanel",
        "linenr": 148,
        "deprecated": null,
        "doc": "<p>Fires before the current view changes to a new view type or a new time span. Return false to abort this action.</p>\n"
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
        "html_filename": "TimelinePanel.html",
        "shortDoc": "Fires after a click on the schedule area ...",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-event-scheduleclick",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "scheduleclick",
        "owner": "Sch.mixin.TimelinePanel",
        "linenr": 208,
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
        "html_filename": "TimelinePanel.html",
        "shortDoc": "Fires after a context menu click on the schedule area ...",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-event-schedulecontextmenu",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "schedulecontextmenu",
        "owner": "Sch.mixin.TimelinePanel",
        "linenr": 228,
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
        "html_filename": "TimelinePanel.html",
        "shortDoc": "Fires after a doubleclick on the schedule area ...",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-event-scheduledblclick",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "scheduledblclick",
        "owner": "Sch.mixin.TimelinePanel",
        "linenr": 218,
        "deprecated": null,
        "doc": "<p>Fires after a doubleclick on the schedule area</p>\n"
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
      },
      {
        "params": [
          {
            "type": "Sch.column.Time",
            "optional": false,
            "name": "column",
            "doc": "<p>The column object</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "startDate",
            "doc": "<p>The start date of the header cell</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "endDate",
            "doc": "<p>The start date of the header cell</p>\n"
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
        "html_filename": "TimelinePanel.html",
        "shortDoc": "Fires after a doubleclick on a time header cell ...",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-event-timeheaderdblclick",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "timeheaderdblclick",
        "owner": "Sch.mixin.TimelinePanel",
        "linenr": 138,
        "deprecated": null,
        "doc": "<p>Fires after a doubleclick on a time header cell</p>\n"
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
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "TimelinePanel.html",
        "shortDoc": "Fires after current view preset or time span has changed ...",
        "static": false,
        "href": "TimelinePanel.html#Sch-mixin-TimelinePanel-event-viewchange",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
        "private": false,
        "alias": null,
        "name": "viewchange",
        "owner": "Sch.mixin.TimelinePanel",
        "linenr": 156,
        "deprecated": null,
        "doc": "<p>Fires after current view preset or time span has changed</p>\n"
      }
    ]
  },
  "mixins": [
    "Sch.mixin.SchedulerPanel"
  ],
  "static": false,
  "href": "SchedulerGrid.html#Sch-panel-SchedulerGrid",
  "component": false,
  "protected": false,
  "inheritable": false,
  "alternateClassNames": [
    "Sch.SchedulerPanel"
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
  "filename": "../ExtScheduler2.x/js/Sch/panel/SchedulerGrid.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Sch.panel.SchedulerGrid",
  "extends": "Sch.panel.TimelineGridPanel",
  "author": null,
  "allMixins": [
    "Sch.mixin.SchedulerPanel",
    "Sch.mixin.TimelinePanel"
  ],
  "linenr": 9,
  "deprecated": null,
  "doc": "<h1>Introduction</h1>\n\n<p>A scheduler panel based on the Ext.grid.Panel class which allows you to visualize and manage \"resources\" and their scheduled \"events\".\nThe concrete semantic of an <em>event</em> and a <em>resource</em> is up to you. For example, an event can be a doctor's appointment, a meeting or an airplane flight.\nA resource, in turn, can be a doctor (a person in general), a meeting room or an airport gate.</p>\n\n<p>If you have never used Ext JS before, it's highly recommended that you start by visiting the <a href=\"http://www.sencha.com/learn/extjs/?4x\">Ext JS Learning Center</a> to understand the basics of the underlying framework.</p>\n\n<p><p><img src=\"doc-resources/scheduler/images/ext-scheduler.png\" alt=\"\"></p></p>\n\n<h1>Orientation</h1>\n\n<p>Depending from the orientation, a resource can be either a row or a column in the grid. Below you can see the same schedule in both horizontal and vertical orientation.\nYou can configure the orientation by setting the orientation config property to 'horizontal' or 'vertical'. Additionally you can also change orientation during runtime by calling\nthe <a href=\"#/api/Sch.panel.SchedulerGrid-method-setOrientation\" rel=\"Sch.panel.SchedulerGrid-method-setOrientation\" class=\"docClass\">setOrientation</a> method.</p>\n\n<p><p><img src=\"doc-resources/scheduler/images/scheduler-grid-horizontal.png\" alt=\"\"></p>\n<p><img src=\"doc-resources/scheduler/images/scheduler-grid-vertical.png\" alt=\"\"></p></p>\n\n<h1>Data</h1>\n\n<p>The information about events and resources should be provided to the scheduler configuration object as two separate data stores: <code>eventStore</code> and <code>resourceStore</code>.\nBoth should be instances of the Ext.data.Store class. Please refer to the Ext.data.Store documentation to find out the base interface.</p>\n\n<p>Each data store is a collection of \"models\". Events and resources in the scheduler are represented with the <a href=\"#/api/Sch.model.Event\" rel=\"Sch.model.Event\" class=\"docClass\">Sch.model.Event</a> and <a href=\"#/api/Sch.model.Resource\" rel=\"Sch.model.Resource\" class=\"docClass\">Sch.model.Resource</a> classes.\nRefer to their documentation for details on how you can add additional fields, or how you can customize the pre-defined fields.</p>\n\n<p>The two models are tied together via the 'Id' property on the Resource model and the 'ResourceId' property on the Event model. This image shows a typical class definition diagram for the two models:</p>\n\n<p><p><img src=\"doc-resources/scheduler/images/scheduler-stores.png\" alt=\"\"></p></p>\n\n<p>Please refer to this guide <a href=\"http://docs.sencha.com/ext-js/4-0/#/guide/data\">http://docs.sencha.com/ext-js/4-0/#/guide/data</a> for base information about Ext JS data package.</p>\n\n<h1>Synopsys</h1>\n\n<p>HTML file:</p>\n\n<pre><code>&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n    &lt;head&gt;\n        &lt;link href=\"http://cdn.sencha.io/ext-4.0.2a/resources/css/ext-all.css\" rel=\"stylesheet\" type=\"text/css\" /&gt;\n        &lt;link href=\"/resources/css/sch-all.css\" rel=\"stylesheet\" type=\"text/css\" /&gt;\n\n        &lt;script src=\"http://cdn.sencha.io/ext-4.0.2a/ext-all.js\" type=\"text/javascript\"&gt;&lt;/script&gt;\n        &lt;script src=\"/sch-all-debug.js\" type=\"text/javascript\"&gt;&lt;/script&gt;\n\n        &lt;script type=\"text/javascript\" src=\"synopsys.js\"&gt;&lt;/script&gt;\n    &lt;/head&gt;\n    &lt;body&gt;\n    &lt;/body&gt;\n&lt;/html&gt;\n</code></pre>\n\n<p>synopsys.js:</p>\n\n<pre><code>Ext.onReady(function() {\n\n    // Store holding all the resources\n    var resourceStore = new Ext.data.JsonStore({\n        model   : 'Sch.model.Resource'\n    });\n\n    resourceStore.loadData([\n        {\n            Id      : 'a',\n            Name    : 'Rob'\n        },\n        {\n            Id      : 'b',\n            Name    : 'Mike'\n        }\n    ]);\n\n    // Store holding all the events\n    var eventStore = new Ext.data.JsonStore({\n        model   : 'Sch.model.Event',\n\n        data    :  [   \n            {\n                ResourceId      : 'a',\n                Name            : 'Some task', \n                StartDate       : '2010-05-22 10:00',\n                EndDate         : '2010-05-22 12:00'\n            },\n            {\n                ResourceId      : 'b',\n                Name            : 'Some other task', \n                StartDate       : '2010-05-22 13:00',\n                EndDate         : '2010-05-22 16:00'\n            }\n        ]\n    });\n\n    var startDate = new Date(2010, 4, 22, 6);\n\n    var scheduler = new Sch.panel.SchedulerGrid({\n        width       : 600,\n        height      : 200,\n\n        // Setup view configuration\n        startDate   : startDate,\n        endDate     : Sch.util.Date.add(startDate, Sch.util.Date.HOUR, 24),\n\n        viewPreset  : 'hourAndDay',\n\n        // Setup your static columns\n        columns     : [\n            { header : 'Staff', width : 130, dataIndex : 'Name'}\n        ],\n\n        resourceStore   : resourceStore,\n        eventStore      : eventStore\n    });\n\n    scheduler.render(Ext.getBody());\n});\n</code></pre>\n\n<h1>The scheduler timeline header </h1>\n\n<p><p><img src=\"doc-resources/scheduler/images/scheduler-timeline-header.png\" alt=\"\"></p></p>\n\n<p>The presentation of the scheduler's timeline can be configured using the <a href=\"#/api/Sch.panel.SchedulerGrid-cfg-viewPreset\" rel=\"Sch.panel.SchedulerGrid-cfg-viewPreset\" class=\"docClass\">viewPreset</a> configuration option.\nYou can choose from a list of pre-defined presets or create your own custom view preset. Each view preset can consist of 1-3 header <a href=\"#/api/Sch.preset.ViewPresetHeaderRow\" rel=\"Sch.preset.ViewPresetHeaderRow\" class=\"docClass\">rows</a>.\nEach row can be independently configured with its own dateFormat (or custom renderer), time unit and increment. The scheduler comes with several predefined view presets that you can use:</p>\n\n<pre><code>\"hourAndDay\"\n\"dayAndWeek\"\n\"weekAndDay\"\n\"weekAndMonth\"\n\"monthAndYear\"\n\"year\"\n</code></pre>\n\n<p>If none of these suits your needs, you can easily create your own custom view presets too. Here's an example of a viewPreset:</p>\n\n<pre><code>weekAndMonth : {\n    timeColumnWidth : 100,\n    rowHeight: 24,              // Only used in horizontal orientation\n    resourceColumnWidth : 100,  // Only used in vertical orientation\n    displayDateFormat : 'Y-m-d',\n    shiftUnit : \"WEEK\",\n    shiftIncrement : 5,\n    defaultSpan : 6,            // By default, show 6 weeks\n\n    timeResolution : {\n        unit : \"DAY\",\n        increment : 1\n    },\n\n    headerConfig : {\n        middle : {\n            unit : \"WEEK\",\n            renderer : function(start, end, cfg) {\n                cfg.align = 'left';\n                return Ext.Date.format(start, 'd M');\n            }\n        },\n        top : {\n            unit : \"MONTH\",\n            dateFormat : 'M Y'\n        }\n    }\n}\n</code></pre>\n\n<p>Please refer to the <a href=\"#/api/Sch.preset.Manager\" rel=\"Sch.preset.Manager\" class=\"docClass\">Sch.preset.Manager</a> documentation for further information.</p>\n\n<h1>Events</h1>\n\n<p>Virtually every sub-component in the scheduler (including the scheduler itself), implements the Observable pattern. In the Ext JS framework, this pattern is represented with the Ext.util.Observable mixin.</p>\n\n<p>This means that you can be notified about various events, happening within the scheduler and provide your custom handlers (listeners) for them. For example:</p>\n\n<pre><code>scheduler.on('eventclick', function (sch, event) {\n    alert('You've clicked on ' + event.get('Name') + ' event')\n} \n</code></pre>\n\n<p>The function provided as the 2nd argument to the <code>on</code> method call, will be called when a user clicks on an event in scheduler. Please refer to the Ext.util.Observable documentation for details\non how you can customize the behaviour of the listeners.</p>\n\n<h1>Rendering customization</h1>\n\n<p>There are several ways you can customize the presentation of the events and time line itself. This section will briefly summarize them. Please also refer to the documentation of the each\noption.</p>\n\n<ul>\n<li><p><a href=\"#/api/Sch.panel.SchedulerGrid-cfg-eventBarTextField\" rel=\"Sch.panel.SchedulerGrid-cfg-eventBarTextField\" class=\"docClass\">eventBarTextField</a> This is the easiest way of defining which field in your model to display in each rendered event (defaults to 'Name').</p></li>\n<li><p><a href=\"#/api/Sch.panel.SchedulerGrid-method-eventRenderer\" rel=\"Sch.panel.SchedulerGrid-method-eventRenderer\" class=\"docClass\">eventRenderer</a> This function can be provided as the configuration option and will be called for each event. It can return a string or an object.\nString will be used as the \"event body\" and object will be passed to the <code>eventBodyTemplate</code> template (must be provided in this case). Returning string from this function is the simplest\nmethod to customize the presentation of event.</p></li>\n<li><p><a href=\"#/api/Sch.panel.SchedulerGrid-cfg-eventBodyTemplate\" rel=\"Sch.panel.SchedulerGrid-cfg-eventBodyTemplate\" class=\"docClass\">eventBodyTemplate</a> - the template for \"event body\". The \"event body\" is the internal content of the event, w/o the wrapping markup. It still can contain arbitrary HTML. This template will\nreceive either the return value from <code>eventRenderer</code> or the whole data object of the event being rendered (each field will be available as the <code>{FieldName}</code> symbol).</p></li>\n<li><p><a href=\"#/api/Sch.panel.SchedulerGrid-cfg-eventTpl\" rel=\"Sch.panel.SchedulerGrid-cfg-eventTpl\" class=\"docClass\">eventTpl</a> - the top-most event template, only override when you know what you are doing.</p></li>\n<li><p><a href=\"#/api/Sch.panel.SchedulerGrid-property-timeCellRenderer\" rel=\"Sch.panel.SchedulerGrid-property-timeCellRenderer\" class=\"docClass\">timeCellRenderer</a> - can be used to customize the grid cells. This is a \"normal\" ExtJS column renderer, but its returning value will be ignored.</p></li>\n</ul>\n\n\n<h1>Plugins and additional features</h1>\n\n<p>By itself, the scheduler is merely a visualizing tool. To make it more interactive you can enable/add various plugins to it. In the simplest case for example, the events drag and drop functionality\ncan be activated with the <a href=\"#/api/Sch.panel.SchedulerGrid-cfg-enableEventDragDrop\" rel=\"Sch.panel.SchedulerGrid-cfg-enableEventDragDrop\" class=\"docClass\">enableEventDragDrop</a> configuration option (defaults to true). Under the hood, it will add drag-and-drop support for each scheduled event.</p>\n\n<p>To add a plugin manually, you need to pass the instance of the plugin in the <code>plugins</code> configuration option. For example, to enable the <a href=\"#/api/Sch.plugin.Pan\" rel=\"Sch.plugin.Pan\" class=\"docClass\">pan plugin</a>:</p>\n\n<pre><code>    var scheduler = Ext.create('Sch.panel.SchedulerGrid', {\n        ...\n\n        resourceStore   : resourceStore,\n        eventStore      : eventStore,\n\n        plugins         : [\n            Ext.create('Sch.plugin.Pan', { enableVerticalPan : true })\n        ]\n    });\n</code></pre>\n\n<p>A plugin may have its own configuration options. You can pass several plugins at once. For the list of available plugins, please examine the classes in the <code>Sch.plugin</code> namespace.</p>\n"
});