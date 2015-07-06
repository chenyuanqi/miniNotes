Ext.data.JsonP.Sch_plugin_EventEditor({
  "subclasses": [

  ],
  "html_filename": "EventEditor.html",
  "docauthor": null,
  "singleton": false,
  "code_type": "ext_define",
  "superclasses": [

  ],
  "members": {
    "property": [
      {
        "type": "Ext.form.field.Number",
        "html_filename": "EventEditor.html",
        "static": false,
        "href": "EventEditor.html#Sch-plugin-EventEditor-property-durationField",
        "protected": false,
        "inheritable": false,
        "tagname": "property",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/EventEditor.js",
        "private": false,
        "alias": null,
        "name": "durationField",
        "owner": "Sch.plugin.EventEditor",
        "linenr": 123,
        "deprecated": null,
        "doc": "<p>This property provides access to the duration spinner field</p>\n"
      },
      {
        "type": "Ext.form.field.Date",
        "html_filename": "EventEditor.html",
        "static": false,
        "href": "EventEditor.html#Sch-plugin-EventEditor-property-startDateField",
        "protected": false,
        "inheritable": false,
        "tagname": "property",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/EventEditor.js",
        "private": false,
        "alias": null,
        "name": "startDateField",
        "owner": "Sch.plugin.EventEditor",
        "linenr": 111,
        "deprecated": null,
        "doc": "<p>This property provides access to the start date field</p>\n"
      },
      {
        "type": "Ext.form.field.Time",
        "html_filename": "EventEditor.html",
        "static": false,
        "href": "EventEditor.html#Sch-plugin-EventEditor-property-startTimeField",
        "protected": false,
        "inheritable": false,
        "tagname": "property",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/EventEditor.js",
        "private": false,
        "alias": null,
        "name": "startTimeField",
        "owner": "Sch.plugin.EventEditor",
        "linenr": 117,
        "deprecated": null,
        "doc": "<p>This property provides access to the start time field</p>\n"
      }
    ],
    "method": [
      {
        "params": [
          {
            "type": "Ext.data.Model",
            "optional": false,
            "name": "eventRecord",
            "doc": "<p>The record to show in the editor panel</p>\n"
          }
        ],
        "html_filename": "EventEditor.html",
        "shortDoc": "Expands the editor ...",
        "static": false,
        "href": "EventEditor.html#Sch-plugin-EventEditor-method-show",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/EventEditor.js",
        "private": false,
        "alias": null,
        "name": "show",
        "owner": "Sch.plugin.EventEditor",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 315,
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
        "html_filename": "EventEditor.html",
        "static": false,
        "href": "EventEditor.html#Sch-plugin-EventEditor-cfg-cancelText",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/EventEditor.js",
        "private": false,
        "alias": null,
        "name": "cancelText",
        "owner": "Sch.plugin.EventEditor",
        "linenr": 101,
        "deprecated": null,
        "doc": "<p>The text to show on the cancel button</p>\n"
      },
      {
        "type": "Boolean",
        "html_filename": "EventEditor.html",
        "shortDoc": "Pass true to enable the constraining - ie editor panel will not exceed the document edges. ...",
        "static": false,
        "href": "EventEditor.html#Sch-plugin-EventEditor-cfg-constrain",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/EventEditor.js",
        "private": false,
        "alias": null,
        "name": "constrain",
        "owner": "Sch.plugin.EventEditor",
        "linenr": 213,
        "deprecated": null,
        "doc": "<p>Pass <code>true</code> to enable the constraining - ie editor panel will not exceed the document edges. This option will disable the animation\nduring the expansion. Default value is <code>false</code>.</p>\n"
      },
      {
        "type": "Object",
        "html_filename": "EventEditor.html",
        "static": false,
        "href": "EventEditor.html#Sch-plugin-EventEditor-cfg-dateConfig",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/EventEditor.js",
        "private": false,
        "alias": null,
        "name": "dateConfig",
        "owner": "Sch.plugin.EventEditor",
        "linenr": 134,
        "deprecated": null,
        "doc": "<p>Config for the <code>startDateField</code> constructor.</p>\n"
      },
      {
        "type": "String",
        "html_filename": "EventEditor.html",
        "static": false,
        "href": "EventEditor.html#Sch-plugin-EventEditor-cfg-dateFormat",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/EventEditor.js",
        "private": false,
        "alias": null,
        "name": "dateFormat",
        "owner": "Sch.plugin.EventEditor",
        "linenr": 187,
        "deprecated": null,
        "doc": "<p>This config parameter is passed to the <code>startDateField</code> constructor.</p>\n"
      },
      {
        "type": "String",
        "html_filename": "EventEditor.html",
        "static": false,
        "href": "EventEditor.html#Sch-plugin-EventEditor-cfg-deleteText",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/EventEditor.js",
        "private": false,
        "alias": null,
        "name": "deleteText",
        "owner": "Sch.plugin.EventEditor",
        "linenr": 96,
        "deprecated": null,
        "doc": "<p>The text to show on the delete button</p>\n"
      },
      {
        "type": "Object",
        "html_filename": "EventEditor.html",
        "static": false,
        "href": "EventEditor.html#Sch-plugin-EventEditor-cfg-durationConfig",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/EventEditor.js",
        "private": false,
        "alias": null,
        "name": "durationConfig",
        "owner": "Sch.plugin.EventEditor",
        "linenr": 139,
        "deprecated": null,
        "doc": "<p>A custom config object that is used to configure the duration field.</p>\n"
      },
      {
        "type": "String",
        "html_filename": "EventEditor.html",
        "static": false,
        "href": "EventEditor.html#Sch-plugin-EventEditor-cfg-durationText",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/EventEditor.js",
        "private": false,
        "alias": null,
        "name": "durationText",
        "owner": "Sch.plugin.EventEditor",
        "linenr": 149,
        "deprecated": null,
        "doc": "<p>The text to show after the duration spinner field</p>\n"
      },
      {
        "type": "String",
        "html_filename": "EventEditor.html",
        "static": false,
        "href": "EventEditor.html#Sch-plugin-EventEditor-cfg-durationUnit",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/EventEditor.js",
        "private": false,
        "alias": null,
        "name": "durationUnit",
        "owner": "Sch.plugin.EventEditor",
        "linenr": 144,
        "deprecated": null,
        "doc": "<p>The unit in which the duration is measured, defaults to Sch.util.Date.HOUR.</p>\n"
      },
      {
        "type": "Boolean",
        "html_filename": "EventEditor.html",
        "shortDoc": "True to use several forms. ...",
        "static": false,
        "href": "EventEditor.html#Sch-plugin-EventEditor-cfg-dynamicForm",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/EventEditor.js",
        "private": false,
        "alias": null,
        "name": "dynamicForm",
        "owner": "Sch.plugin.EventEditor",
        "linenr": 201,
        "deprecated": null,
        "doc": "<p>True to use several forms. Default is <code>true</code>.</p>\n"
      },
      {
        "type": "String",
        "html_filename": "EventEditor.html",
        "shortDoc": "A panel config representing your fields that is associated with a scheduled event\n\nExample:\n\n    fieldsPanelConfig : ...",
        "static": false,
        "href": "EventEditor.html#Sch-plugin-EventEditor-cfg-fieldsPanelConfig",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/EventEditor.js",
        "private": false,
        "alias": null,
        "name": "fieldsPanelConfig",
        "owner": "Sch.plugin.EventEditor",
        "linenr": 154,
        "deprecated": null,
        "doc": "<p>A panel config representing your fields that is associated with a scheduled event</p>\n\n<p>Example:</p>\n\n<pre><code>    fieldsPanelConfig : {\n        layout      : 'form',\n\n        style       : 'background : #fff',\n        border      : false,\n        cls         : 'editorpanel',\n        labelAlign  : 'top',\n\n        defaults    : {\n            width : 135\n        },\n\n        items       : [\n            titleField      = new Ext.form.TextField({\n                name            : 'Title',\n                fieldLabel      : 'Task'\n            }),\n\n            locationField   = new Ext.form.TextField({\n                name            : 'Location',\n                fieldLabel      : 'Location'\n            })\n        ]\n    }\n</code></pre>\n"
      },
      {
        "type": "Boolean",
        "html_filename": "EventEditor.html",
        "static": false,
        "href": "EventEditor.html#Sch-plugin-EventEditor-cfg-hideOnBlur",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/EventEditor.js",
        "private": false,
        "alias": null,
        "name": "hideOnBlur",
        "owner": "Sch.plugin.EventEditor",
        "linenr": 106,
        "deprecated": null,
        "doc": "<p>True to hide this panel if a click is detected outside the panel (defaults to true)</p>\n"
      },
      {
        "type": "String",
        "html_filename": "EventEditor.html",
        "static": false,
        "href": "EventEditor.html#Sch-plugin-EventEditor-cfg-saveText",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/EventEditor.js",
        "private": false,
        "alias": null,
        "name": "saveText",
        "owner": "Sch.plugin.EventEditor",
        "linenr": 91,
        "deprecated": null,
        "doc": "<p>The text to show on the save button</p>\n"
      },
      {
        "type": "Object",
        "html_filename": "EventEditor.html",
        "static": false,
        "href": "EventEditor.html#Sch-plugin-EventEditor-cfg-timeConfig",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/EventEditor.js",
        "private": false,
        "alias": null,
        "name": "timeConfig",
        "owner": "Sch.plugin.EventEditor",
        "linenr": 129,
        "deprecated": null,
        "doc": "<p>Config for the <code>startTimeField</code> constructor.</p>\n"
      },
      {
        "type": "String",
        "html_filename": "EventEditor.html",
        "static": false,
        "href": "EventEditor.html#Sch-plugin-EventEditor-cfg-timeFormat",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/EventEditor.js",
        "private": false,
        "alias": null,
        "name": "timeFormat",
        "owner": "Sch.plugin.EventEditor",
        "linenr": 192,
        "deprecated": null,
        "doc": "<p>This config parameter is passed to the <code>startTimeField</code> constructor.</p>\n"
      }
    ],
    "event": [
      {
        "params": [
          {
            "type": "Sch.plugin.EventEditor",
            "optional": false,
            "name": "editor",
            "doc": "<p>The editor instance</p>\n"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "name": "eventRecord",
            "doc": "<p>The record about to be deleted</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "EventEditor.html",
        "shortDoc": "Fires before an event is deleted (return false to cancel the operation) ...",
        "static": false,
        "href": "EventEditor.html#Sch-plugin-EventEditor-event-beforeeventdelete",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/EventEditor.js",
        "private": false,
        "alias": null,
        "name": "beforeeventdelete",
        "owner": "Sch.plugin.EventEditor",
        "linenr": 226,
        "deprecated": null,
        "doc": "<p>Fires before an event is deleted (return false to cancel the operation)</p>\n"
      },
      {
        "params": [
          {
            "type": "Sch.plugin.EventEditor",
            "optional": false,
            "name": "editor",
            "doc": "<p>The editor instance</p>\n"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "name": "eventRecord",
            "doc": "<p>The record about to be saved</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "EventEditor.html",
        "shortDoc": "Fires before an event is saved (return false to cancel the operation) ...",
        "static": false,
        "href": "EventEditor.html#Sch-plugin-EventEditor-event-beforeeventsave",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/plugin/EventEditor.js",
        "private": false,
        "alias": null,
        "name": "beforeeventsave",
        "owner": "Sch.plugin.EventEditor",
        "linenr": 234,
        "deprecated": null,
        "doc": "<p>Fires before an event is saved (return false to cancel the operation)</p>\n"
      }
    ]
  },
  "mixins": [

  ],
  "static": false,
  "href": "EventEditor.html#Sch-plugin-EventEditor",
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
  "filename": "../ExtScheduler2.x/js/Sch/plugin/EventEditor.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Sch.plugin.EventEditor",
  "extends": "Ext.form.FormPanel",
  "author": null,
  "allMixins": [

  ],
  "linenr": 9,
  "deprecated": null,
  "doc": "<p>A plugin used to edit event start/end dates as well as any meta data. It inherits from Ext.form.FormPanel so you can define any fields and use any layout you want.</p>\n\n<p><p><img src=\"doc-resources/scheduler/images/event-editor.png\" alt=\"\"></p></p>\n\n<p>Normally, this plugin shows the same form for all events. However you can show different forms for different event types. To do that:</p>\n\n<ul>\n<li>the event type is supposed to be provided as the value of the <code>EventType</code> field in the event model.</li>\n<li>in the <a href=\"#/api/Sch.plugin.EventEditor-cfg-fieldsPanelConfig\" rel=\"Sch.plugin.EventEditor-cfg-fieldsPanelConfig\" class=\"docClass\">fieldsPanelConfig</a> provide the container with card layout. The children of that container should be the forms which will be used to edit different\nevent types</li>\n<li>each such form should contain the <code>EventType</code> configuration option, mathing to the appropriate event type.</li>\n<li>the small top form, containing the start date, start time and duration fields is always shared among all forms.</li>\n<li>this whole behavior can be disabled with the <code>dynamicForm : false</code> option.</li>\n</ul>\n\n\n<p>The overall picture will look like:</p>\n\n<pre><code>        fieldsPanelConfig : {\n            xtype       : 'container',\n\n            layout      : 'card',\n\n            items       : [\n                // form for \"Meeting\" EventType\n                {\n                    EventType   : 'Meeting',\n\n                    xtype       : 'form',\n\n                    items       : [\n                        ...\n                    ]                    \n                },\n                // eof form for \"Meeting\" EventType\n\n                // form for \"Appointment\" EventType\n                {\n                    EventType   : 'Appointment',\n\n                    xtype       : 'form',\n\n                    items       : [\n                        ...\n                    ]                    \n                }\n                // eof form for \"Appointment\" EventType\n            ]\n        }   \n</code></pre>\n\n<p>Note, that you can customize the start date, start time and duration fields with appropriate configuration options: <a href=\"#/api/Sch.plugin.EventEditor-cfg-dateConfig\" rel=\"Sch.plugin.EventEditor-cfg-dateConfig\" class=\"docClass\">dateConfig</a>, <a href=\"#/api/Sch.plugin.EventEditor-cfg-timeConfig\" rel=\"Sch.plugin.EventEditor-cfg-timeConfig\" class=\"docClass\">timeConfig</a>, <a href=\"#/api/Sch.plugin.EventEditor-cfg-durationConfig\" rel=\"Sch.plugin.EventEditor-cfg-durationConfig\" class=\"docClass\">durationConfig</a></p>\n\n<pre><code>    var eventEditor    = Ext.create('Sch.plugin.EventEditor', {\n        ...\n        timeConfig      : {\n            minValue    : '08:00',\n            maxValue    : '18:00'\n        },\n        ...\n    }); \n\n\n    var scheduler = Ext.create('Sch.panel.SchedulerGrid', {\n        ...\n\n        resourceStore   : resourceStore,\n        eventStore      : eventStore,\n\n        plugins         : [\n            eventEditor\n        ]\n    });\n</code></pre>\n"
});