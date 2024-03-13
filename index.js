const DiscussLeftCard = document.getElementById("discuss-left-card");

const loadDiscussCard = async (text='') => {
  // console.log(text);
  const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts${text}`);
  const data = await res.json();
  const AllDiscussData = data.posts;
  displayDiscussCard(AllDiscussData);
};



const displayDiscussCard = (card) => {
  // DiscussLeftCard.innerHTML = '';
  card?.forEach((cards) => {
    console.log(cards);
    const div = document.createElement("div");
    DiscussLeftCard.classList =`space-y-10 rounded-md px-10`;
    
    // set inner html...

    div.innerHTML = `
    <div class="bg-gray-200 rounded-2xl">
    <div class="card-body">
    <div class="bg-gray-200 flex justify-around p-6 space-x-6">
    
    <div class="indicator">
  <span id="active" class="indicator-item badge ${cards.isActive ? 'bg-green-500' : 'bg-red-500'}"></span> 
  <div class="grid w-16 h-16 place-items-center"><img class="rounded-md" src="${cards.image}"></div>
</div>

    <div>
    <div class="flex space-x-2">
    <h4>#${cards.category}</h4>
    <p>Author: ${cards.author.name}</p>
    </div>
    
    <div class="">
    <h1 class="font-semibold">${cards.title}</h1>
    <p>${cards.description}</p>
    </div>
    
    <div class="flex justify-between mt-4">
    <div class="flex  space-x-5">
    <div class="flex items-center space-x-2">
    <img src="images/tabler-icon-message-2.svg" alt="message icon">
    <p>${cards.comment_count}</p>
    </div>
    <div class="flex items-center space-x-2">
    <img src="images/tabler-icon-eye.svg" alt="viewer">
    <p>${cards.view_count}</p>
    </div>
    <div class="flex items-center space-x-2">
    <img src="images/tabler-icon-clock-hour-9.svg" alt="Watch icon">
    <p>${cards.posted_time}</p>
    </div>
    </div>
    <button onclick="AddToList('${cards.title.replace(/'/g,'@')}','${cards.view_count}')"><img src="images/email 1.svg" alt=""></button>
    </div>
    </div>
    </div>
    </div>
    </div>
    `;
    DiscussLeftCard.appendChild(div);
  });
};

// showBannerSearch...

const searchBar = (text) =>{
  const searchFeild = document.getElementById('search-feild');
  DiscussLeftCard.innerHTML = '';
  const searchText = searchFeild.value;
  // console.log(searchText)
  loadDiscussCard(`?category=${searchText}`);
};


// showCardRightSide...
function AddToList(title,count){
  const showUpdate = document.getElementById('rightSideCard');
  const AllCards = document.createElement('div');
  AllCards.classList = `bg-white flex justify-around w-[80%] rounded-2xl p-3 mt-6 mx-auto`;
  AllCards.innerHTML = `<div class="font-semibold">
    <h1 id="updateRightSide">
      ${title}
    </h1>
  </div>
  <div id="updateRightSide2" class="flex items-center space-x-2">
   <div id="viewImage">
   <img id="viewImage" src="images/tabler-icon-eye.svg" alt=""/>
  </div>
  <p>${count}</p>`;
  showUpdate.appendChild(AllCards);
};


// Latest Post Card...
  
  const latestPost = document.getElementById('latestContainer');
  const loadLatestPost = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    latestPostData(data);
};
  
  const latestPostData = data =>{
    data.forEach(latestCard =>{
      const div2 = document.createElement('div');
      div2.classList = `mx-auto`;
      div2.innerHTML = `<div class="space-x-10">
      <div class="mt-10">
      <div class="card w-96 p-2 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
      <img
      src="${latestCard.cover_image}"
      alt="Shoes"
      class="rounded-xl"
      />
      </figure>
      <div class="ml-10 mt-4">
      <div class="flex space-x-2">
      <img class="w-8 rounded-md" src="images/calendar.svg" alt="" />
      <p>${latestCard.author.posted_date}</p>
      </div>
      <div class="p-3 space-y-2">
      <h2 class="font-semibold">${latestCard.title}</h2>
      <p>${latestCard.description}</p>
      </div>
      <div class="flex space-x-8">
      <img class="w-14 rounded-lg" src="${latestCard.profile_image}"/>
      <div>
      <h3>${latestCard.author.name}</h3>
      <p>${latestCard.author.designation}</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>`;
      
      
      // console.log(latestCard);
      latestPost.appendChild(div2);
    });
  };
  
  const countDown = document.getElementById('countDown');

  // loadRightCard();
  loadDiscussCard();
  displayDiscussCard();
  loadLatestPost();

