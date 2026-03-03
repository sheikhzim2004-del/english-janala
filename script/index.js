

// all levels catch on load by fetch (01)
const loadLesson = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then(json => displayLesson(json.data))
}

// all levels catch on load by fetch (03)
const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayLevelWord(data.data))
}

//display the lesson (02)
const displayLesson = (lessons) => {
    // 1.get the Container 
    const levelContainer = document.getElementById('level-container');
    levelContainer.innerHTML = "";


    // 2. get into single lesson for loop
    lessons.forEach(element => {

        // 3. creat a Element
        const btnDiv = document.createElement('div');
        btnDiv.innerHTML = `
        <button onClick="loadLevelWord(${element.level_no})" class="btn btn-primary btn-outline"><i class="fa-solid fa-book"></i>Lesson- ${element.level_no}</button>
        `

        // 4. append into container
        levelContainer.appendChild(btnDiv);

    });
}

//display the lesson (04)
const displayLevelWord = (words) => {
    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = ""

    //check lesson empty or not (5)
    if (words.length === 0) {
        wordContainer.innerHTML = `
        <div class="text-center col-span-full space-y-2 font-bangla py-6 mx-4 rounded-lg">
            <img src="./assets/alert-error.png" alt="" class="mx-auto">
            <p class="text-gray-500 font-bold">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h2 class="text-4xl font-bold">নেক্সট Lesson এ যান</h2>
        </div>
        `
    }

    // id: 83
    // level: 1
    // meaning: "দরজা"
    // pronunciation: "ডোর"
    // word: "Door"

    words.forEach(word => {
        console.log(word)
        const card = document.createElement('div');
        card.innerHTML = `
        <div class="bg-white rounded-md mx-3 py-10 shadow-sm px-10 text-center space-y-4 h-full">
            <h1 class="text-3xl font-bold">${word.word}</h1>
            <p class="text-xl font-medium">Meaning /Pronounciation</p>
            <p class="font-bangla text-2xl font-semibold text-[#4d4d50]">"${word.meaning} / ${word.pronunciation}"</p>
            <div class="flex justify-between mt-5">
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
            </div>
        </div>
        `
        wordContainer.appendChild(card);
    })
}

loadLesson()