Ext.data.JsonP.Sch_feature_AbstractTimeSpan({
  "subclasses": [
    "Sch.plugin.Lines",
    "Sch.plugin.Zones"
  ],
  "html_filename": "AbstractTimeSpan.html",
  "docauthor": null,
  "singleton": false,
  "code_type": "ext_define",
  "superclasses": [

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
  "href": "AbstractTimeSpan.html#Sch-feature-AbstractTimeSpan",
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
  "filename": "../ExtScheduler2.x/js/Sch/feature/AbstractTimeSpan.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Sch.feature.AbstractTimeSpan",
  "extends": "Ext.util.Observable",
  "author": null,
  "allMixins": [

  ],
  "linenr": 11,
  "deprecated": null,
  "doc": "<p>Plugin for visualizing \"global\" time span in the scheduler grid, these can by styled easily using just CSS. This is an abstract class not intended for direct use.</p>\n"
});