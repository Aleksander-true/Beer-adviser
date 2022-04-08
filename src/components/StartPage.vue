<script setup></script>

<template>
  <div class="start-page__wrapper">
    <button class="advise-btn">Advise</button>
  </div>
</template>

<style scoped>
.advise-btn {
  width: 200px;
  height: 200px;
  border-radius: 50%;

  background-color: #a52a2a7b;
  border: none;

  color: var(--color-text-light);
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;

  position: relative;
  transition: all 700ms ease;
}

.start-page__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.advise-btn {
  transform: translateZ(0);
  position: relative;
}
.advise-btn:before {
  content: "";
  position: absolute;
  border: #a22828 solid 3px;
  border-radius: 50%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.advise-btn:hover {
  background-color: #a52a2a;
}

.advise-btn:hover:before,
.advise-btn:focus:before,
.advise-btn:active:before {
  animation: ripple-out forwards 0.7s;
}

@keyframes ripple-out {
  100% {
    top: -12px;
    right: -12px;
    bottom: -12px;
    left: -12px;
    opacity: 0;
  }
}
</style>
