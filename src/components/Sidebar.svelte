<script lang="ts">
  // eslint-disable-next-line
  // @ts-ignore
  import Icon from '@iconify/svelte';
  import { Link } from 'svelte-routing';
  import photo from '../assets/user.webp';
  export let user;

  const linkClass =
    'shadow-lg rounded-md w-full bg-gray-900 px-2 py-2.5 flex items-center gap-2 hover:text-blue-400';
</script>

<aside
  class="w-52 min-w-max flex flex-col items-center gap-3 h-screen overflow-auto border-r border-gray-900 p-2"
>
  <Link
    to="/profile"
    class="w-full h-16 p-2 shadow-lg bg-gray-900 rounded-md flex items-center flex-wrap gap-3"
  >
    <img
      class="w-9 bg-gray-900 h-9 rounded-full select-none"
      src={$user.photo ?? photo}
      alt="You"
    />
    <p class="w-28 text-sm overflow-hidden text-ellipsis">{$user.name}</p>
  </Link>

  <ul class="w-full mt-3 select-none flex flex-col gap-3">
    <li class="w-full">
      <Link to="/" class={linkClass}>
        <Icon class="text-lg" icon="material-symbols:dashboard-outline" />
        <p>Dashboard</p>
      </Link>
    </li>
    <li class="w-full">
      <Link to="/create" class={linkClass}>
        <Icon class="text-lg" icon="carbon:new-tab" />
        <p>New note</p>
      </Link>
    </li>
  </ul>
</aside>

<style>
</style>
