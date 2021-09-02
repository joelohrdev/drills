<template>
  <div>
    <h1 class="text-3xl font-bold mb-5">Blocking</h1>
    <ul role="list" class="divide-y divide-gray-200">
      <li v-for="drill in drills" :key="drill.id" class="py-4 flex">
        <div class="ml-3">
          <a :href="[drill.link]" target="_blank" rel="noopener" class="text-sm font-medium text-gray-900 hover:text-pink-500 transition">{{ drill.name }}</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
const drills = [
  {
    id: 1,
    name: 'Blocking Warm Up',
    link: 'https://www.instagram.com/p/BhF3ffElc-3/?igshid=1wan8kwe1rit8',
  },
  {
    id: 2,
    name: 'Receiving to blocking warm up',
    link: 'https://www.instagram.com/p/BzRHDkwByTu/?igshid=1x6xg07tcydko',
  },
  {
    id: 3,
    name: '3 Ball Block',
    link: 'https://www.instagram.com/p/Bp2RIxAgcbH/?igshid=1f6jmvib1jcai',
  },
  {
      id: 4,
      name: '3 Ball Block 2',
      link: 'hhttps://www.instagram.com/p/B_DEvVRAqyM/?igshid=p3gxac776z89',
  },
  {
      id: 5,
      name: 'Rise Ball/Drop Ball Blocking',
      link: 'https://www.instagram.com/tv/B7NDaweA0p7/?igshid=1v05wsv6kzez4',
  },
  {
      id: 6,
      name: 'Rise Ball/Drop Ball Blocking 2',
      link: 'https://www.instagram.com/p/B_Frr1zgu3R/?igshid=28stvqr49ep1',
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
