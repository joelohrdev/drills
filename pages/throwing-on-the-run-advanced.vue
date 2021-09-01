<template>
  <div>
    <h1 class="text-3xl font-bold mb-5">Throwing on the Run (Advanced)</h1>
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
    name: 'Throwing on the run',
    link: 'https://www.instagram.com/p/B1zzI0BgnSy/?igshid=1insqsw0r73bp',
  },
  {
    id: 2,
    name: 'Throwing on the run 2',
    link: 'https://www.instagram.com/p/BevTZEuFoju/?igshid=pity0mw7duv8',
  },
  {
    id: 3,
    name: 'Throwing off one foot',
    link: 'https://www.instagram.com/p/BzWLgHRBXlG/?igshid=2z7yzlqimdec',
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
