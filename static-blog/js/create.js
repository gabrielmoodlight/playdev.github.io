// javascript for create.html
const button = document.querySelector('.post-button');
const title = document.querySelector('.post-title');
const textarea = document.querySelector('.post-content');

const output = document.querySelector('.post-output');

const createPost = async (e) => {
    e.preventDefault();

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

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

textarea.addEventListener('keyup', (e) => {
    output.innerHTML = marked.parse(textarea.value);
});

button.addEventListener('click', createPost);
