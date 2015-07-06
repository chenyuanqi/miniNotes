Ext.ns('App');

//Ext.Loader.setConfig({enabled: true, disableCaching : false });
//Ext.Loader.setPath('Sch', '../../../ExtScheduler2.x/js/Sch');
//Ext.Loader.setPath('Gnt', '../../js/Gnt');

Ext.require([
    'Gnt.panel.Gantt',
    'Gnt.column.StartDate',
    'Gnt.column.EndDate',
    'Gnt.column.Duration',
    'Sch.plugin.TreeCellEditing',
    'Gnt.widget.Calendar'
]);

Ext.onReady(function() {Localize();  App.Gantt.init(); });

App.Gantt = {

    // Initialize application
    init: function (serverCfg) {
        Ext.QuickTips.init();

        var calendar        = new Gnt.data.Calendar({
            data    : [
                {
                    Date            : new Date(2010, 0, 13),
                    Cls             : 'gnt-national-holiday'
                },
                {
                    Date            : new Date(2010, 1, 1),
                    Cls             : 'gnt-company-holiday'
                },
                {
                    Date            : new Date(2010, 0, 16),
                    IsWorkingDay    : true
                }
            ]
        });      
        
        var taskStore = Ext.create("Gnt.data.TaskStore", {
            autoLoad        : true,
            
            calendar        : calendar,
            
            proxy : {
                type    : 'ajax',
                method  : 'GET',
                url     : 'tasks.xml',
                reader  : {
                    type        : 'xml',
                    // records will have a 'Task' tag
                    record      : "Task",
                    root        : "Tasks",
                    idProperty  : "Id"
                }
            },
            sorters: [{
                property        : 'leaf',
                direction       : 'ASC'
            }]
        });
        

        var dependencyStore = Ext.create("Ext.data.Store", {
            autoLoad    : true,
            model       : 'Gnt.model.Dependency',
            proxy       : {
                type    : 'ajax',
                url     : 'dependencies.xml',
                method  : 'GET',
                reader  : {
                    type        : 'xml',
                    root        : 'Links',
                    record      : 'Link' // records will have a 'Link' tag
                }
            }
        });


        var colSlider = Ext.create("Ext.slider.Single", {
            width       : 120,
            value       : Sch.preset.Manager.getPreset('weekAndDayLetter').timeColumnWidth,
            minValue    : 100,
            maxValue    : 240,
            increment   : 10
        });
        
        var startDate   = new Date(2015, 0, 11);
        var endDate     = Sch.util.Date.add(new Date(2015, 0, 11), Sch.util.Date.WEEK, 6);

        var gantt = Ext.create('Gnt.panel.Gantt', {
            height      : 600,
            width       : 1000,
            
            renderTo    : Ext.getBody(),
            
            leftLabelField  : 'Name',

//            resizeHandles               : 'none',
//            showTodayLine               : true,
//            snapToIncrement             : true,
            loadMask                    : true,
            enableProgressBarResize     : true,
            enableDependencyDragDrop    : false,
            highlightWeekends           : true,
//            weekendsAreWorkdays                : false,  // uncomment to disable the skipping weekends/holidays functionality completely (empty calendar)
                                                    // (for compatibility with 1.x)
            
//            skipWeekendsDuringDragDrop  : false,  // uncomment to disable the skipping weekends/holidays functionality during d&d operations

            viewPreset      : 'weekAndDayLetter',
            
            startDate       : startDate,
            endDate         : endDate,
            
            tooltipTpl: new Ext.XTemplate(
                '<ul class="taskTip">',
                    '<li><strong>Task:</strong>{Name}</li>',
                    '<li><strong>Start:</strong>{[Ext.Date.format(values.StartDate, "y-m-d")]}</li>',
                    '<li><strong>Duration:</strong> {[parseFloat(Ext.Number.toFixed(values.Duration, 1))]} {DurationUnit}</li>',
                    '<li><strong>Progress:</strong>{PercentDone}%</li>',
                '</ul>'
            ).compile(),


            // Setup your static columns
            columns         : [
                {
                    xtype       : 'treecolumn',
                    header      : '任务',
                    sortable    : true,
                    dataIndex   : 'Name',
                    width       : 160
                },
                {
                    xtype       : 'startdatecolumn',
                    header      : '开始时间',
                    width       : 80
                },
                {
                    xtype       : 'enddatecolumn',
                    header      : '结束时间',
                    width       : 80
                },
                {
                    xtype       : 'durationcolumn',
                    header      : '工期',
                    width       : 70
                },
                {
                    header      : '% Done',
                    sortable    : true,
                    dataIndex   : 'PercentDone',
                    width       : 70,
                    align       : 'center'
                }
            ],

            taskStore           : taskStore,
            dependencyStore     : dependencyStore,
            
            plugins             : [
                Ext.create('Sch.plugin.TreeCellEditing', {
                    clicksToEdit: 1
                })            
            ],
            tbar                : [
                {
                    text            : 'See calendar',
                    iconCls         : 'gnt-date',
                    
                    menu            : [
                        {
                            xtype           : 'ganttcalendar',
                            
                            calendar        : calendar,
                            startDate       : startDate,
                            endDate         : endDate,
                            
                            showToday       : false
                        }
                    ]
                },
                '->',
                {
                    xtype           : 'label',
                    text            : 'Column Width'
                },
                ' ',
                colSlider
            ]
        });

        colSlider.on({
            
            change: function (slider, value) {
                gantt.setTimeColumnWidth(value, true);
            },
            
            changecomplete: function (slider, value) {
                gantt.setTimeColumnWidth(value);
            }
        });
    }
};
