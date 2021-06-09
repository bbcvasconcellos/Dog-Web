//the user would be imported from a database in a real world project; in this program it will be hardcoded

let users = [
    {
        name: "Thunder",
        gender: "M",
        hobby: "playing",
        breed: "weimaraner",
        avatar: "avatar1.png"
    },
    {
        name: "Ramon",
        gender: "M",
        hobby: "barking",
        breed: "schnautzer",
        avatar: "avatar2.png"
    },
    {
        name: "Amanda",
        gender: "F",
        hobby: "walking",
        breed: "cocker spaniel",
        avatar: "avatar3.png"
    },
    {
        name: "Cute",
        gender: "F",
        hobby: "hunting",
        breed: "weimaraner",
        avatar: "avatar4.png"
    },
    {
        name: "Salame",
        gender: "M",
        hobby: "playing",
        breed: "dachshund",
        avatar: "avatar5.png"
    },
    {
        name: "Lola",
        gender: "F",
        hobby: "sleeping",
        breed: "bulldog",
        avatar: "avatar6.png"
    },
    {
        name: "Fred",
        gender: "M",
        hobby: "barking",
        breed: "cocker spaniel",
        avatar: "avatar7.png"
    },
    {
        name: "Loirinha",
        gender: "F",
        hobby: "hunting",
        breed: "viszla",
        avatar: "avatar8.png"
    },
    {
        name: "Chiko",
        gender: "M",
        hobby: "crazying",
        breed: "papillon",
        avatar: "avatar9.png"
    },
    {
        name: "Joy",
        gender: "F",
        hobby: "sleeping",
        breed: "beagle",
        avatar: "avatar10.png"
    },
    {
        name: "Mia",
        gender: "F",
        hobby: "walking",
        breed: "beagle",
        avatar: "avatar11.png"
    }
];


//load event -> important to know if the page is responsive and functional
window.addEventListener('load', function(){
    let results = document.getElementById('results');

    function search(){

        //get hobby
        let hobbyField = document.getElementById('hobby');
        //to grab the input value in the field
        let hobby = hobbyField.value;

        //get breed
        let breedField = document.getElementById('breed');
        let breed = breedField.value;

        //get gender 
        let genderField = document.getElementById('gender');
        let selectedGender = genderField.selectedIndex;
        let gender = genderField.options[selectedGender].value;

        let resultsHTML = "";
        let usersLen = users.length;
        for(let i = 0; i < usersLen; i++){
            //check gender
            if(gender === "A" || gender == users[i].gender){
                //check hobby
                if(hobby == "" || hobby.toLowerCase() == users[i].hobby){
                    if(breed == "" || breed.toLowerCase() == users[i].breed){
                        resultsHTML += '<div class="user-row">\
                                    <img src="avatars/' + users[i].avatar + '"/>\
                                    <div class="user-info">\
                                    <div>' + users[i].name + '</div>\
                                    <div>'+ users[i].hobby + '</div>\
                                    <div>' + users[i].breed + '</div></div>\
                                    <button>Add as friend</button></div>';
                    }
                }
            }     
        }

        results.innerHTML = resultsHTML; //changes the HTML content at id="results" -> it will set the content from resultsHTML into the DOM
    }

    let searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', search);
});
