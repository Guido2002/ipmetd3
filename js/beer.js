AFRAME.registerComponent('beer', {
    schema: {
        one: {type: 'int'}
    },
    init: function () {
        var el = this.el
        const api_base_url = "https://api.punkapi.com/v2/"
        let api_args = "beers/"



        fetch(api_base_url + api_args + this.data.n)
        .then(response => response.json())
        .then(data => {
            el.setAttribute("src", data[0].image_url)
            console.log(data[0].image_url)
        })
        .catch((error) => {
            console.error('Error:', error);
        })
        
    },
    update: function () {},
    tick: function () {},
    remove: function () {},
    pause: function () {},
    play: function () {}
  });