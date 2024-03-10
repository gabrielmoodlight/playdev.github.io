// javascript for index.html

const container = document.querySelector('.posts');
const searchForm = document.querySelector('.search');

const renderPosts = async (term) => {
    let uri = 'http://localhost:3000/posts';

    const res = await fetch(uri);
    const posts = await res.json();

    let template = '';

    if (!posts.length) {
        console.log('Vazio');
    } else {

        posts.forEach(post => {
            template += `
                <div class="post">
                    <h2>${post.title}</h2>
                    <div>${marked.parse(post.body.replace('#', '').replace('*', '').slice(0, 200))}</div>
                    <a href="/details.html?id=${ post.id }">Leia mais...</a>
                </div>
            `
        })
    }

    container.innerHTML = template;

}
searchForm.addEventListener('submit', e => {
    e.preventDefault();
    renderPosts(searchForm.term.value.trim())
})

window.addEventListener('DOMContentLoaded', () => renderPosts());