<template>
  <div>
    <h1 class="text-3xl font-bold mb-5">Slowing the ball down with feet</h1>
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
    name: 'Fielding Footwork Reps Deep Angle',
    link: 'https://www.instagram.com/p/B_g2a8QnLMB/?igshid=1a9hjspfdb7k9',
  },
  {
    id: 2,
    name: 'Hard Hit Reps Deep Angle',
    link: 'https://www.instagram.com/p/B79fpU3l-xP/?igshid=5op3dlj1xf4t',
  },
  {
    id: 3,
    name: 'Punch Step Footwork',
    link: 'https://www.instagram.com/p/B6yS0ZygAYa/?igshid=1uo498f2ziz6t',
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
