Ext.ns('App');

//Ext.Loader.setConfig({enabled: true, disableCaching : false });
//Ext.Loader.setPath('Sch', '../../../ExtScheduler2.x/js/Sch');
//Ext.Loader.setPath('Gnt', '../../js/Gnt');

Ext.require([
    'Gnt.panel.Gantt',
    'Gnt.column.PercentDone',
    'Gnt.column.StartDate',
    'Gnt.column.EndDate',
    'Sch.plugin.TreeCellEditing'
]);

Ext.onReady(function() {Localize();  App.Gantt.init(); });

App.Gantt = {

    // Initialize application
    init: function (serverCfg) {
        Ext.QuickTips.init();

        var taskStore = Ext.create("Gnt.data.TaskStore", {
            autoLoad: true,
            proxy : {
                type : 'ajax',
                method: 'GET',
                url: 'tasks.xml',
                reader: {
                    type : 'xml',
                    // records will have a 'Task' tag
                    record: "Task",
                    root: "Tasks",
                    idProperty: "Id"
                }
            },
            sorters: [{
                property: 'leaf',
                direction: 'ASC'
            }]
        });

        var dependencyStore = Ext.create("Ext.data.Store", {
            autoLoad: true,
            model : 'Gnt.model.Dependency',
            proxy: {
                type : 'ajax',
                url: 'dependencies.xml',
                method: 'GET',
                reader: {
                    type : 'xml',
                    root : 'Links',
                    record: 'Link' // records will have a 'Link' tag
                }
            }
        });


        var colSlider = Ext.create("Ext.slider.Single", {
            width: 120,
            value: 100, // TODO Sch.PresetManager.getPreset('weekAndDayLetter').timeColumnWidth,
            minValue: 80,
            maxValue: 240,
            increment: 10
        });

        var cellEditing = Ext.create('Sch.plugin.TreeCellEditing', {
            clicksToEdit: 1
        });

        var g = Ext.create('Gnt.panel.Gantt', {
            height: 350,
            width: 1000,
            renderTo: Ext.getBody(),
            leftLabelField: 'Name',
            highlightWeekends: false,
            //showTodayLine: true,
            loadMask: true,
            enableProgressBarResize: true,
            enableDependencyDragDrop: true,
            //snapToIncrement : true,
            cascadeChanges : false,
            startDate: new Date(2010, 0, 4),
            endDate: Sch.util.Date.add(new Date(2010, 0, 4), Sch.util.Date.WEEK, 20),
            viewPreset: 'weekAndDayLetter',

            eventRenderer: function (taskRecord) {
                return {
                    ctcls : taskRecord.get('Id') // Add a CSS class to the task element
                };
            },

            tooltipTpl: new Ext.XTemplate(
                '<ul class="taskTip">',
                    '<li><strong>Task:</strong>{Name}</li>',
                    '<li><strong>Start:</strong>{[Ext.Date.format(values.StartDate, "y-m-d")]}</li>',
                    '<li><strong>Duration:</strong> {Duration}d</li>',
                    '<li><strong>Progress:</strong>{PercentDone}%</li>',
                '</ul>'
            ).compile(),


            // Setup your static columns
            columns: [
                {
                    xtype : 'treecolumn',
                    header: '任务',
                    sortable: true,
                    dataIndex: 'Name',
                    width: 200,
                    field: {
                        allowBlank: false
                    }
                },
                {
                    xtype : 'startdatecolumn',
                    header: '开始日期',
                },
                {
                    xtype : 'enddatecolumn',
                    header: '结束日期'
                },
                {
                    xtype : 'percentdonecolumn',
                    header: '完成百分比'
                }
            ],

            taskStore: taskStore,
            dependencyStore: dependencyStore,
            lockedViewConfig: {
                plugins: {
                    ptype: 'treeviewdragdrop'
                }
            }
        });

        colSlider.on({
            change: function (s, v) { // TODO 
                g.updateTimeColumnHeaderWidths(v);
            },
            changecomplete: function (s, v) { // TODO 
                g.setTimeColumnWidth(v);
            }
        });
    }
};
