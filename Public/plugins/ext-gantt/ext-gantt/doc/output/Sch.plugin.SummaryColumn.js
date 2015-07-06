Ext.data.JsonP.Sch_plugin_SummaryColumn({
  "subclasses": [

  ],
  "html_filename": "SummaryColumn.html",
  "docauthor": null,
  "singleton": false,
  "code_type": "ext_define",
  "superclasses": [

  ],
  "members": {
    "property": [

    ],
    "method": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "cfg": [
      {
        "type": "String",
        "html_filename": "SummaryColumn.html",
        "static": false,
        "href": "SummaryColumn.html#Sch-plugin-SummaryColumn-cfg-dayText",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/SummaryColumn.js",
        "private": false,
        "alias": null,
        "name": "dayText",
        "owner": "Sch.plugin.SummaryColumn",
        "linenr": 51,
        "deprecated": null,
        "doc": "<p>The text to show after a period of days, only applicable if <code>showPercent</code> is false</p>\n"
      },
      {
        "type": "String",
        "html_filename": "SummaryColumn.html",
        "static": false,
        "href": "SummaryColumn.html#Sch-plugin-SummaryColumn-cfg-hourText",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/SummaryColumn.js",
        "private": false,
        "alias": null,
        "name": "hourText",
        "owner": "Sch.plugin.SummaryColumn",
        "linenr": 56,
        "deprecated": null,
        "doc": "<p>The text to show after a period of hours, only applicable if <code>showPercent</code> is false</p>\n"
      },
      {
        "type": "String",
        "html_filename": "SummaryColumn.html",
        "static": false,
        "href": "SummaryColumn.html#Sch-plugin-SummaryColumn-cfg-minuteText",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/SummaryColumn.js",
        "private": false,
        "alias": null,
        "name": "minuteText",
        "owner": "Sch.plugin.SummaryColumn",
        "linenr": 61,
        "deprecated": null,
        "doc": "<p>The text to show after a period of minutes, only applicable if <code>showPercent</code> is false</p>\n"
      },
      {
        "type": "Int",
        "html_filename": "SummaryColumn.html",
        "static": false,
        "href": "SummaryColumn.html#Sch-plugin-SummaryColumn-cfg-nbrDecimals",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/SummaryColumn.js",
        "private": false,
        "alias": null,
        "name": "nbrDecimals",
        "owner": "Sch.plugin.SummaryColumn",
        "linenr": 46,
        "deprecated": null,
        "doc": "<p>The number of decimals to show, only applicable when <code>showPercent</code> is set to false</p>\n"
      },
      {
        "type": "Boolean",
        "html_filename": "SummaryColumn.html",
        "shortDoc": "True to show percentage values, false to show summarized time. ...",
        "static": false,
        "href": "SummaryColumn.html#Sch-plugin-SummaryColumn-cfg-showPercent",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/SummaryColumn.js",
        "private": false,
        "alias": null,
        "name": "showPercent",
        "owner": "Sch.plugin.SummaryColumn",
        "linenr": 41,
        "deprecated": null,
        "doc": "<p>True to show percentage values, false to show summarized time. Default value is <code>false</code>.</p>\n"
      }
    ],
    "event": [

    ]
  },
  "mixins": [

  ],
  "static": false,
  "href": "SummaryColumn.html#Sch-plugin-SummaryColumn",
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
  "filename": "../ExtScheduler2.x/js/Sch/plugin/SummaryColumn.js",
  "private": false,
  "xtypes": [
    "summarycolumn"
  ],
  "alias": null,
  "name": "Sch.plugin.SummaryColumn",
  "extends": "Ext.grid.column.Column",
  "author": null,
  "allMixins": [

  ],
  "linenr": 11,
  "deprecated": null,
  "doc": "<p>Plugin, showing the currently allocated time for the resources. It will simply summarize the durations <strong>of the events that are in the current view</strong>.\nThe information can be displayed as either a time unit or a percentage of the available time.</p>\n\n<p>To add this plugin to scheduler:</p>\n\n<pre><code>    var scheduler = Ext.create('Sch.panel.SchedulerGrid', {\n        resourceStore   : resourceStore,\n        eventStore      : eventStore,\n\n        columns         : [\n            ...\n            {\n                xtype       : 'summarycolumn',\n                header      : '% allocated',\n                showPercent : true\n            },\n            ...\n        ]\n    });\n</code></pre>\n"
});