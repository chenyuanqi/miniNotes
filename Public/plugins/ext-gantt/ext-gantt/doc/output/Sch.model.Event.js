Ext.data.JsonP.Sch_model_Event({
  "subclasses": [

  ],
  "html_filename": "Event.html",
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
          {
            "type": "String",
            "optional": true,
            "name": "resourceId",
            "doc": "<p>(optional)</p>\n"
          }
        ],
        "html_filename": "Event.html",
        "shortDoc": "Returns either the resource associated with this event (when called w/o resourceId) or resource with specified id. ...",
        "static": false,
        "href": "Event.html#Sch-model-Event-method-getResource",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/model/Event.js",
        "private": false,
        "alias": null,
        "name": "getResource",
        "owner": "Sch.model.Event",
        "return": {
          "type": "Sch.model.Resource",
          "doc": "\n"
        },
        "linenr": 66,
        "deprecated": null,
        "doc": "<p>Returns either the resource associated with this event (when called w/o <code>resourceId</code>) or resource with specified id.</p>\n"
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
  "href": "Event.html#Sch-model-Event",
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
  "filename": "../ExtScheduler2.x/js/Sch/model/Event.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Sch.model.Event",
  "extends": "Ext.data.Model",
  "author": null,
  "allMixins": [

  ],
  "linenr": 9,
  "deprecated": null,
  "doc": "<p>This class represent a single event in your schedule. It is a subclass of the Ext.data.Model.\nPlease refer to Ext.data.Model documentation to become familar with the base interface of the task.</p>\n\n<p>The Event model has a few predefined fields as seen below. If you want to add new fields or change the options for the existing fields,\nyou can do that by subclassing this class (see example below). <strong>NOTE</strong>: The names of the predefined fields have to stay the same!</p>\n\n<h2>Fields</h2>\n\n<ul>\n<li><code>Id</code> - (mandatory) unique identificator of task</li>\n<li><code>Name</code> - name of the task (task title)</li>\n<li><code>StartDate</code> - start date of the task in the ISO 8601 format</li>\n<li><code>EndDate</code> - end date of the task in the ISO 8601 format,</li>\n<li><code>ResourceId</code> - The id of the associated resource</li>\n</ul>\n\n\n<h2>Subclassing the Event model class</h2>\n\n<pre><code>Ext.define('MyProject.model.Event', {\n    extend      : 'Sch.model.Event',\n\n    fields      : [\n        // change the input format for the `StartDate/EndDate` fields to seconds from Unix Epoch\n        { name: 'StartDate',        type: 'date', dateFormat : 'U' },\n        { name: 'EndDate',          type: 'date', dateFormat : 'U' },\n\n        // Use 'mapping' feature to point to another field name in the data structure\n        { name: 'Name',             mapping : 'some_other_field' },\n\n        // adding new field\n        { name: 'MyField', mapping : '         type : 'number', defaultValue : 0 }\n    ],\n\n    myCheckMethod : function () {\n        return this.get('MyField') &gt; 0 \n    },\n    ...\n})\n</code></pre>\n"
});