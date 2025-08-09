<template>
  <a
    :href="href"
    :class="['vp-button', color]"
    v-bind="$attrs"
  >
    <slot />
  </a>
</template>

<script setup>
defineProps({
  href: { type: String, required: true },
  color: { type: String, default: 'gray' }
})
</script>

<style>
.vp-button{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 10px;
  text-decoration: none;
  transition: background-color .18s ease, transform .12s ease;
  color: #fff !important;
  user-select: none;
}

.vp-button.green { background: #42b883; }
.vp-button.green:hover { background: #3aa876; }

.vp-button.blue { background: #3b82f6; }
.vp-button.blue:hover { background: #2563eb; }

.vp-button.gray { background: #6b7280; color: #fff; }
.vp-button.gray:hover { background: #4b5563; }
.vp-button.gray:focus { box-shadow: 0 0 0 4px rgba(107,114,128,0.12); }

.vp-button.orange { background: #f97316; color: #fff; }
.vp-button.orange:hover { background: #ea580c; }
.vp-button.orange:focus { box-shadow: 0 0 0 4px rgba(249,115,22,0.12); }

.vp-button:focus {
  outline: 3px solid rgba(66,184,131,0.18);
  outline-offset: 2px;
}
</style>
