Ext.ns('App');

//Ext.Loader.setConfig({enabled: true, disableCaching : false });
//Ext.Loader.setPath('Sch', '../../../ExtScheduler2.x/js/Sch');
//Ext.Loader.setPath('Gnt', '../../js/Gnt');

Ext.require([
    'Gnt.panel.Gantt',
    'Gnt.column.PercentDone',
    'Gnt.column.StartDate',
    'Gnt.column.EndDate',
    'Gnt.plugin.TaskContextMenu'
]);

Ext.onReady(function() { 
    Localize();
    App.Gantt.init(); 
});

App.Gantt = {
    
    generateTaskData : function() {
        var arr = [],
            i, j, k,
            cn, cn2,
            dt = new Date(2010, 0, 5);

        for (var i = 1; i < 10; i++) {
            cn = [];
            for (j = 1; j < 10; j++) {
                cn2 = [];
                for (k = 1; k < 10; k++) {
                    cn2.push({
                        Name : '子任务 ' + String(i)+String(j)+String(k),
                        StartDate : dt,
                        EndDate : Ext.Date.add(dt, Ext.Date.DAY, 2),
                        leaf : true
                    });
                }
                cn.push({
                    Name : 'Child task ' + String(i)+String(j),
                    StartDate : dt,
                    EndDate : Ext.Date.add(dt, Ext.Date.DAY, 2),
                    expanded : true,
                    children : cn2
                });
                dt = Ext.Date.add(dt, Ext.Date.DAY, 7)
            }
            arr.push({  
                Name : 'Root task #' + i,
                StartDate : new Date(2010, 0, 5),
                EndDate : dt,
                children : cn,
                expanded : true
            });
        }

        return arr;
    },

    // Initialize application
    init: function (serverCfg) {
        Ext.QuickTips.init();

        var taskStore = Ext.create("Gnt.data.TaskStore", {
            buffered    : true,
            
            // sorting slow downs the initial loading/rendering time for big trees 
            sortOnLoad  : false,
            
            proxy   : {
                type    : 'memory',
                reader  : {
                    type    : 'json'
                }
            }
        });

        var dependencyStore = Ext.create("Ext.data.Store", {
            model : 'Gnt.model.Dependency'
        });

        var g = Ext.create('Gnt.panel.Gantt', {
            height      : 650,
            width       : 1000,
            
            renderTo    : Ext.getBody(),
            
            rightLabelField      : 'Name',
            highlightWeekends   : false,
//            showTodayLine       : true,
            loadMask            : true,
//            snapToIncrement     : true,
            cascadeChanges      : false,
            
            viewPreset          : 'weekAndDayLetter',
            
            startDate           : new Date(2010, 0, 4),
            endDate             : Sch.util.Date.add(new Date(2010, 0, 4), Sch.util.Date.WEEK, 100),
            
            verticalScroller    : {
                xtype               : 'schpagingscroller',
                activePrefetch      : false
            },

            // Setup your static columns
            columns: [
                {
                    xtype       : 'treecolumn',
                    
                    header      : '任务名称',
                    sortable    : true,
                    dataIndex   : 'Name',
                    width       : 200,
                    
                    field       : {
                        allowBlank: false
                    }
                },
                {
                    xtype : 'startdatecolumn',
                    header      : '开始时间'
                },
                {
                    xtype : 'enddatecolumn',
                    header      : '结束时间'
                },
                {
                    xtype : 'percentdonecolumn',
                    header      : '完成百分比'
                }
            ],

            taskStore           : taskStore,
            dependencyStore     : dependencyStore,
            
            plugins : [
                Ext.create("Gnt.plugin.TaskContextMenu") 
            ]
        });
        
//        var me  = this;
//        
//        setTimeout(function () {
//            taskStore.proxy.data = me.generateTaskData();
//            
//            taskStore.load();
//        }, 1);
        
        
        
        taskStore.proxy.data = this.generateTaskData();
        
        taskStore.load();
    }
};
