var unified = require("unified");
var vfile = require("to-vfile");
var report = require("vfile-reporter");
var markdown = require("remark-parse");
var format = require("rehype-format");
var slug = require("remark-slug");
var toc = require("remark-toc");
var remark2retext = require("remark-retext");
var english = require("retext-english");
var indefiniteArticle = require("retext-indefinite-article");
var remark2rehype = require("remark-rehype");
var doc = require("rehype-document");
var html = require("rehype-stringify");
var lint = require("remark-lint");
var rename = require("vfile-rename");
var mermaid = require("remark-mermaid");

var processor = unified()
  .use(markdown)
  .use(mermaid, { simple: true })
  .use(lint)
  .use(remark2retext, unified().use(english).use(indefiniteArticle))
  .use(slug)
  .use(toc)
  .use(remark2rehype)
  .use(doc, {
    title: "Sean Baskin",
    css: "styles.css",
    // js: "assets/js/mermaid.min.js",
    // script: "mermaid.initialize({startOnLoad:true});",
  })
  .use(format)
  .use(html);

processor.process(vfile.readSync("README.md"), function (error, file) {
  if (error) throw error;
  console.error(report(file));
  file.extname = ".html";
  rename(file, { stem: "index" });
  vfile.writeSync(file);
});
