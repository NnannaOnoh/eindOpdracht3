log = console.log

const BASE_URL = "https://wincacademydatabase.firebaseio.com/nnanna/tasks"

const getFullTaskList = async () => {
    const endpoint = BASE_URL + ".json"
    return getDataFromFirebase(endpoint)
}


const getDataFromFirebase = async (endpoint) => {
try {
    let answer = await fetch (endpoint, {method: "GET"});
    let data = await answer.json();
    log(data)
    log("Before (the raw result):", data);

    let tasks = Object.keys(data).map(key => ({
        id: key,
        description: data[key].description,
        done: data[key].done
}));
    log("After the tasks array", tasks)
    addListContentToDom(tasks)
    return tasks
}   catch (error){
    alert("getDataFromFirebase has failed")
}
};

getFullTaskList()

const postDataToFirebase = async (endpoint) => {
        const body = {description: "nieuwetaak" , done: false};
    try {
        let answer = await fetch 
        ("https://wincacademydatabase.firebaseio.com/nnanna/task.json", 
        {method: "POST", 
        headers: { "Content-Type": "application/json",
        body: JSON.stringify(body)}});
        let data = await answer.json();
        log(data)
        log("POST: Before (the raw result):", data);
        
        let tasks = Object.keys(data).map(key => ({
            id: key,
            description: data[key].description,
            done: data[key].done
    }));
        log("POST: After the tasks array", tasks)
    } catch (error){
        alert("postDataToFirebase has failed")
    }
    };
