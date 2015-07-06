Ext.data.JsonP.Sch_plugin_Pan({
  "subclasses": [

  ],
  "html_filename": "Pan.html",
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
        "type": "Boolean",
        "html_filename": "Pan.html",
        "static": false,
        "href": "Pan.html#Sch-plugin-Pan-cfg-enableVerticalPan",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/Pan.js",
        "private": false,
        "alias": null,
        "name": "enableVerticalPan",
        "owner": "Sch.plugin.Pan",
        "linenr": 34,
        "deprecated": null,
        "doc": "<p>True to allow vertical panning</p>\n"
      }
    ],
    "event": [

    ]
  },
  "mixins": [

  ],
  "static": false,
  "href": "Pan.html#Sch-plugin-Pan",
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
  "filename": "../ExtScheduler2.x/js/Sch/plugin/Pan.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Sch.plugin.Pan",
  "extends": "Ext.Base",
  "author": null,
  "allMixins": [

  ],
  "linenr": 11,
  "deprecated": null,
  "doc": "<p>A plugin enabling panning by clicking and dragging in a LockingGridView.</p>\n\n<p>To add this plugin to scheduler:</p>\n\n<pre><code>    var scheduler = Ext.create('Sch.panel.SchedulerGrid', {\n        ...\n\n        resourceStore   : resourceStore,\n        eventStore      : eventStore,\n\n        plugins         : [\n            Ext.create('Sch.plugin.Pan', { enableVerticalPan : true })\n        ]\n    });\n</code></pre>\n"
});