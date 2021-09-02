<template>
  <div>
    <h1 class="text-3xl font-bold mb-5">Miscellaneous Fielding</h1>
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
    name: 'Wall Ball',
    link: 'https://www.instagram.com/p/BbH31PahPNv/?igshid=1bik758zgsh7m',
  },
  {
    id: 2,
    name: 'Riley Sartain Wall Ball',
    link: 'https://www.instagram.com/p/B8upo55h_kr/?igshid=q8qqwuw4dp0y',
  },
  {
    id: 3,
    name: 'Bobbled Ball Recovery Drill (Advanced)',
    link: 'https://www.instagram.com/p/B47tVsXA1np/?igshid=abaoxt9g0kkt',
  },
  {
    id: 4,
    name: 'Glove Agility/Adjusting to bad hops (Advanced)',
    link: 'https://www.instagram.com/p/B9j1yr_gtKk/?igshid=ktjt6gmnv13p',
  },
  {
    id: 5,
    name: 'Double Play Feed off the wall',
    link: 'https://www.instagram.com/p/B6oaqPngKUE/?igshid=1g8ly2dwgz7jy',
  },
  {
    id: 6,
    name: 'Flamingo to Double Play Footwork',
    link: 'https://www.instagram.com/p/B_iBksxAT7e/?igshid=1efy3ijnhrlxi',
  },
  {
    id: 7,
    name: 'Middle Infield/Cuts (Advanced)',
    link: 'https://www.instagram.com/p/BuRH6CVABlQ/?igshid=xlmob07um3mq',
  },
  {
    id: 8,
    name: 'Backhand/forehand/tag',
    link: 'https://www.instagram.com/p/BtbRkJQgGNS/?igshid=17o09a5268871',
  },
  {
    id: 9,
    name: 'Fielding with Obstacles (adjusting to bad hops)',
    link: 'https://www.instagram.com/p/BtQxDWygjxF/?igshid=vl4sl2bozp8y',
  },
  {
    id: 10,
    name: 'Bounce & Go Reaction Drill',
    link: 'https://www.instagram.com/p/BtwFXndgquv/?igshid=2cfej2l1071h',
  },
  {
    id: 11,
    name: 'Palm Up Glove Flips to Bases',
    link: 'https://www.instagram.com/p/B7DvpoIg6_a/?igshid=r8k7lda1kn98'
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
