Ext.data.JsonP.Sch_plugin_DragSelector({
  "subclasses": [

  ],
  "html_filename": "DragSelector.html",
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
  "static": false,
  "href": "DragSelector.html#Sch-plugin-DragSelector",
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
  "filename": "../ExtScheduler2.x/js/Sch/plugin/DragSelector.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Sch.plugin.DragSelector",
  "extends": "Ext.util.Observable",
  "author": null,
  "allMixins": [

  ],
  "linenr": 11,
  "deprecated": null,
  "doc": "<p>Plugin for selecting multiple events by \"dragging\" an area in the scheduler chart. Currently only enabled <strong>when CTRL is pressed</strong></p>\n\n<p><p><img src=\"doc-resources/scheduler/images/drag-selector.png\" alt=\"\"></p></p>\n\n<p>To add this plugin to scheduler:</p>\n\n<pre><code>    var scheduler = Ext.create('Sch.panel.SchedulerGrid', {\n        ...\n\n        resourceStore   : resourceStore,\n        eventStore      : eventStore,\n\n        plugins         : [\n            Ext.create('Sch.plugin.DragSelector')\n        ]\n    });\n</code></pre>\n"
});