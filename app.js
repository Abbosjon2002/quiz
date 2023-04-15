let doc = document.querySelector('.box')

let cards = [
    {
        question: 'Andijon qada',
        answers: ['Uzb', 'Kyr', 'En'],
        correct: 'En'
    },
    {
        question: 'fargona qada',
        answers: ['Uzb', 'Kyr', 'Qoz'],
        correct: 'Uzb'

    }, {
        question: 'Andijon qada',
        answers: ['Uzb', 'Salom', 'Qoz'],
        correct: 'Salom'

    }, {
        question: 'Qirgiziston qada',
        answers: ['Uzb', 'Kyr', 'Qoz'],
        correct: 'Kyr'

    }
]

cards.forEach(e => {
        doc.insertAdjacentHTML('beforeend', `
        <div class="card">
        <h2>${e.question}</h2>
        <ul class="menu">
            <li>${e.answers[0]}</li>
            <li>${e.answers[1]}</li>
            <li>${e.answers[2]}</li>
        </ul>
        </div>
    `)

    }
)

let correctAnswers = cards.map(element => {
    return element.correct
})

let menu = document.querySelectorAll('.menu')
menu.forEach((e) => {
    let answers = e.querySelectorAll('li')
    answers.forEach(elem => {
        elem.addEventListener('click',()=>{
            cards.forEach(p=>{

                if (elem.innerHTML === p.correct){
                    elem.style.color = 'blue'
                }
            })
        })
    })
})