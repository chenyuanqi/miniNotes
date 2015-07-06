Ext.data.JsonP.Sch_mixin_TimelinePanel({
  "subclasses": [

  ],
  "html_filename": "TimelinePanel.html",
  "docauthor": null,
  "singleton": false,
  "code_type": "ext_define",
  "superclasses": [

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
        "doc": "<p>The <a href=\"#/api/Sch.mixin.TimelinePanel-cfg-readOnly\" rel=\"Sch.mixin.TimelinePanel-cfg-readOnly\" class=\"docClass\">readOnly</a> accessor. Use it to switch the <code>readonly</code> state.</p>\n"
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
        "doc": "<p>Switches the current header preset. See the <a href=\"#/api/Sch.preset.Manager\" rel=\"Sch.preset.Manager\" class=\"docClass\">Sch.preset.Manager</a> for details. Will fire the <a href=\"#/api/Sch.mixin.TimelinePanel-event-beforeviewchange\" rel=\"Sch.mixin.TimelinePanel-event-beforeviewchange\" class=\"docClass\">beforeviewchange</a> event.\nReturning <code>false</code> from the listener will cancel the switch.</p>\n"
      }
    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "cfg": [
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
        "doc": "<p>Template used to show a tooltip over a scheduled item, null by default (meaning no tooltip). The tooltip will be populated with the data in\nrecord corresponding to the hovered element. See also <a href=\"#/api/Sch.mixin.TimelinePanel-cfg-tipCfg\" rel=\"Sch.mixin.TimelinePanel-cfg-tipCfg\" class=\"docClass\">tipCfg</a>.</p>\n"
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
  "href": "TimelinePanel.html#Sch-mixin-TimelinePanel",
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
    "Sch.panel.TimelineGridPanel",
    "Sch.panel.TimelineTreePanel"
  ],
  "filename": "../ExtScheduler2.x/js/Sch/mixin/TimelinePanel.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Sch.mixin.TimelinePanel",
  "extends": "Ext.Base",
  "author": null,
  "allMixins": [

  ],
  "linenr": 10,
  "deprecated": null,
  "doc": "<p>A base mixing for Ext.panel.Panel classes, giving to the consuming panel the \"time line\" functionality.\nThis means that the panel will be capabale to display a list of \"events\", ordered on the <a href=\"#/api/Sch.data.TimeAxis\" rel=\"Sch.data.TimeAxis\" class=\"docClass\">time axis</a>.</p>\n\n<p>Generally, should not be used directly, if you need to subclass the scheduler panel, subclass the <a href=\"#/api/Sch.panel.SchedulerGrid\" rel=\"Sch.panel.SchedulerGrid\" class=\"docClass\">Sch.panel.SchedulerGrid</a> or <a href=\"#/api/Sch.panel.SchedulerTree\" rel=\"Sch.panel.SchedulerTree\" class=\"docClass\">Sch.panel.SchedulerTree</a>\ninstead.</p>\n"
});