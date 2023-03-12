$(document).ready(function () {
    loadTopRanking('type=POST')
})
function loadTopRanking(type,dateMonth,dateYear) {

    $.ajax({
        url: `http://localhost:3000/8/?${type}&dateMonth=${dateMonth}&dateYear=${dateYear}`,
        type: 'GET',
        dataType: 'json',


        success: function (rs) { 

        let url = new URL(this.url);
        let index = parseInt(url.pathname.split('/')[1]);
            console.log(rs)
            //ranking List
            var str = ` <div class="col-4 top3-ranking">
                        <div style="text-align: center; margin-top: 23px;">
                            <div class="card-body">
                                <img class="top3-image-king" src="../public/icon/icon_score_master_bronze-45.svg" />
                                <h5 class="fonweight">No.2</h5>
                                <img style="width: 67px;" src="${rs[1].avatar}" />
                            </div>
                            <h4 class="card-title fonweight" id="top_ranking_name1">${rs[1].name}</h4>
                            <p><span class="color-score" >${rs[1].score}</span> posts</p>
                        </div>
                    </div>
                    <div class="col-4 top3-ranking" >
                        <div style="text-align: center">
                            <div class="card-body">
                                <img class="top3-image-king" src="../public/icon/icon_score_master_bronze-45.svg" />
                                <h5 class="fonweight">No.1</h5>
                                <img style="width: 90px;" src='${rs[0].avatar}' />
                            </div>
                            <h4 class="card-title fonweight" >${rs[0].name}</h4>
                            <p><span class="color-score" >${rs[0].score}</span> posts</p>
                        </div>
                    </div>
                    <div class="col-4"style="top3-ranking">
                        <div style="text-align: center; margin-top: 23px;">
                            <div class="card-body">
                                <img class="top3-image-king" src="../public/icon/icon_score_master_bronze-45.svg" />
                                <h5 class="fonweight">No.3</h5>
                                <img style="width: 66px;" src="${rs[2].avatar}" />
                            </div>
                            <h4 class="card-title fonweight">${rs[2].name}</h4>
                            <p><span class="color-score">${rs[2].score}</span> posts</p>
                        </div>
                    </div>`
            $('#top-list-ranking').html(str)


            //current ranking list
            let listTop = ''
            for (let i = 3; i < rs.length; i++) {
                if (rs[i].id !==index) {
                    listTop +=` 
                <li class="list-group-item " style="margin-top: 5px;;">
                   <span class="span-postItem">${rs[i].rank}</span> 
                   <img class="image-postitem"  src=" ${rs[i].avatar}"/>
                    <div class="right-postitem" >
                        <h6 class="fonweight" style="line-height: 0.2;">
                            ${rs[i].name} 
                        </h6>
                        <p><span class="color-score">${rs[i].score}</span> posts</p>
                    </div>
                    <div class="post-item-distance">
                        <img class="postItem-dowright" src="../public/icon/arrow-right.svg" alt="" />
                    </div>
                </li>  `
                }
                else {
                    listTop += `
                            <li class="list-group-item postitem-userCurrent" >
                               <span class="span-userCurrent">${rs[i].rank}</span>
                                <img class="image-userCurrent"src=" ${rs[i].avatar}"/>
                                <div class="right-postitem-current" >
                                     <h6 class="fonweight" style="line-height: 0.2;">
                                     ${rs[i].name} 
                                    </h6>
                                    <p><span style="color:white">${rs[i].score}</span> posts</p>
                                </div>
                                <div class="right-image-postitem-current">
                                    <img class="postItem-dowright" src="../public/icon/arrow-right.svg" alt="" />
                                </div>
                            </li>`
                }
            }
            $('#list-ranking').html(listTop)


            //number current
            let currentId=`
           ${index}th`
            $('#current-user').html(currentId)





        },
        error: function (err) {
            console.log(err.message)
        }
    })
}
