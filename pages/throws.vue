<template>
  <div>
    <h1 class="text-3xl font-bold mb-5">Throwing</h1>
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
    name: '2 Ball Push',
    link: 'https://www.instagram.com/p/B_h7OxHAAGa/?igshid=bk2ro4za142g',
  },
  {
    id: 2,
    name: 'Feet Throws',
    link: 'https://www.instagram.com/p/B_Sif-AgcYp/?igshid=ribyax35cheu',
  },
  {
    id: 3,
    name: 'Knee Throw SLO-MO example',
    link: 'https://www.instagram.com/p/B79ueimgsDP/?igshid=15zdqwyqhrjvw',
  },
  {
      id: 4,
      name: 'Knee Throw Breakdowns',
      link: 'https://www.instagram.com/p/BThbWV_jjO-/?igshid=13no4hwxaidxo',
  },
  {
      id: 5,
      name: 'Knee Throw Breakdowns 2',
      link: 'https://www.instagram.com/p/BTha5e4jZun/?igshid=19n2u5jxt6nmc',
  },
  {
      id: 6,
      name: 'Knee Throw Breakdowns 3',
      link: 'https://www.instagram.com/p/BqP1UudgOWi/?igshid=v5llu3hv8itu',
  },
  {
      id: 7,
      name: 'Knee Throw Breakdowns 4',
      link: 'https://www.instagram.com/p/BpsDGmFlrLJ/?igshid=gxwlj5c8adk1',
  },
  {
      id: 8,
      name: 'Knee Throw Breakdowns 5',
      link: 'https://www.instagram.com/p/BnAQw0Phcxs/?igshid=1nrzj5rf0c58a',
  },
  {
      id: 9,
      name: 'Knee Throw Breakdowns 6',
      link: 'https://www.instagram.com/p/BbshrQ5l-Z3/?igshid=py10isn76ap3',
  },
  {
      id: 10,
      name: 'Knee Throw Breakdowns 7',
      link: 'https://www.instagram.com/p/B-749JrgzRX/?igshid=dc3tdwmocz18',
  },
  {
      id: 11,
      name: 'Flat Glove Leg Burnout',
      link: 'https://www.instagram.com/p/B_VGUGPgXzt/?igshid=kju908c14cy8',
  },
  {
      id: 12,
      name: 'Barehand Throws from Turned Position',
      link: 'https://www.instagram.com/p/B-xLT-gAF8E/?igshid=yvpgwz0j7h6',
  },
  {
      id: 13,
      name: 'Flat Glove Pick Offs',
      link: 'https://www.instagram.com/p/B7qrDB2AYut/?igshid=yvy3tgd70aqz',
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
