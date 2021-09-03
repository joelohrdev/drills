<template>
  <div>
    <h1 class="text-3xl font-bold mb-5">Hitting Upper Body Drills</h1>
    <ul role="list" class="divide-y divide-gray-200">
      <li v-for="drill in drills" :key="drill.id" class="py-4 flex">
        <div class="ml-3">
          <a :href="[drill.link]" rel="noopener" target="_blank" class="text-sm font-medium text-gray-900 hover:text-pink-500 transition">{{ drill.name }}</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
const drills = [
  {
    id: 1,
    name: 'Front Shoulder Early Rotation Drill',
    link: 'https://www.instagram.com/p/BxL0FC_gDHc/?igshid=n60xbdis58ee',
  },
  {
    id: 2,
    name: 'Goofy Grip Drill',
    link: 'https://www.instagram.com/p/BRjgJWJhHAQ/?igshid=1uyf0w9svd35w',
  },
  {
    id: 3,
    name: 'Gary Sheffield Drill',
    link: 'https://www.instagram.com/p/BIYvlVfh5NY/?igshid=13szy4liyqu67',
  },
  {
      id: 4,
      name: 'Knob to Knee Separation',
      link: 'https://www.instagram.com/p/B9AbHGbHlTQ/?igshid=1360n30q15b5r',
  },
  {
      id: 5,
      name: 'Ball Toss No Bat',
      link: 'https://www.instagram.com/p/B3pbCKmgJP-/?igshid=dm8fkflszjwm',
  },
  {
      key: 6,
      name: 'Split Grip High Tee',
      link: 'https://www.instagram.com/p/BuSLtPXBhgC/?igshid=1t1nkxo8u3ffv',
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
