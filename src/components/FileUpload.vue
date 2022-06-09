<template>
  <div>
    <v-row>
      <v-file-input
          v-model="image"
          label="Upload X-ray image"
          counter
          show-size
      ></v-file-input>
    </v-row>
    <v-row>
      <v-col>
        <v-btn @click="analyze()" :disabled="!this.image || analyzing">🦷 Analyze 🦷</v-btn>
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
                <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <v-spacer>&nbsp;</v-spacer>
        </v-card>
      </v-col>
    </v-row>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: "FileUpload",
  data() {
    return {
      image: null,
      previewImage: null,
      resultImage: null,
      result: 'no result',
      analyzing: false,
    }
  },
  methods: {
    analyze() {
      this.analyzing = true
      let fd = new FormData()
      fd.append('file', this.image)

      axios.post('http://xperts.hergen.nl/image/', fd)
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
                }
              });

              this.resultImage = canvas.toDataURL('image/jpeg')
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
        }
        reader.readAsDataURL(imageFile)
      }
    }
  }
}
</script>

<style scoped>

</style>
