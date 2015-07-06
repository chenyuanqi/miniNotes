Ext.data.JsonP.Sch_util_HeaderRenderers({
  "subclasses": [

  ],
  "html_filename": "HeaderRenderers.html",
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

    ],
    "event": [

    ]
  },
  "mixins": [

  ],
  "static": true,
  "href": "HeaderRenderers.html#Sch-util-HeaderRenderers",
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
  "filename": "../ExtScheduler2.x/js/Sch/util/HeaderRenderers.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Sch.util.HeaderRenderers",
  "extends": "Ext.Base",
  "author": null,
  "allMixins": [

  ],
  "linenr": 11,
  "deprecated": null,
  "doc": "<p>Utility class for providing helper methods used to render header cells. Helpers can be used to \"emulate\" heavier view presets with more lightweight ones.</p>\n\n<p>Normally, each unit in the time axis is represented with a separate column. This is very flexible solution, as it allows you to customize the presentation\nof each and every cell in the timeline. However, when the number of column grows, the DOM structure becomes more and more heavier.\nSo, in cases, when the customization of an arbitrary cell is not required, you can use one of this lightweight renderers to only \"emulate\" the small time units.</p>\n\n<p>For example see this screenshot: <p><img src=\"doc-resources/scheduler/images/header-renderer2.png\" alt=\"\"></p></p>\n\n<p>It might seemed, that it was generated for the preset with \"days\" resolution. However, it uses \"weeks\" for both bottom and middle rows and for bottom row it uses\nthe <code>dayLetter</code> header renderer (see the <code>weekAndDayLetter</code> view preset).</p>\n\n<p>To use the helper, specify the it as the <code>renderer</code> property of the <a href=\"#/api/Sch.preset.ViewPresetHeaderRow\" rel=\"Sch.preset.ViewPresetHeaderRow\" class=\"docClass\">Sch.preset.ViewPresetHeaderRow</a>, like this:</p>\n\n<pre><code>headerConfig : {\n     bottom         : {\n        unit        : \"WEEK\",\n        increment   : 1,\n        renderer    : function() {\n            return Sch.util.HeaderRenderers.dayLetter.apply(this, arguments);\n        }\n    },\n    middle : {\n        unit        : \"WEEK\",\n        dateFormat  : 'D d M Y',\n        align       : 'left'\n    }\n}\n</code></pre>\n\n<p>Available helpers are:</p>\n\n<ul>\n<li><code>quarterMinute</code> - outputs the quarter of the minute or hour: 00 / 15 / 30 / 45</li>\n<li><code>dateNumber</code> - outputs the the number of day: <p><img src=\"doc-resources/scheduler/images/dateNumber.png\" alt=\"\"></p></li>\n<li><code>dayLetter</code> - outputs the single letter name for each day: <p><img src=\"doc-resources/scheduler/images/header-renderer2.png\" alt=\"\"></p></li>\n<li><code>dayStartEndHours</code> - outputs the start and end hours for each date <p><img src=\"doc-resources/scheduler/images/header-renderer1.png\" alt=\"\"></p></li>\n</ul>\n\n\n<p>There's also a special \"meta\" helper, which when being called, will return a usual helper, suitable for usage as <code>renderer</code>. Its called <code>dateCells</code> and accepths the following signature:</p>\n\n<pre><code>dateCells : function(unit, increment, format) {}\n</code></pre>\n\n<p>So, for example the <code>dateNumber</code> helper can be received as, <code>dateCells(Sch.util.Date.DAY, 1, 'd')</code></p>\n"
});