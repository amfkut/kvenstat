CMS.init({
  config: {
    backend: {
      name: "github",
      repo: "amfkut/kvenstat",
      branch: "main",
      base_url: "https://your-oauth-server.vercel.app", // ← заменить на свой OAuth-backend
      auth_endpoint: "auth"
    },
    media_folder: "images/uploads",
    public_folder: "/images/uploads",
    collections: [
      {
        name: "about",
        label: "О компании — About page",
        file: "content/about.json",
        fields: [
          {
            label: "Деятельность завода",
            name: "factory_activity",
            widget: "object",
            fields: [
              { label: "Заголовок", name: "title", widget: "string" },
              { label: "Параграф 1", name: "text1", widget: "text" },
              { label: "Параграф 2", name: "text2", widget: "text" },
              { label: "Параграф 3", name: "text3", widget: "text" },
              { label: "Изображение", name: "image", widget: "image" }
            ]
          },
          {
            label: "Производство крабовых палочек",
            name: "crab_sticks",
            widget: "object",
            fields: [
              { label: "Заголовок", name: "title", widget: "string" },
              { label: "Параграф 1", name: "text1", widget: "text" },
              { label: "Параграф 2", name: "text2", widget: "text" },
              { label: "Параграф 3", name: "text3", widget: "text" },
              { label: "Изображение", name: "image", widget: "image" }
            ]
          }
        ]
      }
    ]
  }
});
