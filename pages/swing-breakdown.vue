<template>
  <div>
    <h1 class="text-3xl font-bold mb-5">Swing Breakdown</h1>
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
    name: 'Contact, Extension, Full Swing',
    link: 'https://www.instagram.com/tv/B14c5DSAYkZ/?igshid=5m99mat9ou5w',
  },
  {
    id: 2,
    name: 'Hips towards the Pitcherss',
    link: 'https://www.instagram.com/p/BbaeOeaAILl/?igshid=1r0310sd1icda',
  },
  {
    id: 3,
    name: 'Tilt vs Lean One Handed Work',
    link: 'https://www.instagram.com/p/BMPtwgtAt6a/?igshid=hlsikpuswyj9',
  },
  {
      id: 4,
      name: '1-2-3 Drill Focus: 1 = Hand Separation, 2 = lower half commitment, 3 = full swing',
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
