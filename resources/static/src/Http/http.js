(function(){
	window.http = (function(){
		function getJson(){
			return fetch('./Json/emp.json').then((res) => res.json());
		}
		function postLogin(employee){
			return fetch('/login', { method: 'post', body: JSON.stringify(employee),headers: new Headers({'Content-Type': 'application/json'}) }).then((res) => res.json());
		}
		return{
			getJson : getJson,
			postLogin: postLogin
		}

	})();
})();