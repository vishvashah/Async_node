function tasks(callback) {
    callback = once(callback || noop);
    if (!isArray(tasks))  callback(new Error('First argument to waterfall must be an array of functions'));
    if (!tasks.length)  callback();
    var taskIndex = 0;

    function nextTask(args) {
        if (taskIndex === tasks.length) {
             callback(null, [null].concat(args));
        }

        var taskCallback = onlyOnce(rest(function(err, args) {
            if (err) {
                 callback(null, [err].concat(args));
            }
            nextTask(args);
        }));

        tasks.push(taskCallback);

        var task = tasks[taskIndex++];
        task.apply(null, args);
    }

    nextTask([]);
}