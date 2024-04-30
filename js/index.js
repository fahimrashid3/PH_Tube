const categoryLoading = async () => {
  const res = await fetch(
    ` https://openapi.programming-hero.com/api/videos/categories`
  );
  const categoryList = await res.json();
  const categories = categoryList.data;

  //   create dynamic button
  categories.forEach((data) => {
    const categoryId = data.category_id;
    const categoryBtn = document.createElement("div");
    categoryBtn.innerHTML = `
    <button class="btn btn-outline btn-error">${data.category}</button>

    `;
    const categoryBtnContainer = document.getElementById(
      "category_btn_container"
    );
    categoryBtnContainer.appendChild(categoryBtn);

    createVideField(categoryId);
  });
};
categoryLoading();

const createVideField = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const videoList = await res.json();
  const video = videoList.data;
  console.log(video);
};
