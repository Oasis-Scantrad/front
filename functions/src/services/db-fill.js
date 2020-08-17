const shortid = require("shortid");

export function fill(db) {
  const releases = db.get("releases");
  const release = (id = shortid.generate()) => ({
    title: `Wunderbar ${id}`,
    id,
    author: "Garry",
    img: "https://via.placeholder.com/150x200",
    author: "Garry",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the`,
    tags: ["good", "bad"],
    chapters: [
      {
        number: 1,
        state: "done",
        editors: ["kami", "kame"],
        date: Date.now(),
        link: "https://google.com",
      },
      { number: 2, state: "in-progress", editors: ["kami"] },
      { number: 3, state: "todo", editors: [] },
    ],
  });
  releases
    .push(
      ...Array(50)
        .fill()
        .map(() => release())
    )
    .write();

  const news = db.get("news");
  const word = () =>
    Array(Math.floor(Math.random() * 12 + 2))
      .fill()
      .map((_) => String.fromCharCode(Math.floor(Math.random() * 26 + 97)))
      .join("");
  const sentence = () => {
    let s =
      Array(Math.floor(Math.random() * 16 + 4))
        .fill()
        .map((_) => word())
        .join(" ") + ".";
    return String.fromCharCode(s.charCodeAt(0) - 32) + s.slice(1);
  };
  const paragraph = (d = 16, min = 4) =>
    Array(Math.floor(Math.random() * d + min))
      .fill()
      .map((_) => sentence())
      .join(Math.random() > 0.3 ? " " : "<br/>");
  const anew = (id = shortid.generate()) => ({
    title: `A very good new ${id}`,
    id,
    author: "Garry",
    content: `<img style="float:left;margin: 0 10px;" src="https://via.placeholder.com/${Math.floor(
      Math.random() * 100 + 100
    )}x${Math.floor(Math.random() * 100 + 100)}" alt="image">${paragraph()}`,
    date: Date.now(),
  });
  news
    .push(
      ...Array(10)
        .fill()
        .map(() => anew())
    )
    .write();
}
