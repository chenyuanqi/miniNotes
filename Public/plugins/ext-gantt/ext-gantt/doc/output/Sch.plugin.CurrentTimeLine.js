Ext.data.JsonP.Sch_plugin_CurrentTimeLine({
  "subclasses": [

  ],
  "html_filename": "CurrentTimeLine.html",
  "docauthor": null,
  "singleton": false,
  "code_type": "ext_define",
  "superclasses": [
    "Sch.feature.AbstractTimeSpan",
    "Sch.plugin.Lines"
  ],
  "members": {
    "property": [
      {
        "type": "String",
        "html_filename": "AbstractTimeSpan.html",
        "static": false,
        "href": "AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-property-cls",
        "protected": false,
        "inheritable": false,
        "tagname": "property",
        "filename": "../ExtScheduler2.x/js/Sch/feature/AbstractTimeSpan.js",
        "private": false,
        "alias": null,
        "name": "cls",
        "owner": "Sch.feature.AbstractTimeSpan",
        "linenr": 26,
        "deprecated": null,
        "doc": "<p>Unique css class to be able to identify only the zones belonging to this plugin</p>\n"
      }
    ],
    "method": [
      {
        "params": [

        ],
        "html_filename": "AbstractTimeSpan.html",
        "shortDoc": "Returns the currently rendered DOM elements of this plugin (if any), as the Ext.CompositeElementLite instance. ...",
        "static": false,
        "href": "AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-method-getElements",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/feature/AbstractTimeSpan.js",
        "private": false,
        "alias": null,
        "name": "getElements",
        "owner": "Sch.feature.AbstractTimeSpan",
        "return": {
          "type": "Ext.CompositeElementLite",
          "doc": "\n"
        },
        "linenr": 63,
        "deprecated": null,
        "doc": "<p>Returns the currently rendered DOM elements of this plugin (if any), as the Ext.CompositeElementLite instance.</p>\n"
      },
      {
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "name": "disabled",
            "doc": "<p>Pass <code>true</code> to disable the plugin (and remove all lines)</p>\n"
          }
        ],
        "html_filename": "AbstractTimeSpan.html",
        "shortDoc": " ...",
        "static": false,
        "href": "AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-method-setDisabled",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/feature/AbstractTimeSpan.js",
        "private": false,
        "alias": null,
        "name": "setDisabled",
        "owner": "Sch.feature.AbstractTimeSpan",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 51,
        "deprecated": null,
        "doc": "\n"
      }
    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "cfg": [
      {
        "type": "Boolean",
        "html_filename": "CurrentTimeLine.html",
        "shortDoc": "true to automatically update the line position over time. ...",
        "static": false,
        "href": "CurrentTimeLine.html#Sch-plugin-CurrentTimeLine-cfg-autoUpdate",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/CurrentTimeLine.js",
        "private": false,
        "alias": null,
        "name": "autoUpdate",
        "owner": "Sch.plugin.CurrentTimeLine",
        "linenr": 45,
        "deprecated": null,
        "doc": "<p>true to automatically update the line position over time. Default value is <code>true</code></p>\n"
      },
      {
        "type": "Ext.data.Store",
        "html_filename": "AbstractTimeSpan.html",
        "static": false,
        "href": "AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-cfg-store",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/feature/AbstractTimeSpan.js",
        "private": false,
        "alias": null,
        "name": "store",
        "owner": "Sch.feature.AbstractTimeSpan",
        "linenr": 36,
        "deprecated": null,
        "doc": "<p>A store with timespan data</p>\n"
      },
      {
        "type": "Ext.XTemplate",
        "html_filename": "AbstractTimeSpan.html",
        "static": false,
        "href": "AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan-cfg-template",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/feature/AbstractTimeSpan.js",
        "private": false,
        "alias": null,
        "name": "template",
        "owner": "Sch.feature.AbstractTimeSpan",
        "linenr": 31,
        "deprecated": null,
        "doc": "<p>Template to render the timespan elements</p>\n"
      },
      {
        "type": "String",
        "html_filename": "CurrentTimeLine.html",
        "static": false,
        "href": "CurrentTimeLine.html#Sch-plugin-CurrentTimeLine-cfg-tooltipText",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/CurrentTimeLine.js",
        "private": false,
        "alias": null,
        "name": "tooltipText",
        "owner": "Sch.plugin.CurrentTimeLine",
        "linenr": 35,
        "deprecated": null,
        "doc": "<p>The text to show in the tooltip next to the current time (defaults to 'Current time').</p>\n"
      },
      {
        "type": "Int",
        "html_filename": "CurrentTimeLine.html",
        "shortDoc": "This value (in ms) defines how often the timeline shall be refreshed. ...",
        "static": false,
        "href": "CurrentTimeLine.html#Sch-plugin-CurrentTimeLine-cfg-updateInterval",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/CurrentTimeLine.js",
        "private": false,
        "alias": null,
        "name": "updateInterval",
        "owner": "Sch.plugin.CurrentTimeLine",
        "linenr": 40,
        "deprecated": null,
        "doc": "<p>This value (in ms) defines how often the timeline shall be refreshed. Defaults to every once every minute.</p>\n"
      }
    ],
    "event": [

    ]
  },
  "mixins": [

  ],
  "static": false,
  "href": "CurrentTimeLine.html#Sch-plugin-CurrentTimeLine",
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
  "filename": "../ExtScheduler2.x/js/Sch/plugin/CurrentTimeLine.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Sch.plugin.CurrentTimeLine",
  "extends": "Sch.plugin.Lines",
  "author": null,
  "allMixins": [

  ],
  "linenr": 11,
  "deprecated": null,
  "doc": "<p>Plugin indicating the current date and time as a line in the schedule.</p>\n\n<p>To add this plugin to scheduler:</p>\n\n<pre><code>    var scheduler = Ext.create('Sch.panel.SchedulerGrid', {\n        ...\n\n        resourceStore   : resourceStore,\n        eventStore      : eventStore,\n\n        plugins         : [\n            Ext.create('Sch.plugin.CurrentTimeLine', { updateInterval : 30000 })\n        ]\n    });\n</code></pre>\n"
});