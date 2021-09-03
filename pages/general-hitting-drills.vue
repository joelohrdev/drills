<template>
  <div>
    <h1 class="text-3xl font-bold mb-5">General Hitting Drills</h1>
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
    name: '3 Tee Drill',
    link: 'https://www.instagram.com/p/B8bT9kDBC_m/?igshid=kuwlqgbzhpwm',
  },
  {
    id: 2,
    name: 'Rise Ball/High Ball Tee Drill',
    link: 'https://www.instagram.com/p/B_ED9sJBmO4/?igshid=16zswehbeuks9',
  },
  {
    id: 3,
    name: 'Tennis Ball Side Bounce',
    link: 'https://www.instagram.com/p/B2mdB7Vp5ZM/?igshid=xmzdpwy8m838',
  },
  {
      id: 4,
      name: 'Side Toss',
      link: '#',
  },
  {
      id: 5,
      name: 'Front Toss',
      link: '#',
  },
  {
      id: 6,
      name: 'Whiffle Balls',
      link: '#',
  },
  {
      id: 7,
      name: 'Inside/Outside Tee Work',
      link: '#',
  },
  {
      id: 8,
      name: 'High/Low Tee Work',
      link: '#',
  },
  {
      id: 9,
      name: 'Inside/Outside Corner Protection (Place tee in the river and work on fouling off borderline pitches)',
      link: '#',
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
