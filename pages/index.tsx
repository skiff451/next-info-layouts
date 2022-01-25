import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <ul>
      <li>
        <Link href="/modal-example">
          <a>modal example</a>
        </Link>
      </li>
      <li>
        <Link href="/alert-example">
          <a>alert example</a>
        </Link>
      </li>
    </ul>
  );
};

export default Home;
