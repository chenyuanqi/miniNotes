/*
jQuery.ganttView v.0.7.2
Copyright (c) 2010 JC Grubbs - jc.grubbs@devmynd.com
MIT License Applies
*/

/*
Options
-----------------
showWeekends: boolean
data: object
start: date
end: date
cellWidth: number
cellHeight: number
slideWidth: number
readOnly: boolean
excludeWeekends: boolean
showDayOfWeek: boolean
showHolidays: boolean
excludeHolidays: boolean
*/

var ChartLang = {
    days: "days"
};

(function (jQuery) {
    jQuery.fn.ganttView = function (options) {
        var els = this;

        var defaults = {
            showWeekends: true,
            cellWidth: 21,
            cellHeight: 21,
            slideWidth: 400,
            vHeaderWidth: 100,
            blockClick: null,
            changed: null,
            clicked: null,
            dblClicked: null,
            readOnly: false,
            excludeWeekends: false,
            showDayOfWeek: false,
            showHolidays: false,
            excludeHolidays: false
        };

        Chart.opts = jQuery.extend(defaults, options);
        var months = Chart.getMonths();

        els.each(function () {
            var container = jQuery(this);
            var div = jQuery("<div>", { "class": "ganttview" });

            Chart.addVtHeader(div);

            var slideDiv = jQuery("<div>", {
                "class": "ganttview-slide-container",
                "css": { "width": Chart.opts.slideWidth + "px" }
            });

            Chart.addHzHeader(slideDiv, months);
            Chart.addGrid(slideDiv, months);
            Chart.addBlockContainers(slideDiv);
            Chart.addBlocks(slideDiv);
            Chart.setBlockContainersWidth(slideDiv);

            div.append(slideDiv);
            container.append(div);

            var w = jQuery("div.ganttview-vtheader", container).outerWidth() +
                jQuery("div.ganttview-slide-container", container).outerWidth();
            div.css("width", w + "px");

            Chart.applyLastClass(container);

            Events.bindBlockClick(container, Chart.opts.blockClick);
        });

    };

    var Chart = {

        selectedBlock: null,

        opts: null,

        monthNames: ["一月份", "二月份", "三月份", "四月份", "五月份", "六月份", "七月份", "八月份", "九月份", "十月份", "十一月份", "十二月份"],

        dayOfWeekNames: ["日", "一", "二", "三", "四", "五", "六"],

        getMonths: function () {
            var opts = Chart.opts;
            var start = Date.parse(opts.start);
            var end = Date.parse(opts.end);
            var months = [];
            months[start.getMonth()] = [start];
            var last = start;

            while (last.compareTo(end) == -1) {
                var next = last.clone().addDays(1);
                if (!months[next.getMonth()]) { months[next.getMonth()] = []; }
                months[next.getMonth()].push(next);
                last = next;
            }

            return months;
        },

        addVtHeader: function (div) {
            var opts = Chart.opts;
            var data = opts.data;
            var cellHeight = opts.cellHeight;
            var showDayOfWeek = opts.showDayOfWeek;
            var headerDiv = jQuery("<div>", { "class": "ganttview-vtheader" });

            var dowsDiv = jQuery("<div>", {
                    "class": "ganttview-vthheader-dows",
                    "css": { "height": cellHeight + "px" }
                    });

            if (showDayOfWeek) { headerDiv.append(dowsDiv); }

            for (var i = 0; i < data.length; i++) {
                var itemDiv = jQuery("<div>", {
                        "id": "ganttview-vtheader-item-" + data[i].id,
                        "class": "ganttview-vtheader-item"
                        });
                var seriesDiv = jQuery("<div>", { "class": "ganttview-vtheader-series" });
                var nameDiv = jQuery("<div>", {
                        "id": "ganttview-vtheader-item-name-" + data[i].id,
                        "class": "ganttview-vtheader-item-name",
                        "css": { "height": (data[i].series.length * cellHeight) + "px" }
                });
                
                for (var j = 0; j < data[i].series.length; j++) {
                    seriesDiv.append(jQuery("<div>", {
                                "class": "ganttview-vtheader-series-name ganttview-vtheader-series-name-" + data[i].id,
                                "id": "ganttview-vtheader-series-name-" + data[i].series[j].id
                    }).append(data[i].series[j].name));
                }

                itemDiv.append(nameDiv.append(data[i].name));

                itemDiv.append(seriesDiv);
                headerDiv.append(itemDiv);
            }
            div.append(headerDiv);
        },

        addHzHeader: function (div, months) {
            var opts = Chart.opts;
            var cellWidth = opts.cellWidth;
            var showWeekends = opts.showWeekends;
            var showDayOfWeek = opts.showDayOfWeek;
            var showHolidays = opts.showHolidays;
            var totalW = 0;
            var headerDiv = jQuery("<div>", { "class": "ganttview-hzheader" });
            var monthsDiv = jQuery("<div>", { "class": "ganttview-hzheader-months" });
            var dowsDiv = jQuery("<div>", { "class": "ganttview-hzheader-dows" });
            var daysDiv = jQuery("<div>", { "class": "ganttview-hzheader-days" });

            for (var i = 0; i < 12; i++) {
                if (months[i]) {
                    var w = months[i].length * cellWidth;
                    totalW = totalW + w;
                    var x = 0;

                    for (var j = 0; j < months[i].length; j++) {
                        var cellDate = months[i][j];
                        
                        if ((DateUtils.isWeekend(cellDate) && showWeekends) || !DateUtils.isWeekend(cellDate)) {
                            var dowDiv = jQuery("<div>", { "class": "ganttview-hzheader-dow" });
                            var dayDiv = jQuery("<div>", { "class": "ganttview-hzheader-day" });

                            if (DateUtils.isSaturday(cellDate)) { dowDiv.addClass("ganttview-saturday") };

                            if (DateUtils.isSunday(cellDate)) { dowDiv.addClass("ganttview-sunday") };

                            if (DateUtils.isSaturday(cellDate)) { dayDiv.addClass("ganttview-saturday") };

                            if (DateUtils.isSunday(cellDate)) { dayDiv.addClass("ganttview-sunday") };

                            if (showHolidays) {
                                for (var h in Holidays) {
                                    var holiday = Holidays[h];

                                    if (holiday.at.getTime() == Date.parse(cellDate).getTime()) {
                                        dowDiv.addClass("ganttview-holiday");
                                        dayDiv.addClass("ganttview-holiday");

                                        if (holiday.name) { dayDiv.attr("title", holiday.name); }

                                        if (holiday.color) {
                                            dowDiv.css("color", holiday.color);
                                            dayDiv.css("color", holiday.color);
                                        }

                                        if (holiday.backgroundColor) {
                                            dowDiv.css("background-color", holiday.backgroundColor);
                                            dayDiv.css("background-color", holiday.backgroundColor);
                                        }

                                        break;
                                    }
                                }
                            }

                            dowsDiv.append(dowDiv.append(Chart.dayOfWeekNames[cellDate.getDay()]));
                            daysDiv.append(dayDiv.append(cellDate.getDate()));
                        } else {
                            x += cellWidth;
                        }
                    }

                    totalW -= x;

                    monthsDiv.append(jQuery("<div>", {
                        "class": "ganttview-hzheader-month",
                        "css": { "width": (w - x - 1) + "px" }
                    }).append(Chart.monthNames[i]));
                }
            }

            monthsDiv.css("width", totalW + "px");
            dowsDiv.css("width", totalW + "px");
            daysDiv.css("width", totalW + "px");

            if (showDayOfWeek) {
                headerDiv.append(monthsDiv).append(daysDiv).append(dowsDiv);
            } else {
                headerDiv.append(monthsDiv).append(daysDiv);
            }

            div.append(headerDiv);
        },

        addGrid: function (div, months) {
            var rowDiv = Chart.createGrid(months);
            var gridDiv = jQuery("<div>", { "class": "ganttview-grid" });
            var opts = Chart.opts;
            var cellWidth = opts.cellWidth;
            var data = Chart.opts.data;

            var w = jQuery("div.ganttview-grid-row-cell", rowDiv).length * cellWidth;
            rowDiv.css("width", w + "px");
            gridDiv.css("width", w + "px");

            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < data[i].series.length; j++) {
                    var cloneDiv = rowDiv.clone();
                    cloneDiv.attr("id", "ganttview-grid-row-" + data[i].series[j].id);
                    cloneDiv.addClass("ganttview-grid-row-" + data[i].id);
                    cloneDiv.children().addClass("ganttview-grid-row-cell-" + data[i].series[j].id);
                    gridDiv.append(cloneDiv.clone());
                }
            }

            div.append(gridDiv);
        },

        addBlockContainers: function (div) {
            var opts = Chart.opts;
            var data = opts.data;
            var showDayOfWeek = opts.showDayOfWeek;
            var blocksDiv = jQuery("<div>", { "class": "ganttview-blocks" });

            if (showDayOfWeek) { blocksDiv.addClass("ganttview-with-day-of-week") };

            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < data[i].series.length; j++) {
                    containerDiv = jQuery("<div>", {
                                "class": "ganttview-block-container ganttview-block-container-" + data[i].id,
                                "id": "ganttview-block-container-" + data[i].series[j].id
                    });
                    containerDiv.css("height", opts.cellHeight - 3 + "px");
                    blocksDiv.append(containerDiv);
                }
            }

            div.append(blocksDiv);
        },

        setBlockContainersWidth: function(div) {
            var opts = Chart.opts;
            var data = opts.data;

            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < data[i].series.length; j++) {
                    var gridDiv = jQuery("div#ganttview-grid-row-" + data[i].series[j].id, div);
                    jQuery("div.ganttview-block-container", div).css("width", gridDiv.css("width"));
                }
            }
        },

        addBlocks: function (div) {
            var opts = Chart.opts;
            var data = opts.data;
            var rows = jQuery("div.ganttview-blocks div.ganttview-block-container", div);
            var rowIdx = 0;

            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < data[i].series.length; j++) {
                    var series = data[i].series[j];
                    
                    Chart.createBlock(i, series, rows, rowIdx, opts);

                    rowIdx++;
                }
            }
        },

        applyLastClass: function (div) {
            jQuery("div.ganttview-grid-row div.ganttview-grid-row-cell:last-child", div).addClass("last");
            jQuery("div.ganttview-hzheader-days div.ganttview-hzheader-day:last-child", div).addClass("last");
            jQuery("div.ganttview-hzheader-months div.ganttview-hzheader-month:last-child", div).addClass("last");
        },

        setCount: function (obj, start, end) {
            var opts = Chart.opts;
            var weekends = 0;
            var seriesName = obj.data('block-data').seriesName;
            var count = DateUtils.daysBetween(start, end, false, false);
            var text = obj.data('block-data').text;
            var excludeWeekends = opts.excludeWeekends;
            var showWeekends = opts.showWeekends;
            var excludeHolidays = opts.excludeHolidays;

            if (excludeWeekends && showWeekends) { weekends = DateUtils.daysBetween(start, end, true, false); }

            if (excludeHolidays) { weekends += DateUtils.daysBetween(start, end, null, true); }

            count -= weekends;

            obj.data('block-data').count = count;

            if (!text || (text && text == null)) { obj.children('.ganttview-block-text').text(count); }

            obj.attr("title", Utils.getTitle(seriesName, count));
        },

        createGrid: function(months) {
            var opts = Chart.opts;
            var data = opts.data;
            var cellWidth = opts.cellWidth;
            var cellHeight = opts.cellHeight;
            var showWeekends = opts.showWeekends;
            var showHolidays = opts.showHolidays;
            var rowDiv = jQuery("<div>", { "class": "ganttview-grid-row" }); 

            for (var i = 0; i < 12; i++) {
                if (months[i]) {
                    for (var j = 0; j < months[i].length; j++) {
                        var cellDiv = jQuery("<div>", {
                                "class": "ganttview-grid-row-cell",
                                "css": { "width": cellWidth - 1 + "px", "height": cellHeight + "px" }
                        }); 

                        var cellDate = months[i][j]; 
                        
                        if ((DateUtils.isWeekend(cellDate) && showWeekends) || !DateUtils.isWeekend(cellDate)) {
                            if (DateUtils.isWeekend(cellDate)) { cellDiv.addClass("ganttview-weekend") }; 

                            if (DateUtils.isSaturday(cellDate)) { cellDiv.addClass("ganttview-saturday") }; 
                            
                            if (DateUtils.isSunday(cellDate)) { cellDiv.addClass("ganttview-sunday") }; 
                            
                            if (showHolidays) {
                                for (var h in Holidays) {
                                    var holiday = Holidays[h]; 
                                    
                                    if (holiday.at.getTime() == Date.parse(cellDate).getTime()) {
                                        cellDiv.addClass("ganttview-holiday"); 
                                        
                                        if (holiday.color) { cellDiv.css("color", holiday.color); } 

                                        if (holiday.backgroundColor) { cellDiv.css("background-color", holiday.backgroundColor); } 
                                        
                                        break;
                                    }
                                }
                            } 
                            
                            rowDiv.append(cellDiv.clone());
                        }
                    }
                } else {
                    break;
                }
            } 
            
            return rowDiv;
        },

        createBlock: function(itemIdx, series, rows, rowIdx, opts) {
            var data = opts.data;
            var start = opts.start;
            var end = opts.end;
            var cellWidth = opts.cellWidth;
            var excludeWeekends = opts.excludeWeekends;
            var showWeekends = opts.showWeekends;
            var excludeHolidays = opts.excludeHolidays;
            var changed = opts.changed;
            var clicked = opts.clicked;
            var dblClicked = opts.dblClicked;
            var size = DateUtils.daysBetween(series.start, series.end, false, false);

            if (!showWeekends) { size -= DateUtils.daysBetween(series.start, series.end, true, false); }

            if (size && size > 0) {
                if (size > 365) { size = 365; } // Keep blocks from overflowing a year

                var count = size;

                if (excludeWeekends && showWeekends) { count -= DateUtils.daysBetween(series.start, series.end, true, false); }

                if (excludeHolidays) { count -= DateUtils.daysBetween(series.start, series.end, null, true); }

                var offset = DateUtils.daysBetween(start, series.start, false, false);

                if (!showWeekends) { offset -= DateUtils.daysBetween(start, series.start, true, false); }

                var readOnly = series.readOnly ? series.readOnly : false;

                var blockDiv = jQuery("<div>", {
                    "id": "ganttview-block-" + series.id,
                    "class": "ganttview-block",
                    "title": Utils.getTitle(series.name, count),
                    "css": {
                        "width": ((size * cellWidth) - 9) + "px",
                        "margin-left": ((offset * cellWidth) + 3) + "px",
                        "left": "0px"
                    }
                }).data("block-data", {
                    itemId: data[itemIdx].id, 
                    itemName: data[itemIdx].name,
                    seriesId: series.id,
                    seriesName: series.name,
                    start: Date.parse(series.start),
                    end: Date.parse(series.end),
                    color: series.color,
                    text: series.text,
                    count: count
                }).dblclick(function() {
                    if (Chart.selectedBlock != null && Chart.selectedBlock.data('block-data').seriesId == $(this).data('block-data').seriesId) {
                        var selItemRowId = Chart.selectedBlock.data('block-data').itemId;
                        var selRowId = Chart.selectedBlock.data('block-data').seriesId; 

                        Chart.selectedBlock.removeClass("ganttview-block-selected");
                        jQuery("div#ganttview-vtheader-item-name-" + selItemRowId).removeClass("ganttview-vtheader-item-name-selected");
                        jQuery("div.ganttview-grid-row-cell-" + selRowId).removeClass("ganttview-grid-row-cell-selected");
                        jQuery("div#ganttview-vtheader-series-name-" + selRowId).removeClass("ganttview-vtheader-series-name-selected"); 
                        Chart.selectedBlock = null;
                    } 
                      
                    if (dblClicked != null) { dblClicked($(this)); }
                }).click(function() {
                    if (Chart.selectedBlock != null && Chart.selectedBlock.data('block-data').seriesId != $(this).data('block-data').seriesId) {
                        var selItemRowId = Chart.selectedBlock.data('block-data').itemId;
                        var selRowId = Chart.selectedBlock.data('block-data').seriesId; 

                        Chart.selectedBlock.removeClass("ganttview-block-selected");
                        jQuery("div#ganttview-vtheader-item-name-" + selItemRowId).removeClass("ganttview-vtheader-item-name-selected");
                        jQuery("div.ganttview-grid-row-cell-" + selRowId).removeClass("ganttview-grid-row-cell-selected");
                        jQuery("div#ganttview-vtheader-series-name-" + selRowId).removeClass("ganttview-vtheader-series-name-selected"); 
                        Chart.selectedBlock = null;
                    } 
                        
                    if (Chart.selectedBlock == null || Chart.selectedBlock.data('block-data').seriesId != $(this).data('block-data').seriesId) {
                        var curItemRowId = $(this).data('block-data').itemId;
                        var curRowId = $(this).data('block-data').seriesId; 
                            
                        $(this).addClass("ganttview-block-selected");
                        jQuery("div#ganttview-vtheader-item-name-" + curItemRowId).addClass("ganttview-vtheader-item-name-selected");
                        jQuery("div.ganttview-grid-row-cell-" + curRowId).addClass("ganttview-grid-row-cell-selected");
                        jQuery("div#ganttview-vtheader-series-name-" + curRowId).addClass("ganttview-vtheader-series-name-selected"); 
                        Chart.selectedBlock = $(this);
                    } 
                        
                    if (clicked != null) { clicked($(this)); }
                 }).draggable({
                    disabled: readOnly,
                    axis: 'x',
                    containment: 'parent',
                    grid: [cellWidth, 0],
                    stop: function(event, ui) {
                        var distance = (ui.position.left) / cellWidth;
                        //console.debug('Position: %o, Distance: %o', ui.position.left, distance);
                            
                        var s = $(this).data('block-data').start.addDays(distance);
                        var e = $(this).data('block-data').end.addDays(distance);
                        //console.debug('Start: %o, End: %o', s, e);

                        //var m = $(this).css("margin-left").replace(/px/, "");
                        //var n = parseInt(m) + parseInt(ui.position.left);
                        //ui.position.left = 0;
                            
                        var n = DateUtils.daysBetween(start, s, false, false) * cellWidth + 3;
                        $(this).css("margin-left", n + "px");
                        $(this).css("left", "0px");
                            
                        Chart.setCount($(this), s, e);
                            
                        if (changed != null) { changed($(this)); }
                   }
               }).resizable({
                    disabled: readOnly,
                    containment: 'parent',
                    grid: [cellWidth, 0],
                    handles: 'e',
                    resize: function(event, ui) {
                        $(this).css("position", "");
                        $(this).css("top", "");
                        $(this).css("left", "0px");
                    },
                    stop: function(event, ui) {
                        var rdistance = Math.ceil(ui.size.width / cellWidth);
                        //console.debug('width: %o, originalSize: %o, day: %o', ui.size.width, ui.originalSize.width, rdistance);
                            
                        var s = $(this).data('block-data').start;
                        var e = $(this).data('block-data').end;
                        var prevCount = DateUtils.daysBetween(s, e, false, false);

                        e.addDays(rdistance - prevCount);
                        //console.debug('Start: %o, End: %o', s, e);

                        $(this).css("position", "");
                        $(this).css("top", "");
                        $(this).css("left", "0px");
                        ui.position.left = 0;

                        Chart.setCount($(this), s, e);

                        if (changed != null) { changed($(this)); }
                    }
                });

                if (readOnly) { blockDiv.addClass("ganttview-readOnly"); }

                if (series.color) { blockDiv.css("background-color", series.color); }

                if(series.text && series.text != null) {
                    blockDiv.append($("<div>", {
                        "id": "ganttview-block-text-"+ series.id,
                        "class": "ganttview-block-text"
                    }).text(series.text));
                }else{
                    var weekends = 0; 

                    if (excludeWeekends && showWeekends) { weekends = DateUtils.daysBetween(series.start, series.end, true, false); }

                    if (excludeHolidays) { weekends += DateUtils.daysBetween(series.start, series.end, null, true); }

                    blockDiv.append($("<div>", {
                        "id": "ganttview-block-text-" + series.id,
                        "class": "ganttview-block-text"
                    }).text(size - weekends));
                }

                jQuery(rows[rowIdx]).append(blockDiv);
            }
        },

        addSeries: function(d, s, itemIdx, mergedPoint, newPoint) {
            var div = jQuery("div.ganttview-slide-container");

            var vtheaderItem = jQuery("div#ganttview-vtheader-item-name-" + d.id);
            var vtheaderSeries = jQuery("div.ganttview-vtheader-series-name-" + d.id);

            var gridDiv = jQuery("div.ganttview-grid div.ganttview-grid-row-" + d.id, div);
            var months = Chart.getMonths();
            var rowDiv = Chart.createGrid(months);
            var cellWidth = Chart.opts.cellWidth; 
            var w = jQuery("div.ganttview-grid-row-cell", rowDiv).length * cellWidth;
            rowDiv.css("width", w + "px");

            var rows= jQuery("div.ganttview-blocks div.ganttview-block-container-" + d.id, div);
            var newRow = jQuery("<div>", {
                "class": "ganttview-block-container ganttview-block-container-" + d.id,
                "id": "ganttview-block-container-" + s.id
            });
            newRow.css("height", Chart.opts.cellHeight - 3 + "px");
            newRow.css("width", w + "px");

            var newVTHeader = jQuery("<div>", {
                "class": "ganttview-vtheader-series-name ganttview-vtheader-series-name-" + d.id,
                "id": "ganttview-vtheader-series-name-" + s.id
            }).append(s.name);

            var m = vtheaderItem.css("height");

            m = (m != null) ? m.replace(/px/, "") : "0";

            var n = parseInt(m) + Chart.opts.cellHeight;
            vtheaderItem.css("height", n + "px");

            if (vtheaderSeries.length == 0) {
                if (newPoint == null) {
                    vtheaderItem.next().append(newVTHeader);
                } else {
                    vtheaderSeries = jQuery("div#ganttview-vtheader-item-name-" + newPoint);
                    vtheaderSeries.next().append(newVTHeader);
                }

            } else {
                if (mergedPoint != null) {
                    vtheaderSeries = jQuery("div#ganttview-vtheader-series-name-" + mergedPoint);
                }

                vtheaderSeries.last().after(newVTHeader);
            }

            var cloneDiv = rowDiv.clone();
            cloneDiv.attr("id", "ganttview-grid-row-" + s.id);
            cloneDiv.addClass("ganttview-grid-row-" + d.id);
            cloneDiv.children().addClass("ganttview-grid-row-cell-" + s.id);

            if (gridDiv.length == 0) {
                if (newPoint == null) {
                    jQuery("div.ganttview-grid").append(cloneDiv);
                } else {
                    gridDiv = jQuery("div#ganttview-grid-row-" + mergedPoint, div);
                    gridDiv.after(cloneDiv);
                }
            } else {
                if (mergedPoint != null) {
                    gridDiv = jQuery("div#ganttview-grid-row-" + mergedPoint, div);
                } 

                gridDiv.last().after(cloneDiv);
            }

            var newRows = $.makeArray(newRow.clone());
            Chart.createBlock(itemIdx, s, newRows, 0, Chart.opts); 

            if (rows.length == 0) {
                if (newPoint == null) {
                    jQuery("div.ganttview-blocks").append(newRows);
                } else {
                    rows = jQuery("div#ganttview-block-container-" + mergedPoint, div);
                    rows.after(newRows);
                }
            } else {
                if (mergedPoint != null) {
                    rows = jQuery("div#ganttview-block-container-" + mergedPoint, div);
                }

                rows.last().after(newRows);
            }

            s.merged = true;
        }

    };

    var Events = {
        bindBlockClick: function (div, callback) {
            $("div.ganttview-block").live("click", function () {
                if (callback) { callback($(this).data("block-data")); }
            });
        }
    };

    var ArrayUtils = {
        contains: function (arr, obj) {
            var has = false;
            for (var i = 0; i < arr.length; i++) { if (arr[i] == obj) { has = true; } }
            return has;
        }
    };

    var DateUtils = {
        daysBetween: function (start, end, excludeWeekends, holidayOnly) {
            if (!start || !end) { return 0; }

            start = Date.parse(start);
            end = Date.parse(end);

            if (start.getYear() == 1901 || end.getYear() == 8099) { return 0; }

            var count = 0, date = start.clone();

            while (date.compareTo(end) == -1) {
                if (holidayOnly) {
                    for (var h in Holidays) {
                        if (Holidays[h].at.getTime() == date.getTime()) {
                            count = count + 1;
                            break;
                        }
                    }
                } else if ((excludeWeekends && DateUtils.isWeekend(date)) || !excludeWeekends) {
                    count = count + 1;
                }

                date.addDays(1);
            }

            return count;
        },
        isWeekend: function (date) {
            return date.getDay() % 6 == 0;
        },
        isSaturday: function (date) {
            return date.getDay() == 6;
        },
        isSunday: function (date) {
            return date.getDay() == 0;
        }
    };

    var Utils = {
        getTitle: function (name, distance) {
            return name + ", " + distance + ChartLang.days;
        }
    };

    jQuery.fn.extend({ 

        refreshGanttData: function() {
            var opts = Chart.opts;
            var d = Chart.opts.data;
            var data = $(this).data('block-data');

            for (var h = 0; h < d.length; h++) {
                if (d[h].id == data.itemId) {
                    d[h].name = data.itemName; 

                    for (var i = 0; i < d[h].series.length; i++) {
                        if (d[h].series[i].id == data.seriesId) {
                            d[h].series[i].name = data.seriesName;
                            d[h].series[i].start = data.start;
                            d[h].series[i].end = data.end;
                            d[h].series[i].text = data.text;

                            break;
                        }
                    }

                    break;
                }
            }

            jQuery("div#ganttview-vtheader-item-name-" + data.itemId).text(data.itemName);
            jQuery("div#ganttview-vtheader-series-name-" + data.seriesId).text(data.seriesName); 

            var blockDiv = jQuery("div#ganttview-block-" + data.seriesId);
            var size = DateUtils.daysBetween(data.start, data.end, false, false);
            var offset = DateUtils.daysBetween(opts.start, data.start, false, false); 

            blockDiv.css({
                "width": ((size * opts.cellWidth) - 9) + "px",
                "margin-left": ((offset * opts.cellWidth) + 3) + "px"
            });

            var weekends = 0; 
            
            if (opts.excludeWeekends && opts.showWeekends) { weekends = DateUtils.daysBetween(data.start, data.end, true, false); }

            if (opts.excludeHolidays) { weekends += DateUtils.daysBetween(data.start, data.end, null, true); } 
            
            data.count = size - weekends; 
            blockDiv.attr("title", Utils.getTitle(data.seriesName, data.count)); 
            
            if(data.text && data.text != null) {
                jQuery("div#ganttview-block-text-" + data.seriesId).text(data.text);
            } else {
                jQuery("div#ganttview-block-text-" + data.seriesId).text(data.count);
            }
        }, 

        deleteGanttData: function(o) {
            var opts = Chart.opts;
            var data = opts.data;
            var deleted = false;
            var seriesDeleted = false; 
            var iId = o.data('block-data').itemId;
            var sId = o.data('block-data').seriesId;
            
            for (var m = 0; m < data.length; m++) {
                for (var n = 0; n < data[m].series.length; n++) {
                    if (data[m].series[n].id == o.data('block-data').seriesId) {
                        data[m].series.splice(n, 1); 

                        if (data[m].series.length == 0) { 
                            data.splice(m, 1);
                            seriesDeleted = true;
                        } 
                        
                        deleted = true;
                        break;
                    }
                } 
                
                if (deleted) { break; }
            } 
            
            if (deleted == false) { return; } 
            
            jQuery("div#ganttview-grid-row-" + sId).remove(); 
            jQuery("div#ganttview-block-container-" + sId).remove(); 
            jQuery("div#ganttview-vtheader-series-name-" + sId).remove(); 
            
            if (seriesDeleted) {
                jQuery("div#ganttview-vtheader-item-" + iId).remove();
            } else {
                var itemDiv = jQuery("div#ganttview-vtheader-item-name-" + iId);
                itemDiv.removeClass("ganttview-vtheader-item-name-selected");
                var m = itemDiv.css("height").replace(/px/, "");
                var n = parseInt(m) - opts.cellHeight;
                itemDiv.css("height", n + "px");
            } 
            
            Chart.selectedBlock = null;
        }
    });

    jQuery.extend(jQuery.fn.ganttView, {
        addData: function(d) {
            var data = Chart.opts.data;

            for (var h= 0; h < d.length; h++) {
                for (var i = 0; i < d[h].series.length; i++) {
                    d[h].series[i].merged = false;
                }
            }

            for (var h = 0; h < d.length; h++) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].id == d[h].id) {
                        if (Chart.selectedBlock == null) { Chart.opts.data[i].series.push(d[h].series); }

                        for (var j = 0; j < d[h].series.length; j++) {
                            if (Chart.selectedBlock == null) {
                                Chart.addSeries(d[h], d[h].series[j], i, null, null);
                            } else {
                                Chart.addSeries(d[h], d[h].series[j], i, Chart.selectedBlock.data('block-data').seriesId, null); 
                            }
                        }

                        break;
                    }
                }
            }

            var header = jQuery("div.ganttview-vtheader");
            var newItem = jQuery("<div>", { "class": "ganttview-vtheader-item" });
            var newItemName = jQuery("<div>", { "class": "ganttview-vtheader-item-name" });
            var newSeries = jQuery("<div>", { "class": "ganttview-vtheader-series" });
            var newIdx = 0;

            if (Chart.selectedBlock != null) {
                for (var h = 0; h < data.length; h++) {
                    for (var i = 0; i < data[h].series.length; i++) {
                        if (Chart.selectedBlock.data('block-data').seriesId == data[h].series[i].id) {
                            var dataMerged = false;

                            for (var m = 0; m < d.length; m++) {
                                if (d[m].id == data[h].id) {
                                    var f = data[h].series.slice(0, i + 1);
                                    var g = data[h].series.slice(i + 1, data[h].series.length);
                                    $.merge(f, d[m].series);
                                    $.merge(f, g);

                                    delete data[h].series;
                                    Chart.opts.data[h].series = f;

                                    newIdx = h;
                                    
                                    dataMerged = true;
                                }
                            }

                            if (dataMerged == false) {
                                var f = data.slice(0, h + 1);
                                var g = data.slice(h + 1, data.length);
                                $.merge(f, d);
                                $.merge(f, g);
                                Chart.opts.data = f;

                                newIdx = h + 1;
                            }

                            break;
                        }
                    }
                }
            } else if (data.length == 0) {
                Chart.opts.data = d;
            }

            for (var h = 0; h < d.length; h++) {
                for (var i = 0; i < d[h].series.length; i++) {
                    if (d[h].series[i].merged == false) {
                        var cloneNewItem = newItem.clone();
                        cloneNewItem.attr("id", "ganttview-vtheader-item-" + d[h].id);
                        var cloneNewItemName = newItemName.clone();
                        cloneNewItemName.attr("id", "ganttview-vtheader-item-name-" + d[h].id);
                        cloneNewItemName.css("height", "0px");
                        cloneNewItemName.append(d[h].name);
                        cloneNewItem.append(cloneNewItemName);
                        cloneNewItem.append(newSeries.clone());

                        if (Chart.selectedBlock == null) {
                            Chart.opts.data.push(d[h]);
                            header.append(cloneNewItem);
                            Chart.addSeries(d[h], d[h].series[i], Chart.opts.data.length - 1, null, null);
                        } else {
                            header = jQuery("div#ganttview-vtheader-series-name-" + Chart.selectedBlock.data('block-data').seriesId).parent().parent();
                            header.after(cloneNewItem);
                            Chart.addSeries(d[h], d[h].series[i], newIdx, Chart.selectedBlock.data('block-data').seriesId, d[h].id);
                        }
                    }
                }
            }

            //console.debug("%o", data);
        }
    });
})(jQuery);

