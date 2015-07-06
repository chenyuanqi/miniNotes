//Ext.Loader.setConfig({enabled: true, disableCaching : false });
//Ext.Loader.setPath('Sch', '../../../ExtScheduler2.x/js/Sch');
//Ext.Loader.setPath('Gnt', '../../js/Gnt');

Ext.require([
    'Gnt.panel.Gantt',
    'Gnt.column.PercentDone',
    'Gnt.column.StartDate',
    'Gnt.column.EndDate',
    'Gnt.plugin.Printable'
]);

Ext.onReady(function() { 
    Localize(); 
    Ext.QuickTips.init();      

    var start   = new Date(2010, 0, 1),
        end     = Sch.util.Date.add(start, Sch.util.Date.MONTH, 20);
       
    var taskStore = Ext.create("Gnt.data.TaskStore", {
        model       : 'Gnt.model.Task',
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

    var printableMilestoneTpl = new Gnt.template.Milestone({
        prefix : 'foo',
        printable : true,
        imgSrc : 'images/milestone.png'
    });

    var g = Ext.create('Gnt.panel.Gantt', {
        height      : 600,
        width       : 1000,
        renderTo    : Ext.getBody(),
        leftLabelField      : 'Name',
        highlightWeekends           : false,
        loadMask                    : true,
        viewPreset  : 'monthAndYear',
        startDate   : start, 
        endDate     : end, 
            
        // Setup your static columns
        columns : [
            {
                xtype : 'treecolumn',
                header : 'Tasks', 
                sortable:true, 
                dataIndex : 'Name', 
                locked : true,
                width:250
            }
        ],
        taskStore           : taskStore,
        dependencyStore     : dependencyStore,
        tbar : [
            '本例子可打印左边的表格和右边的甘特图',
            '->',
            {
                iconCls : 'icon-print',
                scale : 'large', 
                text : '打印整个甘特图',
                handler : function() {
                    // Make sure this fits horizontally on one page.
                    g.zoomToFit();
                    g.print();
                }
            }
        ],
        plugins: new Gnt.plugin.Printable({
            printRenderer : function(task, tplData) {
                if (task.isMilestone()) {
                    return;
                } else if (task.isLeaf()) {
                    var availableWidth = tplData.width - 4,
                        progressWidth = Math.floor(availableWidth*task.get('PercentDone')/100);
                
                    return {
                        // Style borders to act as background/progressbar
                        progressBarStyle : Ext.String.format('width:{2}px;border-left:{0}px solid #7971E2;border-right:{1}px solid #E5ECF5;', progressWidth, availableWidth - progressWidth, availableWidth)
                    };
                } else {
                    var availableWidth = tplData.width - 2,
                        progressWidth = Math.floor(availableWidth*task.get('PercentDone')/100);
                
                    return {
                        // Style borders to act as background/progressbar
                        progressBarStyle : Ext.String.format('width:{2}px;border-left:{0}px solid #FFF3A5;border-right:{1}px solid #FFBC00;', progressWidth, availableWidth - progressWidth, availableWidth)
                    };
                }
            },

            beforePrint : function(sched) {
                var v = sched.getSchedulingView();
                this.oldRenderer = v.eventRenderer;
                this.oldMilestoneTemplate = v.milestoneTemplate;
                v.milestoneTemplate = printableMilestoneTpl;
                v.eventRenderer = this.printRenderer;
            },

            afterPrint : function(sched) {
                var v = sched.getSchedulingView();
                v.eventRenderer = this.oldRenderer;
                v.milestoneTemplate = this.oldMilestoneTemplate;
            }
        })
    });
});
