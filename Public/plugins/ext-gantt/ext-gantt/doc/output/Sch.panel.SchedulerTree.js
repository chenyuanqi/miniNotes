Ext.data.JsonP.Sch_panel_SchedulerTree({
  "subclasses": [

  ],
  "html_filename": "SchedulerTree.html",
  "docauthor": null,
  "singleton": false,
  "code_type": "assignment",
  "superclasses": [
    "Sch.panel.TimelineTreePanel"
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
            "doc": "<p>An object that will be applied to the containing <a href=\"#/api/Sch.panel.SchedulerTree-cfg-eventTpl\" rel=\"Sch.panel.SchedulerTree-cfg-eventTpl\" class=\"docClass\">eventTpl</a>.</p>\n"
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
          "doc": "<p>A simple string, or a custom object which will be applied to the <a href=\"#/api/Sch.panel.SchedulerTree-cfg-eventBodyTemplate\" rel=\"Sch.panel.SchedulerTree-cfg-eventBodyTemplate\" class=\"docClass\">eventBodyTemplate</a>, creating the actual HTML</p>\n"
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
        "doc": "<p>The <a href=\"#/api/Sch.panel.SchedulerTree-cfg-readOnly\" rel=\"Sch.panel.SchedulerTree-cfg-readOnly\" class=\"docClass\">readOnly</a> accessor. Use it to switch the <code>readonly</code> state.</p>\n"
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
        "doc": "<p>Switches the current header preset. See the <a href=\"#/api/Sch.preset.Manager\" rel=\"Sch.preset.Manager\" class=\"docClass\">Sch.preset.Manager</a> for details. Will fire the <a href=\"#/api/Sch.panel.SchedulerTree-event-beforeviewchange\" rel=\"Sch.panel.SchedulerTree-event-beforeviewchange\" class=\"docClass\">beforeviewchange</a> event.\nReturning <code>false</code> from the listener will cancel the switch.</p>\n"
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
        "doc": "<p>Template used to show a tooltip over a scheduled item, null by default (meaning no tooltip). The tooltip will be populated with the data in\nrecord corresponding to the hovered element. See also <a href=\"#/api/Sch.panel.SchedulerTree-cfg-tipCfg\" rel=\"Sch.panel.SchedulerTree-cfg-tipCfg\" class=\"docClass\">tipCfg</a>.</p>\n"
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
  "href": "SchedulerTree.html#Sch-panel-SchedulerTree",
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
  "filename": "../ExtScheduler2.x/js/Sch/panel/SchedulerTree.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Sch.panel.SchedulerTree",
  "extends": "Sch.panel.TimelineTreePanel",
  "author": null,
  "allMixins": [
    "Sch.mixin.SchedulerPanel",
    "Sch.mixin.TimelinePanel"
  ],
  "linenr": 9,
  "deprecated": null,
  "doc": "<p>A complete scheduler panel, based on the tree view. Can be used, when you have a lot of resources, grouped by some sign.</p>\n\n<p><p><img src=\"doc-resources/scheduler/images/scheduler-tree.png\" alt=\"\"></p></p>\n\n<p>Please refer to the <a href=\"#/api/Sch.panel.SchedulerGrid\" rel=\"Sch.panel.SchedulerGrid\" class=\"docClass\">Sch.panel.SchedulerGrid</a> for additional documentation, as these classes\nare virtually identical. This document will only provide the tree-specific details.</p>\n\n<p>In the scheduler tree case:</p>\n\n<ul>\n<li>the <code>resourceStore</code> is expected to be an instance of the Ext.data.TreeStore.</li>\n<li>the scheduler tree does not support the vertical orientation.</li>\n<li><p>the column, which will contain the tree itself, must have the <code>treecolumn</code> xtype:</p>\n\n<pre><code>  var schedulerTree = Ext.create('Sch.panel.SchedulerTree', {\n      columns: [\n          {\n              xtype       : 'treecolumn',\n\n              text        : 'Name',\n              width       : 200,\n              sortable    : true,\n              dataIndex   : 'Name'\n          }\n      ]\n  });\n</code></pre></li>\n</ul>\n\n"
});