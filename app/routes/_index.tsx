import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/Button";
import { Greeting } from "~/components/Greeting";

export const meta: MetaFunction = () => {
  return [
    { title: "Multiorb" },
    { name: "description", content: "Total Control, Endless Insights." },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Greeting />
          <p className="mt-2 text-sm text-secondary pb-4">Total Control, Endless Insights.</p>
          <Button href="https://console.multi.sh">Team Login</Button>
          <p className="mt-4 text-sm text-secondary pb-4 text-ellipsis">
            <a href="https://github.com/multiorb" className="text-accent hover:text-primary">GitHub</a>, <a href="https://twitter.com/multiorb" className="text-accent hover:text-primary">Twitter</a>, and <a href="https://status.multiorb.net" className="text-accent hover:text-primary">Status Page</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
