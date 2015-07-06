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

Ext.onReady(function() { Localize(); App.Gantt.init(); });

App.Gantt = {

    // Initialize application
    init: function (serverCfg) {
        Ext.QuickTips.init();

        var taskStore = Ext.create("Gnt.data.TaskStore", {
            model : 'Gnt.model.Task',
            autoLoad: true,
            proxy : {
                type : 'ajax',
                method: 'GET',
                url: '/Public/plugins/ext-gantt/ext-gantt/examples/basic/tasks.xml',
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
                url: '/Public/plugins/ext-gantt/ext-gantt/examples/basic/dependencies.xml',
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
            clicksToEdit: 1,
            listeners : {
                beforeedit : function() { return !Ext.getCmp('demo-readonlybutton').pressed; }
            }
        });

        var g = Ext.create('Gnt.panel.Gantt', {
            height: 512,
            width: 1080,
            renderTo: Ext.getBody(),
            leftLabelField: 'Name',
            highlightWeekends: true,
            loadMask: true,
            enableProgressBarResize: true,
            enableDependencyDragDrop: true,
            //snapToIncrement : true,
            startDate: new Date(2015, 5, 4),
            endDate: Sch.util.Date.add(new Date(2016, 12, 30), Sch.util.Date.WEEK, 100),
            viewPreset: 'weekAndDayLetter',
			cascadeChanges: true,

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
            columns         : [
                {
                    xtype       : 'treecolumn',
                    header      : '任务简述',
                    sortable    : true,
                    dataIndex   : 'Name',
                    width       : 170
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
                    header      : '总耗时',
                    width       : 50
                },
                {
                    header      : '完成百分比',
                    sortable    : true,
                    dataIndex   : 'PercentDone',
                    width       : 80,
                    align       : 'center'
                }
            ],

            taskStore: taskStore,
            dependencyStore: dependencyStore,
            plugins: [cellEditing],
            
            tbar: [
                {
                    text: '新增任务',
                    iconCls: 'icon-add',
                    handler: function () {
                        var newTask = new taskStore.model({
                                Name: 'New task',
                                leaf : true,
                                PercentDone: 0
                            });
                        taskStore.getRootNode().appendChild(newTask);
                    }
                },
                {
                    enableToggle: true,
                    id : 'demo-readonlybutton',
                    text: '只读模式',
                    pressed: false,
                    handler: function () {
                        g.setReadOnly(this.pressed);
                    }
                },
                '->',
                {
                    xtype: 'label',
                    text: '时间宽度'
                },
                ' ',
                colSlider
            ]
        });

        colSlider.on({
            change: function (s, v) {
                g.setTimeColumnWidth(v, true);
            },
            changecomplete: function (s, v) {
                g.setTimeColumnWidth(v);
            }
        });
    }
};
