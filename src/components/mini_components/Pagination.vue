<template>
    <div class="d-flex justify-content-center mt-3">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" @click="emitChangePage('prev')">Previous</a>
        </li>
        <li class="page-item" v-for="page in Math.min(totalPages || 1, 5)" :key="page" :class="{ active: page === currentPage }">
          <a class="page-link" href="#" @click="emitChangePage(page)">{{ page }}</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" @click="emitChangePage('next')">Next</a>
        </li>
      </ul>
    </div>
  </template>
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const { currentPage, totalPages } = defineProps(['currentPage', 'totalPages']);
  const emit = defineEmits();
  
  const emitChangePage = (page) => {
    if (page === 'prev' && currentPage > 1) {
      emit('changePage', currentPage - 1);
    } else if (page === 'next' && currentPage < totalPages) {
      emit('changePage', currentPage + 1);
    } else if (typeof page === 'number') {
      emit('changePage', page);
    }
  };
  </script>
  
  