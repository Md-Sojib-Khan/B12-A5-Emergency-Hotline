
// document.getElementById('cards').addEventListener('click', function (e) {
//     if(e.target.className.includes('btn-hart')){
//         const heartCount = Number(document.getElementById('heart-count').innerText);
//         document.getElementById('heart-count').innerText = heartCount + 1 ;
//     }
// })

const cards = document.getElementsByClassName('btn-hart');
for (const heart of cards) {
    heart.addEventListener('click', function () {
        const heartCount = Number(document.getElementById('heart-count').innerText);
        document.getElementById('heart-count').innerText = heartCount + 1;
    })
}

// const copyCount = document.getElementById('copy-count')
// const count = document.createElement('p')
// count.innerText = '0';
// const Num = parseInt(copyCount.appendChild(count))
// console.log(Num)

const copyBtns = document.getElementsByClassName('btn-copy');
for (const copyBtn of copyBtns) {
    copyBtn.addEventListener('click', function () {
        const copyText = copyBtn.parentNode.parentNode.children[3].innerText;
        function okAndCopy() {
            const userOk = confirm;
            const text = copyText;
            navigator.clipboard.writeText(text).then(() => {
                alert(`Number is Coprd ${copyText}`)
                document.getElementById('copy-count').classList.remove('hidden')
                const copyCount = Number(document.getElementById('copy-count').innerText);
                document.getElementById('copy-count').innerText = copyCount + 1;
            })
        }
        okAndCopy()

    })
}




// document.getElementById("cards").addEventListener('click', function (e){
//     if(e.target.className.includes("btn-copy")){
//         const newP = document.createElement('p')
//         newP.innerText = '1'
//         document.getElementById('copy-count').appendChild(newP)
//         document.getElementById('copy-count').innerText = +1 ;
//         // const copyCount = Number(document.getElementById('copy-count').innerText)
//         // document.getElementById('copy-count').innerText = copyCount + 1;
//     }
// })
