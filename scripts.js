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
    },
    {
        "content": "세상은 고통으로 가득하지만, 한편 그것을 극복하는 일로도 가득 차 있다.",
        "author": "헬렌 켈러",
        "bg": "https://images.unsplash.com/photo-1529123276648-af6cfff88c20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
    },
    {
        "content": "미래가 어떻게 전개될지는 모르지만 누가 그 미래를 결정하는지는 안다.",
        "author": "오프라 윈프리",
        "bg": "https://images.unsplash.com/photo-1495539406979-bf61750d38ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
        "content": "10분 뒤와 10년 후를 동시에 생각하라",
        "author": "피터 드러커",
        "bg": "https://images.unsplash.com/photo-1454817481404-7e84c1b73b4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
    },
    {
        "content": "불행에 굴복하는 일이 있어서는 안 된다. 그보다도 대담하게 적극적이며 과감하게 불행에 도전할 일이다.",
        "author": "베르길리우스",
        "bg": "https://images.unsplash.com/photo-1619725194417-d517386ebaeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
        "content": "삶이 있는 한 희망은 있다.",
        "author": "키케로",
        "bg": "https://images.unsplash.com/photo-1600468681740-5d648abdb074?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
    },
    {
        "content": "자세히 들여다보면, 대부분의 갑작스러운 성공은 오랜 시간이 걸렸다.",
        "author": "스티브 잡스",
        "bg": "https://images.unsplash.com/photo-1621002784630-86bd2fd2e9e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
    },
    {
        "content": "너에게 있어 가장 불편한 시기는 넌 자신을 가장 많이 배우는 시기이다.",
        "author": "Mary Louise Bean",
        "bg": "https://images.unsplash.com/photo-1598386149247-59d721c12aa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
    },
    {
        "content": "역경은 원칙을 시험한다. 역경이 없으면 자신이 정직한 사람인지 잘 알지 못한다.",
        "author": "Henry Fielding",
        "bg": "https://images.unsplash.com/photo-1526923833460-ed5fa67336ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
    },
    {
        "content": "가격은 당신이 지불하는 것이고 가치는 당신이 얻는 것이다.",
        "author": "워렌 버핏",
        "bg": "https://images.unsplash.com/photo-1562609952-9a082716e8be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
        "content": "인내는 쓰지만 그 열매는 달다.",
        "author": "아리스토텔레스",
        "bg": "https://images.unsplash.com/photo-1456694441711-af0ab2d64c96?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
        "content": "어두운 길을 걷가가 <br> 빛나는 별 하나 없다고 <br> 절망하지 말아라 <br> 가장 빛나는 별은 아직 <br> 도달하지 않았다",
        "author": "박노해, 별은 너에게로",
        "bg": "https://images.unsplash.com/photo-1488866022504-f2584929ca5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1486&q=80"
    },
    {
        "content": "눈부신 성취는 언제나 특별하지 않은 준비 뒤에 온다",
        "author": "로버트 슐러",
        "bg": "https://images.unsplash.com/photo-1619681202584-e5af6673aefe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
    },
    {
        "content": "슬픔이 그대의 삶으로 밀려와 마음을 흔들고 소중한 것을 쓸어가 버릴 때면 그대 가슴에 대고 말하라 이것 또한 지나가리라",
        "author": "랜터 윌슨 스미스",
        "bg": ""
    },
    {
        "content": "희망은 어둠 속에서 시작된다. 일어나 옳은 일을 하려 할 때, 고집스러운 희망이 시작된다. 새벽은 올 것디아. 기다리고 보고 일하라. 포기하지 말라.",
        "author": "앤 라모드",
        "bg": ""
    },
    {
        "content": "성공은 매일 반복한 작은 노력의 합이다.",
        "author": "로버트 콜리어",
        "bg": ""
    },
    {
        "content": "생각하는대로 살지 않으면, 사는대로 생각하게 된다.",
        "author": "",
        "bg": ""
    },
    {
        "content": "무의식을 의식화 하지 않으면 무의식이 우리 삶의 방향을 결정하게 되는데, 사람들은 이것을 두고 운명이라 부른다.",
        "author": "칼 융",
        "bg": ""
    },
    {
        "content": "나는 해야 한다. 그러므로 나는 할 수 있다.",
        "author": "칸트",
        "bg": ""
    },
    {
        "content": "변명 중에서도 가장 어리석고 못난 변명은 \"시간이 없어서\" 라는 변명이다.",
        "author": "에디슨",
        "bg": ""
    },
    {
        "content": "중요한 것은 무엇이 주어졌느냐가 아니라 주어진 것을 어떻게 활용하느냐 이다",
        "author": "미움받을 용기",
        "bg": ""
    },
    {
        "content": "가장 강렬한 갈등이 해결되면 쉽게 방해받지 않는 안정감과 침착함을 가지게 된다. 가치 있고 지속적인 결과를 내기 위해서는 치열한 갈등이 필요하다.",
        "author": "칼 융",
        "bg": ""
    },
    {
        "content": "우리는 불확실성 속에서 살아가는 법을 배워야 한다.",
        "author": "게르드 기헤렌저",
        "bg": ""
    },
    {
        "content": "기다린다는 것이 때로 가슴을 무너트리는 절망이지만 돌아올 사람이라면 잠깐씩 사라지는 일도 아름다우리라",
        "author": "성백원, 기다림",
        "bg": ""
    },
    {
        "content": "곤경에 빠지는 건 몰라서가 아니다. 확힐히 안다는 착각 때문이다.",
        "author": "영화, 빅쇼트",
        "bg": ""
    }
]

const date = new Date()
const day = date.getDay() - 1

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
