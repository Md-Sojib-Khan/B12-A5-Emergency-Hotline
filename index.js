const cards = document.getElementsByClassName('btn-hart');
for (const heart of cards) {
    heart.addEventListener('click', function () {
        const heartCount = Number(document.getElementById('heart-count').innerText);
        document.getElementById('heart-count').innerText = heartCount + 1;
    })
}

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



const callBtns = document.getElementsByClassName('btn-call');
for (const callBtn of callBtns) {
    const serviceName = callBtn.parentNode.parentNode.children[1].innerText;
    const serviceNumber = callBtn.parentNode.parentNode.children[3].innerText;



    callBtn.addEventListener('click', function () {
        const coinNumber = Number(document.getElementById('coin-number').innerHTML);
        if (coinNumber < 20) {
            alert(`You do not have Sufficient coin, You need at least 20 coins to call`)
            return
        }
        alert(`📞Calling ${serviceName} ${serviceNumber}`)
        const newCoin = coinNumber - 20;
        document.getElementById('coin-number').innerHTML = newCoin;

        const cardSection = document.getElementById('dainamic-cards-section');
        const clockId = 'clock-' + Date.now();
        const newDiv = document.createElement('div')
        newDiv.innerHTML = `
        <div class="flex justify-between items-center bg-[#fafafa] p-2 rounded-md">
                    <div>
                        <h1 class="font-bold">${serviceName}</h1>
                        <p>${serviceNumber}</p>
                    </div>
                    <div>
                        <p id="${clockId}">time</p>
                    </div>
                </div>
        `
        cardSection.appendChild(newDiv);

        function realTime() {
            const now = new Date();

            let hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            let ampm;
            if (hours >= 12) {
                ampm = 'PM';
            } else {
                ampm = 'AM';
            }

            hours = hours % 12;
            if (hours === 0) {
                hours = 12;
            }

            const paddedMinutes = minutes.toString().padStart(2, '0');
            const paddedSeconds = seconds.toString().padStart(2, '0');

            const timeString = `${hours}:${paddedMinutes}:${paddedSeconds} ${ampm}`;

            const clockElement = document.getElementById(clockId);
            if (clockElement) {
                clockElement.textContent = timeString;
            }
        }
        realTime();
    })
}

document.getElementById("btn-clear").addEventListener('click', function(){
    document.getElementById('dainamic-cards-section').innerHTML= "";
})