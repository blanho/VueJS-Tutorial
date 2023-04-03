const app = Vue.createApp({
  data() {
    return {
      url: "http://www.thenetninja.com",
      showBooks: true,
      books: [
        { title: "name of the wind", author: "patrick rothfuss" },
        { title: "name of the wind", author: "patrick rothfuss" },
        { title: "name of the wind", author: "patrick rothfuss" },
        { title: "name of the wind", author: "patrick rothfuss" },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.title === "name of the wind");
    },
  },
});

app.mount("#app");
