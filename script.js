
document.getElementById("Profile_info").addEventListener("click", function() {
    const panel = document.getElementById("profilePanel");
    if (panel.style.display === "none" || panel.style.display === "") {
        panel.style.display = "block"; // Show the panel
    } else {
        panel.style.display = "none"; // Hide the panel
    }
});

document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("loginForm")) {
        // Handle login form submission
        const loginForm = document.getElementById("loginForm");
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const email = document.getElementById("email").value;
            const userName = email.split("@")[0];

            localStorage.setItem("userEmail", email);
            localStorage.setItem("userName", userName);

            window.location.href = "index.html";
        });
    }

    const email = localStorage.getItem("userEmail") || "guest@example.com";
    const username = localStorage.getItem("userName") || "Guest";
    if (document.getElementById("profilePanel")) {
        SetProfileInfo(username, email);
    }
    
    const logoutButton = document.querySelector("#profilePanel a");
    if (logoutButton) {
        logoutButton.addEventListener("click", function(event) {
            event.preventDefault();

            localStorage.removeItem("userEmail");
            localStorage.removeItem("userName");

            SetProfileInfo("Guest", "guest@example.com");

            window.location.href = "Login.html";
        });
    }
});

function SetProfileInfo(name, mail){
    const panel = document.getElementById("profilePanel");
    let panelChildren= panel.children
    panelChildren[0].innerText=name; //
    panelChildren[1].innerText="Email: " + mail; // //
}

function RemovePost(indeks){
    const posts = document.getElementsByClassName("keskmine")[0];
    if(indeks < 0 || indeks >= posts.children.length){
        console.log("Invalid index");
        return;  // Return if the index is out of range of the posts array  //
    }
    const post = posts.children[indeks];  // Select the post by index
    posts.removeChild(post);  // Remove the post from its parent
}

function AddPost(tekst, likes=0, profpic=null, img=null, dateString= null){
    if(profpic==null){
        profpic="icons/me.png";
    }
    const posts = document.getElementsByClassName("keskmine")[0];
    const post = document.createElement('section');
    post.className = 'post';

    const postHeader = document.createElement('div');
    postHeader.className = 'postheader';

    // Create the profile image
    const profileImage = document.createElement('img');
    profileImage.src = profpic;  // Use provided profile picture or default
    profileImage.alt = 'profile';
    
    // Create the date paragraph
    const date = document.createElement('p');
    if(!dateString){
    const today = new Date();
    dateString= today.toLocaleDateString().replaceAll("/", "."); } // Set the current date
    date.innerText=dateString;

    // Append the profile image and date to the post header
    postHeader.appendChild(profileImage);
    postHeader.appendChild(date);

    // Create the main post content paragraph
    const content = document.createElement('p');
    content.innerText = tekst;

    // Create the reactions section
    const reactionSection = document.createElement('section');
    reactionSection.className = 'reaktsioon';

    // Create the like button image
    const likeButton = document.createElement('button');
    likeButton.className="like_button";
    LikeButtonEventListener(likeButton);
    const liketext = document.createElement('p');
    liketext.innerText =likes;
    liketext.className="reaktsioonLikeText"
    reactionSection.appendChild(likeButton);
    reactionSection.appendChild(liketext);
    post.appendChild(postHeader);
    post.appendChild(content);
    if (img) {
        const postImage = document.createElement('img');
        postImage.src = img;
        postImage.alt = 'post image';
        post.appendChild(postImage);
    }
    post.appendChild(reactionSection);
    posts.appendChild(post);

}

function AddLikeButtonEvent(){
    const buttons = document.getElementsByClassName("like_button");
    Array.from(buttons).forEach(element => {
        LikeButtonEventListener(element)
    });

}

function LikeButtonEventListener(btn){
    btn.addEventListener("click", function(){
        if(this.className === "like_button"){
            this.className="like_button_clicked";
            sibling=this.nextElementSibling;
            sibling.innerText=parseInt(sibling.innerText)+1; // Increase the number of likes by 1
        }
        else{
            this.className="like_button";
            sibling=this.nextElementSibling;
            sibling.innerText=parseInt(sibling.innerText)-1;
        } 
    
})}

//SetProfileInfo("Kaaren","ka@gmail.com", "5544353")
//RemovePost(0)

// Function to fetch JSON objects from npoint URI.
/*async function fetchposts() {
    const endpoint = 'https://api.npoint.io/6928af23f0628a237081'
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error('HTTP error.')
        }
        const posts = await response.json();
        posts.forEach(post => {
            AddPost(post.caption, post.likes.count, post.profile_picture, post.image, post.date_posted);
        });
    } catch (error) {
        console.error('Error fetching');
    }
}*/

async function fetchposts() {
    const endpoint = './res/json/posts.json';
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error('HTTP error.')
        }
        const posts = await response.json();
        posts.forEach(post => {
            AddPost(post.caption, post.likes.count, post.profile_picture, post.image, post.date_posted);
        });
    } catch (error) {
        console.error('Error fetching');
    }
}

document.addEventListener('DOMContentLoaded', fetchposts)

//AddPost("Ts", null, null, null, "01.11.2024");