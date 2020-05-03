const shortid = require("shortid");

export function fill(db) {
  const releases = db.get("releases");
  releases
    .push({
      title: "Wunderbar",
      img: "https://via.placeholder.com/150x200",
      id: shortid.generate(),
      author: "Garry",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the`,
      tags: ["good", "bad"],
      chapters: [
        {
          number: 1,
          state: "done",
          editors: ["kami", "kame"],
          date: "20.04.2020",
          link: "https://google.com",
        },
        { number: 2, state: "in-progress", editors: ["kami"] },
        { number: 3, state: "todo", editors: [] },
      ],
    })
    .write();
  releases
    .push({
      title: "Wunderbar 2",
      img: "https://via.placeholder.com/150x200",
      id: shortid.generate(),
      author: "Bob",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the`,
      tags: ["good", "bad"],
      chapters: [
        {
          number: 1,
          state: "done",
          editors: ["kami", "kame"],
          date: "20.04.2020",
          link: "https://google.com",
        },
        { number: 2, state: "in-progress", editors: ["kami"] },
        { number: 3, state: "in-progress", editors: ["kamo"] },
        { number: 4, state: "todo", editors: [] },
      ],
    })
    .write();
  releases
    .push({
      title: "Wunderbar 3",
      img: "https://via.placeholder.com/150x200",
      id: shortid.generate(),
      author: "Alice",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the`,
      tags: ["good", "bad", "good", "true", "good", "bad"],
      chapters: [
        {
          number: 1,
          state: "done",
          editors: ["kami", "kame"],
          date: "20.04.2020",
          link: "https://google.com",
        },
        { number: 2, state: "in-progress", editors: ["kami"] },
        { number: 3, state: "todo", editors: [] },
      ],
    })
    .write();
  releases
    .push({
      title: "Wunderbar 4",
      img: "https://via.placeholder.com/150x200",
      id: shortid.generate(),
      author: "Alice",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the`,
      tags: ["good", "bad", "good", "true", "good", "bad"],
      chapters: [
        {
          number: 1,
          state: "done",
          editors: ["kami", "kame"],
          date: "20.04.2020",
          link: "https://google.com",
        },
        { number: 2, state: "in-progress", editors: ["kami"] },
        { number: 3, state: "todo", editors: [] },
      ],
    })
    .write();
  releases
    .push({
      title: "Wunderbar 5",
      img: "https://via.placeholder.com/150x200",
      id: shortid.generate(),
      author: "Alice",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the`,
      tags: ["good", "bad", "good", "true", "good", "bad"],
      chapters: [
        {
          number: 1,
          state: "done",
          editors: ["kami", "kame"],
          date: "20.04.2020",
          link: "https://google.com",
        },
        { number: 2, state: "in-progress", editors: ["kami"] },
        { number: 3, state: "todo", editors: [] },
      ],
    })
    .write();
  releases
    .push({
      title: "Wunderbar 6",
      img: "https://via.placeholder.com/150x200",
      author: "Alice",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the`,
      tags: ["good", "bad", "good", "true", "good", "bad"],
      id: shortid.generate(),
      chapters: [
        {
          number: 1,
          state: "done",
          editors: ["kami", "kame"],
          date: "20.04.2020",
          link: "https://google.com",
        },
        { number: 2, state: "in-progress", editors: ["kami"] },
        { number: 3, state: "todo", editors: [] },
      ],
    })
    .write();
  releases
    .push({
      title: "Wunderbar 3",
      img: "https://via.placeholder.com/150x200",
      id: shortid.generate(),
      author: "Alice",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the`,
      tags: ["good", "bad", "good", "true", "good", "bad"],
      chapters: [
        {
          number: 1,
          state: "done",
          editors: ["kami", "kame"],
          date: "20.04.2020",
          link: "https://google.com",
        },
        { number: 2, state: "in-progress", editors: ["kami"] },
        { number: 3, state: "todo", editors: [] },
      ],
    })
    .write();
  releases
    .push({
      title: "Wunderbar 4",
      img: "https://via.placeholder.com/150x200",
      id: shortid.generate(),
      author: "Alice",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the`,
      tags: ["good", "bad", "good", "true", "good", "bad"],
      chapters: [
        {
          number: 1,
          state: "done",
          editors: ["kami", "kame"],
          date: "20.04.2020",
          link: "https://google.com",
        },
        { number: 2, state: "in-progress", editors: ["kami"] },
        { number: 3, state: "todo", editors: [] },
      ],
    })
    .write();
  releases
    .push({
      title: "Wunderbar 5",
      img: "https://via.placeholder.com/150x200",
      id: shortid.generate(),
      author: "Alice",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the`,
      tags: ["good", "bad", "good", "true", "good", "bad"],
      chapters: [
        {
          number: 1,
          state: "done",
          editors: ["kami", "kame"],
          date: "20.04.2020",
          link: "https://google.com",
        },
        { number: 2, state: "in-progress", editors: ["kami"] },
        { number: 3, state: "todo", editors: [] },
      ],
    })
    .write();
  releases
    .push({
      title: "Wunderbar 6",
      img: "https://via.placeholder.com/150x200",
      author: "Alice",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the`,
      tags: ["good", "bad", "good", "true", "good", "bad"],
      id: shortid.generate(),
      chapters: [
        {
          number: 1,
          state: "done",
          editors: ["kami", "kame"],
          date: "20.04.2020",
          link: "https://google.com",
        },
        { number: 2, state: "in-progress", editors: ["kami"] },
        { number: 3, state: "todo", editors: [] },
      ],
    })
    .write();
  releases
    .push({
      title: "Wunderbar 3",
      img: "https://via.placeholder.com/150x200",
      id: shortid.generate(),
      author: "Alice",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the`,
      tags: ["good", "bad", "good", "true", "good", "bad"],
      chapters: [
        {
          number: 1,
          state: "done",
          editors: ["kami", "kame"],
          date: "20.04.2020",
          link: "https://google.com",
        },
        { number: 2, state: "in-progress", editors: ["kami"] },
        { number: 3, state: "todo", editors: [] },
      ],
    })
    .write();
  releases
    .push({
      title: "Wunderbar 4",
      img: "https://via.placeholder.com/150x200",
      id: shortid.generate(),
      author: "Alice",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the`,
      tags: ["good", "bad", "good", "true", "good", "bad"],
      chapters: [
        {
          number: 1,
          state: "done",
          editors: ["kami", "kame"],
          date: "20.04.2020",
          link: "https://google.com",
        },
        { number: 2, state: "in-progress", editors: ["kami"] },
        { number: 3, state: "todo", editors: [] },
      ],
    })
    .write();
  releases
    .push({
      title: "Wunderbar 5",
      img: "https://via.placeholder.com/150x200",
      id: shortid.generate(),
      author: "Alice",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the`,
      tags: ["good", "bad", "good", "true", "good", "bad"],
      chapters: [
        {
          number: 1,
          state: "done",
          editors: ["kami", "kame"],
          date: "20.04.2020",
          link: "https://google.com",
        },
        { number: 2, state: "in-progress", editors: ["kami"] },
        { number: 3, state: "todo", editors: [] },
      ],
    })
    .write();
  releases
    .push({
      title: "Wunderbar 6",
      img: "https://via.placeholder.com/150x200",
      author: "Alice",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the`,
      tags: ["good", "bad", "good", "true", "good", "bad"],
      id: shortid.generate(),
      chapters: [
        {
          number: 1,
          state: "done",
          editors: ["kami", "kame"],
          date: "20.04.2020",
          link: "https://google.com",
        },
        { number: 2, state: "in-progress", editors: ["kami"] },
        { number: 3, state: "todo", editors: [] },
      ],
    })
    .write();
  releases
    .push({
      title: "Wunderbar 3",
      img: "https://via.placeholder.com/150x200",
      id: shortid.generate(),
      author: "Alice",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the`,
      tags: ["good", "bad", "good", "true", "good", "bad"],
      chapters: [
        {
          number: 1,
          state: "done",
          editors: ["kami", "kame"],
          date: "20.04.2020",
          link: "https://google.com",
        },
        { number: 2, state: "in-progress", editors: ["kami"] },
        { number: 3, state: "todo", editors: [] },
      ],
    })
    .write();
  releases
    .push({
      title: "Wunderbar 4",
      img: "https://via.placeholder.com/150x200",
      id: shortid.generate(),
      author: "Alice",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the`,
      tags: ["good", "bad", "good", "true", "good", "bad"],
      chapters: [
        {
          number: 1,
          state: "done",
          editors: ["kami", "kame"],
          date: "20.04.2020",
          link: "https://google.com",
        },
        { number: 2, state: "in-progress", editors: ["kami"] },
        { number: 3, state: "todo", editors: [] },
      ],
    })
    .write();
  releases
    .push({
      title: "Wunderbar 5",
      img: "https://via.placeholder.com/150x200",
      id: shortid.generate(),
      author: "Alice",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the`,
      tags: ["good", "bad", "good", "true", "good", "bad"],
      chapters: [
        {
          number: 1,
          state: "done",
          editors: ["kami", "kame"],
          date: "20.04.2020",
          link: "https://google.com",
        },
        { number: 2, state: "in-progress", editors: ["kami"] },
        { number: 3, state: "todo", editors: [] },
      ],
    })
    .write();
  releases
    .push({
      title: "Wunderbar 6",
      img: "https://via.placeholder.com/150x200",
      author: "Alice",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the`,
      tags: ["good", "bad", "good", "true", "good", "bad"],
      id: shortid.generate(),
      chapters: [
        {
          number: 1,
          state: "done",
          editors: ["kami", "kame"],
          date: "20.04.2020",
          link: "https://google.com",
        },
        { number: 2, state: "in-progress", editors: ["kami"] },
        { number: 3, state: "todo", editors: [] },
      ],
    })
    .write();
  releases
    .push({
      title: "Wunderbar 3",
      img: "https://via.placeholder.com/150x200",
      id: shortid.generate(),
      author: "Alice",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the`,
      tags: ["good", "bad", "good", "true", "good", "bad"],
      chapters: [
        {
          number: 1,
          state: "done",
          editors: ["kami", "kame"],
          date: "20.04.2020",
          link: "https://google.com",
        },
        { number: 2, state: "in-progress", editors: ["kami"] },
        { number: 3, state: "todo", editors: [] },
      ],
    })
    .write();
  releases
    .push({
      title: "Wunderbar 4",
      img: "https://via.placeholder.com/150x200",
      id: shortid.generate(),
      author: "Alice",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the`,
      tags: ["good", "bad", "good", "true", "good", "bad"],
      chapters: [
        {
          number: 1,
          state: "done",
          editors: ["kami", "kame"],
          date: "20.04.2020",
          link: "https://google.com",
        },
        { number: 2, state: "in-progress", editors: ["kami"] },
        { number: 3, state: "todo", editors: [] },
      ],
    })
    .write();
  releases
    .push({
      title: "Wunderbar 5",
      img: "https://via.placeholder.com/150x200",
      id: shortid.generate(),
      author: "Alice",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the`,
      tags: ["good", "bad", "good", "true", "good", "bad"],
      chapters: [
        {
          number: 1,
          state: "done",
          editors: ["kami", "kame"],
          date: "20.04.2020",
          link: "https://google.com",
        },
        { number: 2, state: "in-progress", editors: ["kami"] },
        { number: 3, state: "todo", editors: [] },
      ],
    })
    .write();
  releases
    .push({
      title: "Wunderbar 6",
      img: "https://via.placeholder.com/150x200",
      author: "Alice",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the`,
      tags: ["good", "bad", "good", "true", "good", "bad"],
      id: shortid.generate(),
      chapters: [
        {
          number: 1,
          state: "done",
          editors: ["kami", "kame"],
          date: "20.04.2020",
          link: "https://google.com",
        },
        { number: 2, state: "in-progress", editors: ["kami"] },
        { number: 3, state: "todo", editors: [] },
      ],
    })
    .write();
  releases
    .push({
      title: "Wunderbar 3",
      img: "https://via.placeholder.com/150x200",
      id: shortid.generate(),
      author: "Alice",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the`,
      tags: ["good", "bad", "good", "true", "yup", "good", "bad"],
      chapters: [
        {
          number: 1,
          state: "done",
          editors: ["kami", "kame"],
          date: "20.04.2020",
          link: "https://google.com",
        },
        { number: 2, state: "in-progress", editors: ["kami"] },
        { number: 3, state: "todo", editors: [] },
      ],
    })
    .write();
  releases
    .push({
      title: "Wunderbar 4",
      img: "https://via.placeholder.com/150x200",
      id: shortid.generate(),
      author: "Alice",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the`,
      tags: ["good", "bad", "good", "yep", "yup", "true", "good", "bad"],
      chapters: [
        {
          number: 1,
          state: "done",
          editors: ["kami", "kame"],
          date: "20.04.2020",
          link: "https://google.com",
        },
        { number: 2, state: "in-progress", editors: ["kami"] },
        { number: 3, state: "todo", editors: [] },
      ],
    })
    .write();
  releases
    .push({
      title: "Wunderbar 5",
      img: "https://via.placeholder.com/150x200",
      id: shortid.generate(),
      author: "Alice",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the`,
      tags: ["good", "bad", "good", "true", "good", "bad"],
      chapters: [
        {
          number: 1,
          state: "done",
          editors: ["kami", "kame"],
          date: "20.04.2020",
          link: "https://google.com",
        },
        { number: 2, state: "in-progress", editors: ["kami"] },
        { number: 3, state: "todo", editors: [] },
      ],
    })
    .write();
  releases
    .push({
      title: "Wunderbar 6",
      img: "https://via.placeholder.com/150x200",
      author: "Alice",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the`,
      tags: ["good", "bad", "good", "true", "good", "bad"],
      id: shortid.generate(),
      chapters: [
        {
          number: 1,
          state: "done",
          editors: ["kami", "kame"],
          date: "20.04.2020",
          link: "https://google.com",
        },
        { number: 2, state: "in-progress", editors: ["kami"] },
        { number: 3, state: "todo", editors: [] },
      ],
    })
    .write();
  releases
    .push({
      title: "Wunderbar 3",
      img: "https://via.placeholder.com/150x200",
      id: shortid.generate(),
      author: "Alice",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the`,
      tags: ["good", "bad", "good", "yep", "true", "good", "bad"],
      chapters: [
        {
          number: 1,
          state: "done",
          editors: ["kami", "kame"],
          date: "20.04.2020",
          link: "https://google.com",
        },
        { number: 2, state: "in-progress", editors: ["kami"] },
        { number: 3, state: "todo", editors: [] },
      ],
    })
    .write();
  releases
    .push({
      title: "Wunderbar 4",
      img: "https://via.placeholder.com/150x200",
      id: shortid.generate(),
      author: "Alice",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the`,
      tags: ["good", "bad", "good", "true", "good", "bad"],
      chapters: [
        {
          number: 1,
          state: "done",
          editors: ["kami", "kame"],
          date: "20.04.2020",
          link: "https://google.com",
        },
        { number: 2, state: "in-progress", editors: ["kami"] },
        { number: 3, state: "todo", editors: [] },
      ],
    })
    .write();
  releases
    .push({
      title: "Wunderbar 5",
      img: "https://via.placeholder.com/150x200",
      id: shortid.generate(),
      author: "Alice",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the`,
      tags: ["good", "bad", "good", "true", "good", "bad"],
      chapters: [
        {
          number: 1,
          state: "done",
          editors: ["kami", "kame"],
          date: "20.04.2020",
          link: "https://google.com",
        },
        { number: 2, state: "in-progress", editors: ["kami"] },
        { number: 3, state: "todo", editors: [] },
      ],
    })
    .write();
  releases
    .push({
      title: "Wunderbar 6",
      img: "https://via.placeholder.com/150x200",
      author: "Alice",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the`,
      tags: ["good", "bad", "good", "true", "good", "bad", "yep"],
      id: shortid.generate(),
      chapters: [
        {
          number: 1,
          state: "done",
          editors: ["kami", "kame"],
          date: "20.04.2020",
          link: "https://google.com",
        },
        { number: 2, state: "in-progress", editors: ["kami"] },
        { number: 3, state: "todo", editors: [] },
      ],
    })
    .write();
}
