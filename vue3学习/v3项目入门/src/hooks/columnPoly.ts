let columnar2 = () => ({
    title: {
        text: 'test2',
        subtext: '测试2',
        x: 'center',
        y: 'top',
        fontSize: '18px',
        fontWeight: 'bold',
        textAlign: 'center',
        textStyle: {
            color: '#f00'
        }
    },
    color: ['#3052da'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    legend: {
        x: 'right'
        // data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        // textStyle: {
        //     color: '#9191c2',
        //     fontSize: 16,
        //     padding: [0, 40, 0, 5],
        // },
        // padding: [35, 200, 0, 0],
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['衬衫2', '羊毛衫2', '雪纺衫2', '裤子2', '高跟鞋2', '袜子2'],
        axisPointer: {
            type: 'shadow'
        }
    },
    yAxis: {},
    series: [
        {
            name: '销量',
            type: 'bar',
            data: [15, 20, 36, 10, 10, 20],
            showBackground: true
            //    backgroundStyle: {
            //        color: 'rgba(220, 220, 220, 0.8)'
            //    },
            //    itemStyle: {
            //         normal: {
            //             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //                 offset: 0,
            //                 color: '#ba7ef3'
            //             }, {
            //                 offset: 1,
            //                 color: '#965df2'
            //             }]),
            //         }
            //     },
        }
    ]
});
export default columnar2;
