<template>
  <div>
    <h1 class="text-3xl font-bold mb-5">Combination Catching Drill</h1>
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
    name: 'Mash Up Drill',
    link: 'https://www.instagram.com/p/B_nX2CsAvCv/?igshid=lusd4vn4h0ug',
  },
  {
    id: 2,
    name: 'Beyoncé Drill',
    link: 'https://www.instagram.com/p/B_AhfipgK84/?igshid=gy1cd82ei33l',
  },
  {
    id: 3,
    name: 'Block to Throw Progression',
    link: 'https://www.instagram.com/p/B-hmu5zAk-V/?igshid=1mnnh8t808w4',
  },
  {
      id: 4,
      name: 'Pitch Calling to Squat Conditioning with Ladder',
      link: 'https://www.instagram.com/p/B9GbppGHUPu/?igshid=zwma0xwah9as',
  },
  {
      id: 5,
      name: 'Pitch Calling to Squat Conditioning with Ladder 2',
      link: 'https://www.instagram.com/p/B1zbSZEgFQ6/?igshid=1fotdoucut0hz',
  },
  {
      id: 6,
      name: 'Pitch Calling to Squat Conditioning with Ladder 3',
      link: 'https://www.instagram.com/p/BVBhZcLBrTk/?igshid=h77yj1jv2t5c',
  },
  {
      id: 7,
      name: 'Squat Conditioning with Medicine Ball',
      link: 'https://www.instagram.com/p/B5rAmYcgOeb/?igshid=cjelhniwvr31',
  },
  {
      id: 8,
      name: 'Plays at the Plate',
      link: 'https://www.instagram.com/p/Bv4OfeoHAQ_/?igshid=37bmyupmiir0',
  },
  {
      id: 9,
      name: 'Catching with no pitcher',
      link: 'https://www.instagram.com/p/Bn4TTL-nQRD/?igshid=1esausee1h4fu',
  },
  {
      id: 10,
      name: 'Block, Tag, Pick & Throw',
      link: 'https://www.instagram.com/p/Be6hOipnkUc/?igshid=162lqnfm2pj73',
  },
  {
      id: 11,
      name: 'Zig-Zag Drill (if in a small group)',
      link: 'https://www.instagram.com/p/B_NiZ5qgHx5/?igshid=1rqx85nrem077',
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
