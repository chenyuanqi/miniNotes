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

Ext.onReady(function() {Localize();  App.Gantt.init(); });

App.Gantt = {
    
    // Initialize application
    init : function(serverCfg) {  
        Ext.QuickTips.init();      
        
        var taskStore = Ext.create("Gnt.data.TaskStore", {
            model       : 'Gnt.model.Task',
            autoLoad    : true,
        
            proxy       : {
                type        : 'ajax',
                method      : 'GET',
                url         : 'tasks.json',
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
                url: 'dependencies.json',
                method: 'GET',
                reader: {
                    type : 'json'
                }
            }
        });
        
        var g = Ext.create("Gnt.panel.Gantt", {
            height  : 300,
            width   : 1000,
            
            renderTo                    : Ext.getBody(),
            
            leftLabelField              : 'Name',
            
            highlightWeekends           : true,
            showTodayLine               : true,
            loadMask                    : true,
            enableDependencyDragDrop    : false,
            
            viewConfig : { trackOver : false },
            
            tbar : [
                {
                    text : '样式 1',
                    iconCls : 'theme',
                    scale : 'large',
                    handler : function() {
                        Ext.getBody().removeCls(['style2', 'style3']).addCls('style1');
                    }
                },
                {
                    text : '样式 2',
                    iconCls : 'theme',
                    scale : 'large',
                    handler : function() {
                        Ext.getBody().removeCls(['style1', 'style3']).addCls('style2');
                    }
                },
                {
                    iconCls : 'theme',
                    text : '样式 3',
                    scale : 'large',
                    handler : function() {
                        Ext.getBody().removeCls(['style2', 'style1']).addCls('style3');
                    }
                }
            ],

            startDate : new Date(2010,0,11), 
            endDate : Sch.util.Date.add(new Date(2010,0,4), Sch.util.Date.WEEK, 20), 
            viewPreset : 'weekAndDayLetter',
            
            // Setup your static columns
            columns : [
                {
                    xtype : 'treecolumn',
                    header : 'Tasks', 
                    sortable:true, 
                    dataIndex : 'Name', 
                    width:250
                }
            ],
            taskStore : taskStore,
            dependencyStore : dependencyStore,
            trackMouseOver : false,
            stripeRows : true
        });
    }
};
