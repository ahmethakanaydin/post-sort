const posts = [
    { title: 'Post Başlık 1', detail: 'Post Detay 1' },
    { title: 'Post Başlık 2', detail: 'Post Detay 2' },
    { title: 'Post Başlık 3', detail: 'Post Detay 3' },
    { title: 'Post Başlık 4', detail: 'Post Detay 4' }
];

const ListPosts = () => {
    posts.map((post) => {
        console.log(`${post.title}: ${post.detail} `);
    })
}

const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
        ListPosts();
        posts.push(newPost);
        resolve(posts);
        console.log("Yeni Post Ekleniyor...");
        //reject("Post Eklenemedi!");
    });
    return promise1;
}

// ASYNC METHOD

async function ShowPost() {
    try {
        await addPost({title: 'Post Başlık 5', detail: 'Post Detay 5'});
        console.log("SON POSTLAR");
        ListPosts();
    } catch(error) {
        console.log(error);
    }
}

// PROMISE METHOD

/* addPost({ title: 'Post Başlık 5', detail: 'Post Detay 5' })
    .then(() => {
        console.log("SON POSTLAR");
        ListPosts();
    })
    .catch((error) => {
        console.log(error);
    })

ListPosts(); */

ShowPost();

