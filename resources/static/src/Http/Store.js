(function(){
	window.Store = (function(){
		var user = {};
		function addUser(user){
			user = user;
		}
		function getUser(){
			return user;
		}
		return {
			getUser : getUser
		}
	})();
})();

