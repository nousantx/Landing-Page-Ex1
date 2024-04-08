import { Link } from "react-router-dom";
import Article from "../components/Article";
import useStyles from "../utils/useStyles";

const Components = () => {
  useStyles();
  return (
    <section className="pt-5rem">
      <header>
        <h1 className="fs-2rem">Explore Components</h1>
        <p className="text">
          We provide components fully built with TenoxUI. Check this out!
        </p>
      </header>

      <Article
        title="Breadcrumb"
        desc="Displaying hierarchy of links"
        className="mt-3rem"
      >
        <div className="center links-wrapper gap-12px">
          <Link to="/" className="fs-14px">
            home
          </Link>
          <span className="ms-line  fs-12px">chevron_right</span>
          <Link to="/" className="fs-14px">
            docs
          </Link>
          <span className="ms-line  fs-12px">chevron_right</span>
          <Link to="/" className="fs-14px">
            -
          </Link>
          <span className="ms-line  fs-12px">chevron_right</span>
          <Link to="/" className="fs-14px link-active">
            component
          </Link>
        </div>
      </Article>
      <Article title="Card" desc="Its components" isNew className="br-1rem">
        <div className="w-mx-500px">
          <header className="p-1rem bg-neutral-200 rounded">
            <span className="ms-round fs-1.5rem box-2.3rem bg-neutral-100 text-primary-500 center br-4px mb-1rem">
              draw
            </span>
            <h3 className="fs-16px fs-500">Design Tools</h3>
            <p className="fs-14px ta-justify text-neutral-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, officia?
            </p>
          </header>
        </div>
      </Article>
    </section>
  );
};

export default Components;