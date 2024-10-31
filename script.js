
document.getElementById("Profile_info").addEventListener("click", function() {
    const panel = document.getElementById("profilePanel");
    if (panel.style.display === "none" || panel.style.display === "") {
        panel.style.display = "block"; // Show the panel
    } else {
        panel.style.display = "none"; // Hide the panel
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
function AddPost(tekst, profpic="icons/me.png", img=null, dateString= null){
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
    const likeImage = document.createElement('img');
    likeImage.src = 'icons/like.png';  // Use the default like icon
    likeImage.alt = 'like';
    reactionSection.appendChild(likeImage);
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
SetProfileInfo("Kaaren","ka@gmail.com", "5544353")
RemovePost(0)
AddPost("eheheh", "icons/download.png", null,"2014.23.34");