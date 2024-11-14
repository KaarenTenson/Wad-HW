import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoggedIn:false,
    mail:"",
    name:"",
    PostList:[  {
      "id":0,
      "author_name": "Hank Kim",
      "profile_picture": "../assets/me.png",
      "date_posted": "19.12.2003",
      "image": "../assets/download.png",
      "caption": "how do you like my art?",
      "likes": {
          "count": 5,
          "IsLiked": false
      }
  },
  {
      "id":1,
      "author_name": "John Doe",
      "profile_picture": "../assets/me.png",
      "date_posted": "19.12.2003",
      "caption": "not bad",
      "likes": {
          "count": 1,
          "IsLiked": false
      }
  },
  {
      "id":2,
      "author_name": "Roger Parks",
      "profile_picture": "../assets/favicon.ico",
      "date_posted": "19.12.2003",
      "caption": "looks good:)",
      "likes": {
          "count": 2,
          "IsLiked": false
      }
  },
  {
      "id":3,
      "author_name": "Sarah Mitchell",
      "profile_picture": "../assets/me.png",
      "date_posted": "19.12.2003",
      "caption": "i like it",
      "likes": {
          "count": 1,
          "IsLiked": false
      }
  },
  {
      "id":4,
      "author_name": "Ethan Parker",
      "profile_picture": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      "date_posted": "20.12.2003",
      "caption": "i dont know man",
      "likes": {
          "count": 1,
          "IsLiked": false
      }
  },
  {
      "id":5,
      "author_name": "Mia Thompson",
      "profile_picture": "../assets/me.png",
      "date_posted": "20.12.2003",
      "caption": "could be worse",
      "likes": {
          "count": 3,
          "IsLiked": false
      }
  },
  {
      "id":6,
      "author_name": "Lucas Johnson",
      "profile_picture": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      "date_posted": "20.12.2003",
      "caption": "pretty nifty ngl",
      "likes": {
          "count": 7,
          "IsLiked": false
      }
  },
  {
      "id":7,
      "author_name": "Ava Davis",
      "profile_picture": "../assets/me.png",
      "date_posted": "20.12.2003",
      "caption": "awesomesauce",
      "likes": {
          "count": 2,
          "IsLiked": false
      }
  },
  {
      "id":8,
      "author_name": "Noah Wilson",
      "profile_picture": "https://cdn.vectorstock.com/i/1000v/20/74/woman-avatar-profile-vector-21372074.jpg",
      "date_posted": "20.12.2003",
      "caption": "yeah sure",
      "likes": {
          "count": 1,
          "IsLiked": false
      }
  },
  {
      "id":9,
      "author_name": "Isabella Garcia",
      "profile_picture": "../assets/me.png",
      "date_posted": "20.12.2003",
      "caption": "pretty good",
      "likes": {
          "count": 3,
          "IsLiked": false
      }
  }

    ]
  },
  getters: {
    name: state => {
      return state.isLoggedIn ? state.name :"quest";
    },
    mail: state => {
      return state.isLoggedIn ? state.mail :"quest";
    },
  },
  mutations: {
    Like(state, postId){
      let post=state.PostList.find(post1 => post1.id === postId);
      if(!post){
        return;
      }
      if(post.likes.IsLiked){
          post.likes.IsLiked=false;
          post.likes.count-=1;
      }else{
        post.likes.IsLiked=true;
        post.likes.count+=1;
      }
    },
    RESET_LIKES(state){
        state.PostList.forEach(post=>{
        post.likes.count=0;
        post.likes.IsLiked=false;});

    },
  },
  actions: {
    LikeAct({ commit },  postId ) {
      commit('Like', postId );
    },
    resetLikesAct({commit}){
      
      commit("RESET_LIKES");
    }
  },
  modules: {
  }
})