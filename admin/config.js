CMS.init({
  config: {
    backend: {
      name: "github",
      repo: "amfkut/kvenstat",
      branch: "main",

      base_url: "https://your-oauth-server.vercel.app",
      auth_endpoint: "auth"
    },

    media_folder: "images/uploads",
    public_folder: "/images/uploads",

    collections: [
      {
        name: "about",
        label: "О компании — Деятельность и Крабовые палочки",
        file: "content/about.json",
        fields: [
          {
            label: "Деятельность завода",
            name: "factory_activity",
            widget: "object",
            fields: [
              { label: "Заголовок", name: "title", widget: "string" },
              { label: "Текст", name: "text", widget: "text" },
              { label: "Картинка", name: "image", widget: "image" }
            ]
          },
          {
            label: "Производство крабовых палочек",
            name: "crab_sticks",
            widget: "object",
            fields: [
              { label: "Заголовок", name: "title", widget: "string" },
              { label: "Текст", name: "text", widget: "text" },
              { label: "Картинка", name: "image", widget: "image" }
            ]
          }
        ]
      }
    ]
  }
});
