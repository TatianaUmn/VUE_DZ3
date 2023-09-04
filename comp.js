Vue.component('blog-details', {
    props: [ 'detailsItem' ],

    data() {
        return {
            showFullText: false,
        }
    },

    template: `
    <div>
      <h2>{{ detailsItem.title }}</h2>
      <img :src="detailsItem.foto" alt="foto">
      <div class="text" v-if="showFullText">{{ detailsItem.fullText }}</div> <!-- Îòîáðàæåíèå ïîëíîãî òåêñòà -->
      <div class="text" v-else>{{ detailsItem.shortText }}</div> <!-- Îòîáðàæåíèå êðàòêîãî îïèñàíèÿ -->
      <button class="buttonClass" @click="showFullText = !showFullText">
        {{ showFullText ? 'Hide' : 'Read more...' }}
      </button> 
    </div>
  `,
});

Vue.component('blog', {
    props: ['blogItem'],
    template: `
      <div>
        <h3>{{ blogItem.title }}</h3>
        <p>{{ blogItem.shortText }}</p>
      </div>
    `,
  });

  Vue.component('blogs-list', {
    data() {
      return {
        articles: [
            {
                id: 1,
                tag: 'Kitchen',
                title: 'Let’s Get Solution For Kitchen Construction Work',
                foto: 'img/Photo_1.png',
                shortText: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                fullText: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
            },
            {
                id: 2,
                tag: 'Bedroom',
                title: 'Let’s Get Solution For Bedroom Construction Work',
                foto: 'img/Photo_2.png',
                shortText: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                fullText: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
            },
            {
                id: 3,
                tag: 'Building',
                title: "Let’s Get Solution For Building Construction Work",
                foto: 'img/Photo_3.png',
                shortText: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                fullText: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
            },
            {
                id: 4,
                tag: 'Architecture',
                title: "Let’s Get Solution For Architecture Construction Work",
                foto: 'img/Photo_4.png',
                shortText: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                fullText: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
            },
            {
                id: 5,
                tag: 'Kitchen Planning',
                title: "Let’s Get Solution For Kitchen Planning Construction Work",
                foto: 'img/Photo_5.png',
                shortText: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                fullText: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
            },
            {
                id: 6,
                tag: 'Bedroom Planning',
                title: "Let’s Get Solution For Bedroom Planning Construction Work",
                foto: 'img/Photo_6.png',
                shortText: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                fullText: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
            },
        ],
        selectedTag: '',
        buttons: [
          { id: 1, title: 'Kitchen' },
          { id: 2, title: 'Bedroom' },
          { id: 3, title: 'Building' },
          { id: 4, title: 'Architecture' },
          { id: 5, title: 'Kitchen Planning' },
          { id: 6, title: 'Bedroom Planning' },
        ]
      };
    },
    computed: {
      filteredArticles() {
        if (this.selectedTag === '') {
          return this.articles;
        } else {
          return this.articles.filter(article => article.tag === this.selectedTag);
        }
      },
      firstArticle() {
        return this.filteredArticles[0];
      },
      otherArticles() {
        return this.filteredArticles.slice(1);
      },
    },
    methods: {
      sortArticle(title) {
        this.selectedTag = title;
      }
    },
    template: `
      <div class="content">
        <div class="blogDetails">
        <blog-details :detailsItem="firstArticle" :showFullText="true"></blog-details> 
        <div v-for="item in otherArticles" :key="item.id"> 
          <blog :blogItem="item"></blog> 
        </div>
        </div>
        <div class="buttonContent">
          <button v-for="button in buttons" :key="button.id" class="buttonClass" @click="sortArticle(button.title)">
            {{ button.title }}
          </button>
        </div>
      </div>
    `,
  });