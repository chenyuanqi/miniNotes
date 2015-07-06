Ext.define("MyApp.DemoGanttPanel", {
    extend : "Gnt.panel.Gantt", 
    requires : [
        'Gnt.plugin.TaskContextMenu',
        'Gnt.column.StartDate',
        'Gnt.column.EndDate',
        'Gnt.column.Duration',
        'Gnt.column.PercentDone',
        'Gnt.column.ResourceAssignment',
        'Sch.plugin.TreeCellEditing',
        'Sch.plugin.Pan'
    ],
    rightLabelField : 'Responsible',
    highlightWeekends : true,
    showTodayLine : true,
    loadMask : true,
    stripeRows : true,
    enableProgressBarResize : true,

    initComponent : function() {
        
        Ext.apply(this, {
            leftLabelField : {
                dataIndex : 'Name',
                editor : { xtype : 'textfield' }
            },
            
            // Add some extra functionality
            plugins : [
                Ext.create("Gnt.plugin.TaskContextMenu"), 
                Ext.create("Sch.plugin.Pan"), 
                Ext.create('Sch.plugin.TreeCellEditing', { clicksToEdit: 1 })
            ],

            // Define an HTML template for the tooltip
            tooltipTpl : new Ext.XTemplate(
                '<h4 class="tipHeader">{Name}</h4>',
                '<table class="taskTip">', 
                    '<tr><td>Start:</td> <td align="right">{[Ext.Date.format(values.StartDate, "y-m-d")]}</td></tr>',
                    '<tr><td>End:</td> <td align="right">{[Ext.Date.format(values.EndDate, "y-m-d")]}</td></tr>',
                    '<tr><td>Progress:</td><td align="right">{PercentDone}%</td></tr>',
                '</table>'
            ).compile(),
            
            // Define the static columns
            columns : [
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
                },
                {
                    xtype : 'durationcolumn',
                    header: '结束时间'
                },
                {
                    xtype : 'percentdonecolumn',
                    header: '完成百分比',
                    width : 50
                }
            ],
            
             // Define the buttons that are available for user interaction
            tbar : [{
                xtype: 'buttongroup',
                title: '视图导航',
                columns: 2,
                defaults: {
                    scale: 'large'
                },
                items: [{
                    iconCls : 'icon-prev',
                    scope : this,
                    handler : function() {
                        this.shiftPrevious();
                    }
                },
                {
                    iconCls : 'icon-next',
                    scope : this,
                    handler : function() {
                        this.shiftNext();
                    }
                }]
            },
            {
                xtype: 'buttongroup',
                title: '查看',
                columns: 2,
                defaults: {
                    scale: 'small'
                },
                items: [
                    {
                        text : '关闭摘要任务',
                        iconCls : 'icon-collapseall',
                        scope : this,
                        handler : function() {
                            this.collapseAll();
                        }
                    },
                    {
                        text : '显示所有任务',
                        iconCls : 'zoomfit',
                        handler : function() {
                            this.zoomToFit();
                        },
                        scope : this
                    },
                    {
                        text : '打开摘要任务',
                        iconCls : 'icon-expandall',
                        scope : this,
                        handler : function() {
                            this.expandAll();
                        }
                    }
                ]
            },
            {
                xtype: 'buttongroup',
                title: '时间刻度',
                columns: 2,
                defaults: {
                    scale: 'large'
                },
                items: [{
                        text: '10 周',
                        scope : this,
                        handler : function() {
                            this.switchViewPreset('weekAndDayLetter');
                        }
                    },
                    {
                        text: '1 年',
                        scope : this,
                        handler : function() {
                            this.switchViewPreset('monthAndYear');
                        }
                    }
                ]},
                '->',
                {
                    xtype: 'buttongroup',
                    title: '功能区',
                    columns : 2,
                    items: [
                    {
                        text : '显示关键路径',
                        iconCls : 'togglebutton',
                        scope : this,
                        enableToggle : true,
                        handler : function(btn) {
                            var v = this.getSchedulingView();
                            if (btn.pressed) {
                                v.highlightCriticalPaths(true);
                            } else {
                                v.unhighlightCriticalPaths(true);
                            }
                        }
                    },
                    {
                        iconCls : 'action',
                        text : '高亮周期大于 7 天的任务',
                        scope : this,
                        handler : function(btn) {
                            this.taskStore.getRootNode().cascadeBy(function(task) {
                                if (Sch.util.Date.getDurationInDays(task.get('StartDate'), task.get('EndDate')) > 7) {
                                    var el = this.getSchedulingView().getElementFromEventRecord(task);
                                    el && el.frame('lime');
                                }
                            }, this);
                        }
                    },
                    {
                        iconCls : 'togglebutton',
                        text : '只显示进度 < 30%的任务',
                        scope : this,
                        enableToggle : true,
                        toggleGroup : 'filter',
                        handler : function(btn) { 
                            if (btn.pressed) {
                                this.taskStore.filter(function(task) {
                                    return task.get('PercentDone') < 30;
                                });
                            } else {
                                this.taskStore.clearFilter();
                            }
                        }
                    },
                    {
                        iconCls : 'action',
                        text : '切换到最后一个任务',
                        scope : this,
                        
                        handler : function(btn) {
                            var latestEndDate = new Date(0),
                                latest;
                            this.taskStore.getRootNode().cascadeBy(function(task) {
                                if (task.get('EndDate') >= latestEndDate) {
                                    latestEndDate = task.get('EndDate');
                                    latest = task;
                                }
                            });
                            this.getSchedulingView().scrollEventIntoView(latest, true);
                        }
                    },
                    {
                        iconCls : 'togglebutton',
                        text : '任务联动',
                        scope : this,
                        enableToggle : true,
                        handler : function(btn) {
                            this.setCascadeChanges(btn.pressed);
                        }
                    },
                    {
                        xtype : 'textfield',
                        emptyText : '输入任务名查找...',
                        scope : this,
                        width:150,
                        enableKeyEvents : true,
                        listeners : {
                            keyup : {
                                fn : function(field) {
                                    var value   = field.getValue();
                                    
                                    if (value) {
                                        this.taskStore.filter('Name', field.getValue(), true, false);
                                    } else {
                                        this.taskStore.clearFilter()
                                    }
                                },
                                scope : this
                            }
                        }
                    }]
                }
            ]
        });
        
        this.callParent(arguments);
    }
});