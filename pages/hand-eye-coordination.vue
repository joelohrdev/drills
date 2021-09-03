<template>
  <div>
    <h1 class="text-3xl font-bold mb-5">Hand Eye Coordination</h1>
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
    name: 'AJ Andrews Tennis Ball Drill',
    link: 'https://www.instagram.com/p/B--opNRpR0t/?igshid=x04iy755tx3x',
  },
  {
    id: 2,
    name: 'Big Hop Fast Hop Tennis Wall Ball single handed',
    link: 'https://www.instagram.com/p/B-cQpD5hIL2/?igshid=mvxuddll08wm',
  },
  {
    id: 3,
    name: 'Peripheral Vision Tennis Ball Drop',
    link: 'https://www.instagram.com/p/B7vnaLcBCX5/?igshid=1t82bb3yiqsd3',
  },
  {
      id: 4, 
      name: '3 Ball Drop',
      link: 'https://www.instagram.com/p/BsrRYBWF0DD/?igshid=19hbzg3qgnz5n',
  },
  {
      id: 5,
      name: 'Blind Tennis Ball Reaction',
      link: 'https://www.instagram.com/p/Bu-Ox9hlyy3/?igshid=u2tm1rud8oyk',
  },
  {
      id: 6,
      name: 'Hand eye coordination 2 Tennis Ball Drill',
      link: 'https://www.instagram.com/p/B7EQbxfgLgJ/?igshid=1mxjju6vj06hp',
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
