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
        name: "home",
        label: "Главная страница",
        file: "content/home.json",
        fields: [
          { name: "title", label: "Заголовок", widget: "string" },
          { name: "subtitle", label: "Подзаголовок", widget: "string" },
          { name: "description", label: "Описание", widget: "text" },
          { name: "image", label: "Главное изображение", widget: "image" }
        ]
      },
      {
        name: "gallery",
        label: "Галерея",
        file: "content/gallery.json",
        fields: [
          {
            name: "items",
            label: "Изображения",
            widget: "list",
            fields: [
              { name: "title", label: "Название", widget: "string" },
              { name: "image", label: "Картинка", widget: "image" }
            ]
          }
        ]
      }
    ]
  }
});
