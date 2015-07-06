Ext.data.JsonP.Gnt_plugin_Printable({
  "subclasses": [

  ],
  "html_filename": "Printable.html",
  "docauthor": null,
  "singleton": false,
  "code_type": "ext_define",
  "superclasses": [
    "Sch.plugin.Printable"
  ],
  "members": {
    "property": [

    ],
    "method": [
      {
        "params": [
          {
            "type": "SchedulerPanel",
            "optional": false,
            "name": "scheduler",
            "doc": "<p>The scheduler instance</p>\n"
          }
        ],
        "html_filename": "Printable2.html",
        "shortDoc": "An empty function by default, but provided so that you can perform a custom action\nafter the print plugin has extract...",
        "static": false,
        "href": "Printable2.html#Sch-plugin-Printable-method-afterPrint",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/Printable.js",
        "private": false,
        "alias": null,
        "name": "afterPrint",
        "owner": "Sch.plugin.Printable",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 58,
        "deprecated": null,
        "doc": "<p>An empty function by default, but provided so that you can perform a custom action\nafter the print plugin has extracted the data from the scheduler.</p>\n"
      },
      {
        "params": [
          {
            "type": "SchedulerPanel",
            "optional": false,
            "name": "scheduler",
            "doc": "<p>The scheduler instance</p>\n"
          }
        ],
        "html_filename": "Printable2.html",
        "shortDoc": "An empty function by default, but provided so that you can perform a custom action\nbefore the print plugin extracts d...",
        "static": false,
        "href": "Printable2.html#Sch-plugin-Printable-method-beforePrint",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/Printable.js",
        "private": false,
        "alias": null,
        "name": "beforePrint",
        "owner": "Sch.plugin.Printable",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 50,
        "deprecated": null,
        "doc": "<p>An empty function by default, but provided so that you can perform a custom action\nbefore the print plugin extracts data from the scheduler.</p>\n"
      },
      {
        "params": [

        ],
        "html_filename": "Printable2.html",
        "shortDoc": "Prints a scheduler panel. ...",
        "static": false,
        "href": "Printable2.html#Sch-plugin-Printable-method-print",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/Printable.js",
        "private": false,
        "alias": null,
        "name": "print",
        "owner": "Sch.plugin.Printable",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 151,
        "deprecated": null,
        "doc": "<p>Prints a scheduler panel. This method will be aliased to the main scheduler instance, so you can call it directly:</p>\n\n<pre><code> scheduler.print()\n</code></pre>\n"
      }
    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "cfg": [
      {
        "type": "Boolean",
        "html_filename": "Printable2.html",
        "shortDoc": "True to automatically call print and close the new window after printing. ...",
        "static": false,
        "href": "Printable2.html#Sch-plugin-Printable-cfg-autoPrintAndClose",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/Printable.js",
        "private": false,
        "alias": null,
        "name": "autoPrintAndClose",
        "owner": "Sch.plugin.Printable",
        "linenr": 66,
        "deprecated": null,
        "doc": "<p>True to automatically call print and close the new window after printing. Default value is <code>true</code></p>\n"
      },
      {
        "type": "String",
        "html_filename": "Printable2.html",
        "shortDoc": "This is the DOCTYPE to use for the print window. ...",
        "static": false,
        "href": "Printable2.html#Sch-plugin-Printable-cfg-docType",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/Printable.js",
        "private": false,
        "alias": null,
        "name": "docType",
        "owner": "Sch.plugin.Printable",
        "linenr": 39,
        "deprecated": null,
        "doc": "<p>This is the DOCTYPE to use for the print window. It should be the same DOCTYPE as on your application page.</p>\n"
      },
      {
        "type": "Ext.Template",
        "html_filename": "Printable2.html",
        "shortDoc": "Empty by default, but you can override this to use a custom event template used for printing. ...",
        "static": false,
        "href": "Printable2.html#Sch-plugin-Printable-cfg-printableEventTpl",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/Printable.js",
        "private": false,
        "alias": null,
        "name": "printableEventTpl",
        "owner": "Sch.plugin.Printable",
        "linenr": 44,
        "deprecated": null,
        "doc": "<p>Empty by default, but you can override this to use a custom event template used for printing.\nThis way you can make sure background-colors and icons are printed the way you want.</p>\n"
      }
    ],
    "event": [

    ]
  },
  "mixins": [

  ],
  "static": false,
  "href": "Printable.html#Gnt-plugin-Printable",
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
  "filename": "js//Gnt/plugin/Printable.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Gnt.plugin.Printable",
  "extends": "Sch.plugin.Printable",
  "author": null,
  "allMixins": [

  ],
  "linenr": 9,
  "deprecated": null,
  "doc": "<p>A plugin for printing the content of an Ext Gantt panel.</p>\n\n<p>You can add it to your gantt chart like any other plugin and it will add a new method <code>print</code> to the gantt panel itself:</p>\n\n<pre><code>var gantt = Ext.create('Gnt.panel.Gantt', {\n\n    plugins             : [\n        Ext.create(\"Gnt.plugin.Printable\")\n    ],\n    ...\n})\n\ngantt.print();\n</code></pre>\n"
});