function CreateCallbackSet(callback) {
	return {
		count: 0,
		oncomplete: callback || function() { },
		add: function(callback/*, args*/) {
			this.count++;
			var _ = this, args = Array.prototype.slice.call(arguments, 1);
			return function() {
				args.unshift.apply(args, arguments);
        callback.apply(this, args);
				_.resolve();
			}
		},
		resolve: function(){
			if (--this.count === 0) {
				callback();
        delete this.count;
        delete this.oncomplete;
        delete this.add;
        delete this.resolve;
			}
		}
	}
}

if(undefined !== module){
	module.exports = CreateCallbackSet;
}
