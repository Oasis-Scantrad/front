<script>
  import { stores, goto } from "@sapper/app";
  const { session } = stores();
</script>

<style>
  .sizer {
    max-width: var(--page-width);
    margin: auto;
    border-top: 3px solid var(--secondary);
    display: flex;
    justify-content: space-around;
    padding: 1em 0;
  }
  .title {
    text-transform: uppercase;
  }
  ul {
    padding: 0;
    margin-top: var(--xsmall);
  }
  li {
    display: block;
  }
</style>

<footer>
  <div class="sizer">
    <div class="footer-box">
      <div class="title">Sondage</div>
      <div class="sondage">
        <h5>Que pensez-vous ... ?</h5>
        <ul>
          <li>
            <input type="radio" name="sondage" value="a" />
            <label for="a">Oui</label>
          </li>
          <li>
            <input type="radio" name="sondage" value="b" />
            <label for="b">Non</label>
          </li>
          <li>
            <input type="radio" name="sondage" value="c" />
            <label for="c">Blanc</label>
          </li>
        </ul>
        <button>Envoyer</button>
      </div>
    </div>
    <div class="footer-box">
      <div class="title">Les autres equipes</div>
      <div class="teams">
        <a href=".">
          <img src="https://via.placeholder.com/90x60" alt="logo-1" />
        </a>
        <a href=".">
          <img src="https://via.placeholder.com/90x40" alt="logo-2" />
        </a>
      </div>
    </div>
    <div class="footer-box">
      <div class="title">Dons</div>
      <div>
        <img src="https://via.placeholder.com/120x150" alt="dons" />
      </div>
    </div>
  </div>
</footer>

