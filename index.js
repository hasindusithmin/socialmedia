
const users = ['Leanne Graham', 'Ervin Howell', 'Clementine Bauch', 'Patricia Lebsack', 'Chelsey Dietrich', 'Mrs. Dennis Schulist', 'Kurtis Weissnat', 'Nicholas Runolfsdottir V', 'Glenna Reichert', 'Clementina DuBuque']

$('#pages').pagination({
    dataSource: function (done) {
        $.ajax({
            beforeSend: function () {
                // document.getElementById('root').innerText = 'Loading data from stockapi.deta.dev ...';
            },
            type: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts',
            success: function (response) {
                done(response);
            }
        });
    },
    pageSize: 10,
    callback: function (posts, pagination) {
        let txt = '';
        posts.forEach(post=>{
            const {userId,id,body} = post;
            const name = users[userId];
            txt += `\
            <div class="w3-container w3-card w3-white w3-round w3-margin" id="${id}">
                <br>
                <img src="https://via.placeholder.com/150/ADD8E6?text=${name}" alt="${name}" class="w3-left w3-circle w3-margin-right" style="width:60px">
                <span class="w3-right w3-opacity">${Math.round(Math.random() * 10)} min</span>
                <h4>${name}</h4>
                <br>
                <hr class="w3-clear">
                <p>${body}</p>
                <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom">
                <i class="fa fa-thumbs-up"></i> Like </button>
                <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom">
                <i class="fa fa-comment"></i> Comment </button>
            </div>\n
            `
        })
        document.getElementById('root').innerHTML = ''
        document.getElementById('root').innerHTML = txt;
    }
})


