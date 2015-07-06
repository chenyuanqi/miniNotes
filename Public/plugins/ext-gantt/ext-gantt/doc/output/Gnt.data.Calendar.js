Ext.data.JsonP.Gnt_data_Calendar({
  "subclasses": [

  ],
  "html_filename": "Calendar2.html",
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
            "type": "Number",
            "optional": false,
            "name": "durationInMs",
            "doc": "\n"
          },
          {
            "type": "String",
            "optional": false,
            "name": "unit",
            "doc": "\n"
          }
        ],
        "html_filename": "Calendar2.html",
        "shortDoc": "Convert the duration given in some unit to milliseconds. ...",
        "static": false,
        "href": "Calendar2.html#Gnt-data-Calendar-method-convertDurationToMs",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/data/Calendar.js",
        "private": false,
        "alias": null,
        "name": "convertDurationToMs",
        "owner": "Gnt.data.Calendar",
        "return": {
          "type": "Number",
          "doc": "<p>converted value</p>\n"
        },
        "linenr": 183,
        "deprecated": null,
        "doc": "<p>Convert the duration given in some unit to milliseconds. Uses the <a href=\"#/api/Gnt.data.Calendar-cfg-daysPerMonth\" rel=\"Gnt.data.Calendar-cfg-daysPerMonth\" class=\"docClass\">daysPerMonth</a> configuration option.</p>\n"
      },
      {
        "params": [
          {
            "type": "Number",
            "optional": false,
            "name": "durationInMs",
            "doc": "<p>Duration in milliseconds</p>\n"
          },
          {
            "type": "String",
            "optional": false,
            "name": "unit",
            "doc": "<p>Duration unit to which the duration should be converted</p>\n"
          }
        ],
        "html_filename": "Calendar2.html",
        "shortDoc": "Convert the duration given in milliseconds to a given unit. ...",
        "static": false,
        "href": "Calendar2.html#Gnt-data-Calendar-method-convertMSDurationToUnit",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/data/Calendar.js",
        "private": false,
        "alias": null,
        "name": "convertMSDurationToUnit",
        "owner": "Gnt.data.Calendar",
        "return": {
          "type": "Number",
          "doc": "<p>converted value</p>\n"
        },
        "linenr": 170,
        "deprecated": null,
        "doc": "<p>Convert the duration given in milliseconds to a given unit. Uses the <a href=\"#/api/Gnt.data.Calendar-cfg-daysPerMonth\" rel=\"Gnt.data.Calendar-cfg-daysPerMonth\" class=\"docClass\">daysPerMonth</a> configuration option.</p>\n"
      },
      {
        "params": [
          {
            "type": "Date",
            "optional": false,
            "name": "timeDate",
            "doc": "<p>A date (can contain time portion which will be ignored)</p>\n"
          }
        ],
        "html_filename": "Calendar2.html",
        "shortDoc": "Returns a corresponding Gnt.model.CalendarDay instance for the given date ...",
        "static": false,
        "href": "Calendar2.html#Gnt-data-Calendar-method-getCalendarDay",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/data/Calendar.js",
        "private": false,
        "alias": null,
        "name": "getCalendarDay",
        "owner": "Gnt.data.Calendar",
        "return": {
          "type": "Gnt.model.CalendarDay",
          "doc": "\n"
        },
        "linenr": 110,
        "deprecated": null,
        "doc": "<p>Returns a corresponding <a href=\"#/api/Gnt.model.CalendarDay\" rel=\"Gnt.model.CalendarDay\" class=\"docClass\">Gnt.model.CalendarDay</a> instance for the given date</p>\n"
      },
      {
        "params": [
          {
            "type": "Date",
            "optional": false,
            "name": "startDate",
            "doc": "<ul>\n<li>A start date of the timeframe to extract the holidays from</li>\n</ul>\n\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "endDate",
            "doc": "<ul>\n<li>An end date of the timeframe to extract the holidays from</li>\n</ul>\n\n"
          }
        ],
        "html_filename": "Calendar2.html",
        "shortDoc": "Returns an array of ranges for non-working days between startDate and endDate. ...",
        "static": false,
        "href": "Calendar2.html#Gnt-data-Calendar-method-getHolidaysRanges",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/data/Calendar.js",
        "private": false,
        "alias": null,
        "name": "getHolidaysRanges",
        "owner": "Gnt.data.Calendar",
        "return": {
          "type": "Array[Sch.model.Range]",
          "doc": "\n"
        },
        "linenr": 196,
        "deprecated": null,
        "doc": "<p>Returns an array of ranges for non-working days between <code>startDate</code> and <code>endDate</code>. For example normally, given a full month,\nit will return an array from 4 <code>Sch.model.Range</code> instances, containing ranges for the weekends. If some holiday lasts for several days\nand all <a href=\"#/api/Gnt.model.CalendarDay\" rel=\"Gnt.model.CalendarDay\" class=\"docClass\">Gnt.model.CalendarDay</a> instances have the same <code>Cls</code> value then all days will be combined in single range.</p>\n"
      },
      {
        "params": [
          {
            "type": "Date",
            "optional": false,
            "name": "timeDate",
            "doc": "<p>A given date (can contain time portion)</p>\n"
          }
        ],
        "html_filename": "Calendar2.html",
        "shortDoc": "Returns a boolean indicating whether a passed date falls on the weekend or holiday. ...",
        "static": false,
        "href": "Calendar2.html#Gnt-data-Calendar-method-isHoliday",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/data/Calendar.js",
        "private": false,
        "alias": null,
        "name": "isHoliday",
        "owner": "Gnt.data.Calendar",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "linenr": 124,
        "deprecated": null,
        "doc": "<p>Returns a boolean indicating whether a passed date falls on the weekend or holiday.</p>\n"
      },
      {
        "params": [
          {
            "type": "Date",
            "optional": false,
            "name": "timeDate",
            "doc": "<p>A given date (can contain time portion which will be ignored)</p>\n"
          }
        ],
        "html_filename": "Calendar2.html",
        "shortDoc": "Returns a boolean indicating whether a passed date is a working day. ...",
        "static": false,
        "href": "Calendar2.html#Gnt-data-Calendar-method-isWorkingDay",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "js//Gnt/data/Calendar.js",
        "private": false,
        "alias": null,
        "name": "isWorkingDay",
        "owner": "Gnt.data.Calendar",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "linenr": 158,
        "deprecated": null,
        "doc": "<p>Returns a boolean indicating whether a passed date is a working day.</p>\n"
      }
    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "cfg": [
      {
        "type": "Number",
        "html_filename": "Calendar2.html",
        "shortDoc": "Number of days per month. ...",
        "static": false,
        "href": "Calendar2.html#Gnt-data-Calendar-cfg-daysPerMonth",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/data/Calendar.js",
        "private": false,
        "alias": null,
        "name": "daysPerMonth",
        "owner": "Gnt.data.Calendar",
        "linenr": 54,
        "deprecated": null,
        "doc": "<p>Number of days per month. Will be used when converting the big duration units like month/year to days.</p>\n"
      },
      {
        "type": "Number",
        "html_filename": "Calendar2.html",
        "shortDoc": "The index of the first day in weekend, 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on. ...",
        "static": false,
        "href": "Calendar2.html#Gnt-data-Calendar-cfg-weekendFirstDay",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/data/Calendar.js",
        "private": false,
        "alias": null,
        "name": "weekendFirstDay",
        "owner": "Gnt.data.Calendar",
        "linenr": 69,
        "deprecated": null,
        "doc": "<p>The index of the first day in weekend, 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.\nDefault value is 6 - Saturday</p>\n"
      },
      {
        "type": "Number",
        "html_filename": "Calendar2.html",
        "shortDoc": "The index of the second day in weekend, 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on. ...",
        "static": false,
        "href": "Calendar2.html#Gnt-data-Calendar-cfg-weekendSecondDay",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/data/Calendar.js",
        "private": false,
        "alias": null,
        "name": "weekendSecondDay",
        "owner": "Gnt.data.Calendar",
        "linenr": 75,
        "deprecated": null,
        "doc": "<p>The index of the second day in weekend, 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.\nDefault value is 0 - Sunday</p>\n"
      },
      {
        "type": "Boolean",
        "html_filename": "Calendar2.html",
        "static": false,
        "href": "Calendar2.html#Gnt-data-Calendar-cfg-weekendsAreWorkdays",
        "protected": false,
        "inheritable": false,
        "tagname": "cfg",
        "filename": "js//Gnt/data/Calendar.js",
        "private": false,
        "alias": null,
        "name": "weekendsAreWorkdays",
        "owner": "Gnt.data.Calendar",
        "linenr": 64,
        "deprecated": null,
        "doc": "<p>Setting this option to <code>true</code> will treat <em>all</em> days as working</p>\n"
      }
    ],
    "event": [

    ]
  },
  "mixins": [

  ],
  "static": false,
  "href": "Calendar2.html#Gnt-data-Calendar",
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
  "filename": "js//Gnt/data/Calendar.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Gnt.data.Calendar",
  "extends": "Ext.data.Store",
  "author": null,
  "allMixins": [

  ],
  "linenr": 9,
  "deprecated": null,
  "doc": "<p>A class representing a customizable calendar with weekends and holidays. Internally, its just a subclass of Ext.data.Store<br/>\nwhich is supposed to be loaded with a collection of <a href=\"#/api/Gnt.model.CalendarDay\" rel=\"Gnt.model.CalendarDay\" class=\"docClass\">Gnt.model.CalendarDay</a> instances.</p>\n\n<p>A calendar can be instantiated like this for example:</p>\n\n<pre><code>var calendar        = new Gnt.data.Calendar({\n    data    : [\n        {\n            Date            : new Date(2010, 0, 13),\n            Cls             : 'gnt-national-holiday'\n        },\n        {\n            Date            : new Date(2010, 1, 1),\n            Cls             : 'gnt-company-holiday'\n        },\n        {\n            Date            : new Date(2010, 0, 16),\n            IsWorkingDay    : true\n        }\n    ]\n});\n</code></pre>\n\n<p>It should then provided as the <a href=\"#/api/Gnt.data.TaskStore-cfg-calendar\" rel=\"Gnt.data.TaskStore-cfg-calendar\" class=\"docClass\">configuration option</a> for the TaskStore.</p>\n\n<p><strong>Important note</strong> The calendar should be loaded <strong>prior</strong> of the task store.</p>\n"
});