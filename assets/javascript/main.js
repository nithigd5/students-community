
function renderPosts(posts){
    let postParent = document.getElementById("posts");
    posts = posts.map(post=>{
        return (
            `<div class="updt-elem">
            <div class="elem-top">
                <div class="utitle">
                    <p>${post.title}</p>
                    <p class="utime">${post.date}</p>
                </div>
                <div class="post-menu">
                    <i class="fa-solid fa-ellipsis-vertical fa-2xl"></i>
                </div>
            </div>
            <div class="body-img">
                <img src="${post.image}">
            </div>
            <p class="body-desc">${post.description}</p>
            <div class="elem-bottom">
                <a href="#" class="b-elem"><i class="fa-solid fa-heart post-interaction"></i></a>
                <a href="#" class="b-elem"><i class="fa-solid fa-share post-interaction"></i></a>
                <a href="#" class="b-elem"><i class="fa-solid fa-comment post-interaction"></i></a>
            </div>
        </div>`
        )
    })
    postParent.innerHTML = posts.join("").toString();
}

window.onload = ()=>{
    fetch("/post/getAllPost", { method: 'GET', headers:{   
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }}).then(res => res.json())
    .then(posts=>{
        renderPosts(posts);
    }).catch(err=>console.error(err));
};
