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
            <v-row>
              <v-col cols="5">
                <v-img src="../assets/vcaptcha-demo.gif" width="100%" class="using-gif"></v-img>
              </v-col>
              <v-col>
                <h2>Introduction</h2>
                <p>
                  Human Verification Service using Voice Recognition The purpose is to create a system to determine that users are human instead of using images. 
                  As an alternative way to test whether the user is human or not. By displaying a picture or story and letting users speak what they see. 
                  The system then determines whether the user interaction is human or not.
                </p>

                <span>VCAPTCHA:</span>
                <ul>
                  <li>Using Human Voice Verification</li>
                  <li>Using Complex Questions</li>
                  <li>Dashboard</li>
                </ul>
              </v-col>
            </v-row>

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
              <li>Next step following Widget</li>
            </ol>
            <br>
                        
            <h3 ref="widget">Widget</h3>
            <ol class="ml-5">
              <li>CDN this code in your website with</li>
              <pre><code><span class="tag"><<!---->script</span> <span class="variable">src</span>=<span class="value">"https://cdn.vcaptcha.work/"</span><span class="tag">><<!---->/script></span></code></pre>
              <br>

              <li>Put vcaptcha tag in your body tag for begin a service</li>
              <pre><code><span class="tag"><<!---->vcaptcha><<!---->/vcaptcha></span></code></pre>
              <br>

              <li>Add vcaptcha function to your script tag</li>
              <pre><code><span class="tag">function</span> vcaptcha_actionResult(vcaptcha_action)
{<span class="comment">
//Put your business logic here !
//vcaptcha_action will be "Valid" if verification passed
</span>}</code></pre>
              <br>

              <li>Add variable configuration from your key in your sciprt tag</li>
<pre><code><span class="variable">vcaptcha_ValueKey</span> = <span class="value">"KEY"</span>;</code></pre>

            </ol>
            <br>

            <!-- Site Verify Response -->
            <h3 ref="site-verify-response">Site verify response</h3>
            <p>Verification will response value:</p>
            <v-card outlined elevation="0">
              <v-container>
                <v-simple-table>
                  <thead>
                    <tr>
                      <th>Status</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style="color: green;">Valid</td>
                      <td>string</td>
                      <td>Result of the verification is not .</td>
                    </tr>
                    <tr>
                      <td style="color: red;">Invalid</td>
                      <td>string</td>
                      <td>Result of the verification is robot.</td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-container>
            </v-card>
            <br>

            <h3 ref="developer">Developer Mode</h3>
            <p>If you are developer and want to use dev mode for hide alert or warning you can put <b>?dev=1</b> parameter on your url following this:</p>
            <pre><code>http://localhost:8080/<span class="value font-weight-bold">?dev=1</span ></code></pre>
            <br>

            <!-- Configuration -->
            <h3 ref="configuration">Configuration</h3>
            <p>You can config your VCAPTCHA widget following this:</p>
            <v-card outlined elevation="0">
              <v-container>
                <v-simple-table>
                  <thead>
                    <tr>
                      <th>Variable</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>vcaptcha_ValueKey</td>
                      <td>Key ID is generated from key management.</td>
                      <td>lj3x3mi8iVb_Yx41tK3b0</td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-container>
            </v-card>
            <br>
          </div>
          <hr>

          <!-- Example -->
          <div id="exmaple" ref="example">
            <h2>Example</h2>
            <p>In this example, VCAPTCHA will be applied to a simple login page. Using the <b>index.html</b> file to create a website and create your key with domain name <b>127.0.0.1</b> following this: </p>

            <h3 id="source-code" ref="source-code">Source Code</h3>
            <pre><code><span class="tag"><<!---->!DOCTYPE html>
<<!---->html>
  <<!---->head>
    <<!---->title></span>VCAPTCHA Example<span class="tag"><<!---->/title>
  <<!---->/head>
  <<!---->body>
    <<!---->h1></span>VCAPTCHA EXMAPLE<span class="tag"><<!---->/h1>

    <<!---->label</span> <span class="variable">for</span>=<span class="value">"username"</span><span class="tag">></span>Username<span class="tag"><<!---->/label>
    <<!---->input</span> <span class="variable">id</span>=<span class="value">"username"</span> <span class="variable">type</span>=<span class="value">"text"</span> <span class="tag">/>
    <<!---->br>

    <<!---->label</span> <span class="variable">for</span>=<span class="value">"password"</span><span class="tag">></span>Password<span class="tag"><<!---->/label>
    <<!---->input</span> <span class="variable">id</span>=<span class="value">"password"</span> <span class="variable">type</span>=<span class="value">"password"</span> <span class="tag">/>
    <<!---->br>

    <<!---->vcaptcha><<!---->/vcaptcha>

    <<!---->button</span> <span class="variable">type</span>=<span class="value">"submit"</span><span class="tag">></span>Login<span class="tag"><<!---->/button>

    <<!---->script</span> <span class="variable">src</span>=<span class="value">"https://cdn.vcaptcha.work/"</span><span class="tag">><<!---->/script>
    <<!---->script></span>
      <span class="variable">vcaptcha_ValueKey</span> = <span class="hightlight"><b>"YOUR_KEY"</b></span>;

      <span class="tag">function</span> vcaptcha_actionResult(vcaptcha_action) {
        <span class="comment">//Put your business logic here</span>
        console.log("Login Successful");
      }
    <span class="tag"><<!---->/script>
  <<!---->/body>
<<!---->/html></span></code></pre><br>

            <h3 id="result" ref="result">The Result</h3>
            <p>Use developer mode for testing VCAPTCHA, for example <b>http://127.0.0.1:5501/index.html?dev=1</b></p>
            <v-img src="../assets/example_result.png" width="432px" id="example-result"></v-img>
          </div>
          <hr>
        </v-col>
        
        <!-- right menu -->
        <v-col cols=2 class="d-none d-sm-flex">
          <div class="right-menu">
            <p><b>Contents</b></p>
            <ul>
              <li @click="goto('introduction')">Introduction</li>
              <li @click="goto('vcaptcha-widget')">VCAPTCHA Widget</li>
              <ul>
                <li @click="goto('widget')">Widget</li>
                <li @click="goto('site-verify-response')">Site Verify Response</li>
                <li @click="goto('developer')">Developer Mode</li>
                <li @click="goto('configuration')">Configuration</li>
              </ul>
              <li @click="goto('example')">Example</li>
              <ul>
                <li @click="goto('source-code')">Source Code</li>
                <li @click="goto('result')">The Result</li>
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
  data() {
    return {
    }
  },
  methods: {
    goto(refName) {
      var element = this.$refs[refName]
      var top = element.offsetTop;

      window.scrollTo(0, top)
    }
  },
}
</script>

<style scoped>
code {
  display: inline-block;
  width: 100%;
  padding: 1rem;
}

hr { 
  margin-top: 1rem;
  margin-bottom: 1rem; 
}

#introdunction {
  display: flex;
}

.using-gif {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
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

#example-result {
  margin: auto;  
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}


.tag { color: #1a73e8; }
.comment { color: darkgray; }
.variable { color: purple; }
.value { color: green;}
.hightlight { color: red}
</style>
