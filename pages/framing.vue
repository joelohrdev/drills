<template>
  <div>
    <h1 class="text-3xl font-bold mb-5">Framing</h1>
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
    name: 'Blind Frames',
    link: 'https://www.instagram.com/p/BrT8ZzlndlN/?igshid=1ctio1bqlja1t',
  },
  {
    id: 2,
    name: 'Framing Wall Sits',
    link: 'https://www.instagram.com/p/BmoAnUtBCo5/?igshid=10jz3hq8lp45e',
  },
  {
    id: 3,
    name: 'Solo Frame Work',
    link: 'https://www.instagram.com/p/B-c4_xZD4VY/?igshid=1hd2ltp4uq9ao',
  },
  {
      id: 4,
      name: 'Tennis Ball Frames',
      link: 'https://www.instagram.com/p/BfbnkEAHP1Z/?igshid=r6tc7tupf0wz',
  },
  {
      id: 5,
      name: 'Inside Pitch Framing Basics',
      link: 'https://www.instagram.com/p/BThatU-DHCs/?igshid=18gc8hmwwlc0q',
  },
  {
      id: 6,
      name: 'Flat Glove Framing',
      link: 'https://www.instagram.com/p/BZJj2JdlWVF/?igshid=11tvpgqi0m4kr'
  },
  {
      id: 7,
      name: 'Partner Walking Frames',
      link: 'https://www.instagram.com/p/Bc8jHzjlJI5/?igshid=16van61mmsp85',
  },
  {
      id: 8,
      name: 'Optional Glove Load',
      link: 'https://www.instagram.com/p/BfPXSd_nED1/?igshid=1gu1dus5forls',
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
