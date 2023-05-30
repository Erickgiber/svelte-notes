<script lang="ts">
  import { Route, Router } from 'svelte-routing';
  import { writable } from 'svelte/store';
  import Sidebar from './components/Sidebar.svelte';
  import Dashboard from './pages/Dashboard.svelte';
  import Profile from './pages/Profile.svelte';
  import { createUserLocal } from './tools/createUserLocal';
  import { getUserLocal } from './tools/getUserLocal';
  createUserLocal();

  let user = writable(getUserLocal());
</script>

<Router>
  <main class="min-h-screen bg-slate-950 text-white flex justify-between">
    <Sidebar {user} />
    <Route path="/" component={Dashboard} />
    <Route path="/profile" component={Profile} {user} />
  </main>
</Router>

<style>
</style>
