<template>
  <div class="guide">
    <v-card id="home-container" max-width="1000" class="mx-auto pt-6" elevation="0">
      <v-row>
        <!-- content -->
        <v-col>
          <h1>Guide</h1>
          <br>

          <!-- Introduction -->
          <div id="introduction" ref="introduction">
            <h2>Introduction</h2>
            <p>
              Human Verification Service using Voice Recognition The purpose is to create a system to determine that users are human instead of using images. 
              As an alternative way to test whether the user is human or not. By displaying a picture or story and letting users speak what they see. 
              The system then determines whether the user interaction is human or not.
            </p>
            <v-skeleton-loader type="image"></v-skeleton-loader>
          </div>
          <hr>
          
          <!-- Widget -->
          <div id="widget">
            <h2 ref="vcaptcha-widget">VCAPTCHA Widget</h2>
            <p>
              The way to use VCAPTCHA in your web pages is add a javascript file to your HTML file. 
            </p>

            <p>How to get KEY ID:</p>
            <ol class="ml-5">
              <li>Go to <a href="https://vcaptcha.work" target="_blank">https://vcaptcha.work</a></li>
              <li>Register and Login</li>
              <li>
                Go to <a href="https://vcaptcha.work/keymanagement" target="_blank">KEY MANAGEMENT</a> or 
                <a href="https://vcaptcha.work/keymanagement" target="_blank">KEYS</a> tab
              </li>
              <li>Click at create key</li>
              <li>Copy your Key ID to your widget</li>
            </ol>
            <br>
                        
            <h3 ref="widget">Widget</h3>
            <ol class="ml-5">
              <li>Load the JavaScript file</li>
              <v-skeleton-loader type="image"></v-skeleton-loader>
              <br>

              <li>Add function to your script tag to handle vcaptcha key</li>
              <v-skeleton-loader type="image"></v-skeleton-loader>
              <br>

              <li>Add VCAPTCHA element to your web page</li>
              <v-skeleton-loader type="image"></v-skeleton-loader>
              <br>

            </ol>
            <br>

            <!-- Site Verify Response -->
            <h3 ref="site-verify-response">Site verify response</h3>
            <p>Make the request to verify the response token. The response is a JSON object:</p>
            <v-skeleton-loader type="image"></v-skeleton-loader>
            <br>

            <!-- Configuration -->
            <h3 ref="configuration">Configuration</h3>
            <p>You can config your VCAPTCHA widget following this:</p>
            <v-skeleton-loader type="image"></v-skeleton-loader>
            <br>

          </div>
          <hr>

          <!-- Server Side
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
          <hr> -->

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
                <li @click="goto('site-verify-response')">Site Verify Response</li>
                <li @click="goto('configuration')">Configuration</li>
              </ul>
              <!-- <li @click="goto('server-side')">Server Side</li>
              <ul>
                <li @click="goto('api')">API</li>
              </ul> -->
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
  background-color: lightgrey;
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
