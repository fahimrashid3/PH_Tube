const loadVideo = async (id = 1000) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const videoData = await res.json();
  const videoCart = videoData.data;
  console.log(videoCart);
  // get the video field and set inner html
  const videField = document.getElementById("video_field");
  videField.innerHTML = "";

  videoCart.forEach((video) => {
    // create a div
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-base-100 shadow-xl mt-10`;
    phoneCard.innerHTML = `
        <figure><img src=${video.thumbnail} alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="text-center font-bold text-2xl">${video.title}</h2>
          <p class="text-center">${video.title}</p>
         
        </div> `;
    videField.appendChild(phoneCard);
  });
};

const categoryLoading = async () => {
  const res = await fetch(
    ` https://openapi.programming-hero.com/api/videos/categories`
  );
  const categoryList = await res.json();
  const categories = categoryList.data;

  categories.forEach((data) => {
    const categoryId = data.category_id;
    const categoryBtn = document.createElement("div");
    categoryBtn.innerHTML = `
    <button class="btn btn-outline btn-error" onclick="loadVideo(${categoryId} )" >${data.category}</button>

    `;
    const categoryBtnContainer = document.getElementById(
      "category_btn_container"
    );
    categoryBtnContainer.appendChild(categoryBtn);
  });
};

loadVideo();

categoryLoading();
