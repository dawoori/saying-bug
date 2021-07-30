const sentenses = [
    {
        "content": "나는 그제서야 알았다. <br> 내가 불확실함과 싸우고 있음을. <br> 이 게임은 한 가지를 묻는 것이었다. <br> 내가 불확실함과 싸우기에 <br> 좋은 태도를 가지고 있는가? <br> 배우고, 계산하고, 도전할 수 있는가?",
        "author": "텍사스홀덤",
        "bg": "img/poker.jpg"
    },
    {
        "content": "끝을 맺기를 처음과 같이하면 실패가 없다. <br> 마지막에 이르기까지 처음과 마찬가지로 주의를 기울이면 어떤 일도 해낼 수 있을 것이다.",
        "author": "노자",
        "bg": "img/book.jpg"
    },
    {
        "content": "지혜로운 사람은 당황하지 않고, <br> 어진사람은 근심하지 않으며, <br> 용기있는 사람은 두려워하지 않는다.",
        "author": "공자",
        "bg": "img/tree.jpg"
    },
    {
        "content": "불가능, 그것은 나약한 사람들의 핑계에 불과하다. <br> 불가능 그것은 사실이 아니라 하나의 의견일 뿐이다. <br> 불가능, 그것은 영원한 것이 아니라 일시적인 것이다. <br> 불가능, 그것은 도전할 수 있는 가능성을 의미한다. <br> 불가능, 그것은 사람들을 용기있게 만들어 주는 것이다. <br> 불가능, 그것은 아무것도 아니다.",
        "author": "무하마드 알리",
        "bg": "img/box.jpg"
    },
    {
        "content": "지금 이 인생을 다시 한번 완전히 똑같이 살아도 좋다는 마음으로 살라.",
        "author": "니체",
        "bg": "img/dailym.jpg"
    },
    {
        "content": "오늘은 당신의 남은 인생 중 첫번째 날입니다.",
        "author": "영화, 아메리칸 뷰티",
        "bg": "img/girlinforest.jpg"
    },
    {
        "content": "실패하는 게 두려운 게 아니라 <br> 노력하지 않는 게 두렵다",
        "author": "마이클 조던",
        "bg": "img/run.jpg"
    }
]

const date = new Date()
const day = date.getDay()

const text = sentenses[day]

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
        bg: text.bg
    }
})
