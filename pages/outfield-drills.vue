<template>
  <div>
    <h1 class="text-3xl font-bold mb-5">Outfield Drills</h1>
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
    name: 'Behind the ball individual drill',
    link: 'https://www.instagram.com/p/B6YovCJp5ce/?igshid=yssezshtmer9',
  },
  {
    id: 2,
    name: '3 Hop Drops',
    link: 'https://www.instagram.com/p/BmdvVYDHIhK/?igshid=1hl026zoquqo8',
  },
  {
    id: 3,
    name: 'Glove side grounder footwork',
    link: 'https://www.instagram.com/p/BQfeW0lhBbt/?igshid=1obc7mwxalho4',
  },
  {
      id: 4,
      name: 'Crow Hop Progression',
      link: 'https://www.instagram.com/p/BgAR3sunoMq/?igshid=1sl30i2h8j4ec',
  },
  {
      id: 5,
      name: 'Outfield Pro-Step vs Crow Hop',
      link: 'https://youtu.be/vMU7ds_WpiM',
  },
  {
      id: 6,
      name: 'Blind Outfield Reads',
      link: 'https://www.instagram.com/p/BoNM_T8APBF/?igshid=1xxdwzpczfgh9',
  },
  {
      id: 7,
      name: 'Blind Outfield Reads 2',
      link: 'https://www.instagram.com/p/B6CBnTzJv47/?igshid=1rr0x3p4bxxty',
  },
  {
      id: 8,
      name: 'Hip Flip Drop Steps AJ Andrews',
      link: 'https://www.instagram.com/p/B_vmWYWJNPf/?igshid=10rw9zearepa8',
  },
  {
      id: 9,
      name: 'Outfield Dive Drills from Knees',
      link: 'https://www.instagram.com/p/BmeewQrgChk/?igshid=1rcrssekwv0ui',
  },
  {
      id: 10,
      name: 'Over the Shoulder Kneeling Catches',
      link: 'https://www.instagram.com/p/B_gPal3DHyb/?igshid=608qwofm1g4y',
  },
  {
      id: 11,
      name: 'Outfield Agility Square',
      link: 'https://www.instagram.com/p/BgRxXjfnLCb/?igshid=1pgw9776myrm8',
  },
  {
      id: 12,
      name: 'Outfield Bounce & Run',
      link: 'https://www.instagram.com/p/BeotnK6H0sn/?igshid=wyqak3ddt65o',
  },
  {
      id: 13,
      name: 'Outfield Reactive Footwork',
      link: 'https://www.instagram.com/p/BnBuX89HZ8U/?igshid=jq2nfpk2ks4q',
  },
  {
      id: 14,
      name: 'Outfield Triangle Dril',
      link: 'https://www.instagram.com/p/Bvl_8mtAR73/?igshid=1vvwju38suu9d',
  },
  {
      id: 15,
      name: 'Diamond Cones Drill',
      link: 'https://www.instagram.com/p/BsGuym6nkUB/?igshid=7hxni6ii83i4',
  },
  {
      id: 16,
      name: 'Outfield Barehand Zig Zags',
      link: 'https://www.instagram.com/p/Bt4VpPxHN8k/?igshid=mqv6p6puyopi',
  },
  {
      id: 17,
      name: 'Outfield Barehand Misreads (Advanced)',
      link: 'https://www.instagram.com/p/B9I3RFdgj3m/?igshid=j7ggw6l1psep',
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
