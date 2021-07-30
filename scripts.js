const sentenses = [
    {
        "content": "나는 그제서야 알았다. <br> 내가 불확실함과 싸우고 있음을. <br> 이 게임은 한 가지를 묻는 것이었다. <br> 내가 불확실함과 싸우기에 좋은 태도를 가지고 있는가? <br> 배우고, 계산하고, 도전할 수 있는가?",
        "author": "텍사스홀덤",
        "bg": ""
    }
]

const text = sentenses[0]

var content = new Vue({
    el: '#content',
    data: {
        message: text.content
    }
})

var author = new Vue({
    el: '#author',
    data: {
        message: text.author
    }
})

var style = new Vue({
    el: '#style',
    data: {
        bg: 'img/poker.jpg'
    }
})