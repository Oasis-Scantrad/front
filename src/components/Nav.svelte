<script>
  export let segment;
</script>

<style>
nav {
  width:100%;
}

.sizer {
  width: 60%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 3px solid #000;
}

.placer {
  padding: 10px 0px;
}

a.link {
  display: block;
  background-color: transparent;
  padding: 5px 15px;
  font-family: Arial;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  color: black;
  transition-duration: .2s;
}
a.link:hover { 
  background-color: black;
  color: #fff;
}

.logo>.link{
  color: #000;
  position: absolute;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin-left:-25px;
  margin-top: -30px;
  border: 3px solid #000;
  background-color: #fff;
  font-size: 35px;
  border-radius: 50%;
}
</style>

<nav>
  <div class="sizer">
    <div class="placer">
      <a href="" class="link">
        <div class="text">News</div>
      </a>
    </div>
    <div class="placer">
      <a href="" class="link">
        <div class="text">Releases</div>
      </a>
    </div>
    <div class="logo placer">
      <a href="" class="link">
        <div class="text">OS</div>
      </a>
    </div>
    <div class="placer">
      <a href="" class="link">
        <div class="text">Avancement</div>
      </a>
    </div>
    <div class="placer">
      <a href="" class="link">
        <div class="text">Plus</div>
      </a>
    </div>
  </div>
</nav>
