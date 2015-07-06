Ext.data.JsonP.Sch_preset_ViewPresetHeaderRow({
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
        "type": "Function",
        "html_filename": "ViewPreset.html",
        "shortDoc": "A function that should return an array of objects containing 'start', 'end' and 'header' properties. ...",
        "static": false,
        "href": "ViewPreset.html#Sch-preset-ViewPresetHeaderRow-cfg-cellGenerator",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/preset/ViewPreset.js",
        "private": false,
        "alias": null,
        "name": "cellGenerator",
        "owner": "Sch.preset.ViewPresetHeaderRow",
        "linenr": 154,
        "deprecated": null,
        "doc": "<p>A function that should return an array of objects containing 'start', 'end' and 'header' properties.\nUse this if you want full control over how the header rows are generated. This is not applicable for the lowest row in your configuration.</p>\n"
      },
      {
        "type": "String",
        "html_filename": "ViewPreset.html",
        "static": false,
        "href": "ViewPreset.html#Sch-preset-ViewPresetHeaderRow-cfg-dateFormat",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/preset/ViewPreset.js",
        "private": false,
        "alias": null,
        "name": "dateFormat",
        "owner": "Sch.preset.ViewPresetHeaderRow",
        "linenr": 129,
        "deprecated": null,
        "doc": "<p>Defines how the cell date will be formatted</p>\n"
      },
      {
        "type": "Int",
        "html_filename": "ViewPreset.html",
        "shortDoc": "The number of units each header cell will represent (e.g. ...",
        "static": false,
        "href": "ViewPreset.html#Sch-preset-ViewPresetHeaderRow-cfg-increment",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/preset/ViewPreset.js",
        "private": false,
        "alias": null,
        "name": "increment",
        "owner": "Sch.preset.ViewPresetHeaderRow",
        "linenr": 125,
        "deprecated": null,
        "doc": "<p>The number of units each header cell will represent (e.g. 30 together with unit: \"MINUTE\" for 30 minute cells)</p>\n"
      },
      {
        "type": "Function",
        "html_filename": "ViewPreset.html",
        "shortDoc": "A custom renderer function used to render the cell contents. ...",
        "static": false,
        "href": "ViewPreset.html#Sch-preset-ViewPresetHeaderRow-cfg-renderer",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/preset/ViewPreset.js",
        "private": false,
        "alias": null,
        "name": "renderer",
        "owner": "Sch.preset.ViewPresetHeaderRow",
        "linenr": 133,
        "deprecated": null,
        "doc": "<p>A custom renderer function used to render the cell contents.\nThe render function is called with the following parameters:</p>\n\n<ul>\n<li><code>startDate</code> : Date - The start date of the cell.</li>\n<li><code>endDate</code> : Date - The end date of the cell</li>\n<li><code>headerConfig</code> : Object - An object containing the header config object. You can set 'align' (for text-align) and headerCls (a CSS class added to the cell) properties on it.</li>\n<li><code>i</code> : Int - The index of the cell in the row.</li>\n</ul>\n\n\n<p>Example :</p>\n\n<pre><code>function (startDate, endDate, headerConfig, i) {\n    headerConfig.align = \"left\";\n}\n</code></pre>\n"
      },
      {
        "type": "Object",
        "html_filename": "ViewPreset.html",
        "static": false,
        "href": "ViewPreset.html#Sch-preset-ViewPresetHeaderRow-cfg-scope",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/preset/ViewPreset.js",
        "private": false,
        "alias": null,
        "name": "scope",
        "owner": "Sch.preset.ViewPresetHeaderRow",
        "linenr": 150,
        "deprecated": null,
        "doc": "<p>The scope to use for the renderer function</p>\n"
      },
      {
        "type": "String",
        "html_filename": "ViewPreset.html",
        "shortDoc": "The unit of time represented by each cell in this header row. ...",
        "static": false,
        "href": "ViewPreset.html#Sch-preset-ViewPresetHeaderRow-cfg-unit",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/preset/ViewPreset.js",
        "private": false,
        "alias": null,
        "name": "unit",
        "owner": "Sch.preset.ViewPresetHeaderRow",
        "linenr": 120,
        "deprecated": null,
        "doc": "<p>The unit of time represented by each cell in this header row. See also increment property.\nValid values are \"MILLI\", \"SECOND\", \"MINUTE\", \"HOUR\", \"DAY\", \"WEEK\", \"MONTH\", \"QUARTER\", \"YEAR\".</p>\n"
      }
    ],
    "event": [

    ]
  },
  "mixins": [

  ],
  "static": false,
  "href": "ViewPreset.html#Sch-preset-ViewPresetHeaderRow",
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
  "name": "Sch.preset.ViewPresetHeaderRow",
  "extends": "Ext.Base",
  "author": null,
  "allMixins": [

  ],
  "linenr": 95,
  "deprecated": null,
  "doc": "<p>A part of <a href=\"#/api/Sch.preset.ViewPreset\" rel=\"Sch.preset.ViewPreset\" class=\"docClass\">Sch.preset.ViewPreset</a> declaration. Not used directly, but the properties below are rather provided\ninline as seen in sources of <a href=\"#/api/Sch.preset.Manager\" rel=\"Sch.preset.Manager\" class=\"docClass\">Sch.preset.Manager</a>. This class is just provided for documentation purposes.</p>\n\n<p>A sample header configuration will looks like:</p>\n\n<pre><code>    headerConfig    : {\n         bottom     : {\n            unit        : \"WEEK\",\n            increment   : 1,\n            renderer    : function() {\n                return Sch.util.HeaderRenderers.dayLetter.apply(this, arguments);\n            }\n        },\n        middle : {\n            unit        : \"WEEK\",\n            dateFormat  : 'D d M Y',\n            align       : 'left'\n        }\n    }\n</code></pre>\n"
});