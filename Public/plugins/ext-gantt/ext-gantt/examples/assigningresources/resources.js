//Ext.Loader.setConfig({enabled: true, disableCaching : false });
//Ext.Loader.setPath('Sch', '../../../ExtScheduler2.x/js/Sch');
//Ext.Loader.setPath('Gnt', '../../js/Gnt');

Ext.require([
    'Gnt.panel.Gantt',
    'Sch.plugin.TreeCellEditing',
    'Gnt.column.PercentDone',
    'Gnt.column.StartDate',
    'Gnt.column.EndDate',
    'Gnt.widget.AssignmentCellEditor',
    'Gnt.column.ResourceAssignment',
    'Gnt.model.Assignment'
]);

Ext.onReady(function() {
    Localize();
    
    Ext.define("Task", {
        extend : "Gnt.model.Task",
        associations: [{
            model: 'Assignment',
            type: 'hasMany',
            primaryKey: 'Id',
            foreignKey: 'TaskId',
            associationKey: 'assignments' // read child data from assignments
        }]
    });
    
    Ext.define("Assignment", {
        extend : "Gnt.model.Assignment",
        belongsTo : 'Task'
    });

    var resourceStore = Ext.create("Ext.data.JsonStore", {
        model : 'Gnt.model.Resource'
    });

    var assignmentStore = Ext.create("Ext.data.Store", {
        model : 'Assignment',
        autoLoad : true,
        
        // Must pass a reference to resource store
        resourceStore : resourceStore,
        
        proxy : {
            method: 'GET',
            type : 'ajax',
            url: 'assignmentdata.js',
            reader : {
                type : 'json',
                root : 'assignments'
            }
        },
        listeners : {
            load : function() {
                resourceStore.loadData(this.proxy.reader.jsonData.resources);
            }
        }
    });

    var taskStore = Ext.create("Gnt.data.TaskStore", {
        model : 'Task',
        autoLoad : true,
        proxy : {
            type : 'ajax',
            method: 'GET',
            url: 'taskdata.js',
            reader : {
                type : 'json'
            }
        }
    });

    var assignmentEditor = Ext.create('Gnt.widget.AssignmentCellEditor', {
        assignmentStore : assignmentStore,
        resourceStore : resourceStore
    });

    var cellEditing = Ext.create('Sch.plugin.TreeCellEditing', {
        clicksToEdit: 1
    });

    var g = Ext.create('Gnt.panel.Gantt', {
        height : 400,
        width: 1000,
        renderTo : Ext.getBody(),
        multiSelect : true,

        // Object with editor and dataIndex defined
        leftLabelField : {
            dataIndex : 'Name',
            editor : { xtype : 'textfield' }
        },

        // ... or an object with editor and renderer defined
        rightLabelField : {
            dataIndex : 'Id',
            renderer : function(value, record) {
                return 'Id: #' + value;
            }
        },

        eventRenderer : function(task) {
            if (assignmentStore.findExact('TaskId', task.data.Id) >= 0) {
                // This task has resources assigned, show a little icon
                return {
                    ctcls : 'resources-assigned'
                };
            }
        },

        highlightWeekends : true,
        showTodayLine : true,
        loadMask : true,
        enableDependencyDragDrop : false,
        snapToIncrement : true,
        plugins: cellEditing,

        startDate : new Date(2010,0,11), 
        endDate : Sch.util.Date.add(new Date(2010,0,11), Sch.util.Date.WEEK, 20), 
        viewPreset : 'weekAndDayLetter',
            
        // Setup your static columns
        columns : [
            {
                xtype : 'treecolumn',
                header : '任务', 
                dataIndex : 'Name', 
                width:250
            },
            {
                header : '资源分配', 
                width:150, 
                editor : assignmentEditor,
                xtype : 'resourceassigmentcolumn'
            }
        ],
        tbar : [
            {
                text : '任务降级',
                iconCls : 'indent',
                handler : function() {
                    var sm = g.lockedGrid.getSelectionModel();
                    sm.selected.each(function(t) {
                        t.indent();
                    });
                }
            },
            {
                text : '任务升级',
                iconCls : 'outdent',
                handler : function() {
                    var sm = g.lockedGrid.getSelectionModel();
                    sm.selected.each(function(t) {
                        t.outdent();
                    });
                }
            }
        ],
        resourceStore : resourceStore,
        assignmentStore : assignmentStore,
        taskStore : taskStore,
        stripeRows : true
    });
});
