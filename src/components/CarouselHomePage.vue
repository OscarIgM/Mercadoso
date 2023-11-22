<template>
  <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img src="https://cdn.pixabay.com/photo/2021/04/07/13/16/background-6159075_1280.png" height="200px" width="100%" alt="...">
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="https://cdn.pixabay.com/photo/2021/02/06/09/03/background-5987458_1280.jpg" height="200px" width="100%" alt="...">
      </div>
      <div class="carousel-item">
        <img src="https://cdn.pixabay.com/photo/2021/02/06/09/04/background-5987461_1280.jpg" height="200px" width="100%" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>