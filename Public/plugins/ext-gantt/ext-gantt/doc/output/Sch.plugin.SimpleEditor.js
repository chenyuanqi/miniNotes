Ext.data.JsonP.Sch_plugin_SimpleEditor({
  "subclasses": [

  ],
  "html_filename": "SimpleEditor.html",
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
        "html_filename": "SimpleEditor.html",
        "shortDoc": "Required. ...",
        "static": false,
        "href": "SimpleEditor.html#Sch-plugin-SimpleEditor-cfg-dataIndex",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/SimpleEditor.js",
        "private": false,
        "alias": null,
        "name": "dataIndex",
        "owner": "Sch.plugin.SimpleEditor",
        "linenr": 44,
        "deprecated": null,
        "doc": "<p>Required. A field, contaning the task's title. This field will be updated by the editor. Default value is \"Name\".</p>\n"
      }
    ],
    "event": [

    ]
  },
  "mixins": [

  ],
  "static": false,
  "href": "SimpleEditor.html#Sch-plugin-SimpleEditor",
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
  "filename": "../ExtScheduler2.x/js/Sch/plugin/SimpleEditor.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Sch.plugin.SimpleEditor",
  "extends": "Ext.Editor",
  "author": null,
  "allMixins": [

  ],
  "linenr": 10,
  "deprecated": null,
  "doc": "<p>Simple plugin for editing event names/titles inline.</p>\n\n<p><p><img src=\"doc-resources/scheduler/images/simple-editor.png\" alt=\"\"></p></p>\n\n<p>To add this plugin to scheduler:</p>\n\n<pre><code>    var scheduler = Ext.create('Sch.panel.SchedulerGrid', {\n        ...\n\n        resourceStore   : resourceStore,\n        eventStore      : eventStore,\n\n        plugins         : [\n            Ext.create('Sch.plugin.SimpleEditor', { dataIndex : 'Title' })\n        ]\n    });\n</code></pre>\n"
});