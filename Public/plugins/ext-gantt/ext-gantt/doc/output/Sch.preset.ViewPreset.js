Ext.data.JsonP.Sch_preset_ViewPreset({
  "subclasses": [

  ],
  "html_filename": "ViewPreset.html",
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
        "type": "Int",
        "html_filename": "ViewPreset.html",
        "static": false,
        "href": "ViewPreset.html#Sch-preset-ViewPreset-cfg-defaultSpan",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/preset/ViewPreset.js",
        "private": false,
        "alias": null,
        "name": "defaultSpan",
        "owner": "Sch.preset.ViewPreset",
        "linenr": 74,
        "deprecated": null,
        "doc": "<p>The amount of time to show by default in a view (in the unit defined by the middle header)</p>\n"
      },
      {
        "type": "String",
        "html_filename": "ViewPreset.html",
        "static": false,
        "href": "ViewPreset.html#Sch-preset-ViewPreset-cfg-displayDateFormat",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/preset/ViewPreset.js",
        "private": false,
        "alias": null,
        "name": "displayDateFormat",
        "owner": "Sch.preset.ViewPreset",
        "linenr": 61,
        "deprecated": null,
        "doc": "<p>Defines how dates will be formatted in tooltips etc</p>\n"
      },
      {
        "type": "Object",
        "html_filename": "ViewPreset.html",
        "shortDoc": "An object containing one or more Sch.preset.ViewPresetHeaderRow rows defining how your headers shall be composed. ...",
        "static": false,
        "href": "ViewPreset.html#Sch-preset-ViewPreset-cfg-headerConfig",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/preset/ViewPreset.js",
        "private": false,
        "alias": null,
        "name": "headerConfig",
        "owner": "Sch.preset.ViewPreset",
        "linenr": 88,
        "deprecated": null,
        "doc": "<p>An object containing one or more <a href=\"#/api/Sch.preset.ViewPresetHeaderRow\" rel=\"Sch.preset.ViewPresetHeaderRow\" class=\"docClass\">Sch.preset.ViewPresetHeaderRow</a> rows defining how your headers shall be composed.\nYour 'main' unit should be the middle header unit. This object can contain \"bottom\", \"middle\" and \"top\" header definitions. The 'middle' header is mandatory.</p>\n"
      },
      {
        "type": "Int",
        "html_filename": "ViewPreset.html",
        "static": false,
        "href": "ViewPreset.html#Sch-preset-ViewPreset-cfg-resourceColumnWidth",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/preset/ViewPreset.js",
        "private": false,
        "alias": null,
        "name": "resourceColumnWidth",
        "owner": "Sch.preset.ViewPreset",
        "linenr": 57,
        "deprecated": null,
        "doc": "<p>The width of the resource column (only being used in vertical orientation)</p>\n"
      },
      {
        "type": "Int",
        "html_filename": "ViewPreset.html",
        "static": false,
        "href": "ViewPreset.html#Sch-preset-ViewPreset-cfg-rowHeight",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/preset/ViewPreset.js",
        "private": false,
        "alias": null,
        "name": "rowHeight",
        "owner": "Sch.preset.ViewPreset",
        "linenr": 53,
        "deprecated": null,
        "doc": "<p>The height of the row</p>\n"
      },
      {
        "type": "Int",
        "html_filename": "ViewPreset.html",
        "static": false,
        "href": "ViewPreset.html#Sch-preset-ViewPreset-cfg-shiftIncrement",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/preset/ViewPreset.js",
        "private": false,
        "alias": null,
        "name": "shiftIncrement",
        "owner": "Sch.preset.ViewPreset",
        "linenr": 70,
        "deprecated": null,
        "doc": "<p>The amount to shift (in shiftUnits)</p>\n"
      },
      {
        "type": "String",
        "html_filename": "ViewPreset.html",
        "shortDoc": "The unit to shift when calling shiftNext/shiftPrevious to navigate in the chart. ...",
        "static": false,
        "href": "ViewPreset.html#Sch-preset-ViewPreset-cfg-shiftUnit",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/preset/ViewPreset.js",
        "private": false,
        "alias": null,
        "name": "shiftUnit",
        "owner": "Sch.preset.ViewPreset",
        "linenr": 65,
        "deprecated": null,
        "doc": "<p>The unit to shift when calling shiftNext/shiftPrevious to navigate in the chart.\nValid values are \"MILLI\", \"SECOND\", \"MINUTE\", \"HOUR\", \"DAY\", \"WEEK\", \"MONTH\", \"QUARTER\", \"YEAR\".</p>\n"
      },
      {
        "type": "Int",
        "html_filename": "ViewPreset.html",
        "static": false,
        "href": "ViewPreset.html#Sch-preset-ViewPreset-cfg-timeColumnWidth",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/preset/ViewPreset.js",
        "private": false,
        "alias": null,
        "name": "timeColumnWidth",
        "owner": "Sch.preset.ViewPreset",
        "linenr": 49,
        "deprecated": null,
        "doc": "<p>The column width</p>\n"
      },
      {
        "type": "Object",
        "html_filename": "ViewPreset.html",
        "shortDoc": "An object containing a unit identifier and an increment variable. ...",
        "static": false,
        "href": "ViewPreset.html#Sch-preset-ViewPreset-cfg-timeResolution",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/preset/ViewPreset.js",
        "private": false,
        "alias": null,
        "name": "timeResolution",
        "owner": "Sch.preset.ViewPreset",
        "linenr": 78,
        "deprecated": null,
        "doc": "<p>An object containing a unit identifier and an increment variable. Example:</p>\n\n<pre><code>    timeResolution : {\n        unit        : \"HOUR\",  //Valid values are \"MILLI\", \"SECOND\", \"MINUTE\", \"HOUR\", \"DAY\", \"WEEK\", \"MONTH\", \"QUARTER\", \"YEAR\".\n        increment   : 1\n    }\n</code></pre>\n"
      }
    ],
    "event": [

    ]
  },
  "mixins": [

  ],
  "static": false,
  "href": "ViewPreset.html#Sch-preset-ViewPreset",
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
  "filename": "../ExtScheduler2.x/js/Sch/preset/ViewPreset.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Sch.preset.ViewPreset",
  "extends": "Ext.Base",
  "author": null,
  "allMixins": [

  ],
  "linenr": 11,
  "deprecated": null,
  "doc": "<p>Not used directly, but the properties below are rather provided inline as seen in the source of <a href=\"#/api/Sch.preset.Manager\" rel=\"Sch.preset.Manager\" class=\"docClass\">Sch.preset.Manager</a>. This class is just provided for documentation purposes.</p>\n\n<p>A sample preset looks like:</p>\n\n<pre><code>    hourAndDay : {\n        timeColumnWidth         : 60,       // Time column width (used for rowHeight in vertical mode)\n        rowHeight               : 24,       // Only used in horizontal orientation\n        resourceColumnWidth     : 100,      // Only used in vertical orientation\n\n        displayDateFormat       : 'G:i',    // Controls how dates will be displayed in tooltips etc\n\n        shiftIncrement          : 1,        // Controls how much time to skip when calling shiftNext and shiftPrevious.\n        shiftUnit               : \"DAY\",    // Valid values are \"MILLI\", \"SECOND\", \"MINUTE\", \"HOUR\", \"DAY\", \"WEEK\", \"MONTH\", \"QUARTER\", \"YEAR\".\n        defaultSpan             : 12,       // By default, if no end date is supplied to a view it will show 12 hours\n\n        timeResolution          : {         // Dates will be snapped to this resolution\n            unit        : \"MINUTE\",         // Valid values are \"MILLI\", \"SECOND\", \"MINUTE\", \"HOUR\", \"DAY\", \"WEEK\", \"MONTH\", \"QUARTER\", \"YEAR\".\n            increment   : 15\n        },\n\n        headerConfig            : {         // This defines your header, you must include a \"middle\" object, and top/bottom are optional. \n            middle      : {                 // For each row you can define \"unit\", \"increment\", \"dateFormat\", \"renderer\", \"align\", and \"scope\"\n                unit        : \"HOUR\",\n                dateFormat  : 'G:i'\n            },\n            top         : {\n                unit        : \"DAY\",\n                dateFormat  : 'D d/m'\n            }\n        }\n    },\n</code></pre>\n\n<p>See the <a href=\"#/api/Sch.preset.Manager\" rel=\"Sch.preset.Manager\" class=\"docClass\">Sch.preset.Manager</a> for the list of available presets.</p>\n"
});