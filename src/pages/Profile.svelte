<!-- Profile.svelte -->
<script lang="ts">
  import Icon from '@iconify/svelte';
  import photo from '../assets/user.webp';
  import { handleChangeName as changeName } from './handlers/handleChangeName';
  import { handleChangePhoto as changePhoto } from './handlers/handleChangePhoto';

  export let user;

  const handleChangeName = (event) => changeName(event, user, $user);
  const handleChangePhoto = () => changePhoto(user, $user);
</script>

<main class="w-full px-3 py-32 flex flex-col items-center gap-5">
  <button
    class=" relative border-4 outline-none rounded-full focus-visible:border-blue-400"
    on:click={handleChangePhoto}
  >
    <img
      class="w-36 bg-gray-900 rounded-full"
      src={$user.photo !== '' ? $user.photo : photo}
      alt="You"
    />
    <div
      class="top-0 left-0 absolute w-full h-full rounded-full bg-black bg-opacity-30 grid place-content-center hover:bg-opacity-70 transition-all duration-100"
    >
      <Icon
        class="text-2xl place-content-center"
        icon="solar:gallery-send-linear"
      />
    </div>
  </button>
  <div class="w-38">
    <input
      class="w-full px-2 py-1 text-sm bg-gray-900 border border-gray-800 rounded-md outline-none"
      type="text"
      placeholder={$user.name}
      value={$user.name}
      on:input={handleChangeName}
    />
  </div>
</main>
