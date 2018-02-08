(function(){
	window.http = (function(){
		function getJson(){
			return fetch('./Json/emp.json').then((res) => res.json());
		}
		return{
			getJson : getJson
		}

	})();
})();