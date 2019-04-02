{
    // es5使用回调解决异步问题
    // let ajax = function(cb) {
    //     console.log('执行');
    //     setTimeout(function(){
    //         cb && cb.call();
    //     }, 1000)
    // };
    // ajax函数运行完之后执行回调
    // ajax(function(){
    //     console.log('timeout1');
    // });
}
{
    // promise: 解决异步操作问题
    let ajax = function(num) {
        console.log('执行2');
        return new Promise(function(resolve, reject){
            if (num > 5) {
                resolve();
            } else {
                reject();
                throw new Error('出错了');
            }
        });
    };

    // ajax(1)
    // .then(function(res){
    //     // 执行resolve
    //     console.log('执行成功');
    // }, function(){
    //     // 执行reject
    //     console.log('reject');
    // })
    // .catch(function(){
    //     // 捕获前面执行过程中的异常
    // });
    ajax(1)
    .then(function (res) {
        // 执行resolve
        console.log('执行成功');
    })
    .catch(function () {
        // 捕获前面执行过程中的异常
        console.log('catch error');
    });
}
{
    // 多步操作

}