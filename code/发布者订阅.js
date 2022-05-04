class EventBus {
  constructor() {
    this.tasks = {};
    this.onceTasks = {};
  }

  emit(name, ...args) {
    const emitCbs = this.tasks[name] || [];
    if (emitCbs.length > 0) {
      emitCbs.forEach((cb) => cb(...args));
    }
    if (this.onceTasks[name]) {
      this.onceTasks[name].forEach(cb => cb(...args))
      this.onceTasks[name] = []
    }


  }

  once(name, cb) {
    if (this.onceTasks[name]) {
      this.onceTasks[name].push(cb);
    } else {
      this.onceTasks[name] = [cb];
    }
  }

  on(name, cb) {
    if (this.tasks[name]) {
      this.tasks[name].push(cb);
    } else {
      this.tasks[name] = [cb];
    }
  }

  off(name, cb) {
    if (this.tasks[name]) {
      this.tasks[name] = this.tasks[name].filter(taskCb => taskCb !== cb)
    }
    if (this.onceTasks[name]) {
      this.onceTasks[name] = this.onceTasks[name].filter(onceCb => onceCb !== cb)
    }
  }

  clear() {
    this.tasks = {};
  }
}

const bus = new EventBus()

function foo(...args) {
  console.log('foo', ...args);
}
function bar() {
  console.log('bar');
}

bus.on('foo', foo)
bus.on('foo', foo)
bus.once('foo', foo)
bus.on('bar', bar)

// bus.off('foo', foo)

bus.emit('foo', 1, 2, 3)
bus.emit('foo', 1, 2, 3)
