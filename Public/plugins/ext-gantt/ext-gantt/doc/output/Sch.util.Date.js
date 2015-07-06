Ext.data.JsonP.Sch_util_Date({
  "subclasses": [

  ],
  "html_filename": "Date.html",
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

    ],
    "event": [

    ]
  },
  "mixins": [

  ],
  "static": true,
  "href": "Date.html#Sch-util-Date",
  "component": false,
  "protected": false,
  "inheritable": false,
  "alternateClassNames": [

  ],
  "statics": {
    "property": [
      {
        "type": "String",
        "html_filename": "Date.html",
        "static": true,
        "href": "Date.html#Sch-util-Date-property-DAY",
        "protected": false,
        "inheritable": false,
        "tagname": "property",
        "filename": "../ExtScheduler2.x/js/Sch/util/Date.js",
        "private": false,
        "alias": null,
        "name": "DAY",
        "owner": "Sch.util.Date",
        "linenr": 48,
        "deprecated": null,
        "doc": "<p>Date interval constant</p>\n"
      },
      {
        "type": "String",
        "html_filename": "Date.html",
        "static": true,
        "href": "Date.html#Sch-util-Date-property-HOUR",
        "protected": false,
        "inheritable": false,
        "tagname": "property",
        "filename": "../ExtScheduler2.x/js/Sch/util/Date.js",
        "private": false,
        "alias": null,
        "name": "HOUR",
        "owner": "Sch.util.Date",
        "linenr": 42,
        "deprecated": null,
        "doc": "<p>Date interval constant</p>\n"
      },
      {
        "type": "String",
        "html_filename": "Date.html",
        "static": true,
        "href": "Date.html#Sch-util-Date-property-MILLI",
        "protected": false,
        "inheritable": false,
        "tagname": "property",
        "filename": "../ExtScheduler2.x/js/Sch/util/Date.js",
        "private": false,
        "alias": null,
        "name": "MILLI",
        "owner": "Sch.util.Date",
        "linenr": 21,
        "deprecated": null,
        "doc": "<p>Date interval constant</p>\n"
      },
      {
        "type": "String",
        "html_filename": "Date.html",
        "static": true,
        "href": "Date.html#Sch-util-Date-property-MINUTE",
        "protected": false,
        "inheritable": false,
        "tagname": "property",
        "filename": "../ExtScheduler2.x/js/Sch/util/Date.js",
        "private": false,
        "alias": null,
        "name": "MINUTE",
        "owner": "Sch.util.Date",
        "linenr": 35,
        "deprecated": null,
        "doc": "<p>Date interval constant</p>\n"
      },
      {
        "type": "String",
        "html_filename": "Date.html",
        "static": true,
        "href": "Date.html#Sch-util-Date-property-MONTH",
        "protected": false,
        "inheritable": false,
        "tagname": "property",
        "filename": "../ExtScheduler2.x/js/Sch/util/Date.js",
        "private": false,
        "alias": null,
        "name": "MONTH",
        "owner": "Sch.util.Date",
        "linenr": 62,
        "deprecated": null,
        "doc": "<p>Date interval constant</p>\n"
      },
      {
        "type": "String",
        "html_filename": "Date.html",
        "static": true,
        "href": "Date.html#Sch-util-Date-property-QUARTER",
        "protected": false,
        "inheritable": false,
        "tagname": "property",
        "filename": "../ExtScheduler2.x/js/Sch/util/Date.js",
        "private": false,
        "alias": null,
        "name": "QUARTER",
        "owner": "Sch.util.Date",
        "linenr": 69,
        "deprecated": null,
        "doc": "<p>Date interval constant</p>\n"
      },
      {
        "type": "String",
        "html_filename": "Date.html",
        "static": true,
        "href": "Date.html#Sch-util-Date-property-SECOND",
        "protected": false,
        "inheritable": false,
        "tagname": "property",
        "filename": "../ExtScheduler2.x/js/Sch/util/Date.js",
        "private": false,
        "alias": null,
        "name": "SECOND",
        "owner": "Sch.util.Date",
        "linenr": 28,
        "deprecated": null,
        "doc": "<p>Date interval constant</p>\n"
      },
      {
        "type": "String",
        "html_filename": "Date.html",
        "static": true,
        "href": "Date.html#Sch-util-Date-property-WEEK",
        "protected": false,
        "inheritable": false,
        "tagname": "property",
        "filename": "../ExtScheduler2.x/js/Sch/util/Date.js",
        "private": false,
        "alias": null,
        "name": "WEEK",
        "owner": "Sch.util.Date",
        "linenr": 55,
        "deprecated": null,
        "doc": "<p>Date interval constant</p>\n"
      },
      {
        "type": "String",
        "html_filename": "Date.html",
        "static": true,
        "href": "Date.html#Sch-util-Date-property-YEAR",
        "protected": false,
        "inheritable": false,
        "tagname": "property",
        "filename": "../ExtScheduler2.x/js/Sch/util/Date.js",
        "private": false,
        "alias": null,
        "name": "YEAR",
        "owner": "Sch.util.Date",
        "linenr": 76,
        "deprecated": null,
        "doc": "<p>Date interval constant</p>\n"
      }
    ],
    "method": [
      {
        "params": [
          {
            "type": "Date",
            "optional": false,
            "name": "date",
            "doc": "<p>The source date</p>\n"
          },
          {
            "type": "String",
            "optional": false,
            "name": "unit",
            "doc": "<p>The date unit to add</p>\n"
          },
          {
            "type": "Int",
            "optional": false,
            "name": "value",
            "doc": "<p>The number of units to add to the date</p>\n"
          }
        ],
        "html_filename": "Date.html",
        "shortDoc": "Adds a date unit and interval ...",
        "static": true,
        "href": "Date.html#Sch-util-Date-method-add",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/util/Date.js",
        "private": false,
        "alias": null,
        "name": "add",
        "owner": "Sch.util.Date",
        "return": {
          "type": "Date",
          "doc": "<p>The new date</p>\n"
        },
        "linenr": 129,
        "deprecated": null,
        "doc": "<p>Adds a date unit and interval</p>\n"
      },
      {
        "params": [
          {
            "type": "Date",
            "optional": false,
            "name": "date",
            "doc": "<p>The source date</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "start",
            "doc": "<p>Start date</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "end",
            "doc": "<p>End date</p>\n"
          }
        ],
        "html_filename": "Date.html",
        "shortDoc": "Checks if this date is >= start and &lt; end. ...",
        "static": true,
        "href": "Date.html#Sch-util-Date-method-betweenLesser",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/util/Date.js",
        "private": false,
        "alias": null,
        "name": "betweenLesser",
        "owner": "Sch.util.Date",
        "return": {
          "type": "Boolean",
          "doc": "<p>true if this date falls on or between the given start and end dates.</p>\n"
        },
        "linenr": 104,
        "deprecated": null,
        "doc": "<p>Checks if this date is >= start and &lt; end.</p>\n"
      },
      {
        "params": [
          {
            "type": "String",
            "optional": false,
            "name": "unit1",
            "doc": "<p>The 1st unit</p>\n"
          },
          {
            "type": "String",
            "optional": false,
            "name": "unit2",
            "doc": "<p>The 2nd unit</p>\n"
          }
        ],
        "html_filename": "Date.html",
        "shortDoc": "Returns 1 if first param is a greater unit than second param, -1 if the opposite is true or 0 if they're equal ...",
        "static": true,
        "href": "Date.html#Sch-util-Date-method-compareUnits",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/util/Date.js",
        "private": false,
        "alias": null,
        "name": "compareUnits",
        "owner": "Sch.util.Date",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "linenr": 88,
        "deprecated": null,
        "doc": "<p>Returns 1 if first param is a greater unit than second param, -1 if the opposite is true or 0 if they're equal</p>\n"
      },
      {
        "params": [
          {
            "type": "Date",
            "optional": false,
            "name": "date",
            "doc": "<p>The date to constrain</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "min",
            "doc": "<p>Min date</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "max",
            "doc": "<p>Max date</p>\n"
          }
        ],
        "html_filename": "Date.html",
        "shortDoc": "Constrains the date within a min and a max date ...",
        "static": true,
        "href": "Date.html#Sch-util-Date-method-constrain",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/util/Date.js",
        "private": false,
        "alias": null,
        "name": "constrain",
        "owner": "Sch.util.Date",
        "return": {
          "type": "Boolean",
          "doc": "<p>The constrained date</p>\n"
        },
        "linenr": 117,
        "deprecated": null,
        "doc": "<p>Constrains the date within a min and a max date</p>\n"
      },
      {
        "params": [
          {
            "type": "Date",
            "optional": false,
            "name": "start",
            "doc": "<p>Start date</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "end",
            "doc": "<p>End date</p>\n"
          }
        ],
        "html_filename": "Date.html",
        "shortDoc": "Returns the number of business days between the two dates ...",
        "static": true,
        "href": "Date.html#Sch-util-Date-method-getDurationInBusinessDays",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/util/Date.js",
        "private": false,
        "alias": null,
        "name": "getDurationInBusinessDays",
        "owner": "Sch.util.Date",
        "return": {
          "type": "Int",
          "doc": "<p>true number of business days between the two dates</p>\n"
        },
        "linenr": 416,
        "deprecated": null,
        "doc": "<p>Returns the number of business days between the two dates</p>\n"
      },
      {
        "params": [
          {
            "type": "Date",
            "optional": false,
            "name": "start",
            "doc": "<p>Start date</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "end",
            "doc": "<p>End date</p>\n"
          }
        ],
        "html_filename": "Date.html",
        "shortDoc": "Returns the number of whole days between the two dates ...",
        "static": true,
        "href": "Date.html#Sch-util-Date-method-getDurationInDays",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/util/Date.js",
        "private": false,
        "alias": null,
        "name": "getDurationInDays",
        "owner": "Sch.util.Date",
        "return": {
          "type": "Int",
          "doc": "<p>true number of days between the two dates</p>\n"
        },
        "linenr": 405,
        "deprecated": null,
        "doc": "<p>Returns the number of whole days between the two dates</p>\n"
      },
      {
        "params": [
          {
            "type": "Date",
            "optional": false,
            "name": "start",
            "doc": "<p>Start date</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "end",
            "doc": "<p>End date</p>\n"
          }
        ],
        "html_filename": "Date.html",
        "shortDoc": "Returns the number of hours between the two dates ...",
        "static": true,
        "href": "Date.html#Sch-util-Date-method-getDurationInHours",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/util/Date.js",
        "private": false,
        "alias": null,
        "name": "getDurationInHours",
        "owner": "Sch.util.Date",
        "return": {
          "type": "Int",
          "doc": "<p>true number of hours between the two dates</p>\n"
        },
        "linenr": 394,
        "deprecated": null,
        "doc": "<p>Returns the number of hours between the two dates</p>\n"
      },
      {
        "params": [
          {
            "type": "Date",
            "optional": false,
            "name": "start",
            "doc": "<p>Start date</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "end",
            "doc": "<p>End date</p>\n"
          }
        ],
        "html_filename": "Date.html",
        "shortDoc": "Returns the number of Milliseconds between the two dates ...",
        "static": true,
        "href": "Date.html#Sch-util-Date-method-getDurationInMilliseconds",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/util/Date.js",
        "private": false,
        "alias": null,
        "name": "getDurationInMilliseconds",
        "owner": "Sch.util.Date",
        "return": {
          "type": "Int",
          "doc": "<p>true number of minutes between the two dates</p>\n"
        },
        "linenr": 361,
        "deprecated": null,
        "doc": "<p>Returns the number of Milliseconds between the two dates</p>\n"
      },
      {
        "params": [
          {
            "type": "Date",
            "optional": false,
            "name": "start",
            "doc": "<p>Start date</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "end",
            "doc": "<p>End date</p>\n"
          }
        ],
        "html_filename": "Date.html",
        "shortDoc": "Returns the number of minutes between the two dates ...",
        "static": true,
        "href": "Date.html#Sch-util-Date-method-getDurationInMinutes",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/util/Date.js",
        "private": false,
        "alias": null,
        "name": "getDurationInMinutes",
        "owner": "Sch.util.Date",
        "return": {
          "type": "Int",
          "doc": "<p>true number of minutes between the two dates</p>\n"
        },
        "linenr": 383,
        "deprecated": null,
        "doc": "<p>Returns the number of minutes between the two dates</p>\n"
      },
      {
        "params": [
          {
            "type": "Date",
            "optional": false,
            "name": "start",
            "doc": "<p>Start date</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "end",
            "doc": "<p>End date</p>\n"
          }
        ],
        "html_filename": "Date.html",
        "shortDoc": "Returns the number of whole months between the two dates ...",
        "static": true,
        "href": "Date.html#Sch-util-Date-method-getDurationInMonths",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/util/Date.js",
        "private": false,
        "alias": null,
        "name": "getDurationInMonths",
        "owner": "Sch.util.Date",
        "return": {
          "type": "Int",
          "doc": "<p>The number of whole months between the two dates</p>\n"
        },
        "linenr": 437,
        "deprecated": null,
        "doc": "<p>Returns the number of whole months between the two dates</p>\n"
      },
      {
        "params": [
          {
            "type": "Date",
            "optional": false,
            "name": "start",
            "doc": "<p>Start date</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "end",
            "doc": "<p>End date</p>\n"
          }
        ],
        "html_filename": "Date.html",
        "shortDoc": "Returns the number of Seconds between the two dates ...",
        "static": true,
        "href": "Date.html#Sch-util-Date-method-getDurationInSeconds",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/util/Date.js",
        "private": false,
        "alias": null,
        "name": "getDurationInSeconds",
        "owner": "Sch.util.Date",
        "return": {
          "type": "Int",
          "doc": "<p>true number of minutes between the two dates</p>\n"
        },
        "linenr": 372,
        "deprecated": null,
        "doc": "<p>Returns the number of Seconds between the two dates</p>\n"
      },
      {
        "params": [
          {
            "type": "Date",
            "optional": false,
            "name": "start",
            "doc": "<p>The start date of the timeframe</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "end",
            "doc": "<p>The end date of the timeframe</p>\n"
          },
          {
            "type": "String",
            "optional": false,
            "name": "unit",
            "doc": "<p>Duration unit</p>\n"
          }
        ],
        "html_filename": "Date.html",
        "shortDoc": "Returns a duration of the timeframe in the given units. ...",
        "static": true,
        "href": "Date.html#Sch-util-Date-method-getDurationInUnit",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/util/Date.js",
        "private": false,
        "alias": null,
        "name": "getDurationInUnit",
        "owner": "Sch.util.Date",
        "return": {
          "type": "Number",
          "doc": "<p>The duration in the units</p>\n"
        },
        "linenr": 192,
        "deprecated": null,
        "doc": "<p>Returns a duration of the timeframe in the given units.</p>\n"
      },
      {
        "params": [
          {
            "type": "Date",
            "optional": false,
            "name": "start",
            "doc": "<p>Start date</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "end",
            "doc": "<p>End date</p>\n"
          }
        ],
        "html_filename": "Date.html",
        "shortDoc": "Returns the number of years between the two dates ...",
        "static": true,
        "href": "Date.html#Sch-util-Date-method-getDurationInYears",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/util/Date.js",
        "private": false,
        "alias": null,
        "name": "getDurationInYears",
        "owner": "Sch.util.Date",
        "return": {
          "type": "Int",
          "doc": "<p>The number of whole months between the two dates</p>\n"
        },
        "linenr": 448,
        "deprecated": null,
        "doc": "<p>Returns the number of years between the two dates</p>\n"
      },
      {
        "params": [
          {
            "type": "String",
            "optional": false,
            "name": "unit",
            "doc": "<p>Duration unit</p>\n"
          }
        ],
        "html_filename": "Date.html",
        "shortDoc": "Returns a name of the duration unit, matching its property on the Sch.util.Date class. ...",
        "static": true,
        "href": "Date.html#Sch-util-Date-method-getNameOfUnit",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/util/Date.js",
        "private": false,
        "alias": null,
        "name": "getNameOfUnit",
        "owner": "Sch.util.Date",
        "return": {
          "type": "String",
          "doc": "\n"
        },
        "linenr": 495,
        "deprecated": null,
        "doc": "<p>Returns a name of the duration unit, matching its property on the <a href=\"#/api/Sch.util.Date\" rel=\"Sch.util.Date\" class=\"docClass\">Sch.util.Date</a> class.\nSo, for example:</p>\n\n<pre><code> Sch.util.Date.getNameOfUnit(Sch.util.Date.DAY) == 'DAY' // true\n</code></pre>\n"
      },
      {
        "params": [
          {
            "type": "Date",
            "optional": false,
            "name": "date",
            "doc": "<p>The date</p>\n"
          },
          {
            "type": "String",
            "optional": false,
            "name": "unit",
            "doc": "<p>The duration unit</p>\n"
          },
          {
            "type": "Integer",
            "optional": false,
            "name": "increment",
            "doc": "<p>How many duration units to skip</p>\n"
          },
          {
            "type": "Number",
            "optional": false,
            "name": "weekStartDay",
            "doc": "<p>An index of 1st day in week. Only required when <code>unit</code> is <code>WEEK</code>. 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.</p>\n"
          }
        ],
        "html_filename": "Date.html",
        "shortDoc": "Returns the beginning of the Nth next duration unit, after the provided date. ...",
        "static": true,
        "href": "Date.html#Sch-util-Date-method-getNext",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/util/Date.js",
        "private": false,
        "alias": null,
        "name": "getNext",
        "owner": "Sch.util.Date",
        "return": {
          "type": "Date",
          "doc": "<p>The beginning of the next duration unit interval</p>\n"
        },
        "linenr": 560,
        "deprecated": null,
        "doc": "<p>Returns the beginning of the Nth next duration unit, after the provided <code>date</code>.\nFor example for the this call:</p>\n\n<pre><code> Sch.util.Date.getNext(new Date('Jul 15, 2011'), Sch.util.Date.MONTH, 1)\n</code></pre>\n\n<p>will return the beginning of the August: Aug 1, 2011</p>\n"
      },
      {
        "params": [
          {
            "type": "String",
            "optional": false,
            "name": "unit",
            "doc": "<p>Duration unit</p>\n"
          },
          {
            "type": "Boolean",
            "optional": false,
            "name": "plural",
            "doc": "<p>Whether to return a plural name or singular</p>\n"
          }
        ],
        "html_filename": "Date.html",
        "shortDoc": "Returns a human-readable name of the duration unit. ...",
        "static": true,
        "href": "Date.html#Sch-util-Date-method-getReadableNameOfUnit",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/util/Date.js",
        "private": false,
        "alias": null,
        "name": "getReadableNameOfUnit",
        "owner": "Sch.util.Date",
        "return": {
          "type": "String",
          "doc": "\n"
        },
        "linenr": 523,
        "deprecated": null,
        "doc": "<p>Returns a human-readable name of the duration unit. For for example for <code>Sch.util.Date.DAY</code> it will return either\n\"day\" or \"days\", depending from the <code>plural</code> argument</p>\n"
      },
      {
        "params": [
          {
            "type": "Date",
            "optional": false,
            "name": "start",
            "doc": "<p>1</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "end",
            "doc": "<p>1</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "start",
            "doc": "<p>2</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "end",
            "doc": "<p>2</p>\n"
          }
        ],
        "html_filename": "Date.html",
        "shortDoc": "Returns true if dates intersect ...",
        "static": true,
        "href": "Date.html#Sch-util-Date-method-intersectSpans",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/util/Date.js",
        "private": false,
        "alias": null,
        "name": "intersectSpans",
        "owner": "Sch.util.Date",
        "return": {
          "type": "Boolean",
          "doc": "<p>Returns true if dates intersect</p>\n"
        },
        "linenr": 481,
        "deprecated": null,
        "doc": "<p>Returns true if dates intersect</p>\n"
      },
      {
        "params": [
          {
            "type": "Date",
            "optional": false,
            "name": "date",
            "doc": "<p>1</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "date",
            "doc": "<p>2</p>\n"
          }
        ],
        "html_filename": "Date.html",
        "shortDoc": "Returns the greater of the two dates ...",
        "static": true,
        "href": "Date.html#Sch-util-Date-method-max",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/util/Date.js",
        "private": false,
        "alias": null,
        "name": "max",
        "owner": "Sch.util.Date",
        "return": {
          "type": "Date",
          "doc": "<p>Returns the greater of the two dates</p>\n"
        },
        "linenr": 470,
        "deprecated": null,
        "doc": "<p>Returns the greater of the two dates</p>\n"
      },
      {
        "params": [
          {
            "type": "Date",
            "optional": false,
            "name": "date",
            "doc": "<p>1</p>\n"
          },
          {
            "type": "Date",
            "optional": false,
            "name": "date",
            "doc": "<p>2</p>\n"
          }
        ],
        "html_filename": "Date.html",
        "shortDoc": "Returns the lesser of the two dates ...",
        "static": true,
        "href": "Date.html#Sch-util-Date-method-min",
        "protected": false,
        "inheritable": false,
        "tagname": "method",
        "filename": "../ExtScheduler2.x/js/Sch/util/Date.js",
        "private": false,
        "alias": null,
        "name": "min",
        "owner": "Sch.util.Date",
        "return": {
          "type": "Date",
          "doc": "<p>Returns the lesser of the two dates</p>\n"
        },
        "linenr": 459,
        "deprecated": null,
        "doc": "<p>Returns the lesser of the two dates</p>\n"
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
  "tagname": "class",
  "mixedInto": [

  ],
  "filename": "../ExtScheduler2.x/js/Sch/util/Date.js",
  "private": false,
  "xtypes": [

  ],
  "alias": null,
  "name": "Sch.util.Date",
  "extends": "Ext.Base",
  "author": null,
  "allMixins": [

  ],
  "linenr": 10,
  "deprecated": null,
  "doc": "<p>Static utility class for Date manipulation</p>\n"
});