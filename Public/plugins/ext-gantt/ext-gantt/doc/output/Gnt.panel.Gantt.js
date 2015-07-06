Ext.data.JsonP.Gnt_panel_Gantt({
  "subclasses": [

  ],
  "html_filename": "Gantt.html",
  "docauthor": null,
  "singleton": false,
  "code_type": "ext_define",
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
      },
      {
        "type": "Sch.plugin.Zones",
        "html_filename": "Gantt.html",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-property-workingTimePlugin",
        "protected": false,
        "inheritable": false,
        "tagname": "property",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "workingTimePlugin",
        "owner": "Gnt.panel.Gantt",
        "linenr": 338,
        "deprecated": null,
        "doc": "<p>If <a href=\"#/api/Gnt.panel.Gantt-cfg-highlightWeekends\" rel=\"Gnt.panel.Gantt-cfg-highlightWeekends\" class=\"docClass\">highlightWeekends</a> option is set to true, you can access the created zones plugin through this property.</p>\n"
      }
    ],
    "method": [
      {
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "name": "disabled",
            "doc": "\n"
          }
        ],
        "html_filename": "Gantt.html",
        "shortDoc": "Toggle weekend highlighting ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-method-disableWeekendHighlighting",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "disableWeekendHighlighting",
        "owner": "Gnt.panel.Gantt",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 770,
        "deprecated": null,
        "doc": "<p>Toggle weekend highlighting</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "Gantt.html",
        "shortDoc": "Tries to fit the time columns to the available view width ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-method-fitTimeColumns",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "fitTimeColumns",
        "owner": "Gnt.panel.Gantt",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 802,
        "deprecated": null,
        "doc": "<p>Tries to fit the time columns to the available view width</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "Gantt.html",
        "shortDoc": "\"Get\" accessor for the cascadeChanges option ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-method-getCascadeChanges",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "getCascadeChanges",
        "owner": "Gnt.panel.Gantt",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 904,
        "deprecated": null,
        "doc": "<p>\"Get\" accessor for the <code>cascadeChanges</code> option</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "Gantt.html",
        "shortDoc": "Returns the associated dependency store ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-method-getDependencyStore",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "getDependencyStore",
        "owner": "Gnt.panel.Gantt",
        "return": {
          "type": "Ext.data.Store",
          "doc": "\n"
        },
        "linenr": 818,
        "deprecated": null,
        "doc": "<p>Returns the associated dependency store</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "Gantt.html",
        "shortDoc": "Wrapper function returning the dependency view instance ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-method-getDependencyView",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "getDependencyView",
        "owner": "Gnt.panel.Gantt",
        "return": {
          "type": "Gnt.view.Dependency",
          "doc": "<p>dependencyView The dependency view instance</p>\n"
        },
        "linenr": 762,
        "deprecated": null,
        "doc": "<p>Wrapper function returning the dependency view instance</p>\n"
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
        "html_filename": "Gantt.html",
        "shortDoc": "\"Get\" accessor for the recalculateParents option ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-method-getRecalculateParents",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "getRecalculateParents",
        "owner": "Gnt.panel.Gantt",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 920,
        "deprecated": null,
        "doc": "<p>\"Get\" accessor for the <code>recalculateParents</code> option</p>\n"
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
        "html_filename": "Gantt.html",
        "shortDoc": "\"Get\" accessor for the skipWeekendsDuringDragDrop option ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-method-getSkipWeekendsDuringDragDrop",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "getSkipWeekendsDuringDragDrop",
        "owner": "Gnt.panel.Gantt",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 944,
        "deprecated": null,
        "doc": "<p>\"Get\" accessor for the <code>skipWeekendsDuringDragDrop</code> option</p>\n"
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
        "html_filename": "Gantt.html",
        "shortDoc": "Returns the associated task store ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-method-getTaskStore",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "getTaskStore",
        "owner": "Gnt.panel.Gantt",
        "return": {
          "type": "Gnt.data.TaskStore",
          "doc": "\n"
        },
        "linenr": 809,
        "deprecated": null,
        "doc": "<p>Returns the associated task store</p>\n"
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
            "type": "Mixed",
            "optional": false,
            "name": "el",
            "doc": "<p>The DOM node or Ext Element to lookup</p>\n"
          }
        ],
        "html_filename": "Gantt.html",
        "shortDoc": "Returns the task record for a DOM node ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-method-resolveTaskRecord",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "resolveTaskRecord",
        "owner": "Gnt.panel.Gantt",
        "return": {
          "type": "Gnt.model.Task",
          "doc": "<p>The task record</p>\n"
        },
        "linenr": 793,
        "deprecated": null,
        "doc": "<p>Returns the task record for a DOM node</p>\n\n"
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
            "type": "Object",
            "optional": false,
            "name": "value",
            "doc": "\n"
          }
        ],
        "html_filename": "Gantt.html",
        "shortDoc": "\"Set\" accessor for the cascadeChanges option ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-method-setCascadeChanges",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "setCascadeChanges",
        "owner": "Gnt.panel.Gantt",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 912,
        "deprecated": null,
        "doc": "<p>\"Set\" accessor for the <code>cascadeChanges</code> option</p>\n"
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
        "doc": "<p>The <a href=\"#/api/Gnt.panel.Gantt-cfg-readOnly\" rel=\"Gnt.panel.Gantt-cfg-readOnly\" class=\"docClass\">readOnly</a> accessor. Use it to switch the <code>readonly</code> state.</p>\n"
      },
      {
        "params": [
          {
            "type": "Object",
            "optional": false,
            "name": "value",
            "doc": "\n"
          }
        ],
        "html_filename": "Gantt.html",
        "shortDoc": "\"Set\" accessor for the recalculateParents option ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-method-setRecalculateParents",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "setRecalculateParents",
        "owner": "Gnt.panel.Gantt",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 928,
        "deprecated": null,
        "doc": "<p>\"Set\" accessor for the <code>recalculateParents</code> option</p>\n"
      },
      {
        "params": [
          {
            "type": "Object",
            "optional": false,
            "name": "value",
            "doc": "\n"
          }
        ],
        "html_filename": "Gantt.html",
        "shortDoc": "\"Set\" accessor for the skipWeekendsDuringDragDrop option ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-method-setSkipWeekendsDuringDragDrop",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "setSkipWeekendsDuringDragDrop",
        "owner": "Gnt.panel.Gantt",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 936,
        "deprecated": null,
        "doc": "<p>\"Set\" accessor for the <code>skipWeekendsDuringDragDrop</code> option</p>\n"
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
        "doc": "<p>Switches the current header preset. See the <a href=\"#/api/Sch.preset.Manager\" rel=\"Sch.preset.Manager\" class=\"docClass\">Sch.preset.Manager</a> for details. Will fire the <a href=\"#/api/Gnt.panel.Gantt-event-beforeviewchange\" rel=\"Gnt.panel.Gantt-event-beforeviewchange\" class=\"docClass\">beforeviewchange</a> event.\nReturning <code>false</code> from the listener will cancel the switch.</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "Gantt.html",
        "shortDoc": "Changes the timeframe of the gantt to fit all the tasks in it ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-method-zoomToFit",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "zoomToFit",
        "owner": "Gnt.panel.Gantt",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 886,
        "deprecated": null,
        "doc": "<p>Changes the timeframe of the gantt to fit all the tasks in it</p>\n"
      }
    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "cfg": [
      {
        "type": "Ext.data.Store",
        "html_filename": "Gantt.html",
        "shortDoc": "The store holding the assignments information (optional). ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-cfg-assignmentStore",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "assignmentStore",
        "owner": "Gnt.panel.Gantt",
        "linenr": 415,
        "deprecated": null,
        "doc": "<p>The store holding the assignments information (optional).\nSee also <a href=\"#/api/Gnt.model.Assignment\" rel=\"Gnt.model.Assignment\" class=\"docClass\">Gnt.model.Assignment</a></p>\n"
      },
      {
        "type": "Boolean",
        "html_filename": "Gantt.html",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-cfg-autoHeight",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "autoHeight",
        "owner": "Gnt.panel.Gantt",
        "linenr": 393,
        "deprecated": null,
        "doc": "<p>Always hardcoded to <code>false</code>, the <code>true</code> value is not supported</p>\n"
      },
      {
        "type": "Gnt.data.Calendar",
        "html_filename": "Gantt.html",
        "shortDoc": "a calendar instance for this gantt panel. ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-cfg-calendar",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "calendar",
        "owner": "Gnt.panel.Gantt",
        "linenr": 398,
        "deprecated": null,
        "doc": "<p>a <a href=\"#/api/Gnt.data.Calendar\" rel=\"Gnt.data.Calendar\" class=\"docClass\">calendar</a> instance for this gantt panel. Can be also provided\nas the <a href=\"#/api/Gnt.data.TaskStore-cfg-calendar\" rel=\"Gnt.data.TaskStore-cfg-calendar\" class=\"docClass\">configuration option</a> of the <code>taskStore</code>.</p>\n"
      },
      {
        "type": "Boolean",
        "html_filename": "Gantt.html",
        "shortDoc": "True to cascade changes to dependent tasks (defaults to false). ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-cfg-cascadeChanges",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "cascadeChanges",
        "owner": "Gnt.panel.Gantt",
        "linenr": 317,
        "deprecated": null,
        "doc": "<p>True to cascade changes to dependent tasks (defaults to <code>false</code>). This option just will be translated\nto the <a href=\"#/api/Gnt.data.TaskStore-cfg-cascadeChanges\" rel=\"Gnt.data.TaskStore-cfg-cascadeChanges\" class=\"docClass\">corresonding option</a> of the task store</p>\n"
      },
      {
        "type": "Function",
        "html_filename": "Gantt.html",
        "shortDoc": "An empty function by default, but provided so that you can perform custom validation on\nthe item being dragged. ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-cfg-dndValidatorFn",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "dndValidatorFn",
        "owner": "Gnt.panel.Gantt",
        "linenr": 425,
        "deprecated": null,
        "doc": "<p>An empty function by default, but provided so that you can perform custom validation on\nthe item being dragged. This function is called during the drag and drop process and also after the drop is made</p>\n"
      },
      {
        "type": "Boolean",
        "html_filename": "Gantt.html",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-cfg-enableDependencyDragDrop",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "enableDependencyDragDrop",
        "owner": "Gnt.panel.Gantt",
        "linenr": 292,
        "deprecated": null,
        "doc": "<p>True to allow creation of dependencies by using drag and drop between task terminals (defaults to <code>true</code>)</p>\n"
      },
      {
        "type": "Boolean",
        "html_filename": "Gantt.html",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-cfg-enableProgressBarResize",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "enableProgressBarResize",
        "owner": "Gnt.panel.Gantt",
        "linenr": 298,
        "deprecated": null,
        "doc": "<p>True to allow resizing of the progress bar indicator inside tasks (defaults to <code>false</code>)</p>\n"
      },
      {
        "type": "Boolean",
        "html_filename": "Gantt.html",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-cfg-enableTaskDragDrop",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "enableTaskDragDrop",
        "owner": "Gnt.panel.Gantt",
        "linenr": 286,
        "deprecated": null,
        "doc": "<p>True to allow drag drop of tasks (defaults to <code>true</code>)</p>\n"
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
        "type": "Function",
        "html_filename": "Gantt.html",
        "shortDoc": "An empty function by default, but provided so that you can override it. ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-cfg-eventRenderer",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "eventRenderer",
        "owner": "Gnt.panel.Gantt",
        "linenr": 359,
        "deprecated": null,
        "doc": "<p>An empty function by default, but provided so that you can override it. This function is called each time a task\nis rendered into the scheduler grid. The function should return an object with properties that will be applied to the relevant task template.\nBy default, the task templates include placeholders for <code>cls</code>, <code>style</code>. The <code>cls</code> property is a CSS class which will be added to the\ntask bar element. The <code>style</code> property is an inline style declaration for the task bar element.</p>\n\n<pre><code>renderer : function (taskRec) {\n    return {\n        style : 'background-color:white',        // You can use inline styles too.\n        cls   : taskRec.get('Priority')          // Read a property from the task record, used as a CSS class to style the event\n    };\n}\n</code></pre>\n"
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
        "type": "Ext.Template",
        "html_filename": "Gantt.html",
        "shortDoc": "The template used to renderer leaf tasks in the gantt view. ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-cfg-eventTemplate",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "eventTemplate",
        "owner": "Gnt.panel.Gantt",
        "linenr": 378,
        "deprecated": null,
        "doc": "<p>The template used to renderer leaf tasks in the gantt view. See Ext.Template for more information, see also Gnt.template.Task for the definition.</p>\n"
      },
      {
        "type": "Boolean",
        "html_filename": "Gantt.html",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-cfg-highlightWeekends",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "highlightWeekends",
        "owner": "Gnt.panel.Gantt",
        "linenr": 261,
        "deprecated": null,
        "doc": "<p>True (default) to highlight weekends</p>\n"
      },
      {
        "type": "String/Object",
        "html_filename": "Gantt.html",
        "shortDoc": "A configuration used to show/edit the field to the left of the task. ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-cfg-leftLabelField",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "leftLabelField",
        "owner": "Gnt.panel.Gantt",
        "linenr": 237,
        "deprecated": null,
        "doc": "<p>A configuration used to show/edit the field to the left of the task.\nIt can be either string indicating the field name in the data model or a custom object where you can set the following possible properties:</p>\n\n<ul>\n<li><code>dataIndex</code> : String - The field name in the data model</li>\n<li><code>editor</code> : Ext.form.Field - The field used to edit the value inline</li>\n<li><code>renderer</code> : Function - A renderer method used to render the label. The renderer is called with the 'value' and the record as parameters.</li>\n<li><code>scope</code> : Object - The scope in which the renderer is called</li>\n</ul>\n\n"
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
        "type": "Ext.Template",
        "html_filename": "Gantt.html",
        "shortDoc": "The template used to renderer parent tasks in the gantt view. ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-cfg-milestoneTemplate",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "milestoneTemplate",
        "owner": "Gnt.panel.Gantt",
        "linenr": 388,
        "deprecated": null,
        "doc": "<p>The template used to renderer parent tasks in the gantt view. See Ext.Template for more information, see also Gnt.template.Milestone for the definition. </p></p>\n"
      },
      {
        "type": "Ext.Template",
        "html_filename": "Gantt.html",
        "shortDoc": "The template used to renderer parent tasks in the gantt view. ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-cfg-parentEventTemplate",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "parentEventTemplate",
        "owner": "Gnt.panel.Gantt",
        "linenr": 383,
        "deprecated": null,
        "doc": "<p>The template used to renderer parent tasks in the gantt view. See Ext.Template for more information, see also Gnt.template.ParentTask for the definition</p>\n"
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
        "type": "Boolean",
        "html_filename": "Gantt.html",
        "shortDoc": "True to update parent start/end dates after a task has been updated (defaults to true). ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-cfg-recalculateParents",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "recalculateParents",
        "owner": "Gnt.panel.Gantt",
        "linenr": 310,
        "deprecated": null,
        "doc": "<p>True to update parent start/end dates after a task has been updated (defaults to <code>true</code>). This option just will be translated\nto the <a href=\"#/api/Gnt.data.TaskStore-cfg-recalculateParents\" rel=\"Gnt.data.TaskStore-cfg-recalculateParents\" class=\"docClass\">corresonding option</a> of the task store</p>\n"
      },
      {
        "type": "Object",
        "html_filename": "Gantt.html",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-cfg-resizeConfig",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "resizeConfig",
        "owner": "Gnt.panel.Gantt",
        "linenr": 466,
        "deprecated": null,
        "doc": "<p>Custom config to pass to the <a href=\"#/api/Gnt.feature.TaskResize\" rel=\"Gnt.feature.TaskResize\" class=\"docClass\">Gnt.feature.TaskResize</a> instance</p>\n"
      },
      {
        "type": "String",
        "html_filename": "Gantt.html",
        "shortDoc": "A string containig one of the following values\n\n\nnone - to disable the resizing of tasks\nleft - to enable changing of...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-cfg-resizeHandles",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "resizeHandles",
        "owner": "Gnt.panel.Gantt",
        "linenr": 439,
        "deprecated": null,
        "doc": "<p>A string containig one of the following values</p>\n\n<ul>\n<li><code>none</code> - to disable the resizing of tasks</li>\n<li><code>left</code> - to enable changing of start date only</li>\n<li><code>right</code> - to enable changing of end date only</li>\n<li><code>both</code> - to enable changing of both start and end dates</li>\n</ul>\n\n\n<p>Default value is <code>both</code>. Resizing is performed with the <a href=\"#/api/Gnt.feature.TaskResize\" rel=\"Gnt.feature.TaskResize\" class=\"docClass\">Gnt.feature.TaskResize</a> plugin.\nYou can customize it with the <a href=\"#/api/Gnt.panel.Gantt-cfg-resizeConfig\" rel=\"Gnt.panel.Gantt-cfg-resizeConfig\" class=\"docClass\">resizeConfig</a> and <a href=\"#/api/Gnt.panel.Gantt-cfg-resizeValidatorFn\" rel=\"Gnt.panel.Gantt-cfg-resizeValidatorFn\" class=\"docClass\">resizeValidatorFn</a> options</p>\n"
      },
      {
        "type": "Function",
        "html_filename": "Gantt.html",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-cfg-resizeValidatorFn",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "resizeValidatorFn",
        "owner": "Gnt.panel.Gantt",
        "linenr": 452,
        "deprecated": null,
        "doc": "<p>An empty function by default, but provided so that you can perform custom validation on\nan item being resized.</p>\n"
      },
      {
        "type": "Ext.data.Store",
        "html_filename": "Gantt.html",
        "shortDoc": "The store holding the resources to be assigned to tasks (optional). ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-cfg-resourceStore",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "resourceStore",
        "owner": "Gnt.panel.Gantt",
        "linenr": 409,
        "deprecated": null,
        "doc": "<p>The store holding the resources to be assigned to tasks (optional).\nSee also <a href=\"#/api/Gnt.model.Resource\" rel=\"Gnt.model.Resource\" class=\"docClass\">Gnt.model.Resource</a></p>\n"
      },
      {
        "type": "String/Object",
        "html_filename": "Gantt.html",
        "shortDoc": "A configuration used to show/edit the field to the right of the task. ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-cfg-rightLabelField",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "rightLabelField",
        "owner": "Gnt.panel.Gantt",
        "linenr": 249,
        "deprecated": null,
        "doc": "<p>A configuration used to show/edit the field to the right of the task.\nIt can be either string indicating the field name in the data model or a custom object where you can set the following possible properties:</p>\n\n<ul>\n<li><code>dataIndex</code> : String - The field name in the data model</li>\n<li><code>editor</code> : Ext.form.Field - The field used to edit the value inline</li>\n<li><code>renderer</code> : Function - A renderer method used to render the label. The renderer is called with the 'value' and the record as parameters.</li>\n<li><code>scope</code> : Object - The scope in which the renderer is called</li>\n</ul>\n\n"
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
        "html_filename": "Gantt.html",
        "shortDoc": "True to show a base lines for tasks. ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-cfg-showBaseline",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "showBaseline",
        "owner": "Gnt.panel.Gantt",
        "linenr": 331,
        "deprecated": null,
        "doc": "<p>True to show a base lines for tasks. Base line information should be provided as the <code>BaselineStartDate</code> and <code>BaselineEndDate</code> fields.\nDefault value is <code>false</code>.</p>\n"
      },
      {
        "type": "Boolean",
        "html_filename": "Gantt.html",
        "shortDoc": "True to show a line indicating current time. ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-cfg-showTodayLine",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "showTodayLine",
        "owner": "Gnt.panel.Gantt",
        "linenr": 324,
        "deprecated": null,
        "doc": "<p>True to show a line indicating current time. Default value is <code>false</code>.</p>\n"
      },
      {
        "type": "Boolean",
        "html_filename": "Gantt.html",
        "shortDoc": "True to skip the weekends/holidays during drag&amp;drop operations (moving/resizing) and also during cascading. ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-cfg-skipWeekendsDuringDragDrop",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "skipWeekendsDuringDragDrop",
        "owner": "Gnt.panel.Gantt",
        "linenr": 274,
        "deprecated": null,
        "doc": "<p>True to skip the weekends/holidays during drag&amp;drop operations (moving/resizing) and also during cascading. Default value is <code>true</code>.</p>\n\n<p>Note, that holidays will still be excluded from the duration of the tasks. If you need to completely disable holidays skipping you\ncan do that on the gantt level with the <a href=\"#/api/Gnt.panel.Gantt-cfg-weekendsAreWorkdays\" rel=\"Gnt.panel.Gantt-cfg-weekendsAreWorkdays\" class=\"docClass\">weekendsAreWorkdays</a> option, or on task level with the <code>ManuallyScheduled</code> field.</p>\n\n<p>This option just will be translated to the <a href=\"#/api/Gnt.data.TaskStore-cfg-skipWeekendsDuringDragDrop\" rel=\"Gnt.data.TaskStore-cfg-skipWeekendsDuringDragDrop\" class=\"docClass\">corresonding option</a> of the task store</p>\n"
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
        "type": "Gnt.data.TaskStore",
        "html_filename": "Gantt.html",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-cfg-taskStore",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "taskStore",
        "owner": "Gnt.panel.Gantt",
        "linenr": 404,
        "deprecated": null,
        "doc": "<p>The <a href=\"#/api/Gnt.data.TaskStore\" rel=\"Gnt.data.TaskStore\" class=\"docClass\">store</a> holding the tasks to be rendered into the gantt chart (required).</p>\n"
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
        "type": "Boolean",
        "html_filename": "Gantt.html",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-cfg-toggleParentTasksOnClick",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "toggleParentTasksOnClick",
        "owner": "Gnt.panel.Gantt",
        "linenr": 304,
        "deprecated": null,
        "doc": "<p>True to toggle the collapsed/expanded state when clicking a parent task bar (defaults to <code>true</code>)</p>\n"
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
        "doc": "<p>Template used to show a tooltip over a scheduled item, null by default (meaning no tooltip). The tooltip will be populated with the data in\nrecord corresponding to the hovered element. See also <a href=\"#/api/Gnt.panel.Gantt-cfg-tipCfg\" rel=\"Gnt.panel.Gantt-cfg-tipCfg\" class=\"docClass\">tipCfg</a>.</p>\n"
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
      },
      {
        "type": "Boolean",
        "html_filename": "Gantt.html",
        "shortDoc": "Set to false to treat all days as working, effectively removing the concept of non-working time from gantt. ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-cfg-weekendsAreWorkdays",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "weekendsAreWorkdays",
        "owner": "Gnt.panel.Gantt",
        "linenr": 267,
        "deprecated": null,
        "doc": "<p>Set to <code>false</code> to treat <em>all</em> days as working, effectively removing the concept of non-working time from gantt. Defaults to <code>true</code>.\nThis option just will be translated to the <a href=\"#/api/Gnt.data.Calendar-cfg-weekendsAreWorkdays\" rel=\"Gnt.data.Calendar-cfg-weekendsAreWorkdays\" class=\"docClass\">corresonding option</a> of the calendar</p>\n"
      }
    ],
    "event": [
      {
        "params": [
          {
            "type": "Gnt.panel.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt panel instance</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "Gantt.html",
        "shortDoc": "Always fires after a dependency drag-drop operation ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-event-afterdependencydragdrop",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "afterdependencydragdrop",
        "owner": "Gnt.panel.Gantt",
        "linenr": 739,
        "deprecated": null,
        "doc": "<p>Always fires after a dependency drag-drop operation</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.panel.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt panel instance</p>\n"
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
        "html_filename": "Gantt.html",
        "shortDoc": "Fires after a succesful progress bar resize operation ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-event-afterprogressbarresize",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "afterprogressbarresize",
        "owner": "Gnt.panel.Gantt",
        "linenr": 639,
        "deprecated": null,
        "doc": "<p>Fires after a succesful progress bar resize operation</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.panel.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt panel instance</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "Gantt.html",
        "shortDoc": "Fires after a drag and drop operation, regardless if the drop valid or invalid ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-event-aftertaskdrop",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "aftertaskdrop",
        "owner": "Gnt.panel.Gantt",
        "linenr": 674,
        "deprecated": null,
        "doc": "<p>Fires after a drag and drop operation, regardless if the drop valid or invalid</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.panel.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt panel instance</p>\n"
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
        "html_filename": "Gantt.html",
        "shortDoc": "Fires after a succesful resize operation ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-event-aftertaskresize",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "aftertaskresize",
        "owner": "Gnt.panel.Gantt",
        "linenr": 613,
        "deprecated": null,
        "doc": "<p>Fires after a succesful resize operation</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.panel.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt panel instance</p>\n"
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
        "html_filename": "Gantt.html",
        "shortDoc": "Fires before a dependency drag operation starts (from a \"task terminal\"). ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-event-beforedependencydrag",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "beforedependencydrag",
        "owner": "Gnt.panel.Gantt",
        "linenr": 714,
        "deprecated": null,
        "doc": "<p>Fires before a dependency drag operation starts (from a \"task terminal\").</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.panel.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt panel instance</p>\n"
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
        "html_filename": "Gantt.html",
        "shortDoc": "Fires before a progress bar resize starts, return false to stop the execution ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-event-beforeprogressbarresize",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "beforeprogressbarresize",
        "owner": "Gnt.panel.Gantt",
        "linenr": 623,
        "deprecated": null,
        "doc": "<p>Fires before a progress bar resize starts, return false to stop the execution</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.panel.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt panel instance</p>\n"
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
        "html_filename": "Gantt.html",
        "shortDoc": "Fires before a task drag drop is initiated, return false to cancel it ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-event-beforetaskdrag",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "beforetaskdrag",
        "owner": "Gnt.panel.Gantt",
        "linenr": 649,
        "deprecated": null,
        "doc": "<p>Fires before a task drag drop is initiated, return false to cancel it</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.panel.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt panel instance</p>\n"
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
        "html_filename": "Gantt.html",
        "shortDoc": "Fires before a resize starts, return false to stop the execution ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-event-beforetaskresize",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "beforetaskresize",
        "owner": "Gnt.panel.Gantt",
        "linenr": 582,
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
            "type": "Gnt.view.Dependency",
            "optional": false,
            "name": "g",
            "doc": "<p>The gantt panel instance</p>\n"
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
        "html_filename": "Gantt.html",
        "shortDoc": "Fires after double clicking on a dependency line/arrow ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-event-dependencydblclick",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "dependencydblclick",
        "owner": "Gnt.panel.Gantt",
        "linenr": 746,
        "deprecated": null,
        "doc": "<p>Fires after double clicking on a dependency line/arrow</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.panel.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt panel instance</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "Gantt.html",
        "shortDoc": "Fires when a dependency drag operation starts ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-event-dependencydragstart",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "dependencydragstart",
        "owner": "Gnt.panel.Gantt",
        "linenr": 722,
        "deprecated": null,
        "doc": "<p>Fires when a dependency drag operation starts</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.panel.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt panel instance</p>\n"
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
        "html_filename": "Gantt.html",
        "shortDoc": "Fires when a dependency drag drop operation has completed successfully and a new dependency has been created. ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-event-dependencydrop",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "dependencydrop",
        "owner": "Gnt.panel.Gantt",
        "linenr": 729,
        "deprecated": null,
        "doc": "<p>Fires when a dependency drag drop operation has completed successfully and a new dependency has been created.</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.panel.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt panel instance</p>\n"
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
        "html_filename": "Gantt.html",
        "shortDoc": "Fires after a change has been made to a label field, but before the change is reflected in the underlying field. ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-event-labeledit_beforecomplete",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "labeledit_beforecomplete",
        "owner": "Gnt.panel.Gantt",
        "linenr": 690,
        "deprecated": null,
        "doc": "<p>Fires after a change has been made to a label field, but before the change is reflected in the underlying field.</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.panel.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt panel instance</p>\n"
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
        "html_filename": "Gantt.html",
        "shortDoc": "Fires before editing is started for a field ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-event-labeledit_beforestartedit",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "labeledit_beforestartedit",
        "owner": "Gnt.panel.Gantt",
        "linenr": 682,
        "deprecated": null,
        "doc": "<p>Fires before editing is started for a field</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.panel.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt panel instance</p>\n"
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
        "html_filename": "Gantt.html",
        "shortDoc": "Fires after editing is complete and any changed value has been written to the underlying field. ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-event-labeledit_complete",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "labeledit_complete",
        "owner": "Gnt.panel.Gantt",
        "linenr": 700,
        "deprecated": null,
        "doc": "<p>Fires after editing is complete and any changed value has been written to the underlying field.</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.panel.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt panel instance</p>\n"
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
        "html_filename": "Gantt.html",
        "shortDoc": "Fires during a resize operation and provides information about the current start and end of the resized event ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-event-partialtaskresize",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "partialtaskresize",
        "owner": "Gnt.panel.Gantt",
        "linenr": 601,
        "deprecated": null,
        "doc": "<p>Fires during a resize operation and provides information about the current start and end of the resized event</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.panel.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt panel instance</p>\n"
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
        "html_filename": "Gantt.html",
        "shortDoc": "Fires when a progress bar resize starts ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-event-progressbarresizestart",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "progressbarresizestart",
        "owner": "Gnt.panel.Gantt",
        "linenr": 631,
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
            "type": "Gnt.panel.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt panel instance</p>\n"
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
        "html_filename": "Gantt.html",
        "shortDoc": "Fires when a task is clicked ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-event-taskclick",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "taskclick",
        "owner": "Gnt.panel.Gantt",
        "linenr": 551,
        "deprecated": null,
        "doc": "<p>Fires when a task is clicked</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.panel.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt panel instance</p>\n"
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
        "html_filename": "Gantt.html",
        "shortDoc": "Fires when contextmenu is activated on a task ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-event-taskcontextmenu",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "taskcontextmenu",
        "owner": "Gnt.panel.Gantt",
        "linenr": 571,
        "deprecated": null,
        "doc": "<p>Fires when contextmenu is activated on a task</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.panel.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt panel instance</p>\n"
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
        "html_filename": "Gantt.html",
        "shortDoc": "Fires when a task is double clicked ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-event-taskdblclick",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "taskdblclick",
        "owner": "Gnt.panel.Gantt",
        "linenr": 561,
        "deprecated": null,
        "doc": "<p>Fires when a task is double clicked</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.panel.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt panel instance</p>\n"
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
        "html_filename": "Gantt.html",
        "shortDoc": "Fires when a dnd operation starts ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-event-taskdragstart",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "taskdragstart",
        "owner": "Gnt.panel.Gantt",
        "linenr": 658,
        "deprecated": null,
        "doc": "<p>Fires when a dnd operation starts</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.panel.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt panel instance</p>\n"
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
        "html_filename": "Gantt.html",
        "shortDoc": "Fires after a succesful drag and drop operation ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-event-taskdrop",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "taskdrop",
        "owner": "Gnt.panel.Gantt",
        "linenr": 666,
        "deprecated": null,
        "doc": "<p>Fires after a succesful drag and drop operation</p>\n"
      },
      {
        "params": [
          {
            "type": "Gnt.panel.Gantt",
            "optional": false,
            "name": "gantt",
            "doc": "<p>The gantt panel instance</p>\n"
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
        "html_filename": "Gantt.html",
        "shortDoc": "Fires when resize starts ...",
        "static": false,
        "href": "Gantt.html#Gnt-panel-Gantt-event-taskresizestart",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "js//Gnt/panel/Gantt.js",
        "private": false,
        "alias": null,
        "name": "taskresizestart",
        "owner": "Gnt.panel.Gantt",
        "linenr": 592,
        "deprecated": null,
        "doc": "<p>Fires when resize starts</p>\n"
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

  ],
  "static": false,
  "href": "Gantt.html#Gnt-panel-Gantt",
  "component": false,
  "protected": false,
  "inheritable": false,
  "alternateClassNames": [
    "Sch.gantt.GanttPanel"
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
  "filename": "js//Gnt/panel/Gantt.js",
  "private": false,
  "xtypes": [
    "ganttpanel"
  ],
  "alias": null,
  "name": "Gnt.panel.Gantt",
  "extends": "Sch.panel.TimelineTreePanel",
  "author": null,
  "allMixins": [
    "Sch.mixin.TimelinePanel"
  ],
  "linenr": 9,
  "deprecated": null,
  "doc": "<h1>Synopsys</h1>\n\n<p>HTML file:</p>\n\n<pre><code>&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n    &lt;head&gt;\n        &lt;link href=\"http://cdn.sencha.io/ext-4.0.2a/resources/css/ext-all.css\" rel=\"stylesheet\" type=\"text/css\" /&gt;\n        &lt;link href=\"http://bryntum.com/examples/2.0alpha/gantt-latest/resources/css/sch-gantt-all.css\" rel=\"stylesheet\" type=\"text/css\" /&gt;\n\n        &lt;script src=\"http://cdn.sencha.io/ext-4.0.2a/ext-all-debug.js\" type=\"text/javascript\"&gt;&lt;/script&gt;\n        &lt;script src=\"http://bryntum.com/examples/2.0alpha/gantt-latest/gnt-all-debug.js\" type=\"text/javascript\"&gt;&lt;/script&gt;\n\n        &lt;script src=\"synopsys.js\" type=\"text/javascript\"&gt;&lt;/script&gt;\n    &lt;/head&gt;\n\n    &lt;body&gt;\n    &lt;/body&gt;\n&lt;/html&gt;    \n</code></pre>\n\n<p>synopsys.js:</p>\n\n<pre><code>Ext.onReady(function(){\n\n    var taskStore = Ext.create('Gnt.data.TaskStore', {\n        autoLoad    : true,\n        proxy       : {\n            type    : 'memory',\n            reader  : {\n                type: 'json'\n            },\n\n            data: [ \n                { \n                    \"StartDate\" : \"2010-01-18\",\n                    \"EndDate\" : \"2010-02-02\",\n                    \"Id\" : 1,\n                    \"Name\" : \"Planning\",\n                    \"expanded\" : true,\n                    \"children\" : [\n                        { \n                            \"StartDate\" : \"2010-01-18\",\n                            \"EndDate\" : \"2010-01-26\",\n                            \"Id\" : 2,\n                            \"leaf\" : true,\n                            \"Name\" : \"Investigate\"\n                        },\n                        { \n                            \"StartDate\" : \"2010-01-22\",\n                            \"EndDate\" : \"2010-01-25\",\n                            \"Id\" : 3,\n                            \"leaf\" : true,\n                            \"Name\" : \"Investigate2\"\n                        },\n                        { \n                            \"StartDate\" : \"2010-01-28\",\n                            \"EndDate\" : \"2010-01-28\",\n                            \"Id\" : 4,\n                            \"leaf\" : true,\n                            \"Name\" : \"Investigate3\"\n                        }\n                    ]\n                }\n            ]\n            // eof data\n        }\n        // eof proxy\n    });\n\n    var ganttPanel = Ext.create('Gnt.panel.Gantt', {\n        height      : 400,\n        width       : 1000,\n\n        viewPreset      : 'weekAndDayLetter',\n\n        startDate       : new Date(2010, 0, 15),\n        endDate         : Sch.util.Date.add(new Date(2010, 0, 15), Sch.util.Date.WEEK, 3),\n\n        columns         : [\n            {\n                xtype       : 'treecolumn',\n                header      : 'Tasks',\n                sortable    : false,\n                dataIndex   : 'Name',\n                width       : 200\n            }\n        ],\n\n        taskStore       : taskStore\n    });\n\n    ganttPanel.render(Ext.getBody());\n});\n</code></pre>\n\n<h1>Introduction</h1>\n\n<p>A gantt is a special ExtJS component, based on Ext.grid.Panel which can display a set of tasks along with the dependencies between them.</p>\n\n<p><p><img src=\"doc-resources/gantt/images/gantt-panel.png\" alt=\"\"></p></p>\n\n<h1>Data</h1>\n\n<p>Gantt manipulates with the several datasets, listed below, some of them are required, some - optional. All datasets are represented with the instances of Ext.data.Store.\nPlease refer to this guide <a href=\"http://docs.sencha.com/ext-js/4-0/#/guide/data\">http://docs.sencha.com/ext-js/4-0/#/guide/data</a> for base information about ExtJS data package.</p>\n\n<p>All datasets can be provided as the configuration options for this class.</p>\n\n<ul>\n<li><a href=\"#/api/Gnt.panel.Gantt-cfg-taskStore\" rel=\"Gnt.panel.Gantt-cfg-taskStore\" class=\"docClass\">taskStore</a> - Main dataset, required - an instance of the <a href=\"#/api/Gnt.data.TaskStore\" rel=\"Gnt.data.TaskStore\" class=\"docClass\">Gnt.data.TaskStore</a>, containing the tree of tasks to display. Each task is represented with the\n<a href=\"#/api/Gnt.model.Task\" rel=\"Gnt.model.Task\" class=\"docClass\">Gnt.model.Task</a> instance. Task may have child tasks, in this case it will be a \"parent\" task, who's start and end dates are determined by the child tasks.</li>\n<li>dependencyStore - optional. A store with the information about dependencies between tasks. Each dependency is represented with the <a href=\"#/api/Gnt.model.Dependency\" rel=\"Gnt.model.Dependency\" class=\"docClass\">Gnt.model.Dependency</a> instance.</li>\n<li><a href=\"#/api/Gnt.panel.Gantt-cfg-resourceStore\" rel=\"Gnt.panel.Gantt-cfg-resourceStore\" class=\"docClass\">resourceStore</a> - optional. A store with the information about resources being assigned to tasks. Each resource is represented with the <a href=\"#/api/Gnt.model.Resource\" rel=\"Gnt.model.Resource\" class=\"docClass\">Gnt.model.Resource</a> instance.</li>\n<li><a href=\"#/api/Gnt.panel.Gantt-cfg-assignmentStore\" rel=\"Gnt.panel.Gantt-cfg-assignmentStore\" class=\"docClass\">assignmentStore</a> - optional. A store with the information about resources assignments. Each assignment is represented with the <a href=\"#/api/Gnt.model.Assignment\" rel=\"Gnt.model.Assignment\" class=\"docClass\">Gnt.model.Assignment</a> instance.</li>\n</ul>\n\n\n<p>In case you did not provide some optional data store - an empty one will be created for you.</p>\n\n<p>These data stores represent the \"model\" of your gantt chart. All UI components (like this class) are bound to the data sources. You just need to manipulate with the data\nand visual presentation will be updated automatically.</p>\n\n<h1>Calendar. Working time.</h1>\n\n<p>Gantt also differentiates between working and non-working time. When calculating the duration of the task, or moving the tasks, the non-working time will be skipped and the\nappropriate parameter (duration/start date) - adjusted. This is a default behavior and it can disabled on the different levels.</p>\n\n<p>Use skipWeekendsDuringDragDrop option, when you want to move/resize tasks freely, but still want to take the holidays into account for duration calculations.</p>\n\n<p>Use <a href=\"#/api/Gnt.panel.Gantt-cfg-weekendsAreWorkdays\" rel=\"Gnt.panel.Gantt-cfg-weekendsAreWorkdays\" class=\"docClass\">weekendsAreWorkdays</a> option, to completely disable this feature, treating all days as working.</p>\n\n<p>And finally, see also the <code>ManuallyScheduled</code> field in the <a href=\"#/api/Gnt.model.Task\" rel=\"Gnt.model.Task\" class=\"docClass\">Gnt.model.Task</a> definition - it will disable the feature on the task level.</p>\n\n<p>All this logic is encapsulated in the <a href=\"#/api/Gnt.data.Calendar\" rel=\"Gnt.data.Calendar\" class=\"docClass\">Gnt.data.Calendar</a> class. By default the only non-working time, recognized by calendar are weekends. Its possible\nto provide a list of arbitrary dates as holidays. Its also possible to provide the exceptions - ie working days, which falls on the weekend (see <a href=\"#/api/Gnt.model.CalendarDay\" rel=\"Gnt.model.CalendarDay\" class=\"docClass\">Gnt.model.CalendarDay</a>).</p>\n\n<h1>Time line header</h1>\n\n<p>The presentation of the header's time line can be customized using the <a href=\"#/api/Gnt.panel.Gantt-cfg-viewPreset\" rel=\"Gnt.panel.Gantt-cfg-viewPreset\" class=\"docClass\">viewPreset</a> configuration option.\nYou can pick from a list of pre-defined presets or register your own. Please refer to the <a href=\"#/api/Sch.preset.Manager\" rel=\"Sch.preset.Manager\" class=\"docClass\">Sch.preset.Manager</a> documentation.\nGantt supports up to 3 levels of headers, each with its own options set.</p>\n\n<h1>Events</h1>\n\n<p>Virtually every component in gantt (gantt itself, data stores and even individual data entities), implements the Observable pattern. In ExtJS framework, this pattern is represented with the Ext.util.Observable mixin.</p>\n\n<p>This means that you can listen the notifications about various events, happening with the gantt and provide your custom handlers (listeners) for them. For example:</p>\n\n<pre><code>ganttPanel.on('taskclick', function (ganttPanel, task) {\n    alert('You've clicked on ' + task.get('Name') + ' task')\n} \n</code></pre>\n\n<p>The function provided as the 2nd argument to <code>on</code> call, will be called, when user clicks on the event in scheduler. Please refer to the Ext.util.Observable documentation for details\nhow can customize the behaviour of the listeners and also see the events listed in this documented.</p>\n\n<h1>Rendering customization</h1>\n\n<p>There are several ways you can customize the presentation of the tasks. This section will briefly summarize them. Please also refer to the documentation of the each option.</p>\n\n<ul>\n<li><p><a href=\"#/api/Gnt.panel.Gantt-cfg-eventRenderer\" rel=\"Gnt.panel.Gantt-cfg-eventRenderer\" class=\"docClass\">eventRenderer</a> This function can be provided as the configuration option and will be called for each task. It should return an object, containing\nthe placeholders information for <code>eventTemplate</code>.</p></li>\n<li><p><a href=\"#/api/Gnt.panel.Gantt-cfg-eventTemplate\" rel=\"Gnt.panel.Gantt-cfg-eventTemplate\" class=\"docClass\">eventTemplate</a> - the task template, generally should not be overriden completely. Instead, provide the information for the placeholders of this template. Available\nplaceholders are:</p>\n\n<ul>\n<li><code>cls</code> - CSS class which will be added to the task bar element</li>\n<li><code>style</code> - inline style declaration for the task bar element</li>\n<li><code>progressBarStyle</code> - an inline CSS style to be applied to the progress bar of this task</li>\n<li><code>leftLabel</code> - the content for the left label (usually being extracted from the task, using the <a href=\"#/api/Gnt.panel.Gantt-cfg-leftLabelField\" rel=\"Gnt.panel.Gantt-cfg-leftLabelField\" class=\"docClass\">leftLabelField</a> option.\n You still need to provide some value for the <code>leftLabelField</code> to activate the labels rendering</li>\n<li><code>rightLabel</code> - the content for the right label (usually being extracted from the task, using the <a href=\"#/api/Gnt.panel.Gantt-cfg-rightLabelField\" rel=\"Gnt.panel.Gantt-cfg-rightLabelField\" class=\"docClass\">rightLabelField</a> option\n You still need to provide some value for the <code>rightLabelField</code> to activate the labels rendering</li>\n<li><code>basecls</code> - a CSS class to be add to base line DOM element, only applicable when the <a href=\"#/api/Gnt.panel.Gantt-cfg-showBaseline\" rel=\"Gnt.panel.Gantt-cfg-showBaseline\" class=\"docClass\">showBaseline</a> option is true and task contains the base line information</li>\n</ul>\n</li>\n</ul>\n\n\n<h1>Plugins and additional features</h1>\n\n<p>By itself, gantt panel is merely a renderer. To add the interactivity you can enable/add various plugins to it. In the simplest case for example, the tasks drag and drop functionality\ncan be activated with the <a href=\"#/api/Gnt.panel.Gantt-cfg-enableTaskDragDrop\" rel=\"Gnt.panel.Gantt-cfg-enableTaskDragDrop\" class=\"docClass\">enableTaskDragDrop</a> configuration option. Under the hood, it will add a drag and drop plugin for the scheduler.</p>\n\n<p>To add a plugin manually, you need to pass the instance of the plugin in the <code>plugins</code> configuration option. For example, to enable the <a href=\"#/api/Gnt.plugin.Printable\" rel=\"Gnt.plugin.Printable\" class=\"docClass\">print plugin</a>:</p>\n\n<pre><code>    var ganttPanel = Ext.create('Gnt.panel.Gantt', {\n        ...\n        taskStore       : taskStore,\n\n        plugins         : [\n            Ext.create('Gnt.plugin.Printable')\n        ]\n    });\n</code></pre>\n\n<p>A plugin may have its own configuration options. You can pass several plugins at once. For the list of available plugins, please examine the classes in the <code>Gnt.plugin</code> namespace.\nYou can also use some plugins from the <code>Sch.plugin</code> namespace.</p>\n"
});