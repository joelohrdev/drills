<template>
  <div>
    <h1 class="text-3xl font-bold mb-5">Pitching Drills</h1>
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
    name: 'Knee Drill',
    link: 'https://www.instagram.com/p/B-_GEw7Avsc/?igshid=157ss5jipdmb3',
  },
  {
    id: 2,
    name: 'Kneeling Windmill Check',
    link: 'https://www.instagram.com/p/BqVjpRilcSI/?igshid=3j6qkz36fk6r',
  },
  {
    id: 3,
    name: 'Arm Whip (toilet brush drill)',
    link: 'https://www.instagram.com/p/CFCkdGjBvmX/?igshid=11xojzjp6p3k0',
  },
  {
      id: 4,
      name: 'Load to drive drill - Keys: Getting low in your lunge. Staying low when driving out.',
      link: 'https://www.instagram.com/p/BoW3Ys6nhz-/?igshid=lzqqsb46uqp4',
  },
  {
      id: 5,
      name: 'Leg drive side hop drill - Keys: driving out far, using your push leg',
      link: 'https://www.instagram.com/p/BqyVFf4B9r2/?igshid=tqjqorf4dfhm',
  },
  {
      id: 6,
      name: 'Bucket sit down drill - Keys: controlled body on way up and down, don’t rush through',
      link: 'https://www.instagram.com/p/BdvA8nWlEpq/?igshid=sfku2jg9261l',
  },
  {
      id: 7,
      name: 'Bucket sitting drill',
      link: 'https://www.instagram.com/p/BEvv8yehgi3/?igshid=17eh71c1e66vo',
  },
  {
      id: 8,
      name: 'Another video of bucket drill - Alternate option: lean the buck forward so you’re in a launch position & bucket is angled and when you take off the bucket should fall forward',
      link: 'https://www.instagram.com/p/Br7yasJhqza/?igshid=1xfci7hs5u2zo',
  },
  {
      id: 9,
      name: 'Starting block drill - Similar to kneeling leg drive drill',
      link: 'https://www.instagram.com/p/BRsqk95hZ5t/?igshid=1igkeo11hq8jh',
  },
  {
      id: 10,
      name: 'Kneeling leg drive drill',
      link: 'https://www.instagram.com/p/BEc11E_Bgi0/?igshid=1souaejuio1fk',
  },
  {
      id: 11,
      name: 'Alternate video on second drill shown - Keys: drive from a low position and stay there',
      link: 'https://www.instagram.com/p/BrbDUIXBwTw/?igshid=1g9hxqiagyms9',
  },
  {
      id: 12,
      name: 'Leg swing back drill - Can’t find a good video of this one. But you’ll do this leg swing back 3 times and bring it up powerful but controlled (knee all the way to hip height) while keeping your balance and then pitch on the 3rd one. Keys here are engaging your core & butt when you swing your knee forward, that will help you to maintain your balance.',
      link: 'https://www.instagram.com/p/BogrhTADfsz/?igshid=7x3gtme7jwep',
  },
  {
      id: 13,
      name: 'Bucket high stride drill - Keys: getting leg out and up. Dragging on toe laces forward and not on the side of foot',
      link: 'https://www.instagram.com/p/BroaJqKDk06/?igshid=f03di9nrjn0w',
  },
  {
      id: 14,
      name: 'Load, reset, throw - This drill isn’t necessarily leg drive specific but I really like it to feel the load in conjunction with the back swing.',
      link: 'https://www.instagram.com/p/BtCuU9eAWry/?igshid=7hyctevok8xm',
  },
  {
      id: 15,
      name: 'Progression Drive Drill',
      link: 'https://www.instagram.com/p/CIZA-uuA5I9/?igshid=em5a0dg64o4h',
  },
  {
      id: 16,
      name: 'Kneel Away Drill (variation on Wasserman throwing drill)',
      link: 'https://www.instagram.com/p/B5vsPITg96s/?igshid=1ufjexteh3khx',
  },
  {
      id: 17,
      name: 'Tap Drill & Fall Forward Drill',
      link: 'https://www.instagram.com/p/CEAW-zypWcg/?igshid=1aoxu79hve8n0',
  },
  {
      id: 18,
      name: 'High Knee Toe Tap',
      link: 'https://www.instagram.com/p/CCJ0kRTgdeO/?igshid=hn22h3w8u26i',
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
