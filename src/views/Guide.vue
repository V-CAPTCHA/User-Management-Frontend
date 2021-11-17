<template>
  <div class="guide">
    <v-card id="home-container" max-width="1000" class="mx-auto pt-6" elevation="0">
      <v-row>
        <!-- content -->
        <v-col>
          <h1>Guide</h1>
          <br>

          <div id="introduction" ref="introduction">
            <h2>Introduction</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At accusantium nobis, illo, ad fugiat nisi velit voluptatem autem saepe accusamus reprehenderit alias exercitationem excepturi laborum fuga ducimus eum quaerat. Odit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptatem blanditiis soluta, neque eius, in autem voluptatibus possimus sunt voluptates unde aliquid facilis perspiciatis earum modi quas sint incidunt labore.
            </p>
          </div>
          <hr>

          <div id="widget">
            <h2 ref="vcaptcha-widget">VCAPTCHA Widget</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iusto laborum ullam veniam reprehenderit beatae dolorem sit explicabo officia odio obcaecati placeat magnam corporis, architecto facere hic cumque blanditiis nam.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eligendi harum totam magni quam aspernatur dolorem distinctio maiores, sint eum earum magnam assumenda hic aliquid, ipsa eaque explicabo est voluptas!
            </p>
            
            <h3 ref="widget">Widget</h3>
            <div class="code-box"></div>
            <br>

            <h3 ref="configuration">Configuration</h3>
            <div class="code-box"></div>
            <br>
          </div>
          <hr>

          <div id="server-side">
            <h2 ref="server-side">Server Side</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos aliquam iste, inventore eveniet ducimus dolorum recusandae fugit officiis, quas necessitatibus incidunt enim eligendi velit minima natus deleniti odit, sequi voluptas.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus, veritatis minus laborum ipsum iure dolor facere tempore velit porro ducimus aliquid commodi inventore ad pariatur earum. Adipisci, similique minus.
            </p>

            <h3 id="api" ref="api">API</h3>
            <v-simple-table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Method</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </v-simple-table>
          </div>
          <hr>


        </v-col>
        
        <!-- right menu -->
        <v-col cols=2 >
          <div class="right-menu">
            <p><b>Contents</b></p>
            <ul>
              <li @click="goto('introduction')">Introduction</li>
              <li @click="goto('vcaptcha-widget')">VCAPTCHA Widget</li>
              <ul>
                <li @click="goto('widget')">Widget</li>
                <li @click="goto('configuration')">Configuration</li>
              </ul>
              <li @click="goto('server-side')">Server Side</li>
              <ul>
                <li @click="goto('api')">API</li>
              </ul>
            </ul>
          </div>
        </v-col>

      </v-row>
    </v-card>
  </div>
</template>

<script>

export default {
  name: 'Guide',
  metaInfo: {
    title: "Guide | VCAPTCHA"
  },
  methods: {
    goto(refName) {
      var element = this.$refs[refName]
      var top = element.offsetTop;

      window.scrollTo(0, top)
    }
  }
}
</script>

<style scoped>
hr { 
  margin-top: 1rem;
  margin-bottom: 1rem; 
}

.code-box {
  background-color: grey;
  width: 100%;
  height: 200px;
}

.right-menu {
  position: fixed;
  font-size: 0.9rem;
}

.right-menu li:hover {
  cursor: pointer;
  font-weight: bold;
}

</style>
