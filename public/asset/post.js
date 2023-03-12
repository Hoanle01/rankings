
$(document).ready(function () {
    loadPostRanking()
})
function loadPostRanking() {
    $.ajax({
        url: `http://localhost:3000/post/1`,
        type: 'GET',
        dataType: 'json',
        success: function (rs) {  
            let postAuthor=''
            if(rs.length>0){
            for(let i=0; i<rs.length; i++) {
                console.log(rs[i].post_title)
                 postAuthor += `<div class="item" style="padding-top: 12px;" >
                    <h5 >${rs[i].post_title}</h5>  
                    <p>${rs[i].post_content}</p>
                </div>`
            }
            $('#post-author1').html(postAuthor)
        }else{
            postAuthor+=`<p id="not-posts">Không có bài viết nào</p>`
            $('#post-author1').html(postAuthor)
        }
        },
        error: function (err) {
            console.log(err.message)
        }
    })
    
}
