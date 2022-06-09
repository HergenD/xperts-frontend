<template>

  <div>
    <v-row class="text-center">
      <v-col cols="12">

      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          👩‍⚕️<span v-html="cavityText"
                     style="font-family: 'Press Start 2P', cursive !important;font-size:24px">{{ cavityText }}</span>
        </h1>
        <h2 style="font-size:38px;font-weight:600;font-family: 'Press Start 2P', cursive !important;">X-perts Dental
          AI</h2>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>

        <v-row>
          <v-file-input
              v-model="image"
              label="Upload X-ray image"
              counter
              show-size
          ></v-file-input>
        </v-row>
        <v-row>
          <v-col v-if="!resultImage">
            <v-btn x-large @click="analyze()" :disabled="!this.image || analyzing">🦷 Analyze 🦷</v-btn>
          </v-col>
          <v-col v-if="resultImage">
            <v-btn x-large @click="downloadResult()">Download Result</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card
                v-if="previewImage"
                class="mt-8"
            >
              <h4 class="pt-4">Preview</h4>
              <v-img
                  style="margin-left:5%"
                  class="my-4"
                  max-width="90%"
                  contain
                  :src="previewImage"
              ></v-img>
              <v-spacer>&nbsp;</v-spacer>
            </v-card>
          </v-col>
          <v-spacer></v-spacer>
          <v-col>
            <v-card
                v-if="analyzing"
                class="mt-8"
            >
              <h4 class="pt-4">Result</h4>
              <v-img
                  id="result-img"
                  style="margin-left:5%"
                  class="my-4"
                  max-width="90%"
                  contain
                  :src="resultImage"
                  :lazy-src="previewImage"
              >
                <template v-slot:placeholder>
                  <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                  >
                    <v-progress-linear style="opacity:15%"
                                       color="green accent-4"
                                       indeterminate
                                       height="1000"
                    ></v-progress-linear>
                  </v-row>
                </template>
              </v-img>
              <v-spacer>&nbsp;</v-spacer>
            </v-card>
          </v-col>
        </v-row>

      </v-col>

    </v-row>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import VueConfetti from 'vue-confetti'

Vue.use(VueConfetti)

export default {
  name: "FileUpload",
  data() {
    return {
      image: null,
      previewImage: null,
      resultImage: null,
      result: 'no result',
      analyzing: false,
      cavityText: '',
      cavities: 0,
    }
  },
  methods: {
    downloadResult() {
      const link = document.createElement("a");
      link.download = 'result.jpg';
      link.href = this.resultImage;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    start() {
      this.$confetti.start();
    },

    stop() {
      this.$confetti.stop();
    },
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    async confetti() {
      this.start()
      await this.sleep(3000)
      this.stop()
    },
    color(amount) {
      if (amount === 0) {
        return `<span class='green p-2'>no</span>`;
      }

      return `<span class='red p-2'>${amount}</span>`;
    },
    async updateText(count) {
      if (this.analyzing) {
        let template = `: ${count === 0 ? 'no' : count} ${count === 1 ? 'cavity' : 'cavities'} found`


        for (let i = 0; i < template.length; i++) {
          this.cavityText += template[i]
          await this.sleep(50)
        }

        this.cavityText = `: ${this.color(count)} ${count === 1 ? 'cavity' : 'cavities'} found`

      } else {
        this.cavityText = ''
      }
    },
    analyze() {
      this.analyzing = true
      let fd = new FormData()
      fd.append('file', this.image)

      axios.post('https://xperts.hergen.nl/image/', fd)
          .then(resp => {
            console.log(resp.data)


            const canvas = document.createElement('canvas')
            const ctx = canvas.getContext('2d')
            const cavities = resp.data

            const reader = new FileReader();

            reader.onload = () => {
              // Prepare canvas and draw background
              var img = new Image()
              img.src = this.previewImage
              canvas.width = img.width;
              canvas.height = img.height;
              ctx.drawImage(img, 0, 0);

              let cavityCount = 0;

              // Loop through cavity detections
              cavities.forEach(cavity => {
                let x = parseInt(cavity[0])
                let y = parseInt(cavity[1])
                let r = parseInt(cavity[2])

                if (x < 0 || y < 0 || r < 10) {
                  //
                } else {
                  ctx.beginPath();
                  ctx.arc(x, y, r, 0, 2 * Math.PI, false);
                  ctx.lineWidth = 3;
                  ctx.strokeStyle = '#de1f1f';
                  ctx.stroke();
                  cavityCount++;
                }
              });


              this.resultImage = canvas.toDataURL('image/jpeg')

              if (cavityCount === 0) {
                this.confetti()
              }

              this.cavities = cavityCount
              this.updateText(cavityCount)
            }
            reader.readAsDataURL(this.image);
          })
    }
  },
  watch: {
    image(imageFile) {
      if (imageFile) {
        let reader = new FileReader
        reader.onload = e => {
          this.previewImage = e.target.result
          this.analyzing = false
          this.resultImage = null
          this.cavities = 0
          this.updateText(0)
        }
        reader.readAsDataURL(imageFile)
      }
    }
  }
}
</script>

<style scoped>

</style>
