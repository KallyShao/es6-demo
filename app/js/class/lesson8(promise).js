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
                throw Error('出错了');
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
    // 所有图片加载完再添加到页面
    function loadImg(src){
        return new Promise((resolve, reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function(){
                resolve(img);
            };
            img.onerror = function(){
                reject(err);
            }
        });
    }
    function showImgs(imgs) {
        imgs.forEach(img => {
            document.body.appendChild(img);
        });
    }
    // 当3张图片都加载完成后，才会执行then中的显示图片
    // Promise.all([
    //     loadImg('http://iph.href.lu/300x200?text=300x200'),
    //     loadImg('http://iph.href.lu/200x200?text=300x200'),
    //     loadImg('http://iph.href.lu/200x400?text=300x200')
    // ]).then(showImgs);

}

{
    // 显示先加载完成的那张图片
    function loadImg(src){
        return new Promise((resolve, reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function(){
                resolve(img);
            };
            img.onerror = function(){
                reject(err);
            }
        });
    }
    function showImgs(img) {
        let p = document.createElement('p');
        p.appendChild(img);
        document.body.appendChild(p);
    };
    Promise.race([
        loadImg('http://iph.href.lu/300x200?text=300x200'),
        loadImg('http://iph.href.lu/200x200?text=300x200'),
        loadImg('http://iph.href.lu/200x400?text=300x200')
    ]).then(showImgs);

}