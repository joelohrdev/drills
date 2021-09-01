<template>
  <div>
    <h1 class="text-5xl font-bold mb-5">Back Hands</h1>
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
    name: 'Swivel Backhands',
    link: 'https://www.instagram.com/p/BY3NBnNnOxx/?igshid=gpl199n205tl',
  },
  {
    id: 2,
    name: 'Rake Thru Backhands',
    link: 'https://www.instagram.com/p/BTx382YhQm5/?igshid=4pw5vr4x86f5',
  },
  {
    id: 3,
    name: 'Advanced backhand short hops',
    link: 'https://www.instagram.com/p/B6jqnjuA27q/?igshid=e2yxt5wj8x8a',
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
