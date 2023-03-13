const followerEl = document.querySelector('.follower_amount')
const follow_changeEl = document.querySelector('.follow_change')
let follower = 0
followerEl.textContent= follower
function addfollower() {
    follower = follower + 1
followerEl.textContent = follower
follow_changeEl.textContent= 'Liked' 
if(follower < 2) {
    follower = 2-1
        followerEl.textContent = follower
}
}

function touch_again_unfollow() {
    follower = follower - 1
    followerEl.textContent = follower
    follow_changeEl.textContent= 'follow'
    
}