<template>
  <div>
    <h1 class="text-3xl font-bold mb-5">Transfers</h1>
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
    name: 'Infield Transfers',
    link: 'https://www.instagram.com/tv/B7OqYAUg-w3/?igshid=14s274rf6q3g8',
  },
  {
    id: 2,
    name: 'Transfer Slo-Mo',
    link: 'https://www.instagram.com/p/BmQ2t_KHO7I/?igshid=19b8makcc5ykn',
  },
  {
    id: 3,
    name: 'On Time Feet Transfers',
    link: 'https://www.instagram.com/p/BbZtfVblRVj/?igshid=ghuu025d7to8',
  },
  {
    id: 4,
    name: 'Transfer Progressions',
    link: 'https://www.instagram.com/p/B1__RcrgqqU/?igshid=18bqkidrif8az',
  },
  {
    id: 5,
    name: 'Transfer Self Check',
    link: 'https://www.instagram.com/p/BZpm2bDB5Ip/?igshid=7n00giqv48kx',
  },
  {
    id: 6,
    name: '2 Touch Bucket Transfers',
    link: 'https://www.instagram.com/tv/B7eoruzACCk/?igshid=o0dwpagy6i6u',
  },
  {
    id: 7,
    name: 'Self Toss Transfers',
    link: 'https://www.instagram.com/p/BV1Ipe5BHdV/?igshid=dfi01wgh1gwg',
  },
  {
    id: 8,
    name: 'Self Toss Transfers with no Throw',
    link: 'https://www.instagram.com/p/BhqCKQcFYoM/?igshid=fgnq5ooxmrr8',
  },
  {
    id: 9,
    name: 'Flat Glove Stool (or Bucket) Transfers',
    link: 'https://www.instagram.com/p/BZM862IFXa1/?igshid=1kmi2yr6ifs1'
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
