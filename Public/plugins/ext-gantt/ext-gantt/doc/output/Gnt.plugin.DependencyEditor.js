Ext.data.JsonP.Gnt_plugin_DependencyEditor({
  "subclasses": [

  ],
  "html_filename": "DependencyEditor.html",
  "docauthor": null,
  "singleton": false,
  "code_type": "ext_define",
  "superclasses": [

  ],
  "members": {
    "property": [

    ],
    "method": [
      {
        "params": [

        ],
        "html_filename": "DependencyEditor.html",
        "shortDoc": "This method is being called during form initialization. ...",
        "static": false,
        "href": "DependencyEditor.html#Gnt-plugin-DependencyEditor-method-buildFields",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/plugin/DependencyEditor.js",
        "private": false,
        "alias": null,
        "name": "buildFields",
        "owner": "Gnt.plugin.DependencyEditor",
        "return": {
          "type": "Array",
          "doc": "\n"
        },
        "linenr": 164,
        "deprecated": null,
        "doc": "<p>This method is being called during form initialization. It should return an array of fields, which will be assigned to <code>items</code> property.</p>\n"
      },
      {
        "params": [
          {
            "type": "Record",
            "optional": false,
            "name": "dependencyRecord",
            "doc": "<p>The record to show in the editor panel</p>\n"
          },
          {
            "type": "Array",
            "optional": false,
            "name": "xy",
            "doc": "<p>the coordinates where the window should be shown</p>\n"
          }
        ],
        "html_filename": "DependencyEditor.html",
        "shortDoc": "Expands the editor ...",
        "static": false,
        "href": "DependencyEditor.html#Gnt-plugin-DependencyEditor-method-show",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/plugin/DependencyEditor.js",
        "private": false,
        "alias": null,
        "name": "show",
        "owner": "Gnt.plugin.DependencyEditor",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 144,
        "deprecated": null,
        "doc": "<p>Expands the editor</p>\n"
      }
    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "cfg": [
      {
        "type": "String",
        "html_filename": "DependencyEditor.html",
        "static": false,
        "href": "DependencyEditor.html#Gnt-plugin-DependencyEditor-cfg-endToEndText",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/plugin/DependencyEditor.js",
        "private": false,
        "alias": null,
        "name": "endToEndText",
        "owner": "Gnt.plugin.DependencyEditor",
        "linenr": 80,
        "deprecated": null,
        "doc": "<p>The text for <code>end-to-end</code> dependency type</p>\n"
      },
      {
        "type": "String",
        "html_filename": "DependencyEditor.html",
        "static": false,
        "href": "DependencyEditor.html#Gnt-plugin-DependencyEditor-cfg-endToStartText",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/plugin/DependencyEditor.js",
        "private": false,
        "alias": null,
        "name": "endToStartText",
        "owner": "Gnt.plugin.DependencyEditor",
        "linenr": 70,
        "deprecated": null,
        "doc": "<p>The text for <code>end-to-start</code> dependency type</p>\n"
      },
      {
        "type": "String",
        "html_filename": "DependencyEditor.html",
        "static": false,
        "href": "DependencyEditor.html#Gnt-plugin-DependencyEditor-cfg-fromText",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/plugin/DependencyEditor.js",
        "private": false,
        "alias": null,
        "name": "fromText",
        "owner": "Gnt.plugin.DependencyEditor",
        "linenr": 50,
        "deprecated": null,
        "doc": "<p>The text to before the From label</p>\n"
      },
      {
        "type": "Boolean",
        "html_filename": "DependencyEditor.html",
        "static": false,
        "href": "DependencyEditor.html#Gnt-plugin-DependencyEditor-cfg-hideOnBlur",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/plugin/DependencyEditor.js",
        "private": false,
        "alias": null,
        "name": "hideOnBlur",
        "owner": "Gnt.plugin.DependencyEditor",
        "linenr": 45,
        "deprecated": null,
        "doc": "<p>True to hide this panel if a click is detected outside the panel (defaults to true)</p>\n"
      },
      {
        "type": "String",
        "html_filename": "DependencyEditor.html",
        "static": false,
        "href": "DependencyEditor.html#Gnt-plugin-DependencyEditor-cfg-lagText",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/plugin/DependencyEditor.js",
        "private": false,
        "alias": null,
        "name": "lagText",
        "owner": "Gnt.plugin.DependencyEditor",
        "linenr": 65,
        "deprecated": null,
        "doc": "<p>The text to before the Lag field</p>\n"
      },
      {
        "type": "Boolean",
        "html_filename": "DependencyEditor.html",
        "static": false,
        "href": "DependencyEditor.html#Gnt-plugin-DependencyEditor-cfg-showLag",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/plugin/DependencyEditor.js",
        "private": false,
        "alias": null,
        "name": "showLag",
        "owner": "Gnt.plugin.DependencyEditor",
        "linenr": 90,
        "deprecated": null,
        "doc": "<p>True to show the lag editor</p>\n"
      },
      {
        "type": "String",
        "html_filename": "DependencyEditor.html",
        "static": false,
        "href": "DependencyEditor.html#Gnt-plugin-DependencyEditor-cfg-startToEndText",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/plugin/DependencyEditor.js",
        "private": false,
        "alias": null,
        "name": "startToEndText",
        "owner": "Gnt.plugin.DependencyEditor",
        "linenr": 85,
        "deprecated": null,
        "doc": "<p>The text for <code>start-to-end</code> dependency type</p>\n"
      },
      {
        "type": "String",
        "html_filename": "DependencyEditor.html",
        "static": false,
        "href": "DependencyEditor.html#Gnt-plugin-DependencyEditor-cfg-startToStartText",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/plugin/DependencyEditor.js",
        "private": false,
        "alias": null,
        "name": "startToStartText",
        "owner": "Gnt.plugin.DependencyEditor",
        "linenr": 75,
        "deprecated": null,
        "doc": "<p>The text for <code>start-to-start</code> dependency type</p>\n"
      },
      {
        "type": "String",
        "html_filename": "DependencyEditor.html",
        "static": false,
        "href": "DependencyEditor.html#Gnt-plugin-DependencyEditor-cfg-toText",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/plugin/DependencyEditor.js",
        "private": false,
        "alias": null,
        "name": "toText",
        "owner": "Gnt.plugin.DependencyEditor",
        "linenr": 55,
        "deprecated": null,
        "doc": "<p>The text to before the To label</p>\n"
      },
      {
        "type": "String",
        "html_filename": "DependencyEditor.html",
        "static": false,
        "href": "DependencyEditor.html#Gnt-plugin-DependencyEditor-cfg-typeText",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/plugin/DependencyEditor.js",
        "private": false,
        "alias": null,
        "name": "typeText",
        "owner": "Gnt.plugin.DependencyEditor",
        "linenr": 60,
        "deprecated": null,
        "doc": "<p>The text to before the Type field</p>\n"
      }
    ],
    "event": [

    ]
  },
  "mixins": [

  ],
  "static": false,
  "href": "DependencyEditor.html#Gnt-plugin-DependencyEditor",
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
  "filename": "js//Gnt/plugin/DependencyEditor.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Gnt.plugin.DependencyEditor",
  "extends": "Ext.form.FormPanel",
  "author": null,
  "allMixins": [

  ],
  "linenr": 9,
  "deprecated": null,
  "doc": "<p><p><img src=\"doc-resources/gantt/images/dependency-editor.png\" alt=\"\"></p></p>\n\n<p>A plugin which shows the dependency editor panel, when a user double-clicks a dependency line or arrow.</p>\n\n<p>To customize the fields created by this plugin, override the <code>buildFields</code> method.</p>\n\n<p>You can add it to your gantt chart like this:</p>\n\n<pre><code>var gantt = Ext.create('Gnt.panel.Gantt', {\n\n    plugins             : [\n        Ext.create(\"Gnt.plugin.DependencyEditor\", {\n            // default value\n            hideOnBlur      : true\n        })\n    ],\n    ...\n})\n</code></pre>\n"
});