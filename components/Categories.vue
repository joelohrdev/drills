<template>
  <div class="mt-1 space-y-1" role="group" aria-labelledby="desktop-teams-headline">
    <NuxtLink :to="category.slug" v-for="category in categories" :key="category.id" class="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50">
      <span :class="[category.color, 'w-2.5 h-2.5 mr-4 rounded-full']" aria-hidden="true"></span>
      <span class="truncate">
        {{ category.name }}
      </span>
    </NuxtLink>
  </div>
</template>

<script>
  const categories = [
    {
      id: 1,
      name: 'Transfers',
      color: 'bg-red-500',
      slug: '/',
    },
    {
      id: 2,
      name: 'Back Hands',
      color: 'bg-blue-500',
      slug: 'back-hands',
    },
    {
      id: 3,
      name: 'Short Hops',
      color: 'bg-green-500',
      slug: 'short-hops',
    },
    {
      id: 4,
      name: 'Slowing the ball down with feet',
      color: 'bg-yellow-500',
      slug: 'slowing-the-ball-down-with-feet',
    },
    {
      id: 5,
      name: 'Throwing on the Run (Advanced)',
      color: 'bg-pink-500',
      slug: 'throwing-on-the-run-advanced',
    },
    {
      id: 6,
      name: 'Miscellaneous Fielding',
      color: 'bg-orange-500',
      slug: 'miscellaneous-fielding',
    },
    {
      id: 7,
      name: 'Outfield Drills',
      color: 'bg-purple-500',
      slug: 'outfield-drills',
    },
    {
      id: 8,
      name: 'Framing',
      color: 'bg-indigo-500',
      slug: 'framing',
    },
    {
      id: 9,
      name: 'Blocking',
      color: 'bg-teal-500',
      slug: 'blocking',
    },
    {
      id: 10,
      name: 'Throws',
      color: 'bg-gray-500',
      slug: 'throws',
    },
    {
      id: 11,
      name: 'Combination Catching Drills',
      color: 'bg-pink-500',
      slug: 'combination-catching-drills',
    },
    {
      id: 12,
      name: 'General Hitting Drills',
      color: 'bg-blue-500',
      slug: 'general-hitting-drills',
    },
    {
      id: 13,
      name: 'Hitting Upper Body Drills',
      color: 'bg-green-500',
      slug: 'hitting-upper-body-drills',
    },
    {
      id: 14,
      name: 'Swing Breakdown',
      color: 'bg-yellow-500',
      slug: 'swing-breakdown',
    },
    {
      id: 15,
      name: 'Hand Eye Coordination',
      color: 'bg-orange-500',
      slug: 'hand-eye-coordination',
    },
    {
      id: 16,
      name: 'Pitching Drills',
      color: 'bg-purple-500',
      slug: 'pitching-drills',
    },
    {
      id: 17,
      name: 'Arm Whip',
      color: 'bg-indigo-500',
      slug: 'arm-whip',
    },
    {
      id: 18,
      name: 'Drive Drills',
      color: 'bg-teal-500',
      slug: 'drive-drills',
    },
    {
      id: 19,
      name: 'Leg Strengthening Drills',
      color: 'bg-gray-500',
      slug: 'leg-strengthening-drills',
    },
    {
      id: 20,
      name: 'Quick Feet Drills',
      color: 'bg-pink-500',
      slug: 'quick-feet-drills',
    },
    {
      id: 21,
      name: 'Drag Drills',
      color: 'bg-blue-500',
      slug: 'drag-drills',
    },
    {
      id: 22,
      name: 'Glove Hand',
      color: 'bg-green-500',
      slug: 'glove-hand',
    },
    {
      id: 23,
      name: 'Change Ups',
      color: 'bg-yellow-500',
      slug: 'change-ups',
    },
    {
      id: 24,
      name: 'Over the Top Drop',
      color: 'bg-orange-500',
      slug: 'over-the-top-drop',
    }
  ]

  export default {
    data() {
      return {
        categories
      }
    },
    setup() {
      return {
        categories,
      }
    },
  }

</script>

