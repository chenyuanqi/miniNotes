Ext.ns('App');

Ext.onReady(function() {App.Gantt.init(); });

App.Gantt = {
    // Initialize application
    init : function() {
        Ext.QuickTips.init();   
        
        Ext.define('MyResource', {
            extend : 'Sch.model.Resource',
            fields : [
                {name: 'FavoriteColor'}
            ]
        });

        var resourceStore = Ext.create("Ext.data.JsonStore", {
            model : 'MyResource',
            data : [
                {Id : '1', Name : 'Mike', FavoriteColor : 'blue'},
                {Id : '2', Name : 'Linda', FavoriteColor : 'red'},
                {Id : '3', Name : 'Don', FavoriteColor : 'yellow'},
                {Id : '4', Name : 'Karen', FavoriteColor : 'black'},
                {Id : '5', Name : 'Doug', FavoriteColor : 'green'},
                {Id : '6', Name : 'Peter', FavoriteColor : 'lime'}
            ]
        });
        
        this.initScheduler(resourceStore);
        this.initGantt();
    },
        
    initScheduler : function(resourceStore) {
        
        // Store holding all the events
        var eventStore = Ext.create("Ext.data.JsonStore", {
            model   : 'Sch.model.Event',
            data    : [
                {ResourceId: '1', Name : 'Assignment 1', StartDate : "2010-12-09 10:00", EndDate : "2010-12-09 11:00"},
                {ResourceId: '2', Name : 'Assignment 2', StartDate : "2010-12-09 10:00", EndDate : "2010-12-09 12:00"},
                {ResourceId: '3', Name : 'Assignment 3', StartDate : "2010-12-09 13:00", EndDate : "2010-12-09 15:00"}
            ]
        });
           
        var scheduler = Ext.create("Sch.SchedulerPanel", {
            title                   : 'Basic scheduler panel',
            
            eventBarTextField       : 'Title',
            
            snapToIncrement         : false,
            
            viewPreset              : 'hourAndDay',
            
            startDate               : new Date(2010, 11, 9, 8),
            endDate                 : new Date(2010, 11, 9, 16),
            
            renderTo                : 'scheduler',
            
            height                  : 250,
            width                   : 900,

            // Setup static columns
            columns                 : [
                {header : 'Name', width:100, dataIndex : 'Name', editor : new Ext.form.TextField()},
                {header : 'Favorite Color', width:100, dataIndex : 'FavoriteColor'}
            ],
                            
            // Store holding all the categories
            resourceStore           : resourceStore,
            eventStore              : eventStore,

            tbar                    : [
                {
                    iconCls : 'icon-prev',
                    scope : this,
                    handler : function() {
                        scheduler.shiftPrevious();
                    }
                },
                '->',
                {
                    iconCls : 'icon-next',
                    scope : this,
                    handler : function() {
                        scheduler.shiftNext();
                    }
                }
            ]
        });
    },

    initGantt : function() {
       
        var taskStore = Ext.create("Gnt.data.TaskStore", {
            autoLoad: true,
            proxy : {
                type : 'ajax',
                method: 'GET',
                url: 'tasks.json',
                reader: {
                    type : 'json'
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

        var gantt = Ext.create("Gnt.panel.Gantt", {
            height : 300,
            width : 900,
            renderTo : 'gantt',
            leftLabelField : 'Name',
            highlightWeekends : true,
            loadMask : true,
            snapToIncrement : true,
            title : 'Gantt panel with tasks and resources',

            startDate : new Date(2010,0,11), 
            endDate : Sch.util.Date.add(new Date(2010,0,11), Sch.util.Date.WEEK, 20), 
            viewPreset : 'weekAndDayLetter',

            // Setup your static columns
            columns : [
                {
                    xtype : 'treecolumn',
                    header : 'Tasks', 
                    sortable:true, 
                    dataIndex : 'Name', 
                    width:200
                }
            ],

            taskStore : taskStore,
            dependencyStore : dependencyStore,
            tbar : [
               {
                    iconCls : 'icon-prev',
                    scope : this,
                    handler : function() {
                        gantt.shiftPrevious();
                    }
                },
                '->',
                {
                    iconCls : 'icon-next',
                    scope : this,
                    handler : function() {
                        gantt.shiftNext();
                    }
                }
            ]
        });
    }
};
