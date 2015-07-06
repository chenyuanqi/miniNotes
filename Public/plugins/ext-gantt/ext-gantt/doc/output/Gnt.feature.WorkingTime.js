Ext.data.JsonP.Gnt_feature_WorkingTime({
  "subclasses": [

  ],
  "html_filename": "WorkingTime.html",
  "docauthor": null,
  "singleton": false,
  "code_type": "ext_define",
  "superclasses": [
    "Sch.feature.AbstractTimeSpan",
    "Sch.plugin.Zones"
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
        "type": "Gnt.data.Calendar",
        "html_filename": "WorkingTime.html",
        "static": false,
        "href": "WorkingTime.html#Gnt-feature-WorkingTime-cfg-calendar",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/feature/WorkingTime.js",
        "private": false,
        "alias": null,
        "name": "calendar",
        "owner": "Gnt.feature.WorkingTime",
        "linenr": 29,
        "deprecated": null,
        "doc": "<p>The calendar to extract the holidays from</p>\n"
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
      }
    ],
    "event": [

    ]
  },
  "mixins": [

  ],
  "static": false,
  "href": "WorkingTime.html#Gnt-feature-WorkingTime",
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
  "filename": "js//Gnt/feature/WorkingTime.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Gnt.feature.WorkingTime",
  "extends": "Sch.plugin.Zones",
  "author": null,
  "allMixins": [

  ],
  "linenr": 9,
  "deprecated": null,
  "doc": "<p>A simple subclass of the <a href=\"#/api/Sch.plugin.Zones\" rel=\"Sch.plugin.Zones\" class=\"docClass\">Sch.plugin.Zones</a> which highlights holidays/weekends on the gantt chart.\nGenerally, there's no need to instantiate it manually, it can be activated with the <a href=\"#/api/Gnt.panel.Gantt-cfg-highlightWeekends\" rel=\"Gnt.panel.Gantt-cfg-highlightWeekends\" class=\"docClass\">Gnt.panel.Gantt.highlightWeekends</a> configuration option.</p>\n\n<p><p><img src=\"doc-resources/gantt/images/plugin-working-time.png\" alt=\"\"></p></p>\n\n<p>Note, that the holidays/weekends will only be shown when the resolution of the time axis is weeks or less.</p>\n"
});