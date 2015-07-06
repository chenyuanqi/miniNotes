Ext.ns('App');

//Ext.Loader.setConfig({enabled: true, disableCaching : false });
//Ext.Loader.setPath('Sch', '../../../ExtScheduler2.x/js/Sch');
//Ext.Loader.setPath('Gnt', '../../js/Gnt');

Ext.require([
    'Gnt.panel.Gantt',
    'Gnt.column.PercentDone',
    'Gnt.column.StartDate',
    'Gnt.column.EndDate',
    'Sch.plugin.Pan',
    'Gnt.plugin.DependencyEditor'
]);

Ext.onReady(function() {Localize(); App.Gantt.init(); });

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
            cascadeChanges : true,
            startDate: new Date(2010, 0, 4),
            endDate: Sch.util.Date.add(new Date(2010, 0, 4), Sch.util.Date.WEEK, 20),
            viewPreset: 'weekAndDayLetter',

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
                    header: '开始时间'
                }
            ],

            taskStore: taskStore,
            dependencyStore: dependencyStore,
            plugins: [
                new Sch.plugin.Pan(),
                this.depEditor = new Gnt.plugin.DependencyEditor({
                    buttons: [
                        {
                            text: 'Ok',
                            scope: this,
                            handler: function () {
                                var formPanel = this.depEditor;
                                formPanel.getForm().updateRecord(formPanel.dependencyRecord);
                                this.depEditor.collapse();
                            }
                        },
                        {
                            text: 'Cancel',
                            scope: this,
                            handler: function () {
                                this.depEditor.collapse();
                            }
                        },
                        {
                            text: 'Delete',
                            scope: this,
                            handler: function () {
                                var formPanel = this.depEditor,
                                    record = this.depEditor.dependencyRecord;
                                record.store.remove(record);
                                formPanel.collapse();
                            }
                        }
                    ]
                })
            ]
        });
    }
};
