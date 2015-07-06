Ext.data.JsonP.Sch_preset_Manager({
  "subclasses": [

  ],
  "html_filename": "Manager.html",
  "docauthor": null,
  "singleton": true,
  "code_type": "ext_define",
  "superclasses": [

  ],
  "members": {
    "property": [

    ],
    "method": [
      {
        "params": [
          {
            "type": "String",
            "optional": false,
            "name": "name",
            "doc": "<p>The name of the preset</p>\n"
          }
        ],
        "html_filename": "Manager.html",
        "shortDoc": "Deletes a view preset ...",
        "static": false,
        "href": "Manager.html#Sch-preset-Manager-method-deletePreset",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/preset/Manager.js",
        "private": false,
        "alias": null,
        "name": "deletePreset",
        "owner": "Sch.preset.Manager",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 124,
        "deprecated": null,
        "doc": "<p>Deletes a view preset</p>\n"
      },
      {
        "params": [
          {
            "type": "String",
            "optional": false,
            "name": "name",
            "doc": "<p>The name of the preset</p>\n"
          }
        ],
        "html_filename": "Manager.html",
        "shortDoc": "Fetches a view preset from the global cache ...",
        "static": false,
        "href": "Manager.html#Sch-preset-Manager-method-getPreset",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/preset/Manager.js",
        "private": false,
        "alias": null,
        "name": "getPreset",
        "owner": "Sch.preset.Manager",
        "return": {
          "type": "Object",
          "doc": "<p>The view preset, see <a href=\"#/api/Sch.preset.ViewPreset\" rel=\"Sch.preset.ViewPreset\" class=\"docClass\">Sch.preset.ViewPreset</a> for more information</p>\n"
        },
        "linenr": 115,
        "deprecated": null,
        "doc": "<p>Fetches a view preset from the global cache</p>\n"
      },
      {
        "params": [
          {
            "type": "String",
            "optional": false,
            "name": "name",
            "doc": "<p>The unique name identifying this preset</p>\n"
          },
          {
            "type": "Object",
            "optional": false,
            "name": "config",
            "doc": "<p>The configuration properties of the view preset (see <a href=\"#/api/Sch.preset.ViewPreset\" rel=\"Sch.preset.ViewPreset\" class=\"docClass\">Sch.preset.ViewPreset</a> for more information)</p>\n"
          }
        ],
        "html_filename": "Manager.html",
        "shortDoc": "Registers a new view preset to be used by any scheduler grid or tree on the page. ...",
        "static": false,
        "href": "Manager.html#Sch-preset-Manager-method-registerPreset",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/preset/Manager.js",
        "private": false,
        "alias": null,
        "name": "registerPreset",
        "owner": "Sch.preset.Manager",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 49,
        "deprecated": null,
        "doc": "<p>Registers a new view preset to be used by any scheduler grid or tree on the page.</p>\n"
      }
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
  "mixins": [

  ],
  "static": false,
  "href": "Manager.html#Sch-preset-Manager",
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
  "filename": "../ExtScheduler2.x/js/Sch/preset/Manager.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Sch.preset.Manager",
  "extends": "Ext.util.MixedCollection",
  "author": null,
  "allMixins": [

  ],
  "linenr": 11,
  "deprecated": null,
  "doc": "<p>Provides a registry of the possible view presets that any instance of an grid with <a href=\"#/api/Sch.mixin.SchedulerPanel\" rel=\"Sch.mixin.SchedulerPanel\" class=\"docClass\">Sch.mixin.SchedulerPanel</a> mixin can use.</p>\n\n<p>See the <a href=\"#/api/Sch.preset.ViewPreset\" rel=\"Sch.preset.ViewPreset\" class=\"docClass\">Sch.preset.ViewPreset</a>, <a href=\"#/api/Sch.preset.ViewPresetHeaderRow\" rel=\"Sch.preset.ViewPresetHeaderRow\" class=\"docClass\">Sch.preset.ViewPresetHeaderRow</a> and <a href=\"#/api/Sch.util.HeaderRenderers\" rel=\"Sch.util.HeaderRenderers\" class=\"docClass\">Sch.util.HeaderRenderers</a> for description of the view preset properties.</p>\n\n<p>Available presets are:</p>\n\n<ul>\n<li><code>hourAndDay</code> - creates 2 level headers - day and hours within it: <p><img src=\"doc-resources/scheduler/images/hourAndDay.png\" alt=\"\"></p></li>\n<li><code>dayAndWeek</code> - creates 2 level headers - week and days within it: <p><img src=\"doc-resources/scheduler/images/dayAndWeek.png\" alt=\"\"></p></li>\n<li><code>weekAndDay</code> - just like <code>dayAndWeek</code> but with different formatting: <p><img src=\"doc-resources/scheduler/images/weekAndDay.png\" alt=\"\"></p></li>\n<li><p><code>weekAndMonth</code> - creates 2 level headers - month and weeks within it: <p><img src=\"doc-resources/scheduler/images/weekAndMonth.png\" alt=\"\"></p></p></li>\n<li><p><code>monthAndYear</code> - creates 2 level headers - year and months within it: <p><img src=\"doc-resources/scheduler/images/monthAndYear.png\" alt=\"\"></p></p></li>\n<li><code>year</code> - creates 2 level headers - year and quarters within it: <p><img src=\"doc-resources/scheduler/images/year-preset.png\" alt=\"\"></p></li>\n<li><code>weekAndDayLetter</code> - creates a lightweight 2 level headers - weeks and days within it (days are not real columns).\n See <a href=\"#/api/Sch.util.HeaderRenderers\" rel=\"Sch.util.HeaderRenderers\" class=\"docClass\">Sch.util.HeaderRenderers</a> for details. <p><img src=\"doc-resources/scheduler/images/header-renderer2.png\" alt=\"\"></p></li>\n<li><code>weekDateAndMonth</code> - creates 2 level headers - month and weeks within it (weeks shown by first day only): <p><img src=\"doc-resources/scheduler/images/weekDateAndMonth.png\" alt=\"\"></p></li>\n</ul>\n\n\n<p>You can register your own preset with the <a href=\"#/api/Sch.preset.Manager-method-registerPreset\" rel=\"Sch.preset.Manager-method-registerPreset\" class=\"docClass\">registerPreset</a> call</p>\n"
});