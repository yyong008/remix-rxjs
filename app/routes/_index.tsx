import type { MetaFunction } from "@remix-run/node";
import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  // const navigate = useNavigate()
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix with RxJS</h1>
      <ul>
        <li>
          <Link
            to="/rxjs/keybr"
            rel="noreferrer"
          >
            rxjs.keybr
          </Link>
        </li>
      </ul>
    </div>
  );
}
