<template>
  <div>
    <v-row>
      <v-col>
        <v-card
            class="mx-auto my-12"
            max-width="374"
        >
          <v-img
              height="300"
              src="@/assets/mohammad.jpg"
          ></v-img>

          <v-card-title>Mohammad Hossein Baloochi </v-card-title>

          <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
              <v-icon>mdi-language-python</v-icon>
              <v-icon>mdi-panda</v-icon>
              <v-icon>mdi-brain</v-icon>
            </v-row>
            <div class="my-4 text-subtitle-1">
              Data Hacker
            </div>

            <div>My name is Mohammad an I am a Data Analyst with high ability in working with data by using SQL, Python, ML, etc. Not only I am a professional in the data analysis field, but also I have valuable experience in sales and business development. A combination of my experiences and abilities let me think more realistic and tackle problems efficiently and effectively!</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Get to know me better</v-card-title>

          <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
              <v-btn icon class="mr-2"
                        @click="link('https://github.com/hbaloochi')">
                <v-icon>mdi-github</v-icon>
              </v-btn>
              <v-btn icon class="mr-2"
                        @click="link('https://www.linkedin.com/in/baluchi/')">
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
              <v-btn icon class="mr-2">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
              <v-btn icon class="mr-2"
                     @click="mail('h.baloochi@gmail.com')"
              >
                <v-icon>mdi-email</v-icon>
              </v-btn>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-btn
                color="deep-purple lighten-2"
                text
                @click="mail('h.baloochi@gmail.com')"
            >
              Contact me
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card
            class="mx-auto my-12"
            max-width="374"
        >
          <v-img
              height="300"
              src="@/assets/seungah.jpg"
          ></v-img>

          <v-card-title>Seung Ah Pyun</v-card-title>

          <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
              <v-icon>mdi-language-python</v-icon>
              <v-icon>mdi-panda</v-icon>
              <v-icon>mdi-brain</v-icon>
            </v-row>
            <div class="my-4 text-subtitle-1">
              Data Wizard 🧙‍♀️
            </div>

            <div>My name is Seung Ah, and I moved to the Netherlands from South Korea in January of 2020. In Korea, I worked as a nurse, but after moving here I have decided to pursue a different career path. Because of this, I'm currently a Data Science student at Le Wagon Amsterdam, and will soon be completing the course.
I'm someone who enjoys learning new things, and most of all solving complex problems. If I pick something up, I'm always eager and determined to make sure I solve the problem in a precise way. This is something that was required in my previous career, and a skill that I feel carries over perfectly to Data Science.</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Get to know me better</v-card-title>

          <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
              <v-btn icon class="mr-2"
                          @click="link('https://github.com/seungahpyun')">
                <v-icon>mdi-github</v-icon>
              </v-btn>
              <v-btn icon class="mr-2"
                          @click="link('https://www.linkedin.com/in/seungah-pyun')">
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
              <v-btn icon class="mr-2">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
              <v-btn icon class="mr-2">
                <v-icon>mdi-email</v-icon>
              </v-btn>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-btn
                color="deep-purple lighten-2"
                text
                @click="mail('seungahpyun@icloud.com')"
            >
              Contact me
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card
            class="mx-auto my-12"
            max-width="374"
        >
          <v-img
              height="300"
              src="@/assets/Lisa.jpg"
          ></v-img>

          <v-card-title>Lisa Nagel</v-card-title>

          <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
              <v-icon>mdi-robot-happy-outline</v-icon>
              <v-icon>mdi-earth-arrow-right</v-icon>
              <v-icon>mdi-crowd</v-icon>
              <v-icon>mdi-keyboard-variant</v-icon>
            </v-row>
            <div class="my-4 text-subtitle-1">
              Data Hustler
            </div>

            <div>My name is Lisa and come from Germany. I just finished high-school last year and took a GAP year, which was definitely one of the best decisions I have every made. I wanted to conclude my year with a coding bootcamp, because I wanted to completely step outside of my comfortzone. If you would have asked me three years ago to do this, I would have denied, but after doing this bootcamp I really came to really enjoy coding! I will definitely continue with this and hope to work in a tech field in the future after completing my studies.</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Get to know me better</v-card-title>

          <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
              <v-btn icon class="mr-2"
                          @click="link('https://github.com/LiMaNa04')">
                <v-icon>mdi-github</v-icon>
              </v-btn>
              <v-btn icon class="mr-2"
                          @click="link('https://www.linkedin.com/in/lisa-marie-nagel-3009')">
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
              <v-btn icon class="mr-2">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
              <v-btn icon class="mr-2">
                <v-icon>mdi-email</v-icon>
              </v-btn>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-btn
                color="deep-purple lighten-2"
                text
                @click="mail('lisamanag21@gmail.com')"
            >
              Contact me
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>

</template>

<script>

export default {
  name: "AboutUs",
  data() {
    return {}
  },
  methods: {
    mail(email) {
      const mail = `mailto:${email}`;
      const a = document.createElement('a');
      a.href = mail;
      a.click();
    },
    link(url) {
      const a = document.createElement('a');
      a.href = url;
      a.click();
    }
  },
  watch: {}
}
</script>

<style scoped>

</style>
