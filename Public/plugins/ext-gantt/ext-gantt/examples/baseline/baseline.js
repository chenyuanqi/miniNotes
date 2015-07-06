//Ext.Loader.setConfig({enabled: true, disableCaching : false });
//Ext.Loader.setPath('Sch', '../../../ExtScheduler2.x/js/Sch');
//Ext.Loader.setPath('Gnt', '../../js/Gnt');

Ext.require([
    'Gnt.panel.Gantt',
    'Gnt.column.PercentDone',
    'Gnt.column.StartDate',
    'Gnt.column.EndDate',
    'Sch.plugin.TreeCellEditing',
    'Sch.plugin.Pan'
]);

Ext.onReady(function() { 
    Localize();
    
    Ext.QuickTips.init();      
    
    Ext.define("TaskModelWithBaseline", {
        extend : "Gnt.model.Task",
            
        // Some additional fields for baseline calculation
        fields : [
            {name : 'BaselineStartDate', type : 'date', dateFormat : 'Y-m-d' },
            {name : 'BaselineEndDate', type : 'date', dateFormat : 'Y-m-d' },
            {name : 'BaselinePercentDone'}
        ]
    });

    var start   = new Date(2010, 0, 1),
        end     = Sch.util.Date.add(start, Sch.util.Date.MONTH, 10);
       
    var taskStore = Ext.create("Gnt.data.TaskStore", {
        model       : 'TaskModelWithBaseline',
        autoLoad    : true,
        
        proxy       : {
            type        : 'ajax',
            method      : 'GET',
            url         : 'tasks.js',
            reader      : {
                type    : 'json'
            }
        }
    });

    var dependencyStore = Ext.create("Ext.data.Store", {
        autoLoad: true,
        model : 'Gnt.model.Dependency',
        proxy: {
            type : 'ajax',
            url: 'dependencies.js',
            method: 'GET',
            reader: {
                type : 'json'
            }
        }
    });

    var g = Ext.create('Gnt.panel.Gantt', {
        height      : 600,
        width       : 1000,
        
        renderTo    : Ext.getBody(),
        
        leftLabelField      : 'Name',
        
        highlightWeekends           : false,
        showTodayLine               : true,
        showBaseline                : true,
        enableDependencyDragDrop    : false,
        
        loadMask                    : true,
        
        viewPreset  : 'monthAndYear',
        
        startDate   : start, 
        endDate     : end, 
            
        // Setup your static columns
        columns : [
            {
                xtype : 'treecolumn',
                header : '任务名称', 
                sortable:true, 
                dataIndex : 'Name', 
                locked : true,
                width:250, 
                field : new Ext.form.TextField({
                    emptyText : '输入任务名称'
                })
            }
        ],
        taskStore           : taskStore,
        dependencyStore     : dependencyStore,
        
        plugins : [{
            ptype : 'pan'
        }],

        tbar : [
            {
                text : '显示基线',
                enableToggle : true,
                pressed : true,
                handler : function() {
                    g.el.toggleCls('sch-ganttpanel-showbaseline');
                }
            }
        ]
    });
});
