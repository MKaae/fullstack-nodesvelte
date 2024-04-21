<script>
  import { Router, Link, Route } from "svelte-navigator";
  import Home from "./pages/Home/Home.svelte";
  import Movies from "./pages/Movies/Movies.svelte";
  import SunglassesShop from "./pages/SunglassesShop/SunglassesShop.svelte";
</script>

<Router>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/movies'>Movies</Link>
      <Link to='/shop'>Sunglasses Shop</Link>    
    </nav>

    <div>
      <Route path="/"><Home /></Route>
      <Route path="/movies"><Movies /></Route>
      <Route path="/shop"><SunglassesShop /></Route>
    </div>


</Router>