Ext.data.JsonP.Gnt_widget_Calendar({
  "subclasses": [

  ],
  "html_filename": "Calendar.html",
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
        "type": "Gnt.data.Calendar",
        "html_filename": "Calendar.html",
        "static": false,
        "href": "Calendar.html#Gnt-widget-Calendar-cfg-calendar",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/widget/Calendar.js",
        "private": false,
        "alias": null,
        "name": "calendar",
        "owner": "Gnt.widget.Calendar",
        "linenr": 30,
        "deprecated": null,
        "doc": "<p>An instance of the <a href=\"#/api/Gnt.data.Calendar\" rel=\"Gnt.data.Calendar\" class=\"docClass\">Gnt.data.Calendar</a> to read the holidays from</p>\n"
      },
      {
        "type": "String",
        "html_filename": "Calendar.html",
        "static": false,
        "href": "Calendar.html#Gnt-widget-Calendar-cfg-disabledDatesText",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/widget/Calendar.js",
        "private": false,
        "alias": null,
        "name": "disabledDatesText",
        "owner": "Gnt.widget.Calendar",
        "linenr": 45,
        "deprecated": null,
        "doc": "<p>A text to show in the tooltip when user points to non-working day.</p>\n"
      },
      {
        "type": "Date",
        "html_filename": "Calendar.html",
        "static": false,
        "href": "Calendar.html#Gnt-widget-Calendar-cfg-endDate",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/widget/Calendar.js",
        "private": false,
        "alias": null,
        "name": "endDate",
        "owner": "Gnt.widget.Calendar",
        "linenr": 40,
        "deprecated": null,
        "doc": "<p>An end date of the range to show the holidays for.</p>\n"
      },
      {
        "type": "Date",
        "html_filename": "Calendar.html",
        "static": false,
        "href": "Calendar.html#Gnt-widget-Calendar-cfg-startDate",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/widget/Calendar.js",
        "private": false,
        "alias": null,
        "name": "startDate",
        "owner": "Gnt.widget.Calendar",
        "linenr": 35,
        "deprecated": null,
        "doc": "<p>A start date of the range to show the holidays for.</p>\n"
      }
    ],
    "event": [

    ]
  },
  "mixins": [

  ],
  "static": false,
  "href": "Calendar.html#Gnt-widget-Calendar",
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
  "filename": "js//Gnt/widget/Calendar.js",
  "private": false,
  "xtypes": [
    "ganttcalendar"
  ],
  "alias": null,
  "name": "Gnt.widget.Calendar",
  "extends": "Ext.picker.Date",
  "author": null,
  "allMixins": [

  ],
  "linenr": 9,
  "deprecated": null,
  "doc": "<p><p><img src=\"doc-resources/gantt/images/widget-calendar.png\" alt=\"\"></p></p>\n\n<p>This a very simple subclass of the Ext.picker.Date which will show the holidays/weekends from the provided calendar.\nThe non-working time will be shown as the disabled dates.</p>\n"
});