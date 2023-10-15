import type { MetaFunction } from "@remix-run/node";
import useKeyPress from "~/hooks";
import classNames from 'classnames';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  // const navigate = useNavigate()
  const [key] = useKeyPress(500);
  const qwertyRows = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
  ];

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>RxJS Keybr</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="keyboard">
          {qwertyRows.map((row, rowIndex) => (
            <div key={rowIndex} className="row flex align-center justify-center">
              {row.map((rowKey, keyIndex) => (
                <div key={keyIndex} className={classNames("flex align-center justify-center w-[100px] h-[100px] bg-slate-300 m-[4px]", {
                  ["bg-yellow-500"]: rowKey === key
                })}>{rowKey}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
