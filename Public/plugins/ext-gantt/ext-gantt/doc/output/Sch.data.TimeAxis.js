Ext.data.JsonP.Sch_data_TimeAxis({
  "subclasses": [

  ],
  "html_filename": "TimeAxis.html",
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

        ],
        "html_filename": "TimeAxis.html",
        "shortDoc": "Clear the current filter of the time axis ...",
        "static": false,
        "href": "TimeAxis.html#Sch-data-TimeAxis-method-clearFilter",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/data/TimeAxis.js",
        "private": false,
        "alias": null,
        "name": "clearFilter",
        "owner": "Sch.data.TimeAxis",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 120,
        "deprecated": null,
        "doc": "<p>Clear the current filter of the time axis</p>\n"
      },
      {
        "params": [
          {
            "type": "Function",
            "optional": false,
            "name": "fn",
            "doc": "<p>The function to be called, it will receive an object with start/end properties, and 'index' of the tick.</p>\n"
          },
          {
            "type": "Object",
            "optional": true,
            "name": "scope",
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed.</p>\n"
          }
        ],
        "html_filename": "TimeAxis.html",
        "shortDoc": "[Experimental] Filter the time axis by a function. ...",
        "static": false,
        "href": "TimeAxis.html#Sch-data-TimeAxis-method-filterBy",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/data/TimeAxis.js",
        "private": false,
        "alias": null,
        "name": "filterBy",
        "owner": "Sch.data.TimeAxis",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 98,
        "deprecated": null,
        "doc": "<p>[Experimental] Filter the time axis by a function. The passed function will be called with each tick in time axis.\nIf the function returns true, the 'tick' is included otherwise it is filtered.</p>\n"
      },
      {
        "params": [
          {
            "type": "Date",
            "optional": false,
            "name": "startDate",
            "doc": "<p>The start date of the interval</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "endDate",
            "doc": "<p>The end date of the interval</p>\n"
          },
          {
            "type": "String",
            "optional": false,
            "name": "unit",
            "doc": "<p>The unit of the time axis</p>\n"
          },
          {
            "type": "Mixed",
            "optional": false,
            "name": "increment",
            "doc": "<p>The increment for the unit specified.</p>\n"
          }
        ],
        "html_filename": "TimeAxis.html",
        "shortDoc": "Method generating the ticks for this time axis. ...",
        "static": false,
        "href": "TimeAxis.html#Sch-data-TimeAxis-method-generateTicks",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/data/TimeAxis.js",
        "private": false,
        "alias": null,
        "name": "generateTicks",
        "owner": "Sch.data.TimeAxis",
        "return": {
          "type": "Array",
          "doc": "<p>ticks The ticks representing the time axis</p>\n"
        },
        "linenr": 128,
        "deprecated": null,
        "doc": "<p>Method generating the ticks for this time axis. Should return an array of ticks. Each tick is an object of the following structure:</p>\n\n<pre><code>    {\n        start       : ..., // start date\n        end         : ...  // end date\n    }\n</code></pre>\n"
      },
      {
        "params": [
          {
            "type": "Float",
            "optional": false,
            "name": "tick",
            "doc": "<p>the tick \"coordinate\"</p>\n"
          }
        ],
        "html_filename": "TimeAxis.html",
        "shortDoc": "Gets the tick with start and end date for the indicated tick index ...",
        "static": false,
        "href": "TimeAxis.html#Sch-data-TimeAxis-method-getAt",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/data/TimeAxis.js",
        "private": false,
        "alias": null,
        "name": "getAt",
        "owner": "Sch.data.TimeAxis",
        "return": {
          "type": "Object",
          "doc": "<p>The tick object containing a \"start\" date and an \"end\" date.</p>\n"
        },
        "linenr": 233,
        "deprecated": null,
        "doc": "<p>Gets the tick with start and end date for the indicated tick index</p>\n"
      },
      {
        "params": [
          {
            "type": "Float",
            "optional": false,
            "name": "tick",
            "doc": "<p>the tick \"coordinate\"</p>\n"
          },
          {
            "type": "String",
            "optional": false,
            "name": "roundingMethod",
            "doc": "<p>The rounding method to use</p>\n"
          }
        ],
        "html_filename": "TimeAxis.html",
        "shortDoc": "Gets the time represented by a tick \"coordinate\". ...",
        "static": false,
        "href": "TimeAxis.html#Sch-data-TimeAxis-method-getDateFromTick",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/data/TimeAxis.js",
        "private": false,
        "alias": null,
        "name": "getDateFromTick",
        "owner": "Sch.data.TimeAxis",
        "return": {
          "type": "Date",
          "doc": "<p>The date to represented by the tick \"coordinate\", or null if invalid.</p>\n"
        },
        "linenr": 207,
        "deprecated": null,
        "doc": "<p>Gets the time represented by a tick \"coordinate\".</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "TimeAxis.html",
        "shortDoc": "Method to get a the current end date of the time axis ...",
        "static": false,
        "href": "TimeAxis.html#Sch-data-TimeAxis-method-getEnd",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/data/TimeAxis.js",
        "private": false,
        "alias": null,
        "name": "getEnd",
        "owner": "Sch.data.TimeAxis",
        "return": {
          "type": "Date",
          "doc": "<p>The end date</p>\n"
        },
        "linenr": 263,
        "deprecated": null,
        "doc": "<p>Method to get a the current end date of the time axis</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "TimeAxis.html",
        "shortDoc": "Method to get the current start date of the time axis ...",
        "static": false,
        "href": "TimeAxis.html#Sch-data-TimeAxis-method-getStart",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/data/TimeAxis.js",
        "private": false,
        "alias": null,
        "name": "getStart",
        "owner": "Sch.data.TimeAxis",
        "return": {
          "type": "Date",
          "doc": "<p>The start date</p>\n"
        },
        "linenr": 255,
        "deprecated": null,
        "doc": "<p>Method to get the current start date of the time axis</p>\n"
      },
      {
        "params": [
          {
            "type": "Date",
            "optional": false,
            "name": "date",
            "doc": "<p>the date to get x coordinate for</p>\n"
          }
        ],
        "html_filename": "TimeAxis.html",
        "shortDoc": "Gets a tick coordinate representing the date parameter on the time scale ...",
        "static": false,
        "href": "TimeAxis.html#Sch-data-TimeAxis-method-getTickFromDate",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/data/TimeAxis.js",
        "private": false,
        "alias": null,
        "name": "getTickFromDate",
        "owner": "Sch.data.TimeAxis",
        "return": {
          "type": "Float",
          "doc": "<p>the tick position on the scale</p>\n"
        },
        "linenr": 170,
        "deprecated": null,
        "doc": "<p>Gets a tick coordinate representing the date parameter on the time scale</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "TimeAxis.html",
        "shortDoc": "Returns true if the time axis is continuos (will return false when filtered) ...",
        "static": false,
        "href": "TimeAxis.html#Sch-data-TimeAxis-method-isContinuous",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/data/TimeAxis.js",
        "private": false,
        "alias": null,
        "name": "isContinuous",
        "owner": "Sch.data.TimeAxis",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "linenr": 112,
        "deprecated": null,
        "doc": "<p>Returns <code>true</code> if the time axis is continuos (will return <code>false</code> when filtered)</p>\n"
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
            "doc": "<p>The new end date</p>\n"
          }
        ],
        "html_filename": "TimeAxis.html",
        "shortDoc": "Changes the time axis timespan to the supplied start and end dates. ...",
        "static": false,
        "href": "TimeAxis.html#Sch-data-TimeAxis-method-setTimeSpan",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/data/TimeAxis.js",
        "private": false,
        "alias": null,
        "name": "setTimeSpan",
        "owner": "Sch.data.TimeAxis",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 83,
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
        "html_filename": "TimeAxis.html",
        "shortDoc": "Moves the time axis forward in time in units specified by the view preset shiftUnit, and by the amount specified by t...",
        "static": false,
        "href": "TimeAxis.html#Sch-data-TimeAxis-method-shiftNext",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/data/TimeAxis.js",
        "private": false,
        "alias": null,
        "name": "shiftNext",
        "owner": "Sch.data.TimeAxis",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 524,
        "deprecated": null,
        "doc": "<p>Moves the time axis forward in time in units specified by the view preset <code>shiftUnit</code>, and by the amount specified by the <code>shiftIncrement</code>\nconfig of the current view preset.</p>\n"
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
        "html_filename": "TimeAxis.html",
        "shortDoc": "Moves the time axis backward in time in units specified by the view preset shiftUnit, and by the amount specified by ...",
        "static": false,
        "href": "TimeAxis.html#Sch-data-TimeAxis-method-shiftPrevious",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/data/TimeAxis.js",
        "private": false,
        "alias": null,
        "name": "shiftPrevious",
        "owner": "Sch.data.TimeAxis",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 535,
        "deprecated": null,
        "doc": "<p>Moves the time axis backward in time in units specified by the view preset <code>shiftUnit</code>, and by the amount specified by the <code>shiftIncrement</code> config of the current view preset.</p>\n"
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
          }
        ],
        "html_filename": "TimeAxis.html",
        "shortDoc": "Returns true if the passed timespan is part of the current time axis (in whole or partially). ...",
        "static": false,
        "href": "TimeAxis.html#Sch-data-TimeAxis-method-timeSpanInAxis",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/data/TimeAxis.js",
        "private": false,
        "alias": null,
        "name": "timeSpanInAxis",
        "owner": "Sch.data.TimeAxis",
        "return": {
          "type": "boolean",
          "doc": "<p>true if the timespan is part of the timeaxis</p>\n"
        },
        "linenr": 564,
        "deprecated": null,
        "doc": "<p>Returns true if the passed timespan is part of the current time axis (in whole or partially).</p>\n"
      }
    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "cfg": [
      {
        "type": "Boolean",
        "html_filename": "TimeAxis.html",
        "shortDoc": "Set to false if the timeline is not continuous, e.g. ...",
        "static": false,
        "href": "TimeAxis.html#Sch-data-TimeAxis-cfg-continuous",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/data/TimeAxis.js",
        "private": false,
        "alias": null,
        "name": "continuous",
        "owner": "Sch.data.TimeAxis",
        "linenr": 37,
        "deprecated": null,
        "doc": "<p>Set to false if the timeline is not continuous, e.g. the next timespan does not start where the previous ended (for example skipping weekends etc).</p>\n"
      }
    ],
    "event": [
      {
        "params": [
          {
            "type": "Sch.data.TimeAxis",
            "optional": false,
            "name": "timeAxis",
            "doc": "<p>The timeAxis object</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "TimeAxis.html",
        "shortDoc": "Fires when the timeaxis has been reconfigured (e.g. ...",
        "static": false,
        "href": "TimeAxis.html#Sch-data-TimeAxis-event-reconfigure",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/data/TimeAxis.js",
        "private": false,
        "alias": null,
        "name": "reconfigure",
        "owner": "Sch.data.TimeAxis",
        "linenr": 51,
        "deprecated": null,
        "doc": "<p>Fires when the timeaxis has been reconfigured (e.g. new start/end date or unit/increment)</p>\n"
      }
    ]
  },
  "mixins": [

  ],
  "static": false,
  "href": "TimeAxis.html#Sch-data-TimeAxis",
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
  "filename": "../ExtScheduler2.x/js/Sch/data/TimeAxis.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Sch.data.TimeAxis",
  "extends": "Ext.util.Observable",
  "author": null,
  "allMixins": [

  ],
  "linenr": 9,
  "deprecated": null,
  "doc": "<p>A class representing the time axis of the scheduler. The scheduler timescale is based on the ticks generated by this class.\nThis is a pure \"data\" (model) representation of the time axis and has no UI elements.</p>\n\n<p>Time axis can be <a href=\"#/api/Sch.data.TimeAxis-cfg-continuous\" rel=\"Sch.data.TimeAxis-cfg-continuous\" class=\"docClass\">continuous</a> or not. In continuos time axis, each timespan start where the previous ended, in non-continuous - well, not.\nNon-continuous time axis can be used when want to filter out certain days (like weekends) from the time axis.</p>\n\n<p>To create a non-continuos time axis you have 2 options. First, you can create the time axis w/o unneeded timeframes from start.\nTo do that, subclass the time axis class and override the <a href=\"#/api/Sch.data.TimeAxis-method-generateTicks\" rel=\"Sch.data.TimeAxis-method-generateTicks\" class=\"docClass\">generateTicks</a> method. See the <code>noncontinuous-timeaxis</code> example.</p>\n\n<p>Second, you can call the <a href=\"#/api/Sch.data.TimeAxis-method-filterBy\" rel=\"Sch.data.TimeAxis-method-filterBy\" class=\"docClass\">filterBy</a> method of the time axis, passing the function to it, which should return <code>true</code> if the time tick should be filtered out.\nCalling the <a href=\"#/api/Sch.data.TimeAxis-method-clearFilter\" rel=\"Sch.data.TimeAxis-method-clearFilter\" class=\"docClass\">clearFilter</a> method will return you to full time axis.</p>\n"
});