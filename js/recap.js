const loadVideo = async (id = 1000) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const videoData = await res.json();
  const videoCart = videoData.data;
  const status = videoData.status;
  // console.log(status);
  // get the video field and set inner html
  const videField = document.getElementById("video_field");
  videField.innerHTML = "";

  if (status) {
    videoCart.forEach((video) => {
      // create a div
      const newVideoCart = document.createElement("div");
      newVideoCart.classList = `card bg-base-100 shadow-xl mt-10`;
      newVideoCart.innerHTML = `
        <figure><img class="w-80 h-52" src=${video.thumbnail} alt="Thumbnail" /></figure>
        <div class="flex mt-2 ml-10 ">
          <div class="mt-5 ">
            <img class="h-10 w-10 rounded-full " src=${video.authors[0].profile_picture} alt="Thumbnail" />
          </div>
          <div class="card-body">
            <h2 class="text-left font-bold text-xl">${video.title}</h2>
            <div>
              <p class="text-left">${video.authors[0].profile_name}</p>

            </div>
            <p class="text-left text-gray-300">${video.others.views}</p>

          </div> 
        </div>

        `;
      videField.appendChild(newVideoCart);
    });
  } else {
    const errorField = document.createElement("div");
    errorField.innerHTML = `
    <img class=" mx-auto mt-20 h-full w-full" src="Icon.png" alt="Not found">

    `;
    videField.appendChild(errorField);
  }
};

// "profile_name

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
