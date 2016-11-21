angular.module('app.services', [])

.factory('StoreItems', [function() {

    var items = [
        {
            id: '1',
            department: 'men',
            name: 'Inakaya Denim',
            desc: 'Inakaya Denim jeans are the latest farm-fresh Japanese-inspired fashion item',
            image: 'https://www.japantoday.com/images/size/x/2016/06/denim.png',
            price: 120,
            quantity: 0
        },
        {
            id: '2',
            department: 'women',
            name: 'Ann Taylor Petite',
            desc: 'This well known American brand is synonymous with a classic and sophisticated style. They have a wide range of petite clothing.',
            image: 'http://bombpullzone.bombpetite.netdna-cdn.com/wp-content/uploads/2013/12/ann-taylor-petite-shopping.jpg',
            price: 2000,
            quantity: 0
        },
        {
            id: '3',
            department: 'men',
            name: 'GANT Polo Shirt',
            desc: '70’s/retro style',
            image: 'http://m2clothing.co.uk/wp-content/uploads/2016/03/polo-m2clothing-720x540.jpg',
            price: 250,
            quantity: 0
        },
        {
            id: '4',
            department: 'women',
            name: 'Joel Round Simple Knit Best ',
            desc: 'Simple, Layered to Good Hajji woven Knit Vest!',
            image: 'http://styleberry.cdn.smart-img.com/2014_img/img/glob-img1.jpg',
            price: 240,
            quantity: 0
        }   
    ]
    
    return {
        getMenItems() {
            return items.filter(function(n) { return n.department === 'men' });
        },

        getItem(id) {
            return items.filter(function (n) { return n.id === id })[0];
        },

        getWomenItems() {
            return items.filter(function(n) { return n.department === 'women'});
        },

        shop(id, quantity) {
            this.getItem(id).quantity = quantity;
        },

        deleteShop(id) {
            this.getItem(id).quantity = 0;
        }
    }
}])

.factory('Door', ['$http', function($http) {
    return {
        signin(userid, password) {
            var data = {
                userid: userid,
                password: password
            }
            return $http.post('http://simplelogin.cs7141.comp.hkbu.edu.hk/User/signin', data);
        },

        signup(userid, password) {
            var data = {
                userid: userid,
                password: password
            }
            return $http.post('http://simplelogin.cs7141.comp.hkbu.edu.hk/User/signup', data);
        }
    }
}])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);