Ext.data.JsonP.Sch_selection_EventModel({
  "subclasses": [

  ],
  "html_filename": "EventModel.html",
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
        "html_filename": "EventModel.html",
        "shortDoc": "True to deselect all events when user clicks on free space in scheduler (outside of any event). ...",
        "static": false,
        "href": "EventModel.html#Sch-selection-EventModel-cfg-deselectOnContainerClick",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "../ExtScheduler2.x/js/Sch/selection/EventModel.js",
        "private": false,
        "alias": null,
        "name": "deselectOnContainerClick",
        "owner": "Sch.selection.EventModel",
        "linenr": 23,
        "deprecated": null,
        "doc": "<p><code>True</code> to deselect all events when user clicks on free space in scheduler (outside of any event). Default is <code>true</code>.</p>\n"
      }
    ],
    "event": [
      {
        "params": [
          {
            "type": "Sch.selection.EventModel",
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "name": "record",
            "doc": "<p>The deselected event</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "EventModel.html",
        "shortDoc": "Fired after a record is deselected ...",
        "static": false,
        "href": "EventModel.html#Sch-selection-EventModel-event-deselect",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/selection/EventModel.js",
        "private": false,
        "alias": null,
        "name": "deselect",
        "owner": "Sch.selection.EventModel",
        "linenr": 31,
        "deprecated": null,
        "doc": "<p>Fired after a record is deselected</p>\n"
      },
      {
        "params": [
          {
            "type": "Sch.selection.EventModel",
            "optional": false,
            "name": "this",
            "doc": "\n"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "name": "record",
            "doc": "<p>The selected event</p>\n"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to Ext.util.Observable.addListener.</p>\n"
          }
        ],
        "html_filename": "EventModel.html",
        "shortDoc": "Fired after a record is selected ...",
        "static": false,
        "href": "EventModel.html#Sch-selection-EventModel-event-select",
        "protected": false,
        "inheritable": false,
        "tagname": "event",
        "filename": "../ExtScheduler2.x/js/Sch/selection/EventModel.js",
        "private": false,
        "alias": null,
        "name": "select",
        "owner": "Sch.selection.EventModel",
        "linenr": 39,
        "deprecated": null,
        "doc": "<p>Fired after a record is selected</p>\n"
      }
    ]
  },
  "mixins": [

  ],
  "static": false,
  "href": "EventModel.html#Sch-selection-EventModel",
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
  "filename": "../ExtScheduler2.x/js/Sch/selection/EventModel.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Sch.selection.EventModel",
  "extends": "Ext.grid.AbstractSelectionModel",
  "author": null,
  "allMixins": [

  ],
  "linenr": 9,
  "deprecated": null,
  "doc": "<p>This class provides the basic implementation event selection in a grid.</p>\n"
});