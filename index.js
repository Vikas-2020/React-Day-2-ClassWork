let container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);
const heading = React.createElement(
  "h1",
  { className: "web-heading", key: "heading" },
  "Learn web development"
);
const para1 = React.createElement(
  "p",
  {key: "para1"},
  "Welcome to MDN Learning Web Development (also known as Learn). This resource provides a structured set of tutorials teaching the essential skills and practices for being a successful front-end developer, along with challenges and further recommended resources."
);

const anchor = React.createElement(
  "a",
  { href: "#", key: "anchor" },
  "We launched the MDN Curriculum in early 2024."
);

const para2 = React.createElement(
  "p",
  {key: "para2"},
  [
    "As a result, we created a curriculum to help guide people towards learning a better skillset, making them more employable, and enabling them to build a better, more accessible, more responsible web of tomorrow. We want them to have the best possible chance of success. ",
    anchor,
  ],
  " Educators can use this content as a guide when creating programs, units, and assessment specifications for a web-related university degree, college course, coding school course, or similar. Conforming to the learning outcomes in our articles will help ensure that courses teach current techniques and best practices, and avoid bad practices and out-of-date information."
);

const para3 = React.createElement(
  "p",
  {key: "para3"},
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ducimus eveniet in labore quisquam fugiat. Modi fuga cumque fugit, exercitationem dolorum nulla? Ex, necessitatibus quam. Explicabo odit exercitationem, molestias at distinctio eum ratione et, nam esse commodi labore ex impedit aut. Dignissimos numquam cumque in est ex, reprehenderit eaque non voluptates quasi veniam quas praesentium ipsa molestias amet voluptatibus omnis iste laborum possimus voluptatum quis? Voluptatum ea dolores cum iste ratione fugit odio aperiam repellendus voluptatem. Sint dolore aperiam, et perferendis id aut at minus, dicta sunt vitae itaque excepturi magnam! Eaque laborum provident debitis eum fuga dicta repudiandae voluptatum!"
);
root.render([heading, para1, para2, para3]);
