// javascript for create.html
const button = document.querySelector('.post-button');
const title = document.querySelector('.post-title');
const textarea = document.querySelector('.post-content');

const output = document.querySelector('.post-output');

const createPost = async (e) => {
    e.preventDefault();

    console.log('title', title);

    const doc = {
        title: title.value,
        body: textarea.value
    }

    await fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: JSON.stringify(doc),
        headers: { 'Content-Type': 'application/json' }
    });
    window.location.replace('/index.html');
}

textarea.addEventListener('keyup', (e) => {
    output.innerHTML = marked.parse(textarea.value);
});

button.addEventListener('click', createPost);
