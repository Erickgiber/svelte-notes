<script lang="ts">
  // eslint-disable-next-line
  // @ts-ignore
  import Icon from '@iconify/svelte';
  import { Link } from 'svelte-routing';
  import userLogo from '../assets/user.webp';
  const user = JSON.parse(localStorage.getItem('user'));
  const profilePhoto = user?.photo ?? userLogo;
</script>

<aside
  class="w-52 min-w-max flex flex-col items-center gap-3 h-screen overflow-auto border-r border-gray-900 p-2"
>
  <Link
    to="/profile"
    class="w-full h-16 p-2 shadow-lg bg-gray-900 rounded-md flex items-center flex-wrap gap-3"
  >
    <img
      class="w-9 h-9 rounded-full select-none"
      src={profilePhoto}
      alt="You"
    />
    <p class="w-28 overflow-hidden text-ellipsis">Your name</p>
  </Link>

  <ul class="w-full mt-3 select-none">
    <li class="w-full">
      <button
        class="shadow-lg rounded-md w-full bg-gray-900 px-2 py-2.5 flex items-center gap-1"
      >
        <Icon class="text-lg" icon="carbon:new-tab" />
        <p>New note</p>
      </button>
    </li>
  </ul>
</aside>

<style>
</style>
