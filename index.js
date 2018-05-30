const app = "I don't do much.";

const token = 'ac63ada70b936944eb20210b73d4d6e99570c54e'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
