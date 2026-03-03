

// all levels catch on fetch
const loadLesson = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then(json => displayLesson(json.data))
}

//display the lesson
const displayLesson = (lessons) => {
    // 1.get the Container 
    const levelContainer = document.getElementById('level-container');
    levelContainer.innerHTML = "";


    // 2. get into single lesson for loop
    lessons.forEach(element => {
        console.log(element)
        // 3. creat a Element
        const btnDiv = document.createElement('div');
        btnDiv.innerHTML = `
        <button class="border-1 border-emerald-100 bg-slate-50 text-blue-600"><i
                                    class="fa-solid fa-right-from-bracket"></i>LogOut</button>
        `

        // 4. append into container
        levelContainer.appendChild(btnDiv);

    });
}


loadLesson()