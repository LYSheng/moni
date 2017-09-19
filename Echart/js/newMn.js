
var myChart = echarts.init(document.getElementById('Top'));
var forms = echarts.init(document.querySelector(".forms"));
//模型数据
option = {
    tooltip : {
        trigger: 'axis',
    },
    calculable : true,
    legend: {
        data:['会员数','折线']
    },
    //图标位置修改
    grid:{
        x:30,
        y:45,
        x2:5,
        y2:20,
        borderWidth:1
    },

    xAxis : [
        {
            type: 'category',
            boundaryGap: true,
            data : ['1000','2000','3000','40000','10000'],
            splitLine:{show: false},//去除网格线
            //splitArea : {show : true},//保留网格区域
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#fff',//左边线的颜色
                    width:'1'//坐标线的宽度
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',//坐标值得具体的颜色
                },
            },
            axisTick: {  //去除y轴刻度值
                show: false
            }
        }
    ],
    //折柱混搭的时候yaxis的{}需要两个
    yAxis : [
        {
          show:'false',
            splitLine:{ show:false},  //改设置不显示坐标区域内的y轴分割线
            //splitNumber:2, //设置y轴的数值个数
            axisTick: {  //去除y轴刻度值
                show: false
            }
        },
        {
            show:'false',
            type : 'value',
            splitLine:{ show:false}  //改设置不显示坐标区域内的y轴分割线
        },
        {
            type : 'value',
            name: '会员数',
            position:'left',
            show:'false',
            nameTextStyle: {
                color: '#fff'  //文字颜色
            },
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#fff'  //坐标轴字颜色
                }
            },
            splitLine:{ show:false}  //改设置不显示坐标区域内的y轴分割线
        },

        {
            axisLine: {
                position:"left",
                lineStyle: {
                    type: 'solid',
                    color: '#fff',//左边线的颜色
                    width:'1'//坐标线的宽度
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',//坐标值得具体的颜色
                },

            },

        }
    ],
    series : [
        {
            name:'会员数',
            type:'bar',
            data:[500,200,300,200,100],
            barWidth : 20,//柱图宽度
            itemStyle: {
                //通常情况下：
                normal:{
                    //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                    color: function (params){
                        var colorList = ['rgb(164,205,238)','rgb(42,170,227)','rgb(25,46,94)','rgb(195,229,235)'];
                        return colorList[params.dataIndex];
                    }
                },
            },
        },
        {
            name:'会员数',
            type:'line',
            yAxisIndex: 0,
            data:[500,200,300,200,100],
        }
    ]

};
//OneData  数据
OneData = {
    tooltip : {
        trigger: 'axis'
    },

    calculable : true,
    legend: {
        data:['会员数','充值笔数']
    },
    //图标位置修改
    grid:{
        x:20,
        y:45,
        x2:50,
        y2:20,
        borderWidth:1
    },
    xAxis : [
        {
            type : 'category',
            data : ['500','1000','2000','5000','10000'],
            splitLine:{show: false},//去除网格线

            name: '金额',
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#006496',//左边线的颜色
                    width:'1'//坐标线的宽度
                }
            },
            //字体倾斜
            axisLabel: {
                interval:0,
                //rotate:45,//倾斜度 -90 至 90 默认为0
                //margin:2,
                textStyle:{
                    fontWeight:"bolder",
                    fontSize:'10',
                    color:"#006496"
                }
            },
            axisTick: {  //去除y轴刻度值
                show: false
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            splitLine:{show: false},//去除网格线
            name: '会员数',
            axisLine: {
                position:"left",
                lineStyle: {
                    type: 'solid',
                    color: '#006496',//左边线的颜色
                    width:'1'//坐标线的宽度
                }
            },
            axisTick: {  //去除y轴刻度值
                show: false
            },
            //去除y轴的具体数值
            axisLabel : {
                formatter: function(){
                    return "";
                }
            },
            // itemStyle : { normal: {label : {show: true, position:'top'}}},
        },

    ],
    series : [
        {
            name:'会员数',
            type:'bar',
            data:[500,200,300,200,100],
            barWidth : 20,//柱图宽度
            itemStyle: {
                //通常情况下：
                normal:{
                    //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                    color: function (params){
                        var colorList = ['rgb(164,205,238)','rgb(217,153,49)','rgb(111,176,23)','rgb(241,101,80)','rgb(3,112,200)'];
                        return colorList[params.dataIndex];
                    },
                    label: {
                        show: true,//是否展示 顶部柱形图数据
                        position:'top',//inside 居中显示
                        textStyle: {
                            fontSize : '12',
                            fontFamily : '微软雅黑',
                        }
                    }
                },


            },
        },
        {
            name:'充值笔数',
            type:'line',
            yAxisIndex:0,
            symbol:"circle",//折线点显示隐藏
            data:[5000,7001,12000,10000,8000],
            itemStyle: {
                //通常情况下：
                normal:{
                    //折线颜色
                    color: "#006496"
                    },
                },
            },

    ]
};
//TwoData
TwoData = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['门店购买','线上购买']
    },
    //图标位置修改
    grid:{
        x:20,
        y:45,
        x2:30,
        y2:20,
        borderWidth:1
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['1000','1500','3000','5000','6000','10000'],
            axisTick: {  //去除y轴刻度值
                show: false
            },
            splitLine:{
                lineStyle:{
                    color: '#01496A',//网格线颜色
                    width: 1,//网格线宽度
                    type: 'solid'//网格线样式
                }
            },
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#006496',//左边线的颜色
                    width:'1'//坐标线的宽度
                }
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisTick: {  //去除y轴刻度值
                show: false
            },
            axisLabel : {
                formatter: function(){
                    return "";
                }
            },
            splitLine:{
                lineStyle:{
                    color: '#01496A',//网格线颜色
                    width: 1,//网格线宽度
                    type: 'solid'//网格线样式
                }
            },

        },
        {
            type : 'value',
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#006496',//左边线的颜色
                    width:'1'//坐标线的宽度
                }
            },
        }
    ],
    series : [
        {
            name:'门店购买',
            type:'line',
            stack: '总量',
            symbol:"circle",//折线点显示隐藏
            data:[120, 132, 101, 134, 90, 230, 210],
            itemStyle: {
                //通常情况下：
                normal:{
                    color:"#6DAE4A",
                    label: {
                        show: true,//是否展示 顶部柱形图数据
                        position:'top',//inside 居中显示
                        textStyle: {
                            fontSize : '12',
                            fontFamily : '微软雅黑',
                        }
                    }
                },
            },
        },
        {
            name:'线上购买',
            type:'line',
            stack: '总量',
            yAxisIndex: 0,
            data:[220, 182, 191, 234, 290, 330, 310],
            symbol:"circle",//折线点显示隐藏
            itemStyle: {
                //通常情况下：
                normal:{
                    color: "#DD9832",
                    label: {
                        show: true,//是否展示 顶部柱形图数据
                        position:'top',//inside 居中显示
                        textStyle: {
                            fontSize : '12',
                            fontFamily : '微软雅黑',
                        }
                    }
                }
            }
        }

    ]
};




myChart.setOption(OneData);
forms.setOption(TwoData);
