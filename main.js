const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


const postElement = document.getElementById("container");



posts.forEach((currentPost) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    const date = new Date(currentPost.created);
    const formattedDate = date.toLocaleDateString('it-IT');


    let authorInitials = '';
    if (currentPost.author.name) {
        const nameParts = currentPost.author.name.split(' ');
        authorInitials = nameParts.map(part => part.charAt(0)).join('');
    }


    if (currentPost.author.image !== null) {
        postElement.innerHTML += `
            <div class="post__header">
                <div class="post-meta">
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${currentPost.author.image}" alt="${currentPost.author.name} photo">
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${currentPost.author.name}</div>
                        <div class="post-meta__time">${formattedDate}</div>
                    </div>
                </div>
            </div>
        `;
    } else {
        postElement.innerHTML += `
            <div class="post__header">
                <div class="post-meta">
                <div class="profile-pic-default">
                <span>${authorInitials}</span>
                </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${currentPost.author.name}</div>
                        <div class="post-meta__time">${formattedDate}</div>
                    </div>
                </div>
            </div>
        `;
    }


    postElement.innerHTML += `
                <div class="post__text">
                    ${currentPost.content}
                </div>
                <div class="post__image">
                    <img src="${currentPost.media}" alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button  js-like-button" href="#" data-postid="${currentPost.id}">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                             Piace a <b id="like-counter-${currentPost.id}" class="js-likes-counter">${currentPost.likes}</b> persone
                        </div>
                    </div>
                </div>
        
            `;

    container.append(postElement);

});


const likeButtonElement = document.querySelectorAll(".like-button");
const likeArray = []


likeButtonElement.forEach((likes) => {
    likes.addEventListener("click", (e) => {

        e.preventDefault()

        const postId = likes.dataset.postid;
        const likeCounter = document.querySelector(`#like-counter-${postId}`);
        const isLiked = likes.classList.toggle("liked");
        const currentLikes = parseInt(likeCounter.textContent);
        const indexToRemove = likeArray.indexOf(postId);

        if (isLiked) {
            likeCounter.textContent = currentLikes + 1;
            likeArray.push(postId)
        } else {
            likeCounter.textContent = currentLikes - 1;
            likeArray.splice(indexToRemove, 1);
        }
    })
})


