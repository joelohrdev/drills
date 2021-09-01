<template>
  <div>
    <h1 class="text-5xl font-bold mb-5">Short Hops</h1>
    <ul role="list" class="divide-y divide-gray-200">
      <li v-for="drill in drills" :key="drill.id" class="py-4 flex">
        <div class="ml-3">
          <a :href="[drill.link]" target="_blank" class="text-sm font-medium text-gray-900 hover:text-pink-500 transition">{{ drill.name }}</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
const drills = [
  {
    id: 1,
    name: 'Barehand Short Hop Progression w/ Stationary Feet',
    link: 'https://www.instagram.com/p/B8keOLyAP_R/?igshid=1pmuvhfm5qcq6',
  },
  {
    id: 2,
    name: 'Riley Sartain Tweener Hops',
    link: 'https://www.instagram.com/p/BwDk8EuBbYh/?igshid=1fspo141c10j9',
  },
  {
    id: 3,
    name: 'Quick Feet Tweener Hops Riley Sartain',
    link: 'https://www.instagram.com/p/ByjNzYShOCM/?igshid=p65ucga1zoc6',
  }
]

export default {
  data() {
    return {
      drills,
    }
  },
  setup() {
    return {
      drills,
    }
  },
}
</script>
