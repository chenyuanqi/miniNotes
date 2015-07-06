Ext.data.JsonP.Gnt_column_Duration_Field({
  "subclasses": [

  ],
  "html_filename": "Field.html",
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
        "html_filename": "Field.html",
        "shortDoc": "Returns an object, representing current value of the field:\n\n{\n    value   : ... ...",
        "static": false,
        "href": "Field.html#Gnt-column-Duration-Field-method-getDurationValue",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/column/Duration/Field.js",
        "private": false,
        "alias": null,
        "name": "getDurationValue",
        "owner": "Gnt.column.Duration.Field",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "linenr": 116,
        "deprecated": null,
        "doc": "<p>Returns an object, representing current value of the field:</p>\n\n<pre><code>{\n    value   : ... // duration value,\n    unit    : ... // duration unit\n}\n</code></pre>\n"
      }
    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "cfg": [
      {
        "type": "String",
        "html_filename": "Field.html",
        "shortDoc": "The default duration unit to use when editing the value. ...",
        "static": false,
        "href": "Field.html#Gnt-column-Duration-Field-cfg-durationUnit",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/column/Duration/Field.js",
        "private": false,
        "alias": null,
        "name": "durationUnit",
        "owner": "Gnt.column.Duration.Field",
        "linenr": 61,
        "deprecated": null,
        "doc": "<p>The default duration unit to use when editing the value.\nThis is usually being set automatically, using the <code>DurationUnit</code> field of the task.</p>\n"
      },
      {
        "type": "Object",
        "html_filename": "Field.html",
        "shortDoc": "An object, which keys corresponds to duration units and values contains regular expressions to match the duration uni...",
        "static": false,
        "href": "Field.html#Gnt-column-Duration-Field-cfg-unitsRegex",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/column/Duration/Field.js",
        "private": false,
        "alias": null,
        "name": "unitsRegex",
        "owner": "Gnt.column.Duration.Field",
        "linenr": 46,
        "deprecated": null,
        "doc": "<p>An object, which keys corresponds to duration units and values contains regular expressions to match the duration unit part of the text value.</p>\n"
      }
    ],
    "event": [

    ]
  },
  "mixins": [

  ],
  "static": false,
  "href": "Field.html#Gnt-column-Duration-Field",
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
  "filename": "js//Gnt/column/Duration/Field.js",
  "private": false,
  "xtypes": [
    "durationfield"
  ],
  "alias": null,
  "name": "Gnt.column.Duration.Field",
  "extends": "Ext.form.field.Number",
  "author": null,
  "allMixins": [

  ],
  "linenr": 11,
  "deprecated": null,
  "doc": "<p>A specialized field, allowing the user to also specify the duration unit, when editing the duration value.\nThis class inherit from usual ExtJS \"number\" field, so any usual <code>Ext.form.field.Number</code> configs can be used (like <code>minValue/maxValue</code> etc).</p>\n\n<p>Recognizable values for duration unit part are (the trailing <code>..</code> symbols means anything will match):</p>\n\n<ul>\n<li>Milliseconds: <code>ms</code> or <code>mil..</code></li>\n<li>Seconds: <code>s</code> or <code>sec..</code></li>\n<li>Minutes: <code>m</code> or <code>min..</code></li>\n<li>Hours: <code>h</code> or <code>hr</code> or <code>hour..</code></li>\n<li>Days: <code>d</code> or <code>day..</code></li>\n<li>Weeks: <code>w</code> or <code>wk</code> or <code>week..</code></li>\n<li>Months: <code>mo..</code> or <code>mnt..</code></li>\n<li>Quarters: <code>q</code> or <code>quar..</code> or <code>qrt..</code></li>\n<li>Years: <code>y</code> or <code>yr..</code> or <code>year..</code></li>\n</ul>\n\n\n<p>You can change that using the <code>unitsRegex</code> configuration option.</p>\n"
});