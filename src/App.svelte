<script lang="ts">
  import { Route, Router } from 'svelte-routing';
  import Sidebar from './components/Sidebar.svelte';
  import Dashboard from './pages/Dashboard.svelte';
  import Profile from './pages/Profile.svelte';
</script>

<Router>
  <main class="min-h-screen bg-slate-950 text-white flex justify-between">
    <Sidebar />
    <Route path="/" component={Dashboard} />
    <Route path="/profile" component={Profile} />
  </main>
</Router>

<style>
</style>
