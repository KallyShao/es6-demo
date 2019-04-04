class Timer {
    countdown(end, update, handle) {
        const now = new Date().getTime();
        const self = this;
        if (now - end) {
            handle.call(self);  // 如果倒计时结束
        } else {
            let last_time = end - now;
            const px_d = 1000 * 60 * 60 * 24;
            
        }
    }
}